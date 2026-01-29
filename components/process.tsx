const steps = [
  {
    number: "1",
    title: "Book a Call",
    description: "Let's start with a conversation! We'll discuss your goals, ideas, and how I can help bring them to life. This is where we align expectations and ensure a great fit"
  },
  {
    number: "2",
    title: "Project Brief",
    description: "Once we're on the same page, we'll define the project scope, timeline, and deliverables. A structured brief ensures a smooth and efficient process"
  },
  {
    number: "3",
    title: "Develop",
    description: "This is where the magic happens! I'll craft thoughtful designs and refine them based on feedback, ensuring the final outcome meets your vision and goals"
  },
  {
    number: "4",
    title: "Deliver",
    description: "The final product is polished and ready to go. Whether it's a brand identity, UI/UX design, or a Framer website, you'll receive all the necessary files and guidance for a seamless handoff"
  },
  {
    number: "5",
    title: "Support",
    description: "Enjoy one month of free support after project delivery. I'll be available to answer questions, make minor adjustments, and ensure everything runs smoothly"
  }
]

export function Process() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Decorative Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Section Label */}
        <p className="text-white/50 text-sm text-center mb-4">How it works</p>

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-medium text-white text-center max-w-3xl mx-auto mb-4 leading-tight">
          A simple and efficient workflow to bring your vision to life.
        </h2>
        <p className="text-white/50 text-center max-w-2xl mx-auto mb-16">
          From the first call to final delivery, every step is designed for clarity and efficiency.
        </p>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
