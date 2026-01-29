import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
          Luzia - Portfolio Template
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight text-balance">
          Abuu is solving problems through strategic design and compelling visuals
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A designer focused on creating meaningful digital experiences that connect brands with their audiences through thoughtful design and innovation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#works"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            View Works
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
