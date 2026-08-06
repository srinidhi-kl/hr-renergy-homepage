import { ShieldCheck, Wrench, LineChart, BadgeIndianRupee, type LucideIcon } from "lucide-react";
import { Reveal, useScrollProgress, useInView } from "./motion";
import { cn } from "@/lib/utils";

type Value = { icon: LucideIcon; title: string; body: string };

const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "Tier-1 components only",
    body: "Panels, inverters and pumps from certified manufacturers, backed by full warranty support.",
  },
  {
    icon: Wrench,
    title: "In-house installation crews",
    body: "No subcontracting. The team that designs your system is the team that installs it.",
  },
  {
    icon: LineChart,
    title: "Performance monitoring",
    body: "Live generation dashboards and proactive alerts, so under-performance never goes unnoticed.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Subsidy & finance help",
    body: "We handle net-metering paperwork, DISCOM approvals and subsidy claims end to end.",
  },
];

function ValueRow({ value, index }: { value: Value; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const Icon = value.icon;
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex gap-5 pb-12 transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span
        className={cn(
          "z-10 grid size-14 shrink-0 place-items-center rounded-2xl border transition-all duration-700",
          inView
            ? "scale-100 border-primary bg-primary text-primary-foreground"
            : "scale-75 border-border bg-card text-muted-foreground",
        )}
      >
        <Icon className="size-6" />
      </span>
      <div className="pt-1">
        <h3 className="font-display text-lg font-bold sm:text-xl">{value.title}</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          {value.body}
        </p>
      </div>
    </div>
  );
}

export function WhyUs() {
  const [ref, progress] = useScrollProgress<HTMLDivElement>();

  return (
    <section id="why-us" className="section-pad relative overflow-hidden bg-surface">
      <span className="blob animate-float right-[-4rem] top-1/3 size-80 bg-primary/10" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Why HR Renergy
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Engineering first.
            <br />
            Sales second.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Every proposal starts with a shadow analysis, a load study and an honest payback
            number. If solar isn't the right answer for your site, we'll tell you.
          </p>
          <a href="#contact" className="btn-base btn-primary mt-8">
            Talk to an engineer
          </a>
        </Reveal>

        <div ref={ref} className="relative pl-1">
          {/* Animated connector line */}
          <span className="absolute left-7 top-4 h-[calc(100%-5rem)] w-px bg-border" />
          <span
            className="absolute left-7 top-4 w-px origin-top bg-primary transition-[height] duration-200 ease-out"
            style={{ height: `calc((100% - 5rem) * ${progress})` }}
          />
          {values.map((v, i) => (
            <ValueRow key={v.title} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
