'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const articles = [
  {
    publication: 'AIM Institute',
    date: 'September 4, 2020',
    title: 'AIM Code School Instructor Vanessa Kasun Champions the Transformational Power of Coding',
    description:
      'A feature profile on my journey from single mother and first-generation college student to professional developer and coding instructor — and my breakout session at the Heartland Developers Conference on building React apps from scratch.',
    url: 'https://aiminstitute.org/aim-code-school-instructor-vanessa-kasun-champions-the-transformational-power-of-coding/',
    label: 'Read Article →',
  },
  {
    publication: 'Silicon Prairie News',
    date: 'August 17, 2021',
    title: "Web Development Skills in Tow, Students Graduate from North Omaha's Highlander Code Camp",
    description:
      'Coverage of the Highlander Code Camp graduation — a six-week coding program I helped deliver through AIM Institute and Seventy Five North, bringing web development education to high school students in North Omaha.',
    url: 'https://siliconprairienews.com/2021/08/web-developmen-skills-in-tow-students-graduate-from-north-omahas-highlander-code-camp/',
    label: 'Read Article →',
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

export default function PressSection() {
  return (
    <section id="press" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        <motion.p
          className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Press & Features
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
              Featured
              <br />
              <span className="text-primary">In.</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-6 leading-relaxed text-sm"
              variants={fadeUp}
            >
              Coverage from outlets covering the Omaha tech and Silicon Prairie developer community.
            </motion.p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {articles.map((article) => (
              <motion.div
                key={article.url}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-mono text-xs tracking-widest uppercase">
                      {article.publication}
                    </span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {article.date}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {article.description}
                  </p>
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-mono text-sm hover:underline underline-offset-4 transition-all"
                  >
                    {article.label}
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}