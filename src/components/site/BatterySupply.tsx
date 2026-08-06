import { ArrowRight, Boxes, ShieldCheck, SlidersHorizontal, Timer } from "lucide-react";
import industrialBatteryImg from "@/assets/industrial-battery.jpg";
import { Reveal } from "./motion";

const highlights = [
  {
    icon: Boxes,
    title: "Bulk & wholesale supply",
    body: "Pallet-level dispatch of tubular, VRLA and lithium packs with dealer-grade pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Industrial-grade cells",
    body: "Deep-cycle cells from certified Indian and global manufacturers, warranty-backed.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom capacity sizing",
    body: "Load audits translated into the right Ah, voltage and bank configuration for your plant.",
  },
  {
    icon: Timer,
    title: "Fast turnaround",
    body: "Stocked inventory and regional logistics for delivery and commissioning within days.",
  },
];

export function BatterySupply() {
  return (
    <section
      id="battery-supply"
      className="section-pad relative overflow-hidden border-y border-border bg-surface"
    >
      <span className="blob animate-float-slow right-[-5rem] top-10 size-80 bg-sun/20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={industrialBatteryImg}
              alt="Industrial battery banks stacked on pallets inside a bright warehouse"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              For businesses
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Industry battery supply, at scale.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              HR Renergy supplies and services industrial battery banks for factories, hospitals,
              data rooms, telecom sites and solar plants — sized by our engineers, delivered in bulk
              and supported locally.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.title} delay={i * 100} className="card-soft card-hover p-5">
                  <span className="grid size-11 place-items-center rounded-2xl bg-leaf-soft text-leaf-dark">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={220}>
            <a href="#contact" className="btn-base btn-primary glow-hover mt-9">
              Get a quote <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
