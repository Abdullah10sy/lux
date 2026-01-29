import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* CTA Section */}
        <div className="bg-[#1a1a1a] rounded-3xl p-12 text-center mb-12 border border-white/5">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
            Book a call,
            <span className="text-white/50"> and I{"'"}ll take care of the rest</span>
          </h2>

          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors text-lg"
          >
            Book a Call
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link href="#works" className="text-white/60 hover:text-white transition-colors text-sm">
              Works
            </Link>
            <Link href="#about" className="text-white/60 hover:text-white transition-colors text-sm">
              About
            </Link>
            <Link href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Github
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Instagram
            </Link>
            <Link
              href="https://contra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Contra
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            ©abusyd@2025 All right reserved
          </p>
          <p className="text-white/40 text-sm">
            Created by abuu syd
          </p>
        </div>
      </div>
    </footer>
  )
}
