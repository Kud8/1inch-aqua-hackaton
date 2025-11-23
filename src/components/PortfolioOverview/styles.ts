import styled, { css } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.75rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const HeaderTag = styled.span`
  padding: 0.35rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const HeaderMeta = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
`

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`

export const MetricCard = styled.div`
  background: ${({ theme }) => theme.colors.cardElevated};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.card};
    opacity: 0.4;
    pointer-events: none;
  }
`

export const MetricLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  position: relative;
  z-index: 1;
`

export const MetricValue = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
`

export const ChangeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.2rem;
  position: relative;
  z-index: 1;
`

export const ChangePill = styled.span<{ isPositive: boolean }>`
  padding: 0.15rem 0.6rem;
  border-radius: ${({ theme }) => theme.radii.xs};
  font-size: 0.8rem;
  font-weight: 600;
  ${({ isPositive, theme }) =>
    isPositive
      ? css`
          background: rgba(76, 225, 167, 0.15);
          color: ${theme.colors.success};
        `
      : css`
          background: rgba(255, 106, 136, 0.15);
          color: ${theme.colors.danger};
        `}
`

export const ComparisonLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.78rem;
`

const sparklinePalettes = (theme: DefaultTheme) => [
  `linear-gradient(100deg, ${theme.colors.accentPrimary}, transparent 70%)`,
  `linear-gradient(100deg, ${theme.colors.accentSecondary}, transparent 65%)`,
  `linear-gradient(100deg, ${theme.colors.warning}, transparent 60%)`,
  `linear-gradient(100deg, ${theme.colors.success}, transparent 65%)`,
]

const getSparklineBackground = (theme: DefaultTheme, index: number) => {
  const palettes = sparklinePalettes(theme)
  return palettes[index % palettes.length]
}

export const Sparkline = styled.span<{ $index: number }>`
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $index }) => getSparklineBackground(theme, $index)};
  opacity: 0.6;
  filter: blur(0.1px);
  margin: 0.35rem 0;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({ theme }) => theme.colors.card};
    opacity: 0.2;
  }
`

export const MetricFootnote = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.8rem;
  position: relative;
  z-index: 1;
`

