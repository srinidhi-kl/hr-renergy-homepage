import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Reveal, useInView } from "./motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ramesh Iyer",
    role: "Homeowner, Jayanagar",
    quote:
      "Our 5 kW rooftop system was up in four days and the bill dropped from ₹6,800 to under ₹700 a month. The team handled every DISCOM formality.",
  },
  {
    name: "Priya Nair",
    role: "Facility Head, Tech Park",
    quote:
      "HR Renergy retrofitted heat pumps across two towers with zero downtime for residents. Their monitoring reports are genuinely useful.",
  },
  {
    name: "Anand Kulkarni",
    role: "Managing Director, Precision Auto",
    quote:
      "180 kWp on our factory roof, commissioned on schedule. Payback is tracking a full quarter ahead of the projection they gave us.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-pad relative overflow-hidden bg-surface">
      <span className="blob animate-float-slow right-[-4rem] bottom-0 size-80 bg-primary/10" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Customer stories
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-5xl">
            Trusted by 9,500+ households.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14 min-h-[290px] sm:min-h-[250px]">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={cn(
                "absolute inset-0 flex flex-col items-center transition-all duration-700 ease-out",
                i === active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-5 opacity-0",
              )}
            >
              <Quote className="size-9 text-accent" />
              <div className="mt-5 flex gap-1">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    className={cn(
                      "size-5 fill-accent text-accent transition-all duration-500",
                      inView && i === active ? "scale-100 opacity-100" : "scale-50 opacity-0",
                    )}
                    style={{ transitionDelay: `${s * 130}ms` }}
                  />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-lg font-medium leading-relaxed sm:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === active ? "w-8 bg-primary" : "w-3 bg-border",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
