"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "The timeline depends on the project's scope and complexity. Branding and UI/UX projects usually take 2–6 weeks, while Framer website development can range from 1–4 weeks. I'll provide a detailed timeline after the project brief"
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, I include a set number of revision rounds in every project to ensure the final result meets your expectations. The exact number depends on the project scope and is defined in the project brief."
  },
  {
    question: "What do you need from me to get started?",
    answer: "To get started, I'll need a clear understanding of your goals, any existing brand assets, and examples of designs you like. A brief call to discuss your vision helps set the foundation for a successful project."
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer: "Absolutely! I can work within your existing brand guidelines to ensure consistency across all deliverables. If needed, I can also help refine or expand your guidelines."
  },
  {
    question: "Do you provide post-project support?",
    answer: "Yes, I offer one month of free support after project delivery. This includes answering questions, making minor adjustments, and ensuring everything runs smoothly."
  },
  {
    question: "What's the best way to reach you?",
    answer: "The best way to reach me is through email or by booking a call directly through my website. I typically respond within 24-48 hours on business days."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Header */}
          <div>
            <p className="text-white/50 text-sm mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-6">
              Answers to common questions to help you understand
              <span className="text-white/50"> the process and how we can work together</span>
            </h2>
            <Link
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Email Me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <p className="text-white/40 text-sm mt-4">{"I'm here to help you"}</p>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
