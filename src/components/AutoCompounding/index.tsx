import type { AutoCompoundingData } from '../../data/makerDashboard'
import { formatCurrency, formatPercent } from '../../utils/format'
import {
  Wrapper,
  HeaderRow,
  PeriodLabel,
  BalanceGrid,
  BalanceCard,
  BalanceLabel,
  BalanceValue,
  GrowthBar,
  GrowthFill,
  GrowthMeta,
  Sparkline,
  SparklineFill,
  NotesList,
} from './styles'

interface AutoCompoundingProps {
  data: AutoCompoundingData
}

const AutoCompounding = ({ data }: AutoCompoundingProps) => {
  const growthPercent = ((data.currentBalance - data.initialBalance) / data.initialBalance) * 100
  const progress = Math.min((data.currentBalance / data.initialBalance) * 100, 150)
  const maxPoint = Math.max(...data.growthPoints)

  return (
    <Wrapper>
      <HeaderRow>
        <h3>Auto-compounding effect</h3>
        <PeriodLabel>{data.periodLabel}</PeriodLabel>
      </HeaderRow>

      <BalanceGrid>
        <BalanceCard>
          <BalanceLabel>Initial virtual balance</BalanceLabel>
          <BalanceValue>{formatCurrency(data.initialBalance, { maximumFractionDigits: 0 })}</BalanceValue>
        </BalanceCard>
        <BalanceCard>
          <BalanceLabel>Current virtual balance</BalanceLabel>
          <BalanceValue>{formatCurrency(data.currentBalance, { maximumFractionDigits: 0 })}</BalanceValue>
        </BalanceCard>
        <BalanceCard>
          <BalanceLabel>Reinvested profit</BalanceLabel>
          <BalanceValue>{formatCurrency(data.reinvestedProfit, { maximumFractionDigits: 0 })}</BalanceValue>
        </BalanceCard>
        <BalanceCard>
          <BalanceLabel>Compound rate</BalanceLabel>
          <BalanceValue>{formatPercent(data.compoundRate * 100)}</BalanceValue>
        </BalanceCard>
      </BalanceGrid>

      <GrowthBar aria-label="virtual balance growth">
        <GrowthFill style={{ width: `${progress}%` }} />
      </GrowthBar>
      <GrowthMeta>
        <span>{formatPercent(growthPercent)} growth vs. starting balance</span>
        <span>Next rebalance in 24h</span>
      </GrowthMeta>

      <Sparkline aria-hidden>
        <SparklineFill
          d={data.growthPoints
            .map((point, index) => {
              const x = (index / (data.growthPoints.length - 1)) * 100
              const y = maxPoint === 0 ? 100 : 100 - (point / maxPoint) * 100
              return `${index === 0 ? 'M' : 'L'} ${x},${y}`
            })
            .join(' ')}
        />
      </Sparkline>

      <NotesList>
        {data.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </NotesList>
    </Wrapper>
  )
}

export default AutoCompounding

