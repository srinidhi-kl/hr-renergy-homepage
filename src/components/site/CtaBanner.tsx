import { ArrowRight, PhoneCall } from "lucide-react";
import { company } from "./data";
import { Reveal } from "./motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-background py-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-border bg-brand-soft">
          <span className="blob animate-float right-1/4 top-0 size-72 bg-sun/40" />
          <span className="blob animate-float-slow left-0 bottom-0 size-64 bg-leaf/20" />
          <div className="relative flex flex-col items-start gap-8 px-6 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
                Ready to cut your energy bill?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Book a free site survey — we'll model your savings and payback in 48 hours.
              </p>
            </Reveal>
            <Reveal delay={140} className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-base btn-primary glow-hover animate-pulse-glow">
                Get free quote <ArrowRight className="size-4" />
              </a>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn-base btn-outline">
                <PhoneCall className="size-4" /> {company.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
