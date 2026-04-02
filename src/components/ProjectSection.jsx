import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        number: '01',
        title: 'PalmSHIELD Website',
        image: '/images/projects/palmshield.jpg',
        description:
            'Full custom WordPress build for an architectural products manufacturer. Includes custom Gutenberg blocks, ACF-powered product catalog, WooCommerce integration, mega menu plugin, and a color customization tool with canvas-based image download.',
        tags: ['WordPress', 'PHP', 'ACF Pro', 'WooCommerce', 'Gutenberg', 'JavaScript'],
        live: 'https://palmshieldlouvers.com/',
        featured: true,
    },
    {
        number: '02',
        title: "America's Gate Company",
        image: '/images/projects/agc.jpg',
        description:
            'Led full site migration and redesign for a commercial gate manufacturer. Built a CAD drawing grid block, custom redirect mapping for 1,200+ URLs, location-based filtering, and an interactive product selector UI with progressive disclosure states.',
        tags: ['WordPress', 'PHP', 'MySQL', 'React', 'Cloudflare', 'SEO'],
        live: 'standing-pepper.flywheelstaging.com',
        featured: true,
    },
    {
        number: '03',
        title: 'The Playground Store',
        image: '/images/projects/playground-store.jpg',
        description:
            'Custom Shopify build for a commercial and residential playground equipment retailer. Built a custom color selection tool allowing customers to visualize equipment in different color combinations, and an interactive playground budgeting tool to help buyers plan and estimate project costs. Features a large multi-category product catalog spanning age-segmented play systems, outdoor fitness, and site amenities.',
        tags: ['Shopify', 'E-Commerce', 'Liquid', 'JavaScript', 'CSS', 'Canvas API'],
        live: 'https://theplaygroundstore.com/',
        featured: false,
    },
    {
        number: '04',
        title: 'LaVigne Enterprises',
        image: '/images/projects/lavigne.jpg',
        description:
            'Fully custom WordPress website for a commercial property management company. Built custom property listing and property detail page templates from scratch, integrating third-party API services to dynamically fetch and display live property data. Incorporated React components within the WordPress theme for interactive listing filters and detail views.',
        tags: ['WordPress', 'ACF Pro', 'PHP', 'React', 'REST API', 'JavaScript'],
        live: 'https://lavigneenterprises.com/',
        featured: true,
    },
    {
        number: '05',
        title: 'Apple Mart — React Mock Site',
        image: '/images/projects/apple-mart.jpg',
        description:
            'A mock Apple-style e-commerce storefront built entirely in React. Demonstrates component architecture, state management, product listing and detail views, and cart functionality — styled to match the clean, minimal aesthetic of the Apple brand.',
        tags: ['React', 'JavaScript', 'CSS', 'Component Architecture', 'E-Commerce'],
        live: 'https://apple-mart-mock.netlify.app',
        featured: true,
    },
    {
        number: '06',
        title: 'Personal Portfolio',
        image: null,
        description:
            'This site! Built with Next.js App Router, React, Tailwind CSS, and shadcn/ui. Features a working contact form powered by a Node.js API route. Deployed on Vercel with automatic CI/CD from GitHub.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Vercel'],
        live: 'https://vanessa-portfolio-seven.vercel.app',
        featured: false,
    },
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-32 border-t border-border">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Label */}
                <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-12">
                    Projects
                </p>

                <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-16">
                    <div>
                        <h2
                            className="text-4xl md:text-5xl font-bold leading-tight sticky top-24"
                            style={{ fontFamily: 'var(--font-syne)' }}
                        >
                            Things I've
                            <br />
                            <span className="text-primary">Built.</span>
                        </h2>
                    </div>

                    {/* Project Cards */}
                    <div className="space-y-6">
                        {projects.map((project) => (
                            <Card
                                key={project.number}
                                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group p-8"
                            >
                                {/* Project Screenshot */}
                                {project.image ? (
                                    <div className="relative w-full h-48 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-muted flex items-center justify-center border-b border-border">
                                        <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                                            You're looking at it
                                        </span>
                                    </div>
                                )}
                                {/* Card Content */}
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="text-primary font-mono text-xs tracking-widest">
                                            {project.number}
                                        </span>
                                        {project.featured && (
                                            <span className="text-accent font-mono text-xs tracking-widest uppercase">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <h3
                                    className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-syne)' }}
                                >
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="border-border text-muted-foreground font-mono text-xs"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <Button
                                    asChild
                                    size="sm"
                                    variant="outline"
                                    className="border-border text-muted-foreground hover:border-primary hover:text-primary font-mono transition-colors"
                                >
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                        View Live →
                                    </Link>
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}