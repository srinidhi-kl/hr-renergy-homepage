import { ArrowRight, ChevronDown, Sun } from "lucide-react";
import { heroImage } from "./data";
import { useScrollY } from "./motion";

export function Hero() {
  const scrollY = useScrollY();

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-background"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.15)` }}
      >
        <img
          src={heroImage}
          alt="Rooftop solar panel array under a bright blue sky with white clouds"
          width={1920}
          height={1280}
          className="size-full object-cover"
        />
      </div>

      {/* Very light gradient for text legibility */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.86)_0%,oklch(1_0_0/0.6)_45%,oklch(1_0_0/0.15)_75%,oklch(1_0_0/0.05)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-[linear-gradient(to_bottom,oklch(1_0_0/0),oklch(0.985_0.004_250/0.95))]" />

      {/* Floating accent elements */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <span className="blob animate-float right-[8%] top-[16%] size-64 bg-sun/30" />
        <span className="blob animate-float-slow left-[4%] top-[52%] size-72 bg-primary/15" />
        <span className="absolute right-[12%] top-[18%] hidden animate-pulse-glow text-accent/70 md:block">
          <Sun className="size-24 animate-spin-slow" strokeWidth={0.8} />
        </span>
        {[
          { l: "18%", t: "30%", d: "0s", s: "size-2" },
          { l: "32%", t: "62%", d: "2s", s: "size-1.5" },
          { l: "72%", t: "55%", d: "4s", s: "size-2.5" },
          { l: "86%", t: "70%", d: "1s", s: "size-1.5" },
          { l: "55%", t: "24%", d: "3s", s: "size-2" },
        ].map((p) => (
          <span
            key={p.l + p.t}
            className={`absolute ${p.s} animate-float rounded-full bg-accent/80 blur-[1px]`}
            style={{ left: p.l, top: p.t, animationDelay: p.d }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-28 sm:px-8 lg:pb-32">
        <div className="max-w-3xl">
          <p
            className="inline-flex animate-[hr-fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_both] items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-leaf-dark"
            style={{ animationDelay: "0.1s" }}
          >
            Renewable energy · India
          </p>
          <h1
            className="mt-6 animate-[hr-fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both] font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.22s" }}
          >
            Power your home
            <br />
            with the <span className="text-primary">sun.</span>
          </h1>
          <p
            className="mt-6 max-w-xl animate-[hr-fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both] text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.36s" }}
          >
            Solar plants, water heating, heat pumps, storage and clean-water systems —
            engineered, installed and serviced end to end by HR Renergy.
          </p>
          <div
            className="mt-9 flex animate-[hr-fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both] flex-wrap gap-3"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#contact" className="btn-base btn-primary glow-hover">
              Get a free site survey
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#solutions"
              className="btn-base btn-outline bg-card/80 backdrop-blur-sm hover:border-leaf hover:text-leaf-dark"
            >
              Explore solutions
            </a>
          </div>
        </div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-current p-1.5">
          <span className="size-1.5 animate-bounce-y rounded-full bg-current" />
        </span>
        <ChevronDown className="mx-auto mt-1 size-4 animate-bounce-y" />
      </a>
    </section>
  );
}
