import React from 'react'

function CoilAndSheetBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950">
      {/* Overhead soft industrial light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Metallic sheet feed (subtle horizontal motion) */}
      <div className="absolute left-[-30vw] top-[58%] h-[34vh] w-[160vw] -rotate-[1.2deg] opacity-[0.95]">
        <div
          className="absolute inset-0 rounded-[8px]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #cfd4da 0%, #a2a9b1 10%, #e8edf1 22%, #a2a9b1 34%, #c5ccd3 50%, #9aa1a9 64%, #e5eaee 78%, #9aa1a9 90%, #cfd4da 100%)',
            backgroundSize: '180% 100%',
            filter: 'saturate(0.9) contrast(1.04)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -8px 24px rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.35)',
            animation: 'sheetFlow 28s linear infinite, specularSweep 12s linear infinite',
          }}
        />
        {/* Fine finish lines */}
        <div
          className="absolute inset-0 rounded-[8px] opacity-[0.38]"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 7px)',
            animation: 'sheetFlow 28s linear infinite',
          }}
        />
        {/* Soft top highlight */}
        <div
          className="absolute inset-0 rounded-[8px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 26%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.18) 100%)',
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Large cold-rolled steel coil with subtle rotation */}
      <div className="absolute right-[-14vw] top-[8vh] h-[72vh] w-[72vh]">
        <div
          className="absolute inset-0 rounded-full opacity-95"
          style={{
            background:
              'radial-gradient(closest-side, #dbe1e6 0%, #b8c0c8 22%, #9aa1a9 40%, #cfd6dc 58%, #9aa1a9 74%, #bfc6cd 88%, #eef2f5 100%)',
            filter: 'saturate(0.9) contrast(1.05)',
            animation: 'coilRotate 90s linear infinite',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -30px 60px rgba(0,0,0,0.35), 0 30px 80px rgba(0,0,0,0.45)',
          }}
        />
        {/* Coil slit lines (give sense of layers) */}
        <div
          className="absolute inset-0 rounded-full opacity-45"
          style={{
            background:
              'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 10px)',
            mixBlendMode: 'multiply',
            animation: 'coilRotate 90s linear infinite reverse',
          }}
        />
        {/* Inner shadow to suggest hollow core */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.28) 10%, rgba(0,0,0,0) 26%)',
            transform: 'scale(0.28)',
            filter: 'blur(0.2px)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Ambient depth haze */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 52% 62%, rgba(226,232,240,0.05) 0%, rgba(226,232,240,0.0) 70%)',
        }}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes sheetFlow { 0% { transform: translateX(0); } 100% { transform: translateX(-20vw); } }
        @keyframes specularSweep { 0% { background-position: 0% 0; } 100% { background-position: -180% 0; } }
        @keyframes coilRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
      `}</style>
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Clean, realistic cold-rolled steel visuals */}
      <CoilAndSheetBackground />

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

      {/* Subtle moving steel accent bar at bottom */}
      <div className="pointer-events-none relative z-10">
        <div className="absolute bottom-0 left-0 right-0 h-1.5 animate-pulse bg-gradient-to-r from-slate-200/20 via-slate-100/50 to-slate-200/20" />
      </div>
    </main>
  )
}

export default App
