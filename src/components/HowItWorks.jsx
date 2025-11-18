export default function HowItWorks() {
  const steps = [
    { title: 'Step 1: Audit', desc: 'We map your systems, identify quick wins, and define the highest-impact automations.' },
    { title: 'Step 2: Build', desc: 'We implement flows, connect tools, and set rules for clean data and reliability.' },
    { title: 'Step 3: Launch', desc: 'We test edge cases, then deploy with tracking and alerting.' },
    { title: 'Step 4: Optimization', desc: 'We monitor metrics and keep tuning for speed, accuracy, and conversion.' },
  ];
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">How It Works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200">
              <div className="text-sm font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-sm text-slate-300/85">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
