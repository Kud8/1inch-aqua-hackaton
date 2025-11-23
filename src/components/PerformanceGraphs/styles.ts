import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 1.75rem;
`

export const GraphGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`

export const GraphCard = styled.div`
  background: ${({ theme }) => theme.colors.cardElevated};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 220px;
`

export const GraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`

export const GraphTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`

export const GraphMeta = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const GraphStatRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const GraphValue = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`

export const GraphChange = styled.span<{ isPositive: boolean }>`
  font-size: 0.85rem;
  ${({ isPositive, theme }) =>
    isPositive
      ? css`
          color: ${theme.colors.success};
        `
      : css`
          color: ${theme.colors.danger};
        `}
`

export const GraphCanvas = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 0.35rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
`

export const GraphBar = styled.span`
  flex: 1;
  border-radius: ${({ theme }) => theme.radii.xs};
  background: linear-gradient(180deg, rgba(74, 227, 240, 0.3), rgba(125, 92, 255, 0.8));
  min-height: 4px;
  transition: height 0.4s ease;
`

export const GraphComparison = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const GraphFootnote = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.8;
`

