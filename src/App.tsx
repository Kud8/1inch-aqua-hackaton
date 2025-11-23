import {
    AppShell,
    Content,
    Hero,
    HeroTitle,
    HeroSubtitle,
    HeroHighlights,
    HighlightCard,
    HighlightLabel,
    HighlightValue,
    SectionGrid,
    SectionCard,
    SectionHeading,
    SectionTitle,
    SectionDescription,
    FullWidthSection,
} from './App.styles'
import {
    autoCompoundingData,
    capitalEfficiencyData,
    makerDashboardMeta,
    performanceGraphsData,
    portfolioOverviewData,
    securityMonitoringData,
    strategyEfficiencyData,
    strategyPerformanceRows,
} from './data/makerDashboard'
import CapitalEfficiencyMetrics from './components/CapitalEfficiencyMetrics'
import PortfolioOverview from './components/PortfolioOverview'
import StrategyPerformanceTable from './components/StrategyPerformanceTable'
import PerformanceGraphs from './components/PerformanceGraphs'
import StrategyEfficiencyAnalysis from './components/StrategyEfficiencyAnalysis'
import SecurityMonitoring from './components/SecurityMonitoring'
import AutoCompounding from './components/AutoCompounding'

const App = () => (
    <AppShell>
        <Content>
            <Hero>
                <HeroTitle>{makerDashboardMeta.title}</HeroTitle>
                <HeroSubtitle>{makerDashboardMeta.subtitle}</HeroSubtitle>
                <HeroHighlights>
                    {makerDashboardMeta.highlights.map((highlight) => (
                        <HighlightCard key={highlight.label}>
                            <HighlightLabel>{highlight.label}</HighlightLabel>
                            <HighlightValue>{highlight.value}</HighlightValue>
                        </HighlightCard>
                    ))}
                </HeroHighlights>
            </Hero>

            <SectionGrid>
                <SectionCard>
                    <SectionHeading>
                        <SectionTitle>Portfolio Overview</SectionTitle>
                        <SectionDescription>
                            Virtual liquidity, strategy footprint, and fee capture across Aqua.
                        </SectionDescription>
                    </SectionHeading>
                    <PortfolioOverview data={portfolioOverviewData} />
                </SectionCard>

                <SectionCard>
                    <SectionHeading>
                        <SectionTitle>Capital Efficiency</SectionTitle>
                        <SectionDescription>
                            SLAC coefficient, wallet coverage, and utilization vs. maker goals.
                        </SectionDescription>
                    </SectionHeading>
                    <CapitalEfficiencyMetrics data={capitalEfficiencyData} />
                </SectionCard>
            </SectionGrid>

            <FullWidthSection>
                <SectionHeading>
                    <SectionTitle>Strategy Performance</SectionTitle>
                    <SectionDescription>
                        Compare fees, APY, and utilization to decide which strategy deserves more capital.
                    </SectionDescription>
                </SectionHeading>
                <StrategyPerformanceTable rows={strategyPerformanceRows} />
            </FullWidthSection>

            <FullWidthSection>
                <SectionHeading>
                    <SectionTitle>Performance Graphs</SectionTitle>
                    <SectionDescription>
                        Historical context for fees, capital growth, trade activity, and APY evolution.
                    </SectionDescription>
                </SectionHeading>
                <PerformanceGraphs metrics={performanceGraphsData} />
            </FullWidthSection>

            <SectionGrid>
                <SectionCard>
                    <SectionHeading>
                        <SectionTitle>Strategy Efficiency</SectionTitle>
                        <SectionDescription>Same pair comparison to capture the optimal fee × volume mix.</SectionDescription>
                    </SectionHeading>
                    <StrategyEfficiencyAnalysis data={strategyEfficiencyData} />
                </SectionCard>

                <SectionCard>
                    <SectionHeading>
                        <SectionTitle>Security Monitoring</SectionTitle>
                        <SectionDescription>Balance ratios, allowance coverage, and proactive Maker alerts.</SectionDescription>
                    </SectionHeading>
                    <SecurityMonitoring data={securityMonitoringData} />
                </SectionCard>
            </SectionGrid>

            <FullWidthSection>
                <SectionHeading>
                    <SectionTitle>Auto-Compounding Yield</SectionTitle>
                    <SectionDescription>Track compounded profits since activation and upcoming reinvestments.</SectionDescription>
                </SectionHeading>
                <AutoCompounding data={autoCompoundingData} />
            </FullWidthSection>
        </Content>
    </AppShell>
)

export default App

