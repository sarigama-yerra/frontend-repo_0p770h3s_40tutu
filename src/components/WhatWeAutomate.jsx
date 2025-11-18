export default function WhatWeAutomate() {
  const items = [
    'Email automation',
    'Lead capture → CRM pipelines',
    'Client onboarding workflows',
    'Form → Email automations',
    'Internal processes (reports, scheduling, task routing)'
  ];
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">What We Automate</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-slate-200">
              <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
