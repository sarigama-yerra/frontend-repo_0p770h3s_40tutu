import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Spline 3D Animation */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.2)_40%,rgba(2,6,23,0.6)_70%,rgba(2,6,23,0.85)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            AI Automation for SMBs
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Automate Operations. Convert More. Scale Calmly.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-200/90 text-lg">
            Kynel Labs builds AI-driven systems that take repetitive work off your plate—emails, leadflows, onboarding, and internal operations—so you run leaner, faster, and with fewer errors.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300">
              Book a Free Systems Audit
            </a>
            <a href="#cases" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
              See Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
