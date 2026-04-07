import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiPhone, HiEnvelope, HiMapPin, HiClock, HiCalendarDays, HiPaperAirplane } from 'react-icons/hi2'

const serviceOptions = [
  'Select a Service...',
  'Domestic & Family Investigations',
  'Insurance Fraud Investigations',
  'Corporate & Business Investigations',
  'Digital Forensics',
  'Surveillance Operations',
  'Criminal Investigations',
  'Asset Recovery',
  'Missing Persons & Process Serving',
  'Other / General Inquiry',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here (e.g., fetch to API endpoint)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: '#111827' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#c9a446' }}
          >
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Contact VIG
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Your first consultation is free and completely confidential. Reach out today.
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Primary CTA */}
            <div
              className="rounded-2xl p-8 mb-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(201,164,70,0.15) 0%, rgba(201,164,70,0.05) 100%)',
                border: '1px solid rgba(201,164,70,0.3)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: '#c9a446' }}
              />
              <HiCalendarDays size={32} style={{ color: '#c9a446' }} className="mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Book a Free Consultation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Schedule a confidential, no-obligation call with Ms. Y. Valdes or one of our senior investigators.
              </p>
              <a
                href="https://calendly.com/valdesinvgr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 text-sm tracking-wider uppercase px-7 py-3.5"
              >
                <HiCalendarDays size={16} />
                Book via Calendly
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="tel:7867177412"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: 'rgba(201,164,70,0.1)', border: '1px solid rgba(201,164,70,0.2)' }}
                >
                  <HiPhone size={18} style={{ color: '#c9a446' }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 tracking-widest uppercase mb-0.5">Phone</p>
                  <p className="text-white font-semibold text-lg group-hover:text-gold transition-colors">
                    (786) 717-7412
                  </p>
                </div>
              </a>

              <a
                href="mailto:clientservice@valdesinvgr.com"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: 'rgba(201,164,70,0.1)', border: '1px solid rgba(201,164,70,0.2)' }}
                >
                  <HiEnvelope size={18} style={{ color: '#c9a446' }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 tracking-widest uppercase mb-0.5">Email</p>
                  <p className="text-white font-semibold group-hover:text-gold transition-colors break-all">
                    clientservice@valdesinvgr.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(201,164,70,0.1)', border: '1px solid rgba(201,164,70,0.2)' }}
                >
                  <HiMapPin size={18} style={{ color: '#c9a446' }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 tracking-widest uppercase mb-0.5">Address</p>
                  <p className="text-white font-semibold">12855 SW 136th Ave Ste 102</p>
                  <p className="text-slate-400 text-sm">Miami, FL 33186</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(201,164,70,0.1)', border: '1px solid rgba(201,164,70,0.2)' }}
                >
                  <HiClock size={18} style={{ color: '#c9a446' }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 tracking-widest uppercase mb-0.5">Hours</p>
                  <p className="text-white font-semibold">Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p className="text-slate-400 text-sm">Sat: By Appointment · Sun: Emergency Only</p>
                </div>
              </div>
            </div>

            {/* Confidentiality disclaimer */}
            <div
              className="mt-8 flex items-center gap-3 px-5 py-4 rounded-lg"
              style={{
                backgroundColor: 'rgba(201,164,70,0.05)',
                border: '1px solid rgba(201,164,70,0.15)',
              }}
            >
              <span className="text-lg flex-shrink-0">🔒</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                All inquiries are handled with strict confidentiality. Your information is never shared.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#1a2236',
                border: '1px solid rgba(201,164,70,0.18)',
              }}
            >
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                We'll respond within 24 hours. All communications are confidential.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(201,164,70,0.15)', border: '1px solid rgba(201,164,70,0.3)' }}
                  >
                    <HiPaperAirplane size={28} style={{ color: '#c9a446' }} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-3">Message Received</h4>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. A VIG representative will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">
                        Full Name <span style={{ color: '#c9a446' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="input-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">
                        Email <span style={{ color: '#c9a446' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input-gold"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(305) 555-0000"
                      className="input-gold"
                    />
                  </div>

                  {/* Service type */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">
                      Service Type <span style={{ color: '#c9a446' }}>*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={formState.service}
                      onChange={handleChange}
                      className="input-gold appearance-none"
                      style={{ cursor: 'pointer' }}
                    >
                      {serviceOptions.map((opt) => (
                        <option
                          key={opt}
                          value={opt === 'Select a Service...' ? '' : opt}
                          style={{ backgroundColor: '#0a0e1a', color: '#fff' }}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">
                      Brief Description <span style={{ color: '#c9a446' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Please briefly describe your situation. All details shared are strictly confidential."
                      className="input-gold resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gold w-full flex items-center justify-center gap-2 text-sm tracking-wider uppercase py-4"
                  >
                    <HiPaperAirplane size={16} />
                    Send Message
                  </button>

                  <p className="text-xs text-center text-slate-600 pt-1">
                    By submitting, you agree to our confidentiality policy. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
