import type { SecurityMonitoringData } from '../../data/makerDashboard'
import { formatPercent } from '../../utils/format'
import {
  Wrapper,
  StatusDescription,
  MetricGrid,
  MetricCard,
  MetricLabel,
  MetricValue,
  MetricHint,
  ProgressTrack,
  ProgressFill,
  AlertsList,
  AlertItem,
  RecommendationList,
} from './styles'

interface SecurityMonitoringProps {
  data: SecurityMonitoringData
}

const SecurityMonitoring = ({ data }: SecurityMonitoringProps) => {
  const virtualRatioPercent = data.virtualBalanceRatio * 100
  const ratioThresholdPercent = data.optimalThreshold * 100

  const allowancePercent = data.allowanceCoverage * 100

  return (
    <Wrapper>
      <StatusDescription>{data.statusDescription}</StatusDescription>

      <MetricGrid>
        <MetricCard>
          <MetricLabel>Virtual / Real ratio</MetricLabel>
          <MetricValue>{virtualRatioPercent.toFixed(0)}%</MetricValue>
          <MetricHint>Alert at {ratioThresholdPercent.toFixed(0)}%</MetricHint>
          <ProgressTrack>
            <ProgressFill
              style={{ width: `${Math.min((data.virtualBalanceRatio / data.optimalThreshold) * 100, 100)}%` }}
            />
          </ProgressTrack>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Allowance coverage</MetricLabel>
          <MetricValue>{allowancePercent.toFixed(0)}%</MetricValue>
          <MetricHint>Target ≥ {formatPercent(data.allowanceTarget * 100)}</MetricHint>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Active wallet coverage</MetricLabel>
          <MetricValue>{formatPercent(data.walletCoverage * 100)}</MetricValue>
          <MetricHint>Measures usable liquidity vs. committed capital</MetricHint>
        </MetricCard>
      </MetricGrid>

      <AlertsList>
        {data.alerts.map((alert) => (
          <AlertItem key={alert}>{alert}</AlertItem>
        ))}
      </AlertsList>

      <RecommendationList>
        {data.recommendations.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </RecommendationList>
    </Wrapper>
  )
}

export default SecurityMonitoring

