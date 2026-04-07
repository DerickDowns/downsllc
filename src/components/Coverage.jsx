import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMapPin, HiGlobeAmericas } from 'react-icons/hi2'

const coverageAreas = [
  {
    icon: '🌴',
    label: 'Florida Statewide',
    description: 'Full coverage across all 67 Florida counties',
  },
  {
    icon: '🇺🇸',
    label: 'Nationwide',
    description: 'Investigations in all 50 United States',
  },
  {
    icon: '🌊',
    label: 'Caribbean',
    description: 'Full Caribbean basin coverage and operations',
  },
  {
    icon: '🌐',
    label: 'International',
    description: 'Global investigative reach and coordination',
  },
]

export default function Coverage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="coverage"
      className="section-padding"
      style={{ backgroundColor: '#0a0e1a' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#c9a446' }}
          >
            Where We Operate
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Our Coverage Area
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Based in Miami, VIG operates wherever your case takes us — from statewide Florida operations to international engagements.
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden mb-14"
          style={{
            border: '2px dashed rgba(201,164,70,0.3)',
            backgroundColor: '#111827',
          }}
        >
          <div className="w-full h-80 md:h-[420px] flex flex-col items-center justify-center gap-4">
            {/* Decorative map grid */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201,164,70,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,164,70,0.5) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Animated pulse dots */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Miami dot */}
              <div className="absolute" style={{ bottom: '35%', left: '22%' }}>
                <div className="relative">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#c9a446' }}
                  />
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ backgroundColor: 'rgba(201,164,70,0.4)' }}
                  />
                  <div
                    className="absolute -top-6 -left-6 text-xs whitespace-nowrap font-semibold"
                    style={{ color: '#c9a446' }}
                  >
                    Miami, FL
                  </div>
                </div>
              </div>
            </div>

            <HiGlobeAmericas size={52} style={{ color: 'rgba(201,164,70,0.3)' }} className="relative z-10" />
            <div className="text-center relative z-10">
              <p className="text-slate-500 text-sm font-medium mb-1">
                [ Add Google Maps embed or custom coverage map here ]
              </p>
              <p className="text-slate-600 text-xs">
                Recommended: Google Maps embed with service areas highlighted
              </p>
            </div>
          </div>
        </motion.div>

        {/* Coverage badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {coverageAreas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center p-7 rounded-xl"
              style={{
                backgroundColor: '#1a2236',
                border: '1px solid rgba(201,164,70,0.18)',
              }}
            >
              <span className="text-4xl mb-4">{area.icon}</span>
              <h3
                className="font-display font-bold text-lg text-white mb-2"
              >
                {area.label}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl"
            style={{
              backgroundColor: 'rgba(201,164,70,0.06)',
              border: '1px solid rgba(201,164,70,0.18)',
            }}
          >
            <HiMapPin size={18} style={{ color: '#c9a446' }} />
            <p className="text-slate-300 text-sm">
              <span className="font-semibold text-white">Headquartered in Miami, FL</span>
              {' '}— 12855 SW 136th Ave Ste 102, Miami, FL 33186
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
