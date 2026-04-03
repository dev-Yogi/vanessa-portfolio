'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
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

        {/* Section Label */}
        <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12">
          Contact
        </p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* Left — Heading */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Let's Work
              <br />
              <span className="text-primary">Together.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm currently open to new opportunities — freelance projects,
              full-time roles, or just a good conversation about tech.
              Drop me a message and I'll get back to you promptly.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div>
                <p className="text-primary font-mono text-xs tracking-widest uppercase mb-1">
                  Email
                </p>
                <p className="text-muted-foreground font-mono text-sm">
                  vkasun94@gmail.com
                </p>
              </div>
              <div>
                <p className="text-primary font-mono text-xs tracking-widest uppercase mb-1">
                  Location
                </p>
                <p className="text-muted-foreground font-mono text-sm">
                  Omaha, NE
                </p>
              </div>
              <div>
                <p className="text-primary font-mono text-xs tracking-widest uppercase mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/vanessa-k-15393a139/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground font-mono text-sm hover:text-primary transition-colors"
                >
                  https://www.linkedin.com/in/vanessa-k-15393a139/
                </a>
              </div>
              <div>
                <p className="text-primary font-mono text-xs tracking-widest uppercase mb-1">
                  GitHub
                </p>
                <a
                  href="https://github.com/dev-Yogi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground font-mono text-sm hover:text-primary transition-colors"
                >
                  github.com/dev-Yogi
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="text-primary text-4xl mb-4">✓</div>
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

                {/* Name */}
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

                {/* Email */}
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

                {/* Message */}
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

                {/* Error */}
                {status === 'error' && (
                  <p className="text-destructive font-mono text-xs">
                    {errorMessage}
                  </p>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </Button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}