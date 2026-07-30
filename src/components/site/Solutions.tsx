import { ArrowRight } from "lucide-react";
import { products } from "./data";

export function Solutions() {
  return (
    <section id="solutions" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">What we do</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Our Solutions</h2>
          <p className="mt-4 text-muted-foreground">
            Six core offerings covering everything from clean power generation to everyday home utility
            comfort — designed, supplied and serviced by one team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} id={p.id} className="card-soft card-hover scroll-mt-32 p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3 hover:text-brand-dark"
              >
                Learn More <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
