import React from 'react'

function ColdRolledSteelBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950">
      {/* Overhead industrial light glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2" style={{
        background: 'radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.0) 70%)'
      }} />

      {/* Moving steel sheet (primary) */}
      <div className="absolute -left-1/2 top-1/3 h-[46vh] w-[200vw] -rotate-1">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #cfd4da 0%, #9aa1a9 10%, #e6eaee 20%, #9aa1a9 32%, #c2c9d1 48%, #9aa1a9 62%, #e6eaee 78%, #9aa1a9 90%, #cfd4da 100%)',
            backgroundSize: '200% 100%',
            filter: 'saturate(0.9) contrast(1.05)',
            animation: 'roll 12s linear infinite'
          }}
        />
        {/* Fine finish lines */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 6px)',
            animation: 'roll 12s linear infinite'
          }}
        />
        {/* Soft highlight band */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 2%, rgba(255,255,255,0.05) 28%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.12) 100%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Secondary sheet for depth */}
      <div className="absolute -right-1/2 top-[58%] h-[38vh] w-[200vw] -rotate-2 opacity-80">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #bfc6cd 0%, #8f969e 12%, #dfe4e8 24%, #8f969e 36%, #b3bac2 50%, #8f969e 64%, #dfe4e8 80%, #8f969e 90%, #bfc6cd 100%)',
            backgroundSize: '200% 100%',
            filter: 'saturate(0.9) contrast(1.05)',
            animation: 'roll 18s linear infinite'
          }}
        />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 7px)',
            animation: 'roll 18s linear infinite'
          }}
        />
      </div>

      {/* Ambient mist for depth */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(50% 40% at 50% 60%, rgba(226,232,240,0.06) 0%, rgba(226,232,240,0.0) 70%)'
      }} />

      {/* Keyframes for rolling motion */}
      <style>{`
        @keyframes roll {
          0% { background-position: 0% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Realistic cold rolled steel background replacing gear imagery */}
      <ColdRolledSteelBackground />

      {/* Subtle dark overlay for contrast + soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_40%,#000_60%,transparent_100%)]" />

      {/* Hero Content */}
      <section className="relative z-10 mx-auto flex h-screen max-w-7xl items-center px-6 md:px-10">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-1.5 backdrop-blur">
            <span className="text-base">🏆</span>
            <span className="text-sm font-medium tracking-wide text-slate-200">Trusted by Manufacturers & Builders Across India</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
            Precision Metal Fabrication Built for Industrial Excellence
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-base leading-relaxed text-slate-200/90 md:text-lg">
            ISO-certified fabrication delivering high-performance cold roll steel components with guaranteed quality and reliability.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-amber-400 to-amber-600 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_20px_-10px_rgba(245,158,11,0.8)] transition hover:from-amber-300 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <span className="mr-2 text-base">🔧</span> Get a Quote
            </a>
            <a
              href="#expert"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
            >
              <span className="mr-2 text-base">📞</span> Speak with an Expert
            </a>
          </div>

          {/* Trust Indicators */}
          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-slate-200/90 sm:grid-cols-2">
            <li className="flex items-start gap-2 rounded-md bg-slate-900/50 p-3 ring-1 ring-inset ring-slate-700/50">
              <span className="text-lg">✅</span>
              <span className="text-sm md:text-base">Mill Test Certificates Provided</span>
            </li>
            <li className="flex items-start gap-2 rounded-md bg-slate-900/50 p-3 ring-1 ring-inset ring-slate-700/50">
              <span className="text-lg">⚙️</span>
              <span className="text-sm md:text-base">72-Hour Dispatch Guarantee</span>
            </li>
            <li className="flex items-start gap-2 rounded-md bg-slate-900/50 p-3 ring-1 ring-inset ring-slate-700/50 sm:col-span-2">
              <span className="text-lg">🚛</span>
              <span className="text-sm md:text-base">Pan-India Distribution Network</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Subtle moving steel accent bar at bottom to hint processing motion */}
      <div className="pointer-events-none relative z-10">
        <div className="absolute bottom-0 left-0 right-0 h-1.5 animate-pulse bg-gradient-to-r from-slate-200/20 via-slate-100/50 to-slate-200/20" />
      </div>
    </main>
  )
}

export default App
