const steps = [
  {
    number: "1",
    title: "Book a Call",
    description: "Let's start with a conversation! We'll discuss your goals, ideas, and how I can help bring them to life. This is where we align expectations and ensure a great fit",
  },
  {
    number: "2",
    title: "Project Brief",
    description: "Once we're on the same page, we'll define the project scope, timeline, and deliverables. A structured brief ensures a smooth and efficient process",
  },
  {
    number: "3",
    title: "Develop",
    description: "This is where the magic happens! I'll craft thoughtful designs and refine them based on feedback, ensuring the final outcome meets your vision and goals",
  },
  {
    number: "4",
    title: "Deliver",
    description: "The final product is polished and ready to go. Whether it's a brand identity, UI/UX design, or a Framer website, you'll receive all the necessary files and guidance for a seamless handoff",
  },
  {
    number: "5",
    title: "Support",
    description: "Enjoy one month of free support after project delivery. I'll be available to answer questions, make minor adjustments, and ensure everything runs smoothly",
  },
]

export function Process() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            A simple and efficient workflow to bring your vision to life. From the first call to final delivery, every step is designed for clarity and efficiency.
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 items-start bg-background rounded-2xl p-6 md:p-8 border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-semibold">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
