# Aqua Dashboard & Analytics Platform — Product Overview

## TL;DR

## The Problem
- Makers lack tools to track performance and optimize portfolios
- Takers can't easily discover and compare Aqua liquidity
- No visibility into capital efficiency (SLAC) and strategy performance

## Our Solution
**Dashboard + Telegram Bot** for Aqua ecosystem:

### For Makers (LPs):
- Portfolio overview: virtual liquidity, APY, fees earned
- Strategy performance comparison
- Security monitoring: virtual vs real balance alerts
- Performance graphs (from subscription start)

### For Takers:
- Liquidity discovery by token pair
- Price comparison with other DEXes
- Liquidity depth visualization

### Telegram Bot:
- Daily performance reports (1–2x/day)
- Real-time alerts (low liquidity, APY drops, opportunities)
- Crypto payment subscriptions

## Key Features
1. Subscription-based monitoring: track data from signup, build historical charts
2. SLAC metrics: show capital efficiency amplification
3. Auto-compounding visualization: track reinvested profits
4. Security alerts: prevent illiquidity risks

**Result**: Tools that make Aqua more accessible and help the ecosystem grow.


## 1. Maker Dashboard (LP Portfolio Management)

### 1.1 Portfolio Overview

```
┌─────────────────────────────────────────┐
│  Total Virtual Liquidity    $125,000    │
│  Active Strategies           8          │
│  Total Fees Earned (7d)     $1,250      │
│  Current APY                 18.5%      │
└─────────────────────────────────────────┘
```

Metrics:
- Total virtual liquidity across all strategies
- Number of active strategies
- Fees earned in selected period
- Weighted average APY across portfolio

### 1.2 Capital Efficiency Metrics

```
┌─────────────────────────────────────────┐
│  SLAC Coefficient           3.2x        │
│  ─────────────────────────────────────  │
│  Real Wallet Balance        $39,062     │
│  Virtual Commitments        $125,000    │
│  ─────────────────────────────────────  │
│  Utilization Rate          12.4%        │
│  (Active trades / Virtual)              │
└─────────────────────────────────────────┘
```

Metrics:
- SLAC = `Virtual Commitments / Real Wallet Balance`
- Utilization = percentage of virtual capital actively trading
- Optimal ratio tracking (alerts when virtual/real > 0.9)

### 1.3 Strategy Performance Table

| Strategy | Pair | Virtual Balance | Fees (7d) | APY | Utilization | Status |
|----------|------|-----------------|-----------|-----|-------------|--------|
| Strategy 1 | USDC/DAI | $15,000 | $45 | 15.2% | 8.3% | ✅ Active |
| Strategy 2 | ETH/USDC | $25,000 | $180 | 28.5% | 14.2% | ✅ Active |
| Strategy 3 | WBTC/ETH | $10,000 | $12 | 4.5% | 2.1% | ⚠️ Low Vol |
| ... | ... | ... | ... | ... | ... | ... |

Strategy details:
- Token pair
- Virtual balances per token
- Fees earned in period
- Current APY
- Capital utilization rate
- Status indicators (Active / Low Volume / Illiquid)

### 1.4 Performance Graphs

Fees earned over time (only for Premium users):
```
Fees Earned Over Time
│
│   $200 │               ╭──╮
│        │            ╭──╯  ╰──╮
│   $150 │         ╭──╯        ╰──╮
│        │      ╭──╯              ╰──
│   $100 │   ╭──╯
│        │╭──╯
│    $50 │
│        └───────────────────────────────────
│        Mon  Tue  Wed  Thu  Fri  Sat  Sun
```

Note: performance graphs track data from subscription start. When a Maker subscribes, the backend starts monitoring all their events (`Pulled`, `Pushed`, `Shipped`, `Docked`) and builds historical charts over time.

Graph types:
- Fees earned timeline
- Virtual balance growth (showing auto-compounding effect)
- Trade volume trends
- APY evolution

### 1.5 Strategy Efficiency Analysis

```
Strategy Comparison (Same Pair: USDC/DAI)
┌─────────────────────────────────────────┐
│ Strategy | Fee | APY | Volume | Score   │
├─────────────────────────────────────────┤
│ A (15bps) | 18.5% | High  | ⭐⭐⭐⭐⭐ │
│ B (30bps) | 12.3% | Medium| ⭐⭐⭐     │
│ C (60bps) | 5.2%  | Low   | ⭐          │
└─────────────────────────────────────────┘
```

Metrics:
- Side-by-side parameter comparison (fee rates, ranges)
- Optimal revenue point: `volume × fee_rate`
- Optimization recommendations based on performance data

### 1.6 Security Monitoring

```
┌─────────────────────────────────────────┐
│  Security Status           ✅ Healthy   │
│  ─────────────────────────────────────  │
│  Virtual Balance Ratio     0.76         │
│  (Virtual / Real)                       │
│  ─────────────────────────────────────  │
│  Allowance Coverage        1.15x        │
│  (Allowance / Virtual)                  │
│  ─────────────────────────────────────  │
│  ⚠️  Alerts:                            │
│  • Strategy #3: Low liquidity           │
│  • Token USDC: Allowance expiring       │
└─────────────────────────────────────────┘
```

Metrics:
- Virtual/Real balance ratio (illiquidity risk alert when > 0.9)
- Allowance coverage (ensuring sufficient allowances)
- Real-time alerts: low liquidity warnings, expiring allowances, critical balance levels

### 1.7 Auto-Compounding Yield Tracking

```
┌─────────────────────────────────────────┐
│  Auto-Compounding Effect                │
│  ─────────────────────────────────────  │
│  Initial Virtual Balance   $100,000     │
│  Current Virtual Balance   $125,000     │
│  ─────────────────────────────────────  │
│  Reinvested Profit        $25,000       │
│  Compound Rate             25%          │
│  (All profits auto-reinvested)          │
└─────────────────────────────────────────┘
```

Metrics:
- Initial vs current virtual balance comparison
- Reinvested profit amount (difference)
- Compounding effect visualization

---

## 2. Taker Dashboard (Liquidity Discovery)

### 2.1 Discover Liquidity

```
Search Liquidity by Pair: [USDC/DAI ▼]

Available Strategies:
┌─────────────────────────────────────────┐
│ Strategy | Virtual Liq | Fee | Price   │
├─────────────────────────────────────────┤
│ Maker A  | $50,000     | 0.15%| Best   │
│ Maker B  | $25,000     | 0.30%|        │
│ Maker C  | $15,000     | 0.15%|        │
└─────────────────────────────────────────┘
```

Features:
- Search by token pair
- Sort by price, liquidity depth, fees
- Aggregated liquidity from all strategies
- Real-time pricing

### 2.2 Price Comparison

```
Price Impact Analysis (Swap 10,000 USDC → DAI)

┌─────────────────────────────────────────┐
│ Source        | Output DAI | Price     │
├─────────────────────────────────────────┤
│ Aqua (Best)   | 9,985 DAI  | 0.9985    │
│ Uniswap V3    | 9,970 DAI  | 0.9970    │
│ Curve         | 9,975 DAI  | 0.9975    │
├─────────────────────────────────────────┤
│ 💰 Best Price: Aqua (+$15 vs Uniswap)  │
└─────────────────────────────────────────┘
```

Metrics:
- Price comparison with other DEXes
- Price impact analysis for different swap sizes
- Optimal source recommendation

### 2.3 Liquidity Depth Chart

```
Available Liquidity Depth
│
│  $50K │████████████
│       │████████████  Maker A (0.15% fee)
│  $40K │███████
│       │███████      Maker B (0.30% fee)
│  $30K │████
│       │████          Maker C (0.15% fee)
│  $20K │██
│       │██
│  $10K │
│       └──────────────────────────────────
│        Best  -2%  -1%   0%   +1%  +2%
│              Price deviation
```

Features:
- Liquidity depth at different price levels
- Shows how much can be swapped without significant slippage
- Visual representation of all Maker's contributions

---

## 3. Strategy Builder Dashboard

### 3.1 Strategy Performance Leaderboard

```
Top Performing Strategies (Last 30 Days)

┌─────────────────────────────────────────┐
│ Rank | Strategy | APY | Volume | LPs    │
├─────────────────────────────────────────┤
│ 1    | XYCSwap  | 45% | $2.5M  | 12     │
│ 2    | Concentr.| 38% | $1.8M  | 8      │
│ 3    | Dynamic  | 32% | $1.2M  | 15     │
└─────────────────────────────────────────┘
```

Metrics:
- Rankings by APY, volume, number of LPs
- Liquidity growth trends
- Popular parameter analysis

### 3.2 Strategy Analytics

```
Strategy Deep Dive: XYCSwap (USDC/DAI, 15bps)

┌─────────────────────────────────────────┐
│ Total Virtual Liquidity    $250,000     │
│ Unique Makers              12           │
│ Total Volume (30d)         $2,500,000   │
│ Total Fees Earned          $3,750       │
│ Average APY                18.5%        │
│ ─────────────────────────────────────   │
│ Utilization Rate           12.4%        │
│ Average Trade Size         $5,200       │
│ Trades per Day             48           │
└─────────────────────────────────────────┘
```

Metrics:
- Overall strategy statistics
- Usage pattern analysis
- Liquidity growth over time

### 3.3 Parameter Optimization

```
Fee Optimization Analysis

Fee Rate → Volume Relationship:
│
│ Volume │        __
│        │       ╱  │
│        │      ╱   │
│        │     ╱    │
│        │    ╱     │
│        │   ╱      │
│        │  ╱       │
│        │ ╱        │
│        └──────────────
│        0%  0.15% 0.30% 0.60%  Fee
│
│ Optimal Fee: 0.15% (maximizes volume × fee)
```

Metrics:
- Volume vs fee rate relationship
- Revenue maximization point
- Optimization recommendations

---

## 4. Telegram Bot — Mobile Monitoring & Alerts

### Daily Performance Reports (1–2x per day)

```
📊 Daily Performance Report
━━━━━━━━━━━━━━━━━━━━━━
💰 Total Fees Earned: $45.20 (+12% vs yesterday)
📈 Average APY: 18.5%
💧 Virtual Liquidity: $125,000

Top Performing Strategies:
1. Strategy #3 (ETH/USDC): $18.50 | 28.5% APY
2. Strategy #1 (USDC/DAI): $15.20 | 15.2% APY
3. Strategy #5 (WBTC/ETH): $11.50 | 12.3% APY

⚠️ Recommendations:
• Strategy #2 has low volume - consider docking
• Increase capital in Strategy #3 (high performance)
```

Features:
- Summary of fees earned, APY, and virtual liquidity
- Top-performing strategies
- Actionable recommendations for portfolio rebalancing

### Real-Time Alerts

Alert types:
- Low liquidity: `Virtual balance > Real balance * 0.9`
- APY drop: `APY dropped > 30% vs 7d average`
- Illiquidity risk: `Real balance < Virtual commitments`
- High efficiency: `New SLAC milestone achieved`
- Strategy opportunities: `Better performing strategy available for same pair`

Example alert:
```
⚠️ Liquidity Alert
━━━━━━━━━━━━━━━━━━━━━━
Strategy #2 (USDC/DAI) is at risk:
• Virtual Balance: $50,000
• Real Balance: $48,000
• Ratio: 0.96 (>0.9 threshold)

Consider: Dock strategy or increase wallet balance (link)
```

### Crypto Payment Subscription

Payment options:
- USDC, USDT, ETH
- Monthly/Quarterly/Annual subscriptions
- On-chain subscription contract for transparency

Subscription tiers:
- Basic: Dashboard + Daily reports
- Premium: Dashboard + Reports + Real-time alerts + Priority support
