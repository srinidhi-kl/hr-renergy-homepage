import { ShieldCheck, BadgeCheck, Headset, Leaf } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Components",
    text: "Only tier-1 panels, inverters and BOS from brands with proven field performance and real warranties.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Experts",
    text: "MNRE-aligned engineering, licensed electricians and documented installation standards on every site.",
  },
  {
    icon: Headset,
    title: "After-Sales Support",
    text: "Annual maintenance contracts, performance monitoring and a support team that answers the phone.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    text: "Every system we commission is sized to maximise clean generation and reduce lifetime carbon.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-pad">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Why HR Renergy</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Built on engineering, not sales pitches</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-6 transition hover:border-accent">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent-foreground">
                <v.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
