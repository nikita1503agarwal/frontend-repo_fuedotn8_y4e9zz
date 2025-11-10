import React from 'react'

// Background that tells the story: coil emerges from rolling machines → dissolve → coil secured on flatbed truck
function FactoryToDeliveryBackground() {
  const DURATION = 16000 // ms, documented only for readability
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Warm industrial top-light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            'radial-gradient(90% 65% at 50% 0%, rgba(255,213,153,0.16) 0%, rgba(255,213,153,0.10) 30%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Scene A: Factory floor — coil feeding through dual rollers */}
      <div className="absolute inset-0 will-change-transform" style={{ animation: 'sceneAFade 16s ease-in-out infinite' }}>
        <FactoryScene />
      </div>

      {/* Scene B: Delivery — coil strapped on a flatbed truck, highway motion */}
      <div className="absolute inset-0 will-change-transform" style={{ animation: 'sceneBFade 16s ease-in-out infinite' }}>
        <DeliveryScene />
      </div>

      {/* Subtle vignette for focus */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(65% 55% at 50% 45%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)' }} />

      {/* Keyframes */}
      <style>{`
        @keyframes sceneAFade { 0%, 45% { opacity: 1 } 55%, 100% { opacity: 0 } }
        @keyframes sceneBFade { 0%, 45% { opacity: 0 } 55%, 100% { opacity: 1 } }
        @keyframes sheetFlow { 0% { transform: translateX(0) } 100% { transform: translateX(-22vw) } }
        @keyframes specularSweep { 0% { background-position: 0% 0 } 100% { background-position: -180% 0 } }
        @keyframes coilRotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(-360deg) } }
        @keyframes rollerRotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
        @keyframes roadSlide { 0% { transform: translateX(0) } 100% { transform: translateX(-30vw) } }
        @keyframes wheelSpin { 0% { transform: rotate(0deg) } 100% { transform: rotate(-360deg) } }
      `}</style>
    </div>
  )
}

function FactoryScene() {
  return (
    <div className="absolute inset-0">
      {/* Feeding sheet path */}
      <div className="absolute left-[-35vw] top-[57%] h-[28vh] w-[200vw] -rotate-[1.2deg] opacity-[0.96]">
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
      <div className="absolute left-[36%] top-[47%] h-[24vh] w-[24vh] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-0 h-[24vh] w-[24vh] -translate-x-1/2 -translate-y-[44%]"><Roller /></div>
        <div className="absolute left-1/2 bottom-0 h-[24vh] w-[24vh] -translate-x-1/2 translate-y-[44%]"><Roller reverse /></div>
        {/* Throat shadow */}
        <div
          className="absolute left-1/2 top-1/2 h-6 w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(60% 120% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 80%)',
            filter: 'blur(6px)',
          }}
        />
      </div>

      {/* Large feeding coil */}
      <div className="absolute left-[-12vw] top-[18vh] h-[72vh] w-[72vh]">
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
        <div
          className="absolute inset-0 rounded-full opacity-45"
          style={{
            background:
              'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 10px)',
            mixBlendMode: 'multiply',
            animation: 'coilRotate 70s linear infinite reverse',
          }}
        />
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
    </div>
  )
}

function DeliveryScene() {
  return (
    <div className="absolute inset-0">
      {/* Highway parallax lines */}
      <div className="absolute left-0 right-0 bottom-[18%] h-[14vh] opacity-[0.45]">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)' }} />
        {/* lane markers */}
        <div className="absolute inset-0" style={{
          background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 10px, rgba(255,255,255,0.0) 10px 80px)',
          mixBlendMode: 'screen',
          animation: 'roadSlide 12s linear infinite',
        }} />
      </div>

      {/* Flatbed truck silhouette */}
      <div className="absolute left-[58%] top-[54%] h-[34vh] w-[64vw] -translate-x-1/2 -translate-y-1/2">
        {/* Flatbed */}
        <div className="absolute bottom-0 left-0 right-0 h-[6vh] rounded-[10px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.6))', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }} />
        {/* Cab */}
        <div className="absolute bottom-[6vh] left-[4vw] h-[12vh] w-[16vw]" style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.65))',
          clipPath: 'polygon(0% 100%, 0% 22%, 22% 0%, 90% 0%, 100% 20%, 100% 100%)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
        }} />
        {/* Wheels */}
        <Wheel className="left-[10vw]" />
        <Wheel className="left-[28vw]" />
        <Wheel className="left-[46vw]" />

        {/* Coil on flatbed */}
        <div className="absolute bottom-[6vh] left-[34vw] h-[28vh] w-[28vh]">
          <div
            className="absolute inset-0 rounded-full opacity-95"
            style={{
              background:
                'radial-gradient(closest-side, #e3e8ed 0%, #b7c0c8 22%, #96a0a8 40%, #cbd2d8 58%, #99a1a9 74%, #bfc6cd 88%, #eff3f6 100%)',
              filter: 'saturate(0.9) contrast(1.05)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -18px 40px rgba(0,0,0,0.35), 0 20px 60px rgba(0,0,0,0.45)'
            }}
          />
          <div
            className="absolute inset-0 rounded-full opacity-45"
            style={{
              background:
                'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 10px)',
              mixBlendMode: 'multiply'
            }}
          />
          <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.28) 10%, rgba(0,0,0,0) 26%)', transform: 'scale(0.28)', pointerEvents: 'none' }} />

          {/* Straps */}
          <div className="absolute left-[46%] top-[-2vh] h-[34vh] w-[2%]" style={{ background: 'linear-gradient(180deg, rgba(240,180,72,0.8), rgba(180,110,20,0.9))', boxShadow: '0 2px 8px rgba(0,0,0,0.6)' }} />
          <div className="absolute left-[52%] top-[-2vh] h-[34vh] w-[2%]" style={{ background: 'linear-gradient(180deg, rgba(240,180,72,0.8), rgba(180,110,20,0.9))', boxShadow: '0 2px 8px rgba(0,0,0,0.6)' }} />
        </div>
      </div>

      {/* Warm side light */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3" style={{
        background: 'radial-gradient(60% 100% at 100% 30%, rgba(255,200,120,0.14) 0%, rgba(255,200,120,0.05) 45%, rgba(0,0,0,0) 100%)'
      }} />
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

function Wheel({ className = '' }) {
  return (
    <div className={`absolute bottom-0 h-[9vh] w-[9vh] ${className}`}>
      <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 40% 35%, #222 0%, #0a0a0a 70%)', boxShadow: 'inset 0 -4px 10px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.6)' }} />
      <div className="absolute inset-[16%] rounded-full" style={{ background: 'radial-gradient(circle at 40% 35%, #666 0%, #2b2b2b 70%)' }} />
      <div className="absolute inset-[36%] rounded-full" style={{ background: 'radial-gradient(circle at 50% 50%, #999 0%, #555 100%)', animation: 'wheelSpin 8s linear infinite' }} />
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Storytelling background: fabrication → delivery */}
      <FactoryToDeliveryBackground />

      {/* Contrast overlay + soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_40%,#000_60%,transparent_100%)]" />

      {/* Hero Content */}
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

          {/* Subheadline (kept under 45 words total with headline) */}
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
              className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-black/60 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
            >
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
              <span className="text-sm md:text-base">72-Hour Dispatch Guarantee</span>
            </li>
            <li className="flex items-start gap-2 rounded-md bg-black/50 p-3 ring-1 ring-inset ring-slate-700/50 sm:col-span-2">
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
