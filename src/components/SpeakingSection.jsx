'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

export default function SpeakingSection() {
  return (
    <section id="speaking" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        <motion.p
          className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Speaking
        </motion.p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight sticky top-24"
              style={{ fontFamily: 'var(--font-syne)' }}
              variants={fadeUp}
            >
              On The
              <br />
              <span className="text-primary">Stage.</span>
            </motion.h2>
            <motion.div className="mt-8 space-y-3" variants={stagger}>
              <motion.p
                className="text-primary font-mono text-xs tracking-widest uppercase"
                variants={fadeUp}
              >
                Event
              </motion.p>
              <motion.p
                className="text-foreground font-semibold"
                style={{ fontFamily: 'var(--font-syne)' }}
                variants={fadeUp}
              >
                Heartland Developers Conference
              </motion.p>
              <motion.p className="text-muted-foreground text-sm" variants={fadeUp}>
                Presented by AIM Institute — Omaha, NE
              </motion.p>
              <motion.p
                className="text-muted-foreground text-sm leading-relaxed pt-2"
                variants={fadeUp}
              >
                AIM's annual Heartland Developers Conference has been delivering world-class
                content to the Silicon Prairie developer community for over 15 years.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="space-y-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Video */}
            <motion.div
              className="relative w-full rounded-lg overflow-hidden border border-border"
              style={{ paddingBottom: '56.25%' }}
              variants={fadeUp}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/OZxSWf9bYE4"
                title="Building a React Application from Scratch — Heartland Developers Conference"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            {/* Talk Details */}
            <motion.div
              className="bg-card border border-border rounded-lg p-8 space-y-4"
              variants={fadeUp}
              whileHover={{ borderColor: 'hsl(191, 100%, 50%, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              <h3
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Building a React Application from Scratch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Selected to create and present a full video walkthrough on building a React
                application from scratch for the Heartland Developers Conference. Covered core
                React fundamentals including Node.js setup, JSX, props, state, components,
                and modern development patterns — presented to the Silicon Prairie developer
                community.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['React', 'Node.js', 'JSX', 'Components', 'State', 'Props', 'Public Speaking'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}