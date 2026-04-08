import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Domestic & Family Investigations',
  'Insurance Fraud Investigations',
  'Corporate & Business Investigations',
  'Digital Forensics',
  'Surveillance Operations',
  'Criminal Investigations',
  'Asset Recovery',
  'Missing Persons & Process Serving',
]

function handleScrollTo(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0a3d62',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleScrollTo('#home') }}
              className="inline-flex flex-col leading-none mb-5"
            >
              <span
                className="font-display text-3xl font-bold tracking-widest"
                style={{ color: '#29b6f6' }}
              >
                VIG
              </span>
              <span
                className="text-xs font-light tracking-[0.18em] uppercase mt-1"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Valdes Investigation Group
              </span>
            </a>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Miami's premier private investigation agency. Truth, delivered with integrity, precision, and discretion.
            </p>

            {/* Tagline */}
            <p className="font-display italic text-base" style={{ color: '#29b6f6' }}>
              <span style={{ color: '#29b6f6' }}>"Truth. Delivered."</span>
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.facebook.com/valdesinvgr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#29b6f6',
                }}
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: '#29b6f6' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScrollTo(link.href) }}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    <span
                      className="w-4 h-px transition-all duration-300 group-hover:w-6"
                      style={{ backgroundColor: '#29b6f6' }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: '#29b6f6' }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleScrollTo('#services') }}
                    className="text-xs leading-relaxed transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: '#29b6f6' }}
            >
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:7867177412"
                  className="flex items-start gap-3 group"
                >
                  <HiPhone size={15} style={{ color: '#29b6f6' }} className="flex-shrink-0 mt-0.5" />
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    (786) 717-7412
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:clientservice@valdesinvgr.com"
                  className="flex items-start gap-3 group"
                >
                  <HiEnvelope size={15} style={{ color: '#29b6f6' }} className="flex-shrink-0 mt-0.5" />
                  <span
                    className="text-sm transition-colors duration-200 break-all"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    clientservice@valdesinvgr.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <HiMapPin size={15} style={{ color: '#29b6f6' }} className="flex-shrink-0 mt-0.5" />
                  <address className="text-sm not-italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    12855 SW 136th Ave Ste 102<br />
                    Miami, FL 33186
                  </address>
                </div>
              </li>
            </ul>

            {/* Book button */}
            <a
              href="https://calendly.com/valdesinvgr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 btn-gold inline-flex items-center gap-2 text-xs tracking-wider uppercase px-5 py-3"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2025 Valdes Investigation Group. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                color: '#29b6f6',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Licensed under Chapter 493, Florida Statutes
            </span>
            <span
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                color: '#29b6f6',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              $5M Insurance Coverage
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
