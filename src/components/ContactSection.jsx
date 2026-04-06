'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error || 'Something went wrong.')
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        <motion.p
          className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Contact
        </motion.p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-syne)' }}
              variants={fadeUp}
            >
              Let's Work
              <br />
              <span className="text-primary">Together.</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8"
              variants={fadeUp}
            >
              I'm currently open to new opportunities — freelance projects,
              full-time roles, or just a good conversation about tech.
              Drop me a message and I'll get back to you promptly.
            </motion.p>

            <motion.div className="space-y-4" variants={stagger}>
              {[
                { label: 'Email', value: 'vkasun94@gmail.com', href: null },
                { label: 'Location', value: 'Omaha, NE', href: null },
                { label: 'LinkedIn', value: 'linkedin.com/in/vanessa-k-15393a139/', href: 'https://www.linkedin.com/in/vanessa-k-15393a139/' },
                { label: 'GitHub', value: 'github.com/dev-Yogi', href: 'https://github.com/dev-Yogi' },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <p className="text-primary font-mono text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground font-mono text-sm hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-mono text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="bg-card border border-border rounded-lg p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <motion.div
                  className="text-primary text-4xl mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  ✓
                </motion.div>
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll be in touch soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary font-mono text-sm hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-muted-foreground font-mono text-xs tracking-widest uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground font-mono text-xs tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground font-mono text-xs tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-destructive font-mono text-xs">{errorMessage}</p>
                )}
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}