export default function SpeakingSection() {
    return (
      <section id="speaking" className="py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
  
          {/* Section Label */}
          <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12">
            Speaking
          </p>
  
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
  
            {/* Left — Heading */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight sticky top-24"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                On The
                <br />
                <span className="text-primary">Stage.</span>
              </h2>
              <div className="mt-8 space-y-3">
                <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  Event
                </p>
                <p className="text-foreground font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
                  Heartland Developers Conference
                </p>
                <p className="text-muted-foreground text-sm">
                  Presented by AIM Institute — Omaha, NE
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                  AIM's annual Heartland Developers Conference has been delivering world-class
                  content to the Silicon Prairie developer community for over 15 years.
                </p>
              </div>
            </div>
  
            {/* Right — Video + Description */}
            <div className="space-y-8">
  
              {/* Video Embed */}
              <div className="relative w-full rounded-lg overflow-hidden border border-border"
                style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/OZxSWf9bYE4"
                  title="Building a React Application from Scratch — Heartland Developers Conference"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
  
              {/* Talk Details */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }