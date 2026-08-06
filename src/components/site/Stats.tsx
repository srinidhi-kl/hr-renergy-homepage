import { Award, Zap, Users, Building2, type LucideIcon } from "lucide-react";
import { useCountUp } from "./motion";
import { cn } from "@/lib/utils";

type Stat = { icon: LucideIcon; value: number; suffix: string; label: string };

const stats: Stat[] = [
  { icon: Award, value: 12, suffix: "+", label: "Years of experience" },
  { icon: Building2, value: 2400, suffix: "+", label: "Projects delivered" },
  { icon: Zap, value: 18, suffix: " MW", label: "Capacity installed" },
  { icon: Users, value: 9500, suffix: "+", label: "Happy customers" },
];

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const [ref, value, inView] = useCountUp(stat.value, 1600 + index * 150);
  const Icon = stat.icon;
  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
      <span
        className={cn(
          "grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-primary transition-all duration-700",
          inView ? "rotate-0 scale-100 opacity-100" : "-rotate-45 scale-75 opacity-0",
        )}
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        <Icon className="size-6 animate-pulse-glow" />
      </span>
      <div>
        <div className="font-display text-3xl font-extrabold text-foreground lg:text-4xl">
          {value.toLocaleString("en-IN")}
          <span className="text-leaf">{stat.suffix}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden border-y border-border bg-card py-14 lg:py-16"
    >
      <span className="blob animate-float-slow -left-20 top-0 size-72 bg-primary/10" />
      <span className="blob animate-float right-0 top-10 size-64 bg-sun/20" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatItem key={s.label} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}
