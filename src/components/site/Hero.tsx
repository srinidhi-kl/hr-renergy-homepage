import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand-dark">
            <Sparkles className="size-4" />
            12+ Years of Renewable Energy Experience
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Cut your electricity bills.{" "}
            <span className="text-brand">Power your world sustainably.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            HR Renergy designs, installs and maintains solar power plants, water heating, heat pumps and
            home-utility systems for homes, housing societies and industries across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-base btn-primary">
              Get a Free Consultation <ArrowRight className="size-4" />
            </a>
            <a href="#solutions" className="btn-base btn-outline">
              Explore Products
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-10 -top-10 size-64 rounded-full bg-brand-soft blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-6 size-72 rounded-full bg-accent/25 blur-3xl"
          />
          <img
            src={heroImage}
            alt="Rooftop solar panel installation on a modern Indian home"
            width={1280}
            height={1024}
            className="relative rounded-[2rem] border border-border object-cover shadow-lift"
          />
          <div className="card-soft absolute -bottom-6 left-4 hidden gap-3 p-4 sm:flex">
            <span className="grid size-11 place-items-center rounded-full bg-accent/20 text-lg font-bold text-accent-foreground">
              ₹
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-tight">Up to 90%</p>
              <p className="text-xs text-muted-foreground">savings on monthly power bills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
