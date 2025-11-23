import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.75rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
`

export const PeriodLabel = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const BalanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
`

export const BalanceCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 0.9rem;
  background: ${({ theme }) => theme.colors.cardElevated};
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const BalanceLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const BalanceValue = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`

export const GrowthBar = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`

export const GrowthFill = styled.span`
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #4ae3f0, #7d5cff);
  transition: width 0.4s ease;
`

export const GrowthMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const Sparkline = styled.svg.attrs({
  viewBox: '0 0 100 100',
  preserveAspectRatio: 'none',
})`
  width: 100%;
  height: 120px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const SparklineFill = styled.path`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.accentPrimary};
  stroke-width: 2;
`

export const NotesList = styled.ul`
  margin: 0;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;

  li {
    list-style: '• ';
  }
`

