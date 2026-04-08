import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCheckBadge } from 'react-icons/hi2'

const highlights = [
  'Licensed under Chapter 493, Florida Statutes',
  '$5M insurance coverage for full protection',
  'Cellebrite & Magnet Forensics certified',
  'Serving clients across Florida, nationally, and Caribbean',
  'Strict confidentiality on every case',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: '#fef9f0' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative blue accent blobs */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none"
              style={{ backgroundColor: '#0097a7' }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ backgroundColor: '#1565c0' }}
            />

            {/* Main image placeholder */}
            <div
              className="relative w-full aspect-[4/5] rounded-xl flex flex-col items-center justify-center"
              style={{
                backgroundColor: '#f0fafc',
                border: '2px dashed rgba(0,151,167,0.3)',
              }}
            >
              <div className="text-center px-8">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0,151,167,0.08)', border: '1px solid rgba(0,151,167,0.25)' }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(0,151,167,0.6)" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  [ Add headshot of Ms. Y. Valdes ]
                </p>
                <p className="text-slate-400 text-xs mt-2">
                  Recommended: 800x1000px, professional portrait
                </p>
              </div>

              {/* Name card overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 rounded-b-xl"
                style={{
                  background: 'linear-gradient(to top, rgba(13,27,62,0.97) 0%, rgba(13,27,62,0.7) 60%, transparent 100%)',
                }}
              >
                <p className="font-display font-bold text-white text-xl">Ms. Y. Valdes</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: '#29b6f6' }}>
                  Founder & Lead Investigator
                </p>
              </div>
            </div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -right-5 top-12 rounded-xl px-5 py-4 shadow-2xl hidden md:block"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,151,167,0.25)',
              }}
            >
              <p className="text-xs text-slate-400 tracking-wide uppercase">Licensed Under</p>
              <p className="font-display font-bold text-sm mt-1" style={{ color: '#0a1628' }}>Chapter 493</p>
              <p className="text-xs" style={{ color: '#0097a7' }}>Florida Statutes</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#0097a7' }}
            >
              Our Story
            </p>

            {/* Accent line */}
            <div
              className="w-12 h-0.5 mb-6"
              style={{ backgroundColor: '#0097a7' }}
            />

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#0a1628' }}>
              About Valdes<br />Investigation Group
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: '#546e7a' }}>
              Valdes Investigation (VI) is Miami's premier private investigation agency, built on a foundation of integrity, professionalism, and an unwavering commitment to truth. Led by Ms. Y. Valdes, our agency has established itself as the most trusted name in Florida investigations.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: '#546e7a' }}>
              With over 20 years in business administration and 10 years of direct investigative experience, Ms. Valdes brings a unique combination of business acumen and field expertise to every case. From complex corporate fraud to sensitive domestic matters, VI delivers results that clients can act on.
            </p>

            {/* Pull quote */}
            <div
              className="relative pl-6 py-4 mb-8"
              style={{ borderLeft: '3px solid #0097a7' }}
            >
              <div
                className="absolute top-0 left-4 font-display text-6xl leading-none opacity-20 -translate-y-2"
                style={{ color: '#0097a7' }}
              >
                "
              </div>
              <p className="font-display text-lg italic leading-relaxed relative z-10" style={{ color: '#0a1628' }}>
                We don't just investigate — we deliver truth you can act on.
              </p>
              <p className="text-xs text-slate-500 mt-2 tracking-wide">— Ms. Y. Valdes, Founder</p>
            </div>

            {/* Credentials */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <HiCheckBadge
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#0097a7' }}
                  />
                  <span className="text-sm" style={{ color: '#0a1628' }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Meta stats row */}
            <div
              className="flex flex-wrap gap-8 pt-8"
              style={{ borderTop: '1px solid rgba(0,151,167,0.15)' }}
            >
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: '#1565c0' }}>20+</p>
                <p className="text-xs mt-1 tracking-wide" style={{ color: '#546e7a' }}>Years Business Admin</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: '#1565c0' }}>10+</p>
                <p className="text-xs mt-1 tracking-wide" style={{ color: '#546e7a' }}>Years Investigative Exp.</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: '#1565c0' }}>100%</p>
                <p className="text-xs mt-1 tracking-wide" style={{ color: '#546e7a' }}>Confidentiality Guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
