import Link from "next/link"
import { ArrowUpRight, Palette, Code, Layers } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Branding Design",
    description: "A strong brand is more than just a logo—it's the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints",
    tags: ["Logo design", "Brand guideline", "Brand strategy", "+more"],
  },
  {
    icon: Code,
    title: "Framer Development",
    description: "Transforming designs into fully responsive, interactive websites with Framer. Whether it's a landing page or a full-scale web experience, I build fast, modern sites optimized for seamless performance",
    tags: ["Landing page", "Multipages", "Web migration", "+more"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Designing user-centered experiences that are both functional and visually engaging. From concept to final prototype, I focus on intuitive interfaces that enhance experiences and usability",
    tags: ["Web & app design", "Design system", "Prototyping", "+more"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Design solutions that elevate brands and create seamless user experiences. I help bring ideas to life with strategy and creativity
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-secondary/50 rounded-2xl p-8 border border-border hover:border-foreground/20 transition-colors"
            >
              <div className="bg-background rounded-xl p-3 w-fit mb-6">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                Start a Project
                <ArrowUpRight className="h-3 w-3" />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs text-muted-foreground bg-background px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
