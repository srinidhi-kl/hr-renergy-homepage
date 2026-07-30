const steps = [
  { title: "Site Visit & Consultation", text: "We study your load profile, roof area and shading to size the right system." },
  { title: "Custom Design", text: "Detailed layout, yield estimate, BOM and transparent quotation — no hidden costs." },
  { title: "Installation", text: "Structured mounting, clean cabling and safety-first execution by in-house crews." },
  { title: "Commissioning & Support", text: "Net-metering, handover, monitoring setup and long-term maintenance." },
];

export function Process() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Four steps from enquiry to energy</h2>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block lg:left-0 lg:top-6 lg:h-px lg:w-full"
          />
          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative sm:pl-20 lg:pl-0">
                <span className="grid size-12 place-items-center rounded-full bg-brand font-display text-lg font-bold text-primary-foreground shadow-soft sm:absolute sm:left-0 sm:top-0 lg:relative">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold lg:mt-6">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
