import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ScrollHint = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const TableScrollArea = styled.div`
  margin: 0 -0.5rem;
  padding: 0 0.5rem 0.3rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  mask-image: linear-gradient(90deg, transparent 0, #000 20px, #000 calc(100% - 20px), transparent 100%);

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 999px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const PairLabel = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const PairValue = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`

export const Insight = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 620px;

  thead {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  tbody tr + tr {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  td,
  th {
    padding: 0.75rem 0.25rem;
  }
`

export const TableHeader = styled.th<{ align: 'left' | 'center' | 'right' }>`
  text-align: ${({ align }) => align};
`

export const TableRow = styled.tr`
  td {
    font-size: 0.95rem;
  }
`

export const VolumeChange = styled.span<{ isPositive: boolean }>`
  padding: 0.15rem 0.45rem;
  border-radius: ${({ theme }) => theme.radii.xs};
  font-size: 0.8rem;
  font-weight: 600;
  ${({ isPositive, theme }) =>
    isPositive
      ? css`
          background: rgba(76, 225, 167, 0.12);
          color: ${theme.colors.success};
        `
      : css`
          background: rgba(255, 106, 136, 0.12);
          color: ${theme.colors.danger};
        `}
`

export const ScoreBadge = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.warning};
`

