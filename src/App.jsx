import React from 'react'

function CoilThroughRollersBackground() {
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

      {/* Feeding sheet path (from coil through rollers) */}
      <div className="absolute left-[-35vw] top-[56%] h-[28vh] w-[200vw] -rotate-[1.2deg] opacity-[0.96]">
        <div
          className="absolute inset-0 rounded-[8px]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #dadfe4 0%, #a9b0b8 12%, #eef2f5 24%, #a6adb5 36%, #cdd3d9 52%, #99a1a9 66%, #e8edf1 80%, #9aa1a9 92%, #cfd4da 100%)',
            backgroundSize: '180% 100%',
            filter: 'saturate(0.9) contrast(1.04)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -8px 24px rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.35)',
            animation: 'sheetFlow 26s linear infinite, specularSweep 12s linear infinite',
          }}
        />
        {/* Fine finish lines */}
        <div
          className="absolute inset-0 rounded-[8px] opacity-[0.35]"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 7px)',
            animation: 'sheetFlow 26s linear infinite',
          }}
        />
        {/* Soft top highlight */}
        <div
          className="absolute inset-0 rounded-[8px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 26%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.18) 100%)',
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Roller assembly */}
      <div className="absolute left-[34%] top-[46%] h-[24vh] w-[24vh] -translate-x-1/2 -translate-y-1/2">
        {/* Upper Roller */}
        <div className="absolute left-1/2 top-0 h-[24vh] w-[24vh] -translate-x-1/2 -translate-y-[44%]">
          <Roller />
        </div>
        {/* Lower Roller */}
        <div className="absolute left-1/2 bottom-0 h-[24vh] w-[24vh] -translate-x-1/2 translate-y-[44%]">
          <Roller reverse />
        </div>
        {/* Throat shadow between rollers */}
        <div
          className="absolute left-1/2 top-1/2 h-6 w-[40vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(60% 120% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 80%)',
            filter: 'blur(6px)',
          }}
        />
      </div>

      {/* Large cold-rolled steel coil (feeder) */}
      <div className="absolute left-[-10vw] top-[18vh] h-[72vh] w-[72vh]">
        <div
          className="absolute inset-0 rounded-full opacity-95"
          style={{
            background:
              'radial-gradient(closest-side, #e3e8ed 0%, #b7c0c8 22%, #96a0a8 40%, #cbd2d8 58%, #99a1a9 74%, #bfc6cd 88%, #eff3f6 100%)',
            filter: 'saturate(0.9) contrast(1.05)',
            animation: 'coilRotate 70s linear infinite',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -30px 60px rgba(0,0,0,0.35), 0 30px 80px rgba(0,0,0,0.45)',
          }}
        />
        {/* Coil slit lines (layering) */}
        <div
          className="absolute inset-0 rounded-full opacity-45"
          style={{
            background:
              'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 10px)',
            mixBlendMode: 'multiply',
            animation: 'coilRotate 70s linear infinite reverse',
          }}
        />
        {/* Hollow core */}
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
        @keyframes sheetFlow { 0% { transform: translateX(0); } 100% { transform: translateX(-22vw); } }
        @keyframes specularSweep { 0% { background-position: 0% 0; } 100% { background-position: -180% 0; } }
        @keyframes coilRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes rollerRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

function Roller({ reverse = false }) {
  return (
    <div className="relative h-full w-full">
      {/* Roller body */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, #bfc6cd 0%, #9aa1a9 45%, #cfd6dc 70%, #a3abb3 85%, #e6ebef 100%)',
          boxShadow:
            'inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -10px 30px rgba(0,0,0,0.35), 0 20px 60px rgba(0,0,0,0.35)',
          animation: `rollerRotate 6s linear infinite ${reverse ? 'reverse' : ''}`,
          filter: 'saturate(0.9) contrast(1.05)',
        }}
      />
      {/* Machining grooves */}
      <div
        className="absolute inset-0 rounded-full opacity-50"
        style={{
          background:
            'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 2px, rgba(255,255,255,0) 3px, rgba(255,255,255,0) 10px)',
          mixBlendMode: 'multiply',
          animation: `rollerRotate 6s linear infinite ${reverse ? '' : 'reverse'}`,
        }}
      />
      {/* Axle cap */}
      <div
        className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #f5f8fb 0%, #c9d0d6 35%, #8f98a1 70%)',
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.4)',
        }}
      />
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Realistic coil feeding through rollers (no sparks) */}
      <CoilThroughRollersBackground />

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
            <li className="flex items-start gap-2 rounded-md bg-slate-900/50 p-3 ring-1 inset-0 ring-slate-700/50 sm:col-span-2">
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
