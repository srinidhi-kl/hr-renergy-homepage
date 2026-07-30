import { CalendarDays, Building2, Zap, Smile } from "lucide-react";

const stats = [
  { icon: CalendarDays, value: "12+", label: "Years of Experience" },
  { icon: Building2, value: "2,400+", label: "Projects Completed" },
  { icon: Zap, value: "18 MW", label: "Installed Capacity" },
  { icon: Smile, value: "5,000+", label: "Happy Customers" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-6 pt-4 lg:pt-10">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="card-soft flex flex-col items-start gap-3 p-5 lg:p-6">
            <span className="grid size-11 place-items-center rounded-full bg-brand-soft text-brand">
              <s.icon className="size-5" />
            </span>
            <p className="font-display text-2xl font-extrabold lg:text-3xl">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
