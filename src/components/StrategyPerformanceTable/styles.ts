import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  padding: 0 0.5rem 0.4rem;
  overflow-x: auto;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  mask-image: linear-gradient(90deg, transparent 0, #000 20px, #000 calc(100% - 20px), transparent 100%);

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 999px;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;

  thead {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  tbody tr {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
`

export const TableHeaderCell = styled.th<{ align: 'left' | 'center' | 'right' }>`
  text-align: ${({ align }) => align};
  padding: 0.5rem 0.75rem;
  font-weight: 600;
`

export const TableRow = styled.tr`
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`

export const StrategyCell = styled.td`
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const StrategyName = styled.span`
  font-weight: 600;
`

export const StrategyMeta = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const MetaBadge = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: ${({ theme }) => theme.radii.xs};
  background: ${({ theme }) => theme.colors.cardElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const PairBadge = styled.span`
  padding: 0.25rem 0.7rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(74, 227, 240, 0.12);
  color: ${({ theme }) => theme.colors.accentPrimary};
  border: 1px solid rgba(74, 227, 240, 0.4);
  font-weight: 600;
  font-size: 0.9rem;
`

export const ValueCell = styled.td<{ align: 'left' | 'center' | 'right' }>`
  padding: 1rem 0.75rem;
  text-align: ${({ align }) => align};
  white-space: nowrap;
`

export const StatusBadge = styled.span<{ status: 'active' | 'caution' | 'attention' }>`
  padding: 0.3rem 0.85rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 0.85rem;
  font-weight: 600;
  ${({ status, theme }) => {
    if (status === 'active') {
      return css`
        background: rgba(76, 225, 167, 0.15);
        color: ${theme.colors.success};
        border: 1px solid rgba(76, 225, 167, 0.4);
      `
    }
    if (status === 'caution') {
      return css`
        background: rgba(255, 200, 87, 0.12);
        color: ${theme.colors.warning};
        border: 1px solid rgba(255, 200, 87, 0.35);
      `
    }
    return css`
      background: rgba(255, 106, 136, 0.12);
      color: ${theme.colors.danger};
      border: 1px solid rgba(255, 106, 136, 0.35);
    `
  }}
`

const getTrendIcon = (trend: 'up' | 'down' | 'flat') => {
  if (trend === 'up') return "'↗'"
  if (trend === 'down') return "'↘'"
  return "'→'"
}

export const TrendIndicator = styled.span<{ trend: 'up' | 'down' | 'flat' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  &::before {
    content: ${({ trend }) => getTrendIcon(trend)};
    font-size: 0.85rem;
  }

  ${({ trend, theme }) =>
    trend === 'up'
      ? css`
          color: ${theme.colors.success};
        `
      : trend === 'down'
        ? css`
            color: ${theme.colors.danger};
          `
        : css`
            color: ${theme.colors.textMuted};
          `}
`

export const UtilizationCell = styled.td`
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: stretch;
  min-width: 120px;
  text-align: center;
  font-weight: 600;
`

export const UtilizationBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`

export const UtilizationProgress = styled.span`
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #4ae3f0, #7d5cff);
`

