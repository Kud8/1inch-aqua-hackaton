import styled, { css } from 'styled-components'

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

export const CoefficientBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const CoefficientLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const CoefficientValue = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`

export const StatusChip = styled.span<{ variant: 'success' | 'warning' }>`
  width: fit-content;
  padding: 0.3rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 0.85rem;
  font-weight: 600;
  ${({ variant, theme }) =>
    variant === 'success'
      ? css`
          background: rgba(76, 225, 167, 0.15);
          color: ${theme.colors.success};
          border: 1px solid rgba(76, 225, 167, 0.4);
        `
      : css`
          background: rgba(255, 200, 87, 0.12);
          color: ${theme.colors.warning};
          border: 1px solid rgba(255, 200, 87, 0.35);
        `}
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.gradients.divider};
`

export const BreakdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`

export const BreakdownItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const BreakdownLabel = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const BreakdownValue = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`

export const BreakdownHint = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.8rem;
`

export const UtilizationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const UtilizationHeader = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
`

export const ProgressBar = styled.div`
  position: relative;
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`

export const ProgressFill = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #4ae3f0, #7d5cff);
  transition: width 0.4s ease;
`

export const ProgressTarget = styled.span`
  position: absolute;
  top: -6px;
  width: 2px;
  height: calc(100% + 12px);
  background: ${({ theme }) => theme.colors.warning};
  border-radius: 999px;
  opacity: 0.8;
`

export const UtilizationMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const AlertsList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const AlertItem = styled.li`
  list-style: none;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accentPrimary};
  }
`

