import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/dev-Yogi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12 items-start mb-12">

          {/* Brand */}
          <div>
            <div className="text-lg font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
              <span className="text-primary">V</span>
              <span className="text-foreground">K</span>
              <span className="text-muted-foreground text-sm font-normal ml-2 font-mono">dev</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full Stack Developer based in Omaha, NE. Building fast, accessible,
              and visually sharp web experiences.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-mono text-xs">
            © {new Date().getFullYear()} Vanessa Kasun. All rights reserved.
          </p>
          <p className="text-muted-foreground font-mono text-xs">
            Built with{' '}
            <span className="text-primary">Next.js</span>
            {' '}·{' '}
            <span className="text-primary">React</span>
            {' '}·{' '}
            <span className="text-primary">Tailwind CSS</span>
            {' '}·{' '}
            <span className="text-primary">shadcn/ui</span>
          </p>
        </div>

      </div>
    </footer>
  )
}