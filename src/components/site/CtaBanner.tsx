import { ArrowRight, PhoneCall } from "lucide-react";
import { company } from "./data";
import { Reveal } from "./motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="animate-gradient bg-[linear-gradient(120deg,var(--brand-dark),var(--brand),var(--accent),var(--brand-dark))]">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <span className="blob animate-float right-1/4 top-0 size-64 bg-ink-foreground/15" />
          <Reveal className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink-foreground sm:text-5xl">
              Ready to cut your energy bill?
            </h2>
            <p className="mt-4 text-ink-foreground/85">
              Book a free site survey — we'll model your savings and payback in 48 hours.
            </p>
          </Reveal>
          <Reveal delay={140} className="relative flex flex-wrap gap-3">
            <a href="#contact" className="btn-base glow-hover bg-ink text-ink-foreground">
              Get free quote <ArrowRight className="size-4" />
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="btn-base border border-ink-foreground/40 text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              <PhoneCall className="size-4" /> {company.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
