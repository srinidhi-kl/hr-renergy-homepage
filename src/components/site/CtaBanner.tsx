import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="px-4 py-4">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-primary-foreground sm:px-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to go solar and save on your bills?</h2>
            <p className="mt-4 text-primary-foreground/85">
              Get a free site assessment and a transparent savings estimate for your home or facility — no
              obligation.
            </p>
          </div>
          <a href="#contact" className="btn-base btn-accent shrink-0">
            Book Free Site Visit <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
