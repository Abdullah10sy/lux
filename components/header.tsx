"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="mx-auto max-w-[1200px] flex items-center justify-between bg-[#1f1f1f] rounded-full px-2 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold text-sm">A</span>
          </div>
          <span className="text-white font-medium hidden sm:inline text-sm">Luzia - Portfolio Template</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-white/70 hover:text-white transition-colors text-sm">
            Home
          </Link>
          <Link href="#works" className="px-4 py-2 text-white/70 hover:text-white transition-colors text-sm">
            Works
          </Link>
          <Link href="#about" className="px-4 py-2 text-white/70 hover:text-white transition-colors text-sm">
            About
          </Link>
          <Link href="#contact" className="px-4 py-2 text-white/70 hover:text-white transition-colors text-sm">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Book a Call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-[1200px] bg-[#1f1f1f] rounded-2xl p-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="px-4 py-3 text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="#works" className="px-4 py-3 text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Works
            </Link>
            <Link href="#about" className="px-4 py-3 text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="#contact" className="px-4 py-3 text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm font-medium mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
