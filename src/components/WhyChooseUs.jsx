import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiShieldCheck, HiCpuChip, HiLockClosed, HiTrophy } from 'react-icons/hi2'

const reasons = [
  {
    number: '01',
    icon: HiShieldCheck,
    title: 'State-Licensed & Insured',
    description:
      'Fully licensed under Chapter 493, Florida Statutes. We carry $5M in insurance coverage, giving our clients complete peace of mind throughout every engagement.',
  },
  {
    number: '02',
    icon: HiCpuChip,
    title: 'Cutting-Edge Technology',
    description:
      'Cellebrite & Magnet Forensics licensed professionals. We deploy state-of-the-art digital forensics tools and surveillance technology to gather irrefutable evidence.',
  },
  {
    number: '03',
    icon: HiLockClosed,
    title: 'Discreet & Confidential',
    description:
      'Every case is handled with absolute discretion and professional integrity. Your privacy is paramount — from initial consultation through final delivery of findings.',
  },
  {
    number: '04',
    icon: HiTrophy,
    title: 'Results-Driven',
    description:
      "We don't stop until we have the truth. Our proven track record spans 45+ years of successful investigations across domestic, corporate, and criminal matters.",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#fafcff' }}
      ref={ref}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ backgroundColor: '#0097a7' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ backgroundColor: '#1565c0' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#0097a7' }}
          >
            Our Advantage
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5" style={{ color: '#0a1628' }}>
            Why Choose VI?
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#546e7a' }}>
            Four pillars that set us apart from every other investigation agency in Florida.
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-7"
              >
                {/* Ghost number */}
                <div className="flex-shrink-0">
                  <span
                    className="font-display text-5xl md:text-6xl font-bold leading-none select-none"
                    style={{ color: 'rgba(0,151,167,0.15)', letterSpacing: '-0.02em' }}
                  >
                    {reason.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(0,151,167,0.08)', border: '1px solid rgba(0,151,167,0.22)' }}
                    >
                      <Icon size={17} style={{ color: '#0097a7' }} />
                    </div>
                    <h3 className="font-display font-bold text-xl" style={{ color: '#0a1628' }}>
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#546e7a' }}>
                    {reason.description}
                  </p>

                  {/* Subtle divider */}
                  <div
                    className="w-8 h-px mt-5"
                    style={{ backgroundColor: 'rgba(0,151,167,0.3)' }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-20 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            backgroundColor: '#fef9f0',
            border: '1px solid rgba(0,151,167,0.22)',
          }}
        >
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0,151,167,0.6) 0%, transparent 70%)',
            }}
          />
          <p
            className="font-display text-2xl md:text-3xl font-bold mb-4 relative z-10"
            style={{ color: '#0a1628' }}
          >
            Ready to get the truth?
          </p>
          <p className="text-base mb-8 max-w-lg mx-auto relative z-10" style={{ color: '#546e7a' }}>
            Schedule a confidential, no-obligation consultation with VI today. Your first call is free.
          </p>
          <a
            href="https://calendly.com/valdesinvgr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 text-sm tracking-wider uppercase px-8 py-4 relative z-10"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
