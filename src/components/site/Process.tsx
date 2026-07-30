import { ClipboardList, PencilRuler, HardHat, LifeBuoy, type LucideIcon } from "lucide-react";
import { Reveal, useScrollProgress, useInView } from "./motion";
import { cn } from "@/lib/utils";

type Step = { icon: LucideIcon; title: string; body: string };

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: "Consultation",
    body: "Free site visit, load profile study and a transparent savings estimate.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    body: "3D layout, structural checks and component selection tuned to your roof.",
  },
  {
    icon: HardHat,
    title: "Installation",
    body: "Certified crews complete most residential systems within 5–7 days.",
  },
  {
    icon: LifeBuoy,
    title: "Commissioning & Support",
    body: "Net-metering, handover training and annual maintenance for the long run.",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const Icon = step.icon;
  return (
    <div
      ref={ref}
      className="relative w-[78vw] shrink-0 snap-center sm:w-auto"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span
        className={cn(
          "grid size-16 place-items-center rounded-2xl border border-ink-foreground/15 bg-ink-soft text-accent transition-all duration-700 ease-out",
          inView ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-75 opacity-0",
        )}
        style={{ transitionDelay: `${index * 140}ms`, transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        <Icon className="size-7" />
      </span>
      <div
        className={cn(
          "mt-6 transition-all duration-700",
          inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        )}
        style={{ transitionDelay: `${index * 140 + 120}ms` }}
      >
        <span className="font-display text-sm font-bold text-accent">
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-ink-foreground">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{step.body}</p>
      </div>
    </div>
  );
}

export function Process() {
  const [ref, progress] = useScrollProgress<HTMLDivElement>();

  return (
    <section id="process" className="section-pad relative overflow-hidden bg-ink">
      <span className="blob animate-float-slow left-1/4 top-0 size-80 bg-primary/20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            How it works
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-ink-foreground sm:text-5xl">
            From first call to first unit generated.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* Self-drawing connector */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-ink-foreground/15 sm:block">
            <span
              className="block h-px bg-accent transition-[width] duration-200 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:gap-10 sm:overflow-visible lg:grid-cols-4">
            {steps.map((s, i) => (
              <StepCard key={s.title} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
