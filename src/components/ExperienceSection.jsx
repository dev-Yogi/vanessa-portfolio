'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Director of Web Development & Digital Strategy',
    company: 'PalmSHIELD / AGC / Patriot Custom Metals / LaVigne Enterprises',
    period: '2019 — Present',
    description:
      'Leading all web development and digital strategy across four sister brands under unified ownership. Building and maintaining custom WordPress themes, plugins, and Gutenberg blocks. Architecting WooCommerce solutions, managing Cloudflare infrastructure, and driving SEO strategy across multiple product lines.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'Tailwind CSS', 'MySQL', 'React', 'WooCommerce', 'ACF Pro', 'Cloudflare', 'SEO'],
  },
  {
    title: 'Code School Instructor Manager',
    company: 'AIM Institute',
    period: '2017 — 2019',
    description:
      'Managed a team of instructors delivering full-stack web development curriculum. Facilitated hands-on coding education for career-changers entering the tech industry. Oversaw curriculum development and student progress across multiple cohorts.',
    tags: ['JavaScript', 'HTML/CSS', 'Java', 'Vue.js', 'Spring Boot', 'JPS/Servlets', 'Curriculum Development', 'Team Management'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        <motion.p
          className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Experience
        </motion.p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16">

          {/* Left — Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight sticky top-24"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Where I've
              <br />
              <span className="text-primary">Worked.</span>
            </h2>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            className="space-y-0"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-16 last:pb-0"
                variants={fadeUp}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border last:hidden" />

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                />

                <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">
                  {exp.period}
                </p>

                <h3
                  className="text-xl font-bold text-foreground mb-1"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {exp.title}
                </h3>

                <p className="text-muted-foreground font-mono text-sm mb-4">
                  {exp.company}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}