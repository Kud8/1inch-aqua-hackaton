import { useCallback, useEffect, useState } from 'react'

import { HeaderBar, Brand, BrandTitle, Nav, NavButton } from './styles'

export interface NavigationSection {
  id: string
  label: string
}

interface GlobalHeaderProps {
  title: string
  sections: NavigationSection[]
}

const HEADER_OFFSET = 96

const GlobalHeader = ({ title, sections }: GlobalHeaderProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '')

  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined') return
    const section = document.getElementById(sectionId)
    if (!section) return
    const elementPosition = section.getBoundingClientRect().top + window.scrollY
    const offsetPosition = Math.max(elementPosition - HEADER_OFFSET, 0)

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const offset = HEADER_OFFSET + 16
      let current = sections[0]?.id ?? ''

      sections.forEach((section) => {
        const node = document.getElementById(section.id)
        if (!node) return
        const { top } = node.getBoundingClientRect()
        if (top - offset <= 0) {
          current = section.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  return (
    <HeaderBar>
      <Brand>
        <BrandTitle>{title}</BrandTitle>
      </Brand>

      <Nav>
        {sections.map((section) => (
          <NavButton
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            $isActive={activeSection === section.id}
          >
            {section.label}
          </NavButton>
        ))}
      </Nav>
    </HeaderBar>
  )
}

export default GlobalHeader

