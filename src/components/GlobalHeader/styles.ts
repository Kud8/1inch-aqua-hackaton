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
  gap: 1rem;
  padding: 0.9rem clamp(1rem, 4vw, 4rem);
  background: rgba(5, 6, 11, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);

  @media (max-width: 768px) {
    padding: 0.7rem clamp(0.75rem, 5vw, 2rem);
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 640px) {
    display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.35rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 0.2rem;
    margin-bottom: -0.2rem;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 999px;
    }
  }
`

export const NavButton = styled.button<{ $isActive: boolean }>`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.82rem;
  padding: 0.35rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
  flex: 0 0 auto;

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

