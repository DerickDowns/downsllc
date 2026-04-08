import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 backdrop-blur-md shadow-lg'
            : 'py-5 bg-transparent'
        }`}
        style={scrolled ? { backgroundColor: 'rgba(250,252,255,0.97)', boxShadow: '0 4px 24px rgba(10,61,98,0.12)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col leading-none">
              <span
                className="font-display text-2xl font-bold tracking-widest"
                style={{ color: scrolled ? '#0a3d62' : '#ffffff' }}
              >
                VI
              </span>
              <span
                className="text-xs font-light tracking-[0.2em] uppercase mt-0.5"
                style={{ color: scrolled ? '#546e7a' : 'rgba(255,255,255,0.7)' }}
              >
                Valdes Investigation
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium tracking-widest uppercase transition-colors duration-300 relative group"
                style={{ color: scrolled ? '#546e7a' : '#ffffff' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#0097a7' }}
                />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/valdesinvgr"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center btn-gold text-sm tracking-wide uppercase"
            >
              Book Consultation
            </a>
            <button
              className="lg:hidden transition-colors p-1"
              style={{ color: scrolled ? '#546e7a' : '#ffffff' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiXMark size={26} /> : <HiBars3 size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
              style={{ backgroundColor: '#fafcff', borderTop: '1px solid rgba(0,151,167,0.15)' }}
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-base font-medium tracking-widest uppercase py-2 transition-colors duration-200"
                    style={{ color: '#546e7a', borderBottom: '1px solid rgba(0,151,167,0.1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#0097a7' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#546e7a' }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://calendly.com/valdesinvgr"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="btn-gold text-center text-sm tracking-wide uppercase mt-2"
                >
                  Book Free Consultation
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
