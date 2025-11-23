import styled, { css } from 'styled-components'

export const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1rem, 4vw, 4rem);
  background: rgba(5, 6, 11, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`

export const BrandTitle = styled.span`
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.9rem;
`

export const BrandSubtitle = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 360px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
  justify-content: flex-end;
`

export const NavButton = styled.button<{ $isActive: boolean }>`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: color 0.2s, background 0.2s;

  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          color: ${theme.colors.accentPrimary};
          background: rgba(74, 227, 240, 0.12);
          border: 1px solid rgba(74, 227, 240, 0.35);
        `
      : css`
          border: 1px solid transparent;

          &:hover {
            color: ${theme.colors.text};
            background: rgba(255, 255, 255, 0.04);
          }
        `}
`

