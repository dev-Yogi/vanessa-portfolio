import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Director of Web Development & Digital Strategy',
    company: 'PalmSHIELD / AGC / Patriot Custom Metals / LaVigne Enterprises',
    period: '2019 — Present',
    description:
      'Leading all web development and digital strategy across four sister brands under unified ownership. Building and maintaining custom WordPress themes, plugins, and Gutenberg blocks. Architecting WooCommerce solutions, managing Cloudflare infrastructure, and driving SEO strategy across multiple product lines.',
    tags: ['WordPress', 'PHP', 'React', 'JavaScript', 'WooCommerce', 'ACF Pro', 'Shopify', 'Liquid', 'Cloudflare', 'SEO'],
  },
  {
    title: 'Code School Instructor Manager',
    company: 'AIM Institute',
    period: '2017 — 2019',
    description:
      'Managed a team of instructors delivering full-stack web development curriculum. Facilitated hands-on coding education for career-changers entering the tech industry. Oversaw curriculum development and student progress across multiple cohorts.',
    tags: ['JavaScript', 'HTML/CSS', 'Java', 'Spring Boot', 'MySQL', 'Vue.js', 'Curriculum Development', 'Team Management'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Label */}
        <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12">
          Experience
        </p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16">

          {/* Left — Heading */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight sticky top-24"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Where I've
              <br />
              <span className="text-primary">Worked.</span>
            </h2>
          </div>

          {/* Right — Timeline */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-16 last:pb-0">

                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border last:hidden" />

                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />

                {/* Period */}
                <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">
                  {exp.period}
                </p>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-foreground mb-1"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {exp.title}
                </h3>

                {/* Company */}
                <p className="text-muted-foreground font-mono text-sm mb-4">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tags */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}