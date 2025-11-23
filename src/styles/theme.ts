export const theme = {
  colors: {
    background: '#05060B',
    surface: '#0B0F1A',
    card: '#101527',
    cardElevated: '#131930',
    border: 'rgba(255, 255, 255, 0.08)',
    text: '#F5F6FA',
    textMuted: '#9DA8C3',
    accentPrimary: '#4AE3F0',
    accentSecondary: '#7D5CFF',
    success: '#4CE1A7',
    warning: '#FFC857',
    danger: '#FF6A88',
    neutral: 'rgba(255, 255, 255, 0.4)',
  },
  gradients: {
    background: 'radial-gradient(circle at 20% 20%, rgba(74, 227, 240, 0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(125, 92, 255, 0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255, 140, 107, 0.15), transparent 45%)',
    card: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
    divider: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
  },
  radii: {
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.8rem',
    xl: '2.4rem',
  },
  spacing: {
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xl: '2.4rem',
    xxl: '3.2rem',
  },
  shadows: {
    soft: '0 20px 50px rgba(5, 6, 11, 0.65)',
    inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  },
  typography: {
    fontFamily: "'Space Grotesk', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    headingWeight: 600,
    bodyWeight: 400,
  },
  layout: {
    maxWidth: '1200px',
  },
}

export type AppTheme = typeof theme

