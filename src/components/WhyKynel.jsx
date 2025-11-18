export default function WhyKynel() {
  const points = [
    { title: 'Save hours weekly', desc: 'Cut manual admin by 10–30 hours per month through end-to-end automation.' },
    { title: 'Fewer errors', desc: 'Standardized flows reduce missed leads, double-bookings, and copy-paste mistakes.' },
    { title: 'Automated leadflows', desc: 'Capture, qualify, and route leads into your CRM with next steps triggered instantly.' },
    { title: 'Higher conversion', desc: 'Fast replies, tailored follow-ups, and smart sequencing lift close rates.' },
    { title: 'Smoother operations', desc: 'Reports, scheduling, and task routing run quietly in the background.' },
  ];
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Why Kynel Labs</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200">
              <h3 className="text-white font-semibold mb-1">{p.title}</h3>
              <p className="text-slate-300/80 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
