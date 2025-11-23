import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import type { PerformanceGraphMetric, PerformanceGraphUnit } from '../../data/makerDashboard'
import { formatCurrency, formatPercent } from '../../utils/format'
import {
  Wrapper,
  GraphGrid,
  GraphCard,
  GraphHeader,
  GraphTitle,
  GraphMeta,
  GraphStatRow,
  GraphValue,
  GraphChange,
  GraphChartWrapper,
  GraphSvg,
  GraphArea,
  GraphLine,
  GraphInteractiveLayer,
  ActiveLine,
  ActiveMarker,
  Tooltip,
  TooltipValue,
  TooltipLabel,
  GraphLegend,
  LegendItem,
  LegendLabel,
  LegendValue,
  GraphFootnote,
  GraphComparison,
} from './styles'

interface PerformanceGraphsProps {
  metrics: PerformanceGraphMetric[]
}

const formatMetricValue = (value: number, unit: PerformanceGraphUnit) => {
  if (unit === 'currency') {
    return formatCurrency(value, { maximumFractionDigits: value >= 10_000 ? 0 : 1 })
  }
  return formatPercent(value)
}

const buildPathData = (points: number[]) => {
  if (!points.length) return ''
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1

  return points
    .map((point, index) => {
      const x = points.length === 1 ? 0 : (index / (points.length - 1)) * 100
      const y = 100 - ((point - min) / range) * 100
      return `${index === 0 ? 'M' : 'L'} ${x},${Number.isFinite(y) ? y : 50}`
    })
    .join(' ')
}

const buildAreaData = (pathData: string) => {
  if (!pathData) return ''
  return `${pathData} L 100 100 L 0 100 Z`
}

const normalizePoints = (values: number[], labels?: string[]) => {
  if (!values.length) return []
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1

  return values.map((value, index) => {
    const x = values.length === 1 ? 0 : (index / (values.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return { x, y, value, label: labels?.[index] ?? `Point ${index + 1}` }
  })
}

const MetricGraphCard = ({ metric, color }: { metric: PerformanceGraphMetric; color: string }) => {
  const normalized = useMemo(() => normalizePoints(metric.points, metric.labels), [metric.points, metric.labels])
  const pathData = useMemo(() => buildPathData(metric.points), [metric.points])
  const fillData = useMemo(() => buildAreaData(pathData), [pathData])
  const chartRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(Math.max(normalized.length - 1, 0))

  useEffect(() => {
    setActiveIndex(Math.max(normalized.length - 1, 0))
  }, [normalized.length])

  const handlePointer = useCallback(
    (clientX: number) => {
      const bounds = chartRef.current?.getBoundingClientRect()
      if (!bounds || normalized.length <= 1) return
      const ratio = (clientX - bounds.left) / bounds.width
      const nextIndex = Math.min(normalized.length - 1, Math.max(0, Math.round(ratio * (normalized.length - 1))))
      setActiveIndex(nextIndex)
    },
    [normalized.length],
  )

  const handleLeave = useCallback(() => {
    setActiveIndex(Math.max(normalized.length - 1, 0))
  }, [normalized.length])

  const activePoint = normalized[activeIndex] ?? normalized[normalized.length - 1]
  const min = Math.min(...metric.points)
  const max = Math.max(...metric.points)
  const latest = metric.points.at(-1) ?? metric.total
  const gradientId = `graph-gradient-${metric.id}`

  return (
    <GraphCard>
      <GraphHeader>
        <GraphTitle>{metric.title}</GraphTitle>
        <GraphMeta>{metric.periodLabel}</GraphMeta>
      </GraphHeader>

      <GraphStatRow>
        <GraphValue>{formatMetricValue(metric.total, metric.unit)}</GraphValue>
        <GraphChange isPositive={metric.change >= 0}>
          {metric.change >= 0 ? '+' : ''}
          {formatPercent(metric.change * 100)} vs {metric.comparisonLabel}
        </GraphChange>
      </GraphStatRow>

      <GraphChartWrapper
        ref={chartRef}
        onMouseMove={(event) => handlePointer(event.clientX)}
        onTouchMove={(event) => {
          if (event.touches[0]) {
            handlePointer(event.touches[0].clientX)
          }
        }}
        onMouseLeave={handleLeave}
        onTouchEnd={handleLeave}
        onClick={(event) => handlePointer(event.clientX)}
      >
        <GraphSvg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label={metric.title}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          {fillData && <GraphArea d={fillData} fill={`url(#${gradientId})`} />}
          {pathData && <GraphLine d={pathData} $color={color} />}
        </GraphSvg>
        {activePoint && (
          <GraphInteractiveLayer>
            <ActiveLine style={{ left: `${activePoint.x}%` }} />
            <ActiveMarker style={{ left: `${activePoint.x}%`, top: `${activePoint.y}%` }} $color={color} />
            <Tooltip style={{ left: `${activePoint.x}%` }}>
              <TooltipValue>{formatMetricValue(activePoint.value, metric.unit)}</TooltipValue>
              <TooltipLabel>{activePoint.label}</TooltipLabel>
            </Tooltip>
          </GraphInteractiveLayer>
        )}
      </GraphChartWrapper>

      <GraphLegend>
        <LegendItem>
          <LegendLabel>Min</LegendLabel>
          <LegendValue>{formatMetricValue(min, metric.unit)}</LegendValue>
        </LegendItem>
        <LegendItem>
          <LegendLabel>Max</LegendLabel>
          <LegendValue>{formatMetricValue(max, metric.unit)}</LegendValue>
        </LegendItem>
        <LegendItem>
          <LegendLabel>Latest</LegendLabel>
          <LegendValue>{formatMetricValue(latest, metric.unit)}</LegendValue>
        </LegendItem>
      </GraphLegend>

      <GraphComparison>{metric.footnote}</GraphComparison>
      <GraphFootnote>Data normalized from Aqua events stream.</GraphFootnote>
    </GraphCard>
  )
}

const PerformanceGraphs = ({ metrics }: PerformanceGraphsProps) => {
  const theme = useTheme()
  const palette = [
    theme.colors.accentPrimary,
    theme.colors.accentSecondary,
    theme.colors.warning,
    theme.colors.success,
  ]

  return (
    <Wrapper>
      <GraphGrid>
        {metrics.map((metric, index) => (
          <MetricGraphCard key={metric.id} metric={metric} color={palette[index % palette.length]} />
        ))}
      </GraphGrid>
    </Wrapper>
  )
}

export default PerformanceGraphs

