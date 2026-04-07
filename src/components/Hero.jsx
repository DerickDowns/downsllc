import React from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown, HiShieldCheck } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background placeholder */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #050810 0%, #0a0e1a 40%, #111827 100%)' }}
        >
          {/* Decorative grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(201,164,70,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,164,70,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          {/* Image placeholder block */}
          <div className="absolute inset-0 flex items-end justify-end p-8 opacity-30">
            <div
              className="border-2 border-dashed rounded-lg flex items-center justify-center p-6 text-center max-w-xs"
              style={{ borderColor: 'rgba(201,164,70,0.4)' }}
            >
              <p className="text-slate-500 text-xs leading-relaxed">
                [ Hero Background —<br />Add your image or video here ]
              </p>
            </div>
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 text-xs font-medium tracking-widest uppercase"
            style={{ borderColor: 'rgba(201,164,70,0.35)', color: '#c9a446', backgroundColor: 'rgba(201,164,70,0.07)' }}
          >
            <HiShieldCheck size={14} />
            Licensed · Insured · Confidential
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div custom={0.15} initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-display leading-none mb-2">
            <span className="block text-7xl md:text-9xl font-bold text-white tracking-tight">
              Truth<span style={{ color: '#c9a446' }}>.</span>
            </span>
            <span className="block text-7xl md:text-9xl font-bold text-white tracking-tight">
              Delivered<span style={{ color: '#c9a446' }}>.</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.35}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed"
        >
          Miami's most trusted private investigation agency for over four decades.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://calendly.com/valdesinvgr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-center text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2 px-8 py-4"
          >
            Book Free Consultation
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleScroll() }}
            className="btn-outline-gold text-center text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2 px-8 py-4"
          >
            View Our Services
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
        >
          {['45+ Years Experience', '$5M Insured', '54+ Five-Star Reviews', 'FL Licensed Chapter 493'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#c9a446' }} />
              <span className="text-xs text-slate-400 tracking-wide">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-gold transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <HiChevronDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  )
}
