import { Award, Quote } from "lucide-react"

export function Stats() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Award Card */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Award className="h-5 w-5 text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-foreground">Awwwards Nominee</span>
            </div>
            <p className="text-muted-foreground">
              Recognized for excellence in web design and innovative digital experiences.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
            <p className="text-foreground mb-6 leading-relaxed">
              Carter&apos;s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-sm font-medium">S</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Samantha</p>
                <p className="text-xs text-muted-foreground">Founder at NexaTech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground">10+</p>
            <p className="text-sm text-muted-foreground mt-2">happy clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground">5+</p>
            <p className="text-sm text-muted-foreground mt-2">years of experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground">20+</p>
            <p className="text-sm text-muted-foreground mt-2">projects completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground mt-2">trusted by many</p>
          </div>
        </div>
      </div>
    </section>
  )
}
