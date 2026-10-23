'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Director of Web Development & Digital Strategy',
    company: 'PalmSHIELD / America\'s Gate Company / LaVigne Enterprises / Patriot Custom Metals',
    period: 'March 2025 — Present',
    description:
      'Promoted to director-level role overseeing web development and digital marketing strategy across four sister companies under unified ownership. Lead the full lifecycle of technical development while driving digital strategy to achieve measurable business growth.\n\nLed development and modernization of company websites, including full rebuilds of PalmSHIELD and America’s Gate Company. Unified SEO, Google Ads, social media, and content strategy around shared keyword targets to create a cohesive, performance-driven system.\n\nThis alignment drove measurable growth:\n- +316% increase in organic clicks (5,070 → 21,100+)\n- +336% increase in search impressions (374K → 1.63M+)\n- Improved average search ranking from 30.2 to 21.6\n\n• Architect and maintain custom WordPress solutions — themes, plugins, Gutenberg blocks, and ACF Pro — with React.js, PHP, JavaScript (ES6+), HTML5, CSS3/SASS, and MySQL\n• Build responsive front-end systems with React.js, Next.js, Tailwind CSS, and Bootstrap; implement build pipelines with npm and webpack\n• Drive company-wide digital strategy across SEO, PPC, content marketing, and email, turning performance metrics into actionable initiatives\n• Lead technical SEO audits, structured data, and performance optimization to improve organic visibility and site speed\n• Manage Google Analytics, SEMrush, and Google Ads; guide A/B testing and conversion rate optimization\n• Oversee Git workflows and deployments on Flywheel and WP Engine across multiple commercial brands',
    tags: ['WordPress', 'React.js', 'Next.js', 'PHP', 'JavaScript', 'MySQL', 'Tailwind CSS', 'ACF Pro', 'SEO', 'Google Ads', 'SEMrush', 'Google Analytics', 'Git', 'Flywheel', 'WP Engine'],
  },
  {
    title: 'Front End Web Developer',
    company: 'PalmSHIELD / America\'s Gate Company / LaVigne Enterprises / Patriot Custom Metals',
    period: 'August 2022 — March 2025',
    description:
      'Developed and maintained WordPress websites and applications for commercial brands specializing in fencing, architectural screening, and gate automation systems.\n\n• Built custom WordPress themes and plugins with PHP, JavaScript, React.js, HTML5, and CSS3/SASS for responsive, user-focused designs\n• Implemented WooCommerce solutions with custom product catalog integrations and variant gallery systems for industrial product lines\n• Developed custom Gutenberg blocks, mega menu systems, and advanced ACF Pro integrations\n• Optimized performance through SEO best practices, technical audits, and speed work that improved organic search rankings\n• Collaborated with marketing and design to keep UI/UX brand-consistent across multiple web properties\n• Maintained Git workflows and managed deployments to production hosting environments',
    tags: ['WordPress', 'PHP', 'JavaScript', 'React.js', 'HTML5', 'CSS3/SASS', 'WooCommerce', 'Gutenberg', 'ACF Pro', 'SEO', 'Git'],
  },
  {
    title: 'FreelanceWeb Developer',
    company: 'Lemon Fresh Day',
    period: 'October 2022 — January 2023',
    description:
      'Modernized an outdated WordPress website with security updates, theme enhancements, and e-commerce functionality to improve user experience and enable online transactions.',
    tags: ['WordPress', 'E-commerce', 'Security', 'Theme Development'],
  },
  {
    title: 'Code School Instructor Manager & Full-Stack Curriculum Developer',
    company: 'AIM Institute',
    period: 'January 2020 — July 2022',
    description:
      'Managed full-time, part-time, and contract instructors — including hiring, scheduling, performance tracking, and communication — while designing and delivering full-stack curricula for career-changers.\n\n• Built curricula for Front-End Foundations, JavaScript Full-Stack, and Java Full-Stack covering HTML5, CSS3, JavaScript, React.js, Node.js, Vue.js, MySQL, and RESTful APIs\n• Instructed students with no technical background through hands-on bootcamps, from fundamentals to deployment-ready apps\n• Presented a ReactJS workshop at Heartland Developer Conference 2020 on building and deploying a todo-list application',
    tags: ['JavaScript', 'React.js', 'Node.js', 'Vue.js', 'HTML5', 'CSS3', 'MySQL', 'RESTful APIs', 'Curriculum Development', 'Team Management'],
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

                <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
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