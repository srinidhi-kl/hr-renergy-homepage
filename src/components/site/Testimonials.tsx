import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our 8 kW rooftop system was installed in three days and the bill dropped from ₹6,800 to ₹700 in the first month. The team explained every component clearly.",
    name: "Ramesh Iyer",
    meta: "Homeowner, JP Nagar",
  },
  {
    quote:
      "We evaluated four vendors. HR Renergy gave the most honest yield estimate and their after-sales service has been genuinely responsive.",
    name: "Anita Deshpande",
    meta: "Secretary, Lakeview Residency",
  },
  {
    quote:
      "The servo stabilizer and battery backup they installed have kept our CNC machines running through every voltage dip this year.",
    name: "Vikram Shetty",
    meta: "Director, Balaji Industries",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Testimonials</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">What our customers say</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-soft card-hover flex h-full flex-col p-6">
              <Quote className="size-8 text-brand-soft" />
              <div className="mt-4 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
