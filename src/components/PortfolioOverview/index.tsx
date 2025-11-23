import type { PortfolioOverviewData } from '../../data/makerDashboard'
import { formatCurrency, formatPercent } from '../../utils/format'
import {
  Wrapper,
  Header,
  HeaderTag,
  HeaderMeta,
  MetricGrid,
  MetricCard,
  MetricLabel,
  MetricValue,
  ChangeRow,
  ChangePill,
  ComparisonLabel,
  MetricFootnote,
} from './styles'

interface PortfolioOverviewProps {
  data: PortfolioOverviewData
}

const PortfolioOverview = ({ data }: PortfolioOverviewProps) => {
  const metrics = [
    {
      key: 'virtual-liquidity',
      label: 'Total Virtual Liquidity',
      value: formatCurrency(data.totalVirtualLiquidity, { maximumFractionDigits: 0 }),
      change: data.virtualLiquidityChange,
      hint: 'Commitments across every Aqua strategy',
    },
    {
      key: 'active-strategies',
      label: 'Active Strategies',
      value: data.activeStrategies.toString(),
      change: data.activeStrategiesChange,
      hint: 'Programs currently shipping orders',
    },
    {
      key: 'fees-7d',
      label: 'Fees Earned (7d)',
      value: formatCurrency(data.totalFees7d, { maximumFractionDigits: 0 }),
      change: data.fees7dChange,
      hint: 'Protocol fees captured in the last 7 days',
    },
    {
      key: 'current-apy',
      label: 'Current APY',
      value: formatPercent(data.currentApy),
      change: data.apyChange,
      hint: 'Weighted by virtual liquidity per strategy',
    },
  ]

  return (
    <Wrapper>
      <Header>
        <HeaderTag>Live snapshot</HeaderTag>
        <HeaderMeta>{data.trailingWindowLabel}</HeaderMeta>
      </Header>

      <MetricGrid>
        {metrics.map((metric) => (
          <MetricCard key={metric.key}>
            <MetricLabel>{metric.label}</MetricLabel>
            <MetricValue>{metric.value}</MetricValue>
            <ChangeRow>
              <ChangePill isPositive={metric.change >= 0}>
                {metric.change >= 0 ? '+' : ''}
                {formatPercent(metric.change * 100)}
              </ChangePill>
              <ComparisonLabel>vs previous {data.trailingWindowLabel.toLowerCase()}</ComparisonLabel>
            </ChangeRow>
            <MetricFootnote>{metric.hint}</MetricFootnote>
          </MetricCard>
        ))}
      </MetricGrid>
    </Wrapper>
  )
}

export default PortfolioOverview

