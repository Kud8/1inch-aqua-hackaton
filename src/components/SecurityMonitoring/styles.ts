import styled, { css } from 'styled-components'
import type { SecurityStatus } from '../../data/makerDashboard'

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

export const StatusBadge = styled.span<{ status: SecurityStatus }>`
  padding: 0.35rem 0.85rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: 600;
  width: fit-content;
  ${({ status, theme }) => {
    if (status === 'healthy') {
      return css`
        background: rgba(76, 225, 167, 0.12);
        color: ${theme.colors.success};
        border: 1px solid rgba(76, 225, 167, 0.35);
      `
    }
    if (status === 'warning') {
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

export const StatusDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.9rem;
`

export const MetricCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1rem;
  background: ${({ theme }) => theme.colors.cardElevated};
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const MetricLabel = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const MetricValue = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`

export const MetricHint = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const ProgressTrack = styled.div`
  margin-top: 0.4rem;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`

export const ProgressFill = styled.span`
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ffc857, #ff8c6b);
`

export const AlertsList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const AlertItem = styled.li`
  list-style: none;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.warning};
  }
`

export const RecommendationList = styled.ul`
  margin: 0;
  padding-left: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  li {
    list-style: '↳ ';
  }
`

