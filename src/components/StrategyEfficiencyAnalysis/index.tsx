import type { StrategyEfficiencyData } from '../../data/makerDashboard'
import { formatCurrency, formatPercent } from '../../utils/format'
import {
  Wrapper,
  Header,
  PairLabel,
  PairValue,
  Insight,
  StyledTable,
  TableHeader,
  TableRow,
  ScoreBadge,
  VolumeChange,
} from './styles'

interface StrategyEfficiencyAnalysisProps {
  data: StrategyEfficiencyData
}

const renderScore = (score: number) => '★'.repeat(score) + '☆'.repeat(5 - score)

const StrategyEfficiencyAnalysis = ({ data }: StrategyEfficiencyAnalysisProps) => (
  <Wrapper>
    <Header>
      <PairLabel>Same Pair Comparison</PairLabel>
      <PairValue>{data.pair}</PairValue>
    </Header>

    <Insight>{data.insight}</Insight>

    <StyledTable>
      <thead>
        <tr>
          <TableHeader align="left">Strategy</TableHeader>
          <TableHeader align="center">Fee</TableHeader>
          <TableHeader align="right">APY</TableHeader>
          <TableHeader align="right">Volume (30d)</TableHeader>
          <TableHeader align="center">Trend</TableHeader>
          <TableHeader align="center">Score</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row) => (
          <TableRow key={row.id}>
            <td>{row.strategy}</td>
            <td align="center">{row.feeTier}</td>
            <td align="right">{formatPercent(row.apy)}</td>
            <td align="right">{formatCurrency(row.volume30d, { maximumFractionDigits: 0 })}</td>
            <td align="center">
              <VolumeChange isPositive={row.volumeChange >= 0}>
                {row.volumeChange >= 0 ? '+' : ''}
                {formatPercent(row.volumeChange * 100)}
              </VolumeChange>
            </td>
            <td align="center">
              <ScoreBadge>{renderScore(row.score)}</ScoreBadge>
            </td>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  </Wrapper>
)

export default StrategyEfficiencyAnalysis

