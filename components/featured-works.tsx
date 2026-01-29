"use client"

import Link from "next/link"

const works = [
  {
    title: "LumeX",
    tags: ["SaaS", "Dashboard Design"],
    description: "LumeX is a powerful SaaS platform designed to help businesses streamline data management and analytics",
    image: "https://framerusercontent.com/images/LumeX.jpg",
    gradient: "from-[#4F46E5] to-[#7C3AED]"
  },
  {
    title: "Planza",
    tags: ["Framer Website"],
    description: "Planza is a dynamic event planning platform that helps individuals and businesses organize memorable experiences",
    image: "https://framerusercontent.com/images/Planza.jpg",
    gradient: "from-[#F97316] to-[#EF4444]"
  },
  {
    title: "Horizon Atlas",
    tags: ["Travel", "Web Design"],
    description: "Horizon Atlas is a travel platform that curates personalized itineraries for modern explorers",
    image: "https://framerusercontent.com/images/Horizon.jpg",
    gradient: "from-[#10B981] to-[#059669]"
  },
  {
    title: "NeuroSync",
    tags: ["Healthcare", "Mobile App"],
    description: "NeuroSync is a healthcare mobile app that helps individuals monitor and manage neurological health",
    image: "https://framerusercontent.com/images/NeuroSync.jpg",
    gradient: "from-[#8B5CF6] to-[#6366F1]"
  }
]

export function FeaturedWorks() {
  return (
    <section id="works" className="py-20 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-white">Featured works</h2>
          <Link
            href="#"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm border border-white/20 px-4 py-2 rounded-full hover:border-white/40"
          >
            All Works
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work) => (
            <Link
              key={work.title}
              href="#"
              className="group block"
            >
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all">
                {/* Image */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${work.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                      <span className="text-white/90 text-xl font-medium">{work.title}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">{work.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-white/60 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
