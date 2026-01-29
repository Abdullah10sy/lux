export function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Award Badge */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-1">Awwwards Nominee</h3>
                <p className="text-white/60 text-sm leading-relaxed">Recognized for excellence in web design and innovative digital experiences.</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
            <p className="text-white/80 text-base mb-6 leading-relaxed">
              {"Carter's design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart"}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <span className="text-white font-medium text-sm">S</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Samantha</p>
                <p className="text-white/50 text-xs">Founder at NexaTech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
            <p className="text-4xl md:text-5xl font-semibold text-white mb-1">10+</p>
            <p className="text-white/60 text-sm">happy clients</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
            <p className="text-4xl md:text-5xl font-semibold text-white mb-1">5+</p>
            <p className="text-white/60 text-sm">years of experiences</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
            <p className="text-4xl md:text-5xl font-semibold text-white mb-1">20+</p>
            <p className="text-white/60 text-sm">projects completed</p>
          </div>
        </div>

        {/* Trusted By */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/50 text-sm font-medium">{i}</span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm">Trusted by many</p>
          </div>
        </div>
      </div>
    </section>
  )
}
