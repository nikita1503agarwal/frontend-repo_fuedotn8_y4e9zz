import React from 'react'

// Rebuilt from scratch: clean, performant two-scene hero with a calm industrial vibe
// Scene A: Coil feeding through rollers (fabrication)
// Scene B: Coil secured on a flatbed (delivery)
// Smooth crossfade between scenes, reduced motion friendly

function Background() {
  const CYCLE = 20000 // ms
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Warm overhead glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
           style={{
             background:
               'radial-gradient(80% 60% at 50% 0%, rgba(255,210,150,0.16) 0%, rgba(255,210,150,0.10) 40%, rgba(0,0,0,0) 80%)'
           }}
      />

      {/* Scene A: Fabrication */}
      <div className="absolute inset-0" style={{ animation: `sceneAFade ${CYCLE}ms ease-in-out infinite` }}>
        <FabricationScene />
      </div>

      {/* Scene B: Delivery */}
      <div className="absolute inset-0" style={{ animation: `sceneBFade ${CYCLE}ms ease-in-out infinite` }}>
        <DeliveryScene />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0"
           style={{ background: 'radial-gradient(65% 55% at 50% 45%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.6) 100%)' }} />

      <style>{`
        /* Crossfade: A holds 0-45%, blend 45-55%, B holds 55-100% */
        @keyframes sceneAFade { 0%, 45% { opacity: 1 } 55%, 100% { opacity: 0 } }
        @keyframes sceneBFade { 0%, 45% { opacity: 0 } 55%, 100% { opacity: 1 } }

        /* Fabrication sheet flow */
        @keyframes sheetFlow { 0% { transform: translateX(0) } 100% { transform: translateX(-25vw) } }
        @keyframes rollerSpin { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
        @keyframes coilSlow { 0% { transform: rotate(0deg) } 100% { transform: rotate(-360deg) } }

        /* Road motion & wheels */
        @keyframes roadSlide { 0% { transform: translateX(0) } 100% { transform: translateX(-28vw) } }
        @keyframes wheelSpin { 0% { transform: rotate(0deg) } 100% { transform: rotate(-360deg) } }

        /* Reduced motion: freeze animations but keep layout */
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>
    </div>
  )
}

function FabricationScene() {
  return (
    <div className="absolute inset-0">
      {/* Sheet path */}
      <div className="absolute left-[-32vw] top-[58%] h-[26vh] w-[180vw] -rotate-[1.2deg] opacity-[0.95]">
        <div className="absolute inset-0 rounded-[10px]"
             style={{
               backgroundImage:
                 'linear-gradient(90deg, #dce2e7 0%, #b1bac3 12%, #eef3f7 24%, #a6afb7 36%, #cfd6dc 52%, #9aa3ab 66%, #e8edf1 80%, #9aa1a9 92%, #cfd4da 100%)',
               backgroundSize: '170% 100%',
               boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -8px 24px rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.35)',
               filter: 'saturate(0.9) contrast(1.04)',
               animation: 'sheetFlow 28s linear infinite'
             }}
        />
        <div className="absolute inset-0 rounded-[10px] opacity-30"
             style={{ background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 2px, rgba(0,0,0,0) 2px 8px)', animation: 'sheetFlow 28s linear infinite' }}
        />
      </div>

      {/* Dual rollers */}
      <div className="absolute left-[36%] top-[48%] h-[22vh] w-[22vh] -translate-x-1/2 -translate-y-1/2">
        <Roller size="22vh" duration="12s" />
        <Roller size="22vh" duration="12s" reverse bottom />
        {/* Throat shadow */}
        <div className="absolute left-1/2 top-1/2 h-5 w-[40vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
             style={{ background: 'radial-gradient(60% 120% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 80%)', filter: 'blur(6px)' }} />
      </div>

      {/* Coil feeding in */}
      <div className="absolute left-[-10vw] top-[18vh] h-[64vh] w-[64vh]">
        <div className="absolute inset-0 rounded-full opacity-95"
             style={{
               background: 'radial-gradient(closest-side, #e3e8ed 0%, #b7c0c8 22%, #96a0a8 40%, #cbd2d8 58%, #99a1a9 74%, #bfc6cd 88%, #eff3f6 100%)',
               boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -26px 50px rgba(0,0,0,0.35), 0 26px 70px rgba(0,0,0,0.45)',
               filter: 'saturate(0.9) contrast(1.05)',
               animation: 'coilSlow 80s linear infinite'
             }}
        />
        <div className="absolute inset-0 rounded-full opacity-45"
             style={{ background: 'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 10px)', mixBlendMode: 'multiply', animation: 'coilSlow 80s linear infinite reverse' }}
        />
      </div>
    </div>
  )
}

function DeliveryScene() {
  return (
    <div className="absolute inset-0">
      {/* Road layer */}
      <div className="absolute left-0 right-0 bottom-[18%] h-[12vh] opacity-50">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)' }} />
        <div className="absolute inset-0"
             style={{ background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 10px, rgba(255,255,255,0.0) 10px 90px)', mixBlendMode: 'screen', animation: 'roadSlide 16s linear infinite' }} />
      </div>

      {/* Truck silhouette */}
      <div className="absolute left-[58%] top-[54%] h-[32vh] w-[64vw] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute bottom-0 left-0 right-0 h-[6vh] rounded-[10px]"
             style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.6))', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }} />
        <div className="absolute bottom-[6vh] left-[4vw] h-[11vh] w-[16vw]"
             style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.65))', clipPath: 'polygon(0% 100%, 0% 22%, 22% 0%, 90% 0%, 100% 20%, 100% 100%)', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }} />

        {/* Wheels */}
        <Wheel className="left-[10vw]" duration="12s" />
        <Wheel className="left-[28vw]" duration="12s" />
        <Wheel className="left-[46vw]" duration="12s" />

        {/* Coil cargo */}
        <div className="absolute bottom-[6vh] left-[34vw] h-[26vh] w-[26vh]">
          <div className="absolute inset-0 rounded-full opacity-95"
               style={{ background: 'radial-gradient(closest-side, #e3e8ed 0%, #b7c0c8 22%, #96a0a8 40%, #cbd2d8 58%, #99a1a9 74%, #bfc6cd 88%, #eff3f6 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -18px 40px rgba(0,0,0,0.35), 0 20px 60px rgba(0,0,0,0.45)' }} />
          <div className="absolute inset-0 rounded-full opacity-45"
               style={{ background: 'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 10px)', mixBlendMode: 'multiply' }} />
          {/* Straps */}
          <div className="absolute left-[46%] top-[-2vh] h-[30vh] w-[2%]" style={{ background: 'linear-gradient(180deg, rgba(240,180,72,0.8), rgba(180,110,20,0.9))', boxShadow: '0 2px 8px rgba(0,0,0,0.6)' }} />
          <div className="absolute left-[52%] top-[-2vh] h-[30vh] w-[2%]" style={{ background: 'linear-gradient(180deg, rgba(240,180,72,0.8), rgba(180,110,20,0.9))', boxShadow: '0 2px 8px rgba(0,0,0,0.6)' }} />
        </div>
      </div>

      {/* Warm side light */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"
           style={{ background: 'radial-gradient(60% 100% at 100% 30%, rgba(255,200,120,0.14) 0%, rgba(255,200,120,0.05) 45%, rgba(0,0,0,0) 100%)' }} />
    </div>
  )
}

function Roller({ size = '22vh', duration = '12s', reverse = false, bottom = false }) {
  return (
    <div className={`absolute left-1/2 ${bottom ? 'bottom-0 translate-y-[44%]' : 'top-0 -translate-y-[44%]'} h-[22vh] w-[22vh] -translate-x-1/2`} style={{ height: size, width: size }}>
      <div className="absolute inset-0 rounded-full"
           style={{ background: 'radial-gradient(closest-side, #bfc6cd 0%, #9aa1a9 45%, #cfd6dc 70%, #a3abb3 85%, #e6ebef 100%)', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -10px 30px rgba(0,0,0,0.35), 0 20px 60px rgba(0,0,0,0.35)', filter: 'saturate(0.9) contrast(1.05)', animation: `rollerSpin ${duration} linear infinite ${reverse ? 'reverse' : ''}` }} />
      <div className="absolute inset-0 rounded-full opacity-50"
           style={{ background: 'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 2px, rgba(255,255,255,0) 3px, rgba(255,255,255,0) 10px)', mixBlendMode: 'multiply', animation: `rollerSpin ${duration} linear infinite ${reverse ? '' : 'reverse'}` }} />
      <div className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full"
           style={{ background: 'radial-gradient(circle at 30% 30%, #f5f8fb 0%, #c9d0d6 35%, #8f98a1 70%)', boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.4)' }} />
    </div>
  )
}

function Wheel({ className = '', duration = '12s' }) {
  return (
    <div className={`absolute bottom-0 h-[9vh] w-[9vh] ${className}`}>
      <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 40% 35%, #222 0%, #0a0a0a 70%)', boxShadow: 'inset 0 -4px 10px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.6)' }} />
      <div className="absolute inset-[16%] rounded-full" style={{ background: 'radial-gradient(circle at 40% 35%, #666 0%, #2b2b2b 70%)' }} />
      <div className="absolute inset-[36%] rounded-full" style={{ background: 'radial-gradient(circle at 50% 50%, #999 0%, #555 100%)', animation: `wheelSpin ${duration} linear infinite` }} />
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Animated industrial narrative background */}
      <Background />

      {/* Soft contrast layer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_40%,#000_62%,transparent_100%)]" />

      {/* Hero content */}
      <section className="relative z-10 mx-auto flex h-screen max-w-7xl items-center px-6 md:px-10">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-black/60 px-4 py-1.5 backdrop-blur">
            <span className="text-base">🏆</span>
            <span className="text-sm font-medium tracking-wide text-slate-200">Trusted by Manufacturers & Builders Across India</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
            Precision Metal Fabrication Built for Industrial Excellence
          </h1>

          {/* Subheadline under 45 words with headline in spirit */}
          <p className="mt-4 text-base leading-relaxed text-slate-200/90 md:text-lg">
            ISO‑certified cold‑rolled steel components from coil to delivery. Consistent tolerances, documented quality, and rapid dispatch across India.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-amber-400 to-amber-600 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_20px_-10px_rgba(245,158,11,0.8)] transition hover:from-amber-300 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300">
              <span className="mr-2 text-base">🔧</span> Get a Quote
            </a>
            <a href="#expert" className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-black/60 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-slate-400/50">
              <span className="mr-2 text-base">📞</span> Speak with an Expert
            </a>
          </div>

          {/* Trust Indicators */}
          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-slate-200/90 sm:grid-cols-2">
            <li className="flex items-start gap-2 rounded-md bg-black/50 p-3 ring-1 ring-inset ring-slate-700/50">
              <span className="text-lg">✅</span>
              <span className="text-sm md:text-base">Mill Test Certificates Provided</span>
            </li>
            <li className="flex items-start gap-2 rounded-md bg-black/50 p-3 ring-1 ring-inset ring-slate-700/50">
              <span className="text-lg">⚙️</span>
              <span className="text-sm md:text-base">72‑Hour Dispatch Guarantee</span>
            </li>
            <li className="flex items-start gap-2 rounded-md bg-black/50 p-3 ring-1 ring-inset ring-slate-700/50 sm:col-span-2">
              <span className="text-lg">🚛</span>
              <span className="text-sm md:text-base">Pan‑India Distribution Network</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Subtle steel accent */}
      <div className="pointer-events-none relative z-10">
        <div className="absolute bottom-0 left-0 right-0 h-1.5 animate-pulse bg-gradient-to-r from-slate-200/20 via-slate-100/50 to-slate-200/20" />
      </div>
    </main>
  )
}

export default App
