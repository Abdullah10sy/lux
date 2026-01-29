import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const works = [
  {
    title: "LumeX",
    category: "SaaS",
    type: "Dashboard Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Planza",
    category: "Framer",
    type: "Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Horizon Atlas",
    category: "Travel",
    type: "Web Design",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
  },
  {
    title: "NeuroSync",
    category: "Healthcare",
    type: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
  },
]

export function FeaturedWorks() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured works</h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All Works
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <Link
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-secondary aspect-[4/3]"
            >
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {work.category}
                  </span>
                  <span className="text-xs text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {work.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{work.title}</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-full p-2">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
