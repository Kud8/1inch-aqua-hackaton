import type { StrategyPerformanceRow } from '../../data/makerDashboard'
import { formatCurrency, formatPercent } from '../../utils/format'
import {
  Wrapper,
  ScrollHint,
  TableScrollArea,
  StyledTable,
  TableHeaderCell,
  TableRow,
  StrategyCell,
  StrategyName,
  StrategyMeta,
  MetaBadge,
  PairBadge,
  ValueCell,
  StatusBadge,
  TrendIndicator,
  UtilizationCell,
  UtilizationBar,
  UtilizationProgress,
} from './styles'

interface StrategyPerformanceTableProps {
  rows: StrategyPerformanceRow[]
}

const StrategyPerformanceTable = ({ rows }: StrategyPerformanceTableProps) => (
  <Wrapper>
    <ScrollHint>Swipe horizontally to reveal the full table</ScrollHint>
    <TableScrollArea>
      <StyledTable>
      <thead>
        <tr>
          <TableHeaderCell align="left">Strategy</TableHeaderCell>
          <TableHeaderCell align="left">Pair</TableHeaderCell>
          <TableHeaderCell align="right">Virtual Balance</TableHeaderCell>
          <TableHeaderCell align="right">Fees (7d)</TableHeaderCell>
          <TableHeaderCell align="right">APY</TableHeaderCell>
          <TableHeaderCell align="center">Utilization</TableHeaderCell>
          <TableHeaderCell align="center">Status</TableHeaderCell>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <StrategyCell>
              <StrategyName>{row.name}</StrategyName>
              <StrategyMeta>
                <MetaBadge>{row.feeTier}</MetaBadge>
                <MetaBadge>{row.network}</MetaBadge>
              </StrategyMeta>
            </StrategyCell>

            <ValueCell align="left">
              <PairBadge>{row.pair}</PairBadge>
            </ValueCell>

            <ValueCell align="right">{formatCurrency(row.virtualBalance, { maximumFractionDigits: 0 })}</ValueCell>

            <ValueCell align="right">{formatCurrency(row.fees7d, { maximumFractionDigits: 0 })}</ValueCell>

            <ValueCell align="right">
              <TrendIndicator trend={row.trend}>{formatPercent(row.apy)}</TrendIndicator>
            </ValueCell>

            <UtilizationCell>
              <span>{formatPercent(row.utilization)}</span>
              <UtilizationBar>
                <UtilizationProgress style={{ width: `${Math.min(row.utilization, 100)}%` }} />
              </UtilizationBar>
            </UtilizationCell>

            <ValueCell align="center">
              <StatusBadge status={row.status}>{row.statusLabel}</StatusBadge>
            </ValueCell>
          </TableRow>
        ))}
      </tbody>
      </StyledTable>
    </TableScrollArea>
  </Wrapper>
)

export default StrategyPerformanceTable

