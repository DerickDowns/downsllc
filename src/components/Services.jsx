import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMagnifyingGlass, HiShieldCheck, HiBuildingOffice2, HiComputerDesktop, HiEye, HiScale, HiTruck, HiUserGroup } from 'react-icons/hi2'

const services = [
  {
    icon: HiMagnifyingGlass,
    title: 'Domestic & Family Investigations',
    description:
      'Infidelity, custody, divorce, background checks, and marriage screening handled with care and strict confidentiality.',
    tags: ['Infidelity', 'Custody', 'Background Checks'],
  },
  {
    icon: HiShieldCheck,
    title: 'Insurance Fraud Investigations',
    description:
      'Claims investigation, civil investigations, and fraud detection to protect against fraudulent activity.',
    tags: ['Claims Investigation', 'Fraud Detection', 'Civil Cases'],
  },
  {
    icon: HiBuildingOffice2,
    title: 'Corporate & Business Investigations',
    description:
      'Due diligence, internal misconduct investigation, fraud prevention, and comprehensive risk assessment.',
    tags: ['Due Diligence', 'Misconduct', 'Risk Assessment'],
  },
  {
    icon: HiComputerDesktop,
    title: 'Digital Forensics',
    description:
      'Computer and internet forensics, data extraction, e-discovery. Cellebrite & Magnet Forensics licensed professionals.',
    tags: ['Cellebrite', 'E-Discovery', 'Data Extraction'],
  },
  {
    icon: HiEye,
    title: 'Surveillance Operations',
    description:
      'Covert surveillance, GPS tracking, hidden camera deployment, and spyware monitoring executed with precision.',
    tags: ['Covert Ops', 'GPS Tracking', 'Spyware Monitoring'],
  },
  {
    icon: HiScale,
    title: 'Criminal Investigations',
    description:
      'Homicide cases, financial fraud, and complex criminal matters requiring deep investigative expertise.',
    tags: ['Homicide', 'Financial Fraud', 'Complex Cases'],
  },
  {
    icon: HiTruck,
    title: 'Asset Recovery',
    description:
      'Vehicle recovery, equipment and vessel recovery. 25+ years of successful asset recovery experience.',
    tags: ['Vehicle Recovery', 'Vessel Recovery', '25+ Years Exp.'],
  },
  {
    icon: HiUserGroup,
    title: 'Missing Persons & Process Serving',
    description:
      'Global locate capability, legal document service, and debt collection handled professionally and discreetly.',
    tags: ['Missing Persons', 'Process Serving', 'Debt Collection'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col p-7 rounded-xl cursor-default"
      style={{
        backgroundColor: '#1a2236',
        border: '1px solid rgba(201,164,70,0.18)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,164,70,0.55)'
        e.currentTarget.style.boxShadow = '0 0 30px rgba(201,164,70,0.1), 0 8px 32px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,164,70,0.18)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 flex-shrink-0"
        style={{ backgroundColor: 'rgba(201,164,70,0.12)', border: '1px solid rgba(201,164,70,0.25)' }}
      >
        <Icon size={22} style={{ color: '#c9a446' }} />
      </div>

      {/* Title */}
      <h3
        className="font-display font-bold text-lg text-white mb-3 leading-tight"
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              color: '#c9a446',
              backgroundColor: 'rgba(201,164,70,0.1)',
              border: '1px solid rgba(201,164,70,0.2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Learn more */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
        style={{ color: '#c9a446' }}
      >
        <span>Inquire Now</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#0a0e1a' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          ref={ref}
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#c9a446' }}
          >
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Our Investigative Services
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive investigation solutions tailored to your specific needs — delivered with discretion, precision, and results.
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 text-sm mb-6">
            Don't see what you need? We handle complex, custom investigation requirements.
          </p>
          <a
            href="https://calendly.com/valdesinvgr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 text-sm tracking-wider uppercase px-8 py-4"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
