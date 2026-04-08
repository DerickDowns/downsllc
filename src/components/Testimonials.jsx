import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'

const testimonials = [
  {
    quote:
      'Always get results. The quality of their video and reports, as well as the professional integrity of the staff, is unmatched.',
    client: 'Insurance Client',
    location: 'Miami, FL',
    rating: 5,
  },
  {
    quote:
      'Skillful and REALLY helpful. Really high quality surveillance and very valuable services worth every dime.',
    client: 'Corporate Client',
    location: 'South Florida',
    rating: 5,
  },
  {
    quote:
      'Owner Yenny is very understanding and courteous. Investigators are passionate and go the extra mile to get the job done.',
    client: 'Private Client',
    location: '7+ Year Relationship',
    rating: 5,
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <HiStar key={i} size={16} style={{ color: '#0097a7' }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#fef9f0' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#0097a7' }}
          >
            Client Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5" style={{ color: '#0a1628' }}>
            What Our Clients Say
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#546e7a' }}>
            Real results for real people. Our reputation is built on the trust of every client we've served.
          </p>
        </motion.div>

        {/* Trustpilot badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <div
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,151,167,0.22)',
            }}
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <HiStar key={s} size={18} style={{ color: '#0097a7' }} />
              ))}
            </div>
            <span className="font-semibold text-sm" style={{ color: '#0a1628' }}>5.0</span>
            <div className="w-px h-4" style={{ backgroundColor: 'rgba(0,151,167,0.22)' }} />
            <span className="text-sm" style={{ color: '#546e7a' }}>54+ Verified Reviews</span>
            <div className="w-px h-4" style={{ backgroundColor: 'rgba(0,151,167,0.22)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#0097a7' }}>
              Trustpilot
            </span>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col p-8 rounded-xl"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,151,167,0.18)',
              }}
            >
              {/* Giant quote mark */}
              <div
                className="absolute top-4 right-6 font-display text-7xl leading-none select-none pointer-events-none"
                style={{ color: '#1565c0', opacity: 0.12 }}
              >
                "
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-base leading-relaxed mt-5 mb-6 flex-grow relative z-10 italic" style={{ color: '#0a1628' }}>
                "{t.quote}"
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-5"
                style={{ backgroundColor: 'rgba(0,151,167,0.18)' }}
              />

              {/* Attribution */}
              <div>
                <p className="font-semibold text-sm" style={{ color: '#0a1628' }}>{t.client}</p>
                <p className="text-xs mt-0.5" style={{ color: '#0097a7' }}>
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA underneath */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-5" style={{ color: '#546e7a' }}>
            Join the clients who trusted VIG to deliver the truth.
          </p>
          <a
            href="https://calendly.com/valdesinvgr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2 text-sm tracking-wider uppercase px-7 py-3.5"
          >
            Schedule Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
