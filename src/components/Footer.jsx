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
        backgroundColor: '#050810',
        borderTop: '1px solid rgba(201,164,70,0.2)',
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
                style={{ color: '#c9a446' }}
              >
                VIG
              </span>
              <span className="text-xs font-light tracking-[0.18em] text-slate-400 uppercase mt-1">
                Valdes Investigation Group
              </span>
            </a>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Miami's premier private investigation agency. Truth, delivered with integrity, precision, and discretion.
            </p>

            {/* Tagline */}
            <p className="font-display italic text-lg" style={{ color: '#c9a446' }}>
              "Truth. Delivered."
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.facebook.com/valdesinvgr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(201,164,70,0.1)',
                  border: '1px solid rgba(201,164,70,0.2)',
                  color: '#c9a446',
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
              style={{ color: '#c9a446' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScrollTo(link.href) }}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-4 h-px transition-all duration-300 group-hover:w-6"
                      style={{ backgroundColor: '#c9a446' }}
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
              style={{ color: '#c9a446' }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleScrollTo('#services') }}
                    className="text-slate-400 text-xs leading-relaxed hover:text-white transition-colors duration-200"
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
              style={{ color: '#c9a446' }}
            >
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:7867177412"
                  className="flex items-start gap-3 group"
                >
                  <HiPhone size={15} style={{ color: '#c9a446' }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm group-hover:text-white transition-colors">
                    (786) 717-7412
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:clientservice@valdesinvgr.com"
                  className="flex items-start gap-3 group"
                >
                  <HiEnvelope size={15} style={{ color: '#c9a446' }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm group-hover:text-white transition-colors break-all">
                    clientservice@valdesinvgr.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <HiMapPin size={15} style={{ color: '#c9a446' }} className="flex-shrink-0 mt-0.5" />
                  <address className="text-slate-400 text-sm not-italic leading-relaxed">
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
        style={{ borderTop: '1px solid rgba(201,164,70,0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-600 text-xs">
            © 2025 Valdes Investigation Group. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                color: '#c9a446',
                backgroundColor: 'rgba(201,164,70,0.08)',
                border: '1px solid rgba(201,164,70,0.18)',
              }}
            >
              Licensed under Chapter 493, Florida Statutes
            </span>
            <span
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                color: '#c9a446',
                backgroundColor: 'rgba(201,164,70,0.08)',
                border: '1px solid rgba(201,164,70,0.18)',
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
