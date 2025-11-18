export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Pricing</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Implementation</h3>
            <p className="mt-2 text-slate-300/85">Starting at $2,500 — scoped automation build-out with clear deliverables.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Monthly Retainer</h3>
            <p className="mt-2 text-slate-300/85">From $1,500/month — ongoing optimization, support, and new automations.</p>
          </div>
        </div>

        <div className="mt-8">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300">
            Book a Free Systems Audit
          </a>
        </div>
      </div>
    </section>
  );
}
