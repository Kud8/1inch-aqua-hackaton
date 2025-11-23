export interface MakerDashboardMeta {
  title: string
  subtitle: string
  highlights: Array<{ label: string; value: string }>
}

export interface PortfolioOverviewData {
  totalVirtualLiquidity: number
  virtualLiquidityChange: number
  activeStrategies: number
  activeStrategiesChange: number
  totalFees7d: number
  fees7dChange: number
  currentApy: number
  apyChange: number
  trailingWindowLabel: string
}

export interface CapitalEfficiencyMetricsData {
  slacCoefficient: number
  realWalletBalance: number
  virtualCommitments: number
  utilizationRate: number
  utilizationTarget: number
  optimalRatioCeiling: number
  activeTradeCoverage: number
  alerts: string[]
}

export type StrategyStatus = 'active' | 'caution' | 'attention'

export interface StrategyPerformanceRow {
  id: string
  name: string
  pair: string
  feeTier: string
  virtualBalance: number
  fees7d: number
  apy: number
  utilization: number
  status: StrategyStatus
  statusLabel: string
  trend: 'up' | 'down' | 'flat'
  network: string
}

export type PerformanceGraphUnit = 'currency' | 'percent'

export interface PerformanceGraphMetric {
  id: string
  title: string
  total: number
  unit: PerformanceGraphUnit
  change: number
  periodLabel: string
  comparisonLabel: string
  footnote: string
  points: number[]
}

export interface StrategyEfficiencyRow {
  id: string
  strategy: string
  feeTier: string
  apy: number
  volume30d: number
  volumeChange: number
  score: number
}

export interface StrategyEfficiencyData {
  pair: string
  rows: StrategyEfficiencyRow[]
  insight: string
}

export type SecurityStatus = 'healthy' | 'warning' | 'critical'

export interface SecurityMonitoringData {
  status: SecurityStatus
  statusLabel: string
  statusDescription: string
  virtualBalanceRatio: number
  optimalThreshold: number
  allowanceCoverage: number
  allowanceTarget: number
  walletCoverage: number
  alerts: string[]
  recommendations: string[]
}

export interface AutoCompoundingData {
  periodLabel: string
  initialBalance: number
  currentBalance: number
  reinvestedProfit: number
  compoundRate: number
  growthPoints: number[]
  notes: string[]
}

export const makerDashboardMeta: MakerDashboardMeta = {
  title: 'Maker Dashboard',
  subtitle: 'Monitor 1Inch Aqua strategies, surface capital efficiency signals, and act before the market does.',
  highlights: [
    { label: 'Networks', value: 'Ethereum, Arbitrum' },
    { label: 'Strategies', value: '8 active' },
    { label: 'Last sync', value: '2 minutes ago' },
  ],
}

export const portfolioOverviewData: PortfolioOverviewData = {
  totalVirtualLiquidity: 125_000,
  virtualLiquidityChange: 0.12,
  activeStrategies: 8,
  activeStrategiesChange: 0.07,
  totalFees7d: 1_250,
  fees7dChange: 0.18,
  currentApy: 18.5,
  apyChange: 0.025,
  trailingWindowLabel: 'Rolling 7 days',
}

export const capitalEfficiencyData: CapitalEfficiencyMetricsData = {
  slacCoefficient: 3.2,
  realWalletBalance: 39_062,
  virtualCommitments: 125_000,
  utilizationRate: 0.124,
  utilizationTarget: 0.4,
  optimalRatioCeiling: 0.9,
  activeTradeCoverage: 0.62,
  alerts: ['Virtual/Real ratio well below alert threshold', 'Utilization trending upward in USDC/DAI'],
}

export const strategyPerformanceRows: StrategyPerformanceRow[] = [
  {
    id: 'strategy-1',
    name: 'Deep Range Executor',
    pair: 'USDC / DAI',
    feeTier: '15 bps',
    virtualBalance: 15_000,
    fees7d: 45,
    apy: 15.2,
    utilization: 8.3,
    status: 'active',
    statusLabel: '✅ Active',
    trend: 'up',
    network: 'Ethereum',
  },
  {
    id: 'strategy-2',
    name: 'ETH Macro Drift',
    pair: 'ETH / USDC',
    feeTier: '30 bps',
    virtualBalance: 25_000,
    fees7d: 180,
    apy: 28.5,
    utilization: 14.2,
    status: 'active',
    statusLabel: '✅ Active',
    trend: 'up',
    network: 'Arbitrum',
  },
  {
    id: 'strategy-3',
    name: 'Quant Vol Shield',
    pair: 'WBTC / ETH',
    feeTier: '60 bps',
    virtualBalance: 10_000,
    fees7d: 12,
    apy: 4.5,
    utilization: 2.1,
    status: 'caution',
    statusLabel: '⚠️ Low Vol',
    trend: 'down',
    network: 'Ethereum',
  },
  {
    id: 'strategy-4',
    name: 'Stable Spread',
    pair: 'USDC / USDT',
    feeTier: '5 bps',
    virtualBalance: 22_000,
    fees7d: 86,
    apy: 12.7,
    utilization: 9.6,
    status: 'active',
    statusLabel: '✅ Active',
    trend: 'flat',
    network: 'Ethereum',
  },
  {
    id: 'strategy-5',
    name: 'L2 Velocity',
    pair: 'OP / ETH',
    feeTier: '100 bps',
    virtualBalance: 8_000,
    fees7d: 64,
    apy: 21.3,
    utilization: 11.1,
    status: 'attention',
    statusLabel: '⚠️ Monitor',
    trend: 'up',
    network: 'Optimism',
  },
]

export const performanceGraphsData: PerformanceGraphMetric[] = [
  {
    id: 'fees',
    title: 'Fees earned over time',
    total: 1_250,
    unit: 'currency',
    change: 0.18,
    periodLabel: 'Last 7 days',
    comparisonLabel: 'vs prior week',
    footnote: 'Premium makers get hourly resolution with Telegram alerts.',
    points: [420, 560, 610, 700, 820, 930, 1_050],
  },
  {
    id: 'virtual-balance',
    title: 'Virtual balance growth',
    total: 125_000,
    unit: 'currency',
    change: 0.12,
    periodLabel: 'Since subscription start',
    comparisonLabel: 'vs previous month',
    footnote: 'Auto-compounding boosts range capital without extra deposits.',
    points: [78_000, 82_500, 91_000, 98_400, 105_100, 117_800, 125_000],
  },
  {
    id: 'trade-volume',
    title: 'Trade volume trends',
    total: 2_500_000,
    unit: 'currency',
    change: 0.27,
    periodLabel: '30-day rolling',
    comparisonLabel: 'vs 30d avg',
    footnote: 'Volume × fee tier determines effective maker revenue.',
    points: [1_450_000, 1_620_000, 1_880_000, 2_010_000, 2_250_000, 2_420_000, 2_500_000],
  },
  {
    id: 'apy',
    title: 'APY evolution',
    total: 18.5,
    unit: 'percent',
    change: -0.03,
    periodLabel: 'Trailing 14 days',
    comparisonLabel: 'vs long-term average',
    footnote: 'Stability shows balanced exposure between stable and volatile pairs.',
    points: [21.5, 20.8, 19.4, 17.6, 18.3, 18.7, 18.5],
  },
]

export const strategyEfficiencyData: StrategyEfficiencyData = {
  pair: 'USDC / DAI (15 bps)',
  insight: 'Strategy A sustains the best balance between APY and depth; Strategy B can unlock more volume if fees drop.',
  rows: [
    {
      id: 'eff-1',
      strategy: 'Deep Range A',
      feeTier: '15 bps',
      apy: 18.5,
      volume30d: 2_500_000,
      volumeChange: 0.22,
      score: 5,
    },
    {
      id: 'eff-2',
      strategy: 'Elastic B',
      feeTier: '30 bps',
      apy: 12.3,
      volume30d: 1_150_000,
      volumeChange: -0.08,
      score: 3,
    },
    {
      id: 'eff-3',
      strategy: 'Tight Range C',
      feeTier: '60 bps',
      apy: 5.2,
      volume30d: 420_000,
      volumeChange: -0.18,
      score: 1,
    },
  ],
}

export const securityMonitoringData: SecurityMonitoringData = {
  status: 'healthy',
  statusLabel: '✅ Healthy posture',
  statusDescription: 'Virtual balances remain within safe band; allowances cover upcoming settlement cycles.',
  virtualBalanceRatio: 0.76,
  optimalThreshold: 0.9,
  allowanceCoverage: 1.15,
  allowanceTarget: 1,
  walletCoverage: 0.62,
  alerts: ['Strategy #3: Low liquidity - recommend partial dock', 'Token USDC: Allowance refresh scheduled in 3 days'],
  recommendations: ['Keep SLAC below 0.9 to avoid auto-alerts', 'Approve +$10k allowance on Strategy #2 wallet'],
}

export const autoCompoundingData: AutoCompoundingData = {
  periodLabel: 'Since activation (90 days)',
  initialBalance: 100_000,
  currentBalance: 125_000,
  reinvestedProfit: 25_000,
  compoundRate: 0.25,
  growthPoints: [0, 6, 11, 14, 18, 22, 25],
  notes: [
    'All fees auto-redeployed into the virtual range.',
    'Compounding cadence synced with settlement windows (24h).',
  ],
}

