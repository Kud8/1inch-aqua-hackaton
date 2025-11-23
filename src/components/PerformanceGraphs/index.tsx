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
  GraphCanvas,
  GraphBar,
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

const PerformanceGraphs = ({ metrics }: PerformanceGraphsProps) => (
  <Wrapper>
    <GraphGrid>
      {metrics.map((metric) => {
        const maxPoint = Math.max(...metric.points)

        return (
          <GraphCard key={metric.id}>
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

            <GraphCanvas aria-hidden>
              {metric.points.map((point, index) => {
                const height = maxPoint === 0 ? 0 : (point / maxPoint) * 100
                return <GraphBar key={`${metric.id}-${index}`} style={{ height: `${height}%` }} />
              })}
            </GraphCanvas>

            <GraphComparison>{metric.footnote}</GraphComparison>
            <GraphFootnote>Data normalized from Aqua events stream.</GraphFootnote>
          </GraphCard>
        )
      })}
    </GraphGrid>
  </Wrapper>
)

export default PerformanceGraphs

