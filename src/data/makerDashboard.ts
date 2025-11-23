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

export const makerDashboardMeta: MakerDashboardMeta = {
  title: 'Maker Intelligence Command Center',
  subtitle: 'Monitor Aqua strategies, surface capital efficiency signals, and act before the market does.',
  highlights: [
    { label: 'Networks', value: 'Ethereum · Arbitrum' },
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

