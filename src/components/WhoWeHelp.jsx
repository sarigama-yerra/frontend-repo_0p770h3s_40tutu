export default function WhoWeHelp() {
  const niches = [
    {
      name: 'Cleaning companies',
      bullets: [
        'Instant quote follow-ups that book more jobs',
        'Tech assigns crews automatically, no back-and-forth',
        'Before/after photo requests sent and filed without lifting a finger'
      ]
    },
    {
      name: 'Therapists & wellness professionals',
      bullets: [
        'Intake forms → EHR/CRM in seconds',
        'No-show reducers: reminders and rescheduling flows',
        'Post-session summaries emailed securely to clients'
      ]
    },
    {
      name: 'E‑commerce',
      bullets: [
        'Browse abandonment emails that feel personal',
        'Return/exchange flows that don’t clog support',
        'Back-in-stock and VIP sequencing that converts'
      ]
    },
    {
      name: 'Local service businesses',
      bullets: [
        'Lead capture → quotes → bookings without manual steps',
        'Reviews and referrals requested at the right time',
        'Job updates mirrored to calendars and crews'
      ]
    }
  ];
  return (
    <section className="bg-slate-950 py-16" id="cases">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Who We Help</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {niches.map((n) => (
            <div key={n.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{n.name}</h3>
              <ul className="mt-4 space-y-2 text-slate-200 text-sm">
                {n.bullets.map((b) => (
                  <li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
