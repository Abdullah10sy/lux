import Link from "next/link"

const services = [
  {
    title: "Branding Design",
    description: "A strong brand is more than just a logo—it's the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints",
    features: ["Logo design", "Brand guideline", "Brand strategy", "+more"],
    gradient: "from-[#F59E0B] to-[#D97706]"
  },
  {
    title: "Framer Development",
    description: "Transforming designs into fully responsive, interactive websites with Framer. Whether it's a landing page or a full-scale web experience, I build fast, modern sites optimized for seamless performance",
    features: ["Landing page", "Multipages", "Web migration", "+more"],
    gradient: "from-[#3B82F6] to-[#1D4ED8]"
  },
  {
    title: "UI/UX Design",
    description: "Designing user-centered experiences that are both functional and visually engaging. From concept to final prototype, I focus on intuitive interfaces that enhance experiences and usability",
    features: ["Web & app design", "Design system", "Prototyping", "+more"],
    gradient: "from-[#10B981] to-[#059669]"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Label */}
        <p className="text-white/50 text-sm mb-4">Services</p>

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-medium text-white max-w-3xl mb-12 leading-tight">
          Design solutions that elevate brands and create seamless user experiences.
          <span className="text-white/50"> I help bring ideas to life with strategy and creativity</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 flex flex-col hover:border-white/10 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">{service.title}</h3>
                <Link
                  href="#contact"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Start a Project
                </Link>
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Preview Image */}
              <div className={`bg-gradient-to-br ${service.gradient} aspect-[4/3] rounded-xl mb-6 flex items-center justify-center overflow-hidden`}>
                <div className="w-[85%] h-[85%] bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-xl" />
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-white/60 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
