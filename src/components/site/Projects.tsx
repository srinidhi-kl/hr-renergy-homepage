import { ArrowRight, MapPin } from "lucide-react";
import industrial from "@/assets/project-industrial.jpg";
import waterHeater from "@/assets/project-water-heater.jpg";
import heatPump from "@/assets/project-heatpump.jpg";

const projects = [
  {
    image: industrial,
    name: "Sri Balaji Industries",
    location: "Peenya, Bengaluru",
    result: "60 kW rooftop solar plant offsetting 78% of monthly grid consumption.",
  },
  {
    image: waterHeater,
    name: "Lakeview Residency",
    location: "Whitefield, Bengaluru",
    result: "48 solar water heaters across 4 towers, saving 21,000 units a year.",
  },
  {
    image: heatPump,
    name: "Green Meadows Villa",
    location: "Hosur, Tamil Nadu",
    result: "500 LPD heat pump with battery backup for uninterrupted hot water.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Case studies</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Recent Projects</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="card-soft card-hover overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} — ${p.result}`}
                loading="lazy"
                width={1024}
                height={768}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0 text-accent" />
                  {p.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.result}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="btn-base btn-outline">
            View All Projects <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
