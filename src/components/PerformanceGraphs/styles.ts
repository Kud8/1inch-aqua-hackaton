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
  display: none;
`

export const GraphChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  margin-top: 0.5rem;
  touch-action: none;
  cursor: crosshair;
`

export const GraphSvg = styled.svg`
  width: 100%;
  height: 100%;
`

export const GraphArea = styled.path`
  stroke: none;
  opacity: 0.6;
`

export const GraphLine = styled.path<{ $color: string }>`
  fill: none;
  stroke: ${({ $color }) => $color};
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.35));
`

export const GraphInteractiveLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`

export const ActiveLine = styled.span`
  position: absolute;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
`

export const ActiveMarker = styled.span<{ $color: string }>`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${({ $color }) => $color};
  background: #05060b;
  transform: translate(-50%, -50%);
`

export const Tooltip = styled.div`
  position: absolute;
  top: 12px;
  transform: translate(-50%, -120%);
  background: rgba(5, 6, 11, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.35rem 0.6rem;
  min-width: 90px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
`

export const TooltipValue = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`

export const TooltipLabel = styled.div`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const GraphLegend = styled.div`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`

export const LegendItem = styled.div`
  padding: 0.35rem 0.7rem;
  border-radius: ${({ theme }) => theme.radii.xs};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  min-width: 80px;
`

export const LegendLabel = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const LegendValue = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
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

