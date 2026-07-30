import { useRef, useState } from "react";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "./data";
import { Reveal } from "./motion";

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scroll: 0 });
  const [dragging, setDragging] = useState(false);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-background">
      <span className="blob animate-float left-[-5rem] top-16 size-72 bg-accent/10" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Featured projects
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Systems running across South India.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex gap-3">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => scrollBy(-1)}
              className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => scrollBy(1)}
              className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="size-4" />
            </button>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={(e) => {
          drag.current = {
            active: true,
            startX: e.clientX,
            scroll: trackRef.current?.scrollLeft ?? 0,
          };
          setDragging(true);
        }}
        onPointerMove={(e) => {
          if (!drag.current.active || !trackRef.current) return;
          trackRef.current.scrollLeft = drag.current.scroll - (e.clientX - drag.current.startX);
        }}
        onPointerUp={() => {
          drag.current.active = false;
          setDragging(false);
        }}
        onPointerLeave={() => {
          drag.current.active = false;
          setDragging(false);
        }}
        className={`no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {projects.map((p, i) => (
          <Reveal
            key={p.id}
            delay={i * 100}
            className="group relative aspect-[4/5] w-[80vw] shrink-0 snap-center overflow-hidden rounded-3xl sm:aspect-[4/3] sm:w-[420px]"
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,15,0.92)_5%,rgba(10,18,15,0.25)_60%)]" />
            <div className="relative flex h-full flex-col justify-end p-7">
              <span className="w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
                {p.category}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink-foreground">
                {p.title}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-foreground/75">
                <MapPin className="size-4" /> {p.location}
              </p>
              <p className="mt-3 font-display text-lg font-bold text-accent">{p.result}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-7xl px-5 text-xs text-muted-foreground sm:px-8">
        Drag or swipe to explore more projects
      </p>
    </section>
  );
}
