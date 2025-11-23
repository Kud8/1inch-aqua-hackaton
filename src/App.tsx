import {
    AppShell,
    Content,
    Hero,
    HeroTag,
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
    capitalEfficiencyData,
    makerDashboardMeta,
    portfolioOverviewData,
    strategyPerformanceRows,
} from './data/makerDashboard'
import CapitalEfficiencyMetrics from './components/CapitalEfficiencyMetrics'
import PortfolioOverview from './components/PortfolioOverview'
import StrategyPerformanceTable from './components/StrategyPerformanceTable'

const App = () => (
    <AppShell>
        <Content>
            <Hero>
                <HeroTag>Maker dashboard</HeroTag>
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
        </Content>
    </AppShell>
)

export default App

