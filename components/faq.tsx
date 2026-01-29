"use client"

import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "The timeline depends on the project's scope and complexity. Branding and UI/UX projects usually take 2–6 weeks, while Framer website development can range from 1–4 weeks. I'll provide a detailed timeline after the project brief",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! I include a set number of revisions in each project to ensure we achieve the perfect result. The exact number depends on the project scope and is outlined in the initial agreement.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "To get started, I typically need a clear understanding of your goals, target audience, and any existing brand materials. A brief call helps us align on expectations and gather all necessary information.",
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer: "Absolutely! I can work within your existing brand framework to create cohesive designs that align with your established identity while bringing fresh perspectives to enhance your visual presence.",
  },
  {
    question: "Do you provide post-project support?",
    answer: "Yes, I offer one month of free support after project delivery. This includes answering questions, making minor adjustments, and ensuring everything runs smoothly.",
  },
  {
    question: "What's the best way to reach you?",
    answer: "The best way to reach me is through the contact form on this website or by booking a call directly. I typically respond within 24-48 hours.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-8">
              Answers to common questions to help you understand the process and how we can work together
            </h2>
            <Link
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </Link>
            <p className="text-sm text-muted-foreground mt-4">I&apos;m here to help you</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
