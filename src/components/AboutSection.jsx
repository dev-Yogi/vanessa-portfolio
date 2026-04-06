'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '4', label: 'Brands Managed' },
  { value: '15+', label: 'WordPress Projects' },
  { value: '∞', label: 'Coffees Consumed' },
]

const tools = [
  { category: 'Frontend', items: 'React, Next.js, Tailwind CSS, Gutenberg, SASS' },
  { category: 'Backend', items: 'PHP, Node.js, MySQL, REST APIs' },
  { category: 'WordPress', items: 'ACF Pro, WooCommerce, Custom Plugins & Themes' },
  { category: 'DevOps', items: 'Cloudflare, Vercel, Flywheel, WP Engine, Git' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

export default function AboutSection() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        <motion.p
          className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{ fontFamily: 'var(--font-syne)' }}
              variants={fadeUp}
            >
              Developer. Strategist.
              <br />
              <span className="text-primary">Problem Solver.</span>
            </motion.h2>
            <motion.div className="space-y-4 text-muted-foreground leading-relaxed" variants={stagger}>
              <motion.p variants={fadeUp}>
                I'm a Full Stack Developer and Director of Web Development based in Omaha, NE —
                currently leading digital strategy across four sister brands including{' '}
                <span className="text-foreground">PalmSHIELD</span>,{' '}
                <span className="text-foreground">America's Gate Company</span>, and{' '}
                <span className="text-foreground">Patriot Custom Metals</span>.
              </motion.p>
              <motion.p variants={fadeUp}>
                My work lives at the intersection of engineering and design — building custom
                WordPress plugins, Gutenberg blocks, WooCommerce solutions, and now modern
                React and Next.js applications.
              </motion.p>
              <motion.p variants={fadeUp}>
                I've also worked as a Code School Instructor Manager at AIM Institute,
                where I helped aspiring developers launch their careers in tech. In that
                same community, I was selected to present at the{' '}
                <span className="text-foreground">Heartland Developers Conference</span>
                {' '}— speaking on building React applications from scratch for the
                Silicon Prairie developer community.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right — Stats + Tools */}
          <motion.div
            className="space-y-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <motion.div className="grid grid-cols-2 gap-4" variants={stagger}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-6"
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="text-3xl font-bold text-primary mb-1"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Separator className="bg-border" />

            {/* Tools List */}
            <motion.div className="space-y-4" variants={stagger}>
              {tools.map((tool) => (
                <motion.div key={tool.category} className="flex gap-4" variants={fadeUp}>
                  <span className="text-primary font-mono text-xs tracking-wide uppercase w-24 shrink-0 pt-0.5">
                    {tool.category}
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {tool.items}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}