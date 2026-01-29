import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Profile Badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-[#2a2a2a] overflow-hidden flex items-center justify-center">
            <span className="text-white font-semibold">A</span>
          </div>
          <div>
            <p className="text-white/70 text-sm">Michael Carter, Digital Product Designer</p>
            <p className="text-white/50 text-sm">2 projects left in April</p>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] max-w-4xl mb-6">
          Abuu is solving problems through strategic design and compelling visuals
        </h1>

        {/* Description */}
        <p className="text-white/60 text-lg max-w-2xl mb-8 leading-relaxed">
          As a digital product designer with a strong focus on visual design and Framer websites, he collaborates closely with teams to craft seamless, user-centered experiences. A reliable partner in bringing ideas to life
        </p>

        {/* CTA Button */}
        <Link
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
        >
          Email Me
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}
