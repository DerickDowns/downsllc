import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 45, suffix: '+', label: 'Years Combined Experience', description: 'Decades of investigative excellence' },
  { value: 5, prefix: '$', suffix: 'M', label: 'Insurance Coverage', description: 'Fully insured for your protection' },
  { value: 54, suffix: '+', label: 'Five-Star Reviews', description: 'Verified client testimonials' },
  { value: null, display: 'Global', label: 'Nationwide + Caribbean', description: 'Coverage wherever you need us' },
]

function CountUp({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || target === null) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: '#eff6ff',
        borderTop: '1px solid rgba(30,64,175,0.2)',
        borderBottom: '1px solid rgba(30,64,175,0.2)',
      }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(30,64,175,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className={`relative flex flex-col items-center text-center px-6 py-8 ${
                i < stats.length - 1 ? 'lg:border-r' : ''
              } ${i < 2 ? 'border-b lg:border-b-0' : ''}`}
              style={{
                borderColor: 'rgba(30,64,175,0.15)',
              }}
            >
              <div
                className="font-display text-5xl md:text-6xl font-bold mb-2"
                style={{ color: '#1e40af' }}
              >
                {stat.value !== null ? (
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                  />
                ) : (
                  stat.display
                )}
              </div>
              <div className="font-semibold text-sm tracking-wide mb-1" style={{ color: '#0f172a' }}>
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: '#64748b' }}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
