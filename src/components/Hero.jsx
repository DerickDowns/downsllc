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
      {/* Background — deep ocean + warm city lights feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #0a3d62 0%, #0d2f4e 35%, #1565c0 70%, #0a3d62 100%)',
          }}
        />

        {/* Subtle warm glow — city lights at night */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 80% 60%, rgba(255,107,53,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(41,182,246,0.2) 0%, transparent 50%)',
          }}
        />

        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(41,182,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(41,182,246,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Image placeholder block */}
        <div className="absolute inset-0 flex items-end justify-end p-8 opacity-30">
          <div
            className="border-2 border-dashed rounded-lg flex items-center justify-center p-6 text-center max-w-xs"
            style={{ borderColor: 'rgba(41,182,246,0.35)' }}
          >
            <p className="text-slate-400 text-xs leading-relaxed">
              [ Hero Background —<br />Add your image or video here ]
            </p>
          </div>
        </div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to right, #0a3d62, rgba(10,61,98,0.88), transparent)' }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to top, #0a3d62, transparent, rgba(10,61,98,0.5))' }}
        />
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
          <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-2 text-xs font-medium tracking-widest uppercase"
            style={{ borderColor: 'rgba(0,151,167,0.5)', color: '#29b6f6', backgroundColor: 'rgba(0,151,167,0.12)' }}
          >
            <HiShieldCheck size={14} />
            Licensed · Insured · Confidential
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div custom={0.15} initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-display leading-none mb-2">
            <span className="block text-7xl md:text-9xl font-bold text-white tracking-tight">
              Truth<span style={{ color: '#0097a7' }}>.</span>
            </span>
            <span className="block text-7xl md:text-9xl font-bold text-white tracking-tight">
              Delivered<span style={{ color: '#0097a7' }}>.</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.35}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl max-w-xl font-light leading-relaxed"
          style={{ color: '#b0d4f1' }}
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
            className="btn-outline-light text-center text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2 px-8 py-4"
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
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#0097a7' }} />
              <span className="text-xs tracking-wide" style={{ color: '#b0d4f1' }}>{item}</span>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-colors group"
        style={{ color: '#0097a7' }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-light" style={{ color: '#b0d4f1' }}>Scroll</span>
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
