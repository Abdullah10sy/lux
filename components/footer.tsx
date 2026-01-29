import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
            Book a call, and I&apos;ll take care of the rest
          </h2>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-4 text-sm font-medium hover:bg-background/90 transition-colors"
          >
            Book a Call
          </Link>
        </div>

        <div className="border-t border-background/20 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link href="#works" className="text-sm text-background/70 hover:text-background transition-colors">
                Works
              </Link>
              <Link href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>&copy; abusyd@2025 All rights reserved</p>
            <p>Created by abuu syd</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
