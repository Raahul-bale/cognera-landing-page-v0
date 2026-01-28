export default function ValueProposition({ title, items }) {
  const defaultItems = [
    '1. Data Foundation: We capture precise time and access logs.',
    '2. Insights Engine: We calculate Flow State Duration and Distraction Scores.',
    '3. Action Framework: We enable real-time coaching and workflow optimization.'
  ]

  const displayItems = items || defaultItems

  const getIcon = (index) => {
    switch(index) {
      case 0:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        )
      case 1:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      case 2:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      default:
        return null
    }
  }

  const getGradient = (index) => {
    switch(index) {
      case 0:
        return 'from-slate-600/20 to-slate-700/20'
      case 1:
        return 'from-indigo-600/20 to-indigo-700/20'
      case 2:
        return 'from-blue-600/20 to-blue-700/20'
      default:
        return 'from-slate-600/20 to-slate-700/20'
    }
  }

  const getIconColor = (index) => {
    switch(index) {
      case 0:
        return 'text-blue-400'
      case 1:
        return 'text-indigo-400'
      case 2:
        return 'text-blue-400'
      default:
        return 'text-slate-400'
    }
  }

  return (
    <section className="value-proposition max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6 relative z-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 font-bold text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        {title || 'The Three-Layered Approach'}
      </h2>
      <div className="space-y-4 sm:space-y-5">
        {displayItems.map((item, index) => {
          const parts = item.split(':')
          const label = parts[0]
          const description = parts.slice(1).join(':').trim()
          
          return (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${getGradient(index)} rounded-xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${getGradient(index)} border border-white/10 flex items-center justify-center ${getIconColor(index)} group-hover:scale-110 transition-transform`}>
                  {getIcon(index)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {label}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-white/80 group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
