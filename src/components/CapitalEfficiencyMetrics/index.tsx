import type { CapitalEfficiencyMetricsData } from '../../data/makerDashboard'
import { formatCurrency, formatPercent } from '../../utils/format'
import {
  Wrapper,
  CoefficientBlock,
  CoefficientLabel,
  CoefficientValue,
  StatusChip,
  Divider,
  BreakdownGrid,
  BreakdownItem,
  BreakdownLabel,
  BreakdownValue,
  BreakdownHint,
  UtilizationBlock,
  UtilizationHeader,
  ProgressBar,
  ProgressFill,
  ProgressTarget,
  UtilizationMeta,
  AlertsList,
  AlertItem,
} from './styles'

interface CapitalEfficiencyMetricsProps {
  data: CapitalEfficiencyMetricsData
}

const CapitalEfficiencyMetrics = ({ data }: CapitalEfficiencyMetricsProps) => {
  const virtualRealRatio = data.virtualCommitments / data.realWalletBalance
  const utilizationPercent = data.utilizationRate * 100
  const utilizationTarget = data.utilizationTarget * 100
  const coveragePercent = data.activeTradeCoverage * 100

  const ratioIsHealthy = virtualRealRatio <= data.optimalRatioCeiling

  return (
    <Wrapper>
      <CoefficientBlock>
        <CoefficientLabel>SLAC Coefficient</CoefficientLabel>
        <CoefficientValue>{data.slacCoefficient.toFixed(1)}x</CoefficientValue>
        <StatusChip variant={ratioIsHealthy ? 'success' : 'warning'}>
          {ratioIsHealthy ? 'Healthy leverage' : 'Reduce commitments'}
        </StatusChip>
      </CoefficientBlock>

      <Divider />

      <BreakdownGrid>
        <BreakdownItem>
          <BreakdownLabel>Real Wallet Balance</BreakdownLabel>
          <BreakdownValue>{formatCurrency(data.realWalletBalance)}</BreakdownValue>
          <BreakdownHint>Capital deployed on-chain</BreakdownHint>
        </BreakdownItem>
        <BreakdownItem>
          <BreakdownLabel>Virtual Commitments</BreakdownLabel>
          <BreakdownValue>{formatCurrency(data.virtualCommitments)}</BreakdownValue>
          <BreakdownHint>Available to takers</BreakdownHint>
        </BreakdownItem>
        <BreakdownItem>
          <BreakdownLabel>Virtual / Real ratio</BreakdownLabel>
          <BreakdownValue>{virtualRealRatio.toFixed(2)}x</BreakdownValue>
          <BreakdownHint>Alert at {formatPercent(data.optimalRatioCeiling * 100)}</BreakdownHint>
        </BreakdownItem>
        <BreakdownItem>
          <BreakdownLabel>Active trade coverage</BreakdownLabel>
          <BreakdownValue>{formatPercent(coveragePercent)}</BreakdownValue>
          <BreakdownHint>Active orders vs. virtual capital</BreakdownHint>
        </BreakdownItem>
      </BreakdownGrid>

      <Divider />

      <UtilizationBlock>
        <UtilizationHeader>Utilization rate</UtilizationHeader>
        <ProgressBar>
          <ProgressFill style={{ width: `${Math.min(utilizationPercent, 100)}%` }} />
          <ProgressTarget style={{ left: `${utilizationTarget}%` }} />
        </ProgressBar>
        <UtilizationMeta>
          <span>{formatPercent(utilizationPercent)} of capital is currently routing trades</span>
          <span>Target: {formatPercent(utilizationTarget)}</span>
        </UtilizationMeta>
      </UtilizationBlock>

      <Divider />

      <AlertsList>
        {data.alerts.map((alert) => (
          <AlertItem key={alert}>{alert}</AlertItem>
        ))}
      </AlertsList>
    </Wrapper>
  )
}

export default CapitalEfficiencyMetrics

