import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

const skills = [
  'Next.js', 'React', 'JavaScript', 'Tailwind CSS',
  'WordPress', 'PHP', 'WooCommerce', 'Node.js',
  'ACF Pro', 'Cloudflare', 'MySQL', 'Gutenberg'
]

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Left — Text */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
                Full Stack Developer
              </p>
              <span className="text-border font-mono">—</span>
              <p className="text-accent font-mono text-sm tracking-[0.2em] uppercase">
                Conference Speaker
              </p>
            </div>

            {/* Headline */}
            <h1
              className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              <span className="text-foreground">Vanessa</span>
              <br />
              <span className="text-foreground">Kasun</span>
              <span className="text-primary">.</span>
            </h1>

            {/* Subheading */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              I build fast, accessible, and visually sharp web applications.
              Specializing in{' '}
              <span className="text-foreground font-medium">React & Next.js</span>
              {' '}on the frontend and{' '}
              <span className="text-foreground font-medium">WordPress ecosystems</span>
              {' '}for enterprise-scale sites.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted font-mono tracking-wide"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Skills */}
            <div>
              <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="hidden md:block">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 translate-x-3 translate-y-3" />
              {/* Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/vanessa.jpeg"
                  alt="Vanessa Kasun"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}