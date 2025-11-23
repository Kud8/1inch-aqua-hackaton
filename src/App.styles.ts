import styled from 'styled-components'

export const AppShell = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2.5rem clamp(1rem, 4vw, 4rem) 4rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Hero = styled.header`
  background: ${({ theme }) => theme.gradients.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`

export const HeroTag = styled.span`
  align-self: flex-start;
  padding: 0.35rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(74, 227, 240, 0.12);
  border: 1px solid rgba(74, 227, 240, 0.35);
  color: ${({ theme }) => theme.colors.accentPrimary};
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
`

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.9rem);
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  letter-spacing: -0.02em;
`

export const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 720px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
`

export const HeroHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`

export const HighlightCard = styled.div`
  padding: 1rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.cardElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const HighlightLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
`

export const HighlightValue = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`

export const SectionCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
`

export const SectionDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
`

export const FullWidthSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

