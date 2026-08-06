import { ArrowUpRight } from "lucide-react";
import { products } from "./data";
import { Reveal } from "./motion";
import { cn } from "@/lib/utils";

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const Icon = product.icon;
  const isPower = product.tag === "Power";
  return (
    <Reveal
      delay={index * 90}
      className="group card-soft card-hover flex flex-col overflow-hidden p-3"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest",
            isPower ? "bg-primary text-primary-foreground" : "bg-leaf text-primary-foreground",
          )}
        >
          {product.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-5">
        <span
          className={cn(
            "grid size-11 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
            isPower ? "bg-brand-soft text-primary" : "bg-leaf-soft text-leaf-dark",
          )}
        >
          <Icon className="size-5" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
        >
          Learn more <ArrowUpRight className="size-4" />
        </a>
      </div>
    </Reveal>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="section-pad relative overflow-hidden bg-background">
      <span className="blob animate-float-slow -right-24 top-24 size-80 bg-primary/10" />
      <span className="blob animate-float bottom-10 left-[-6rem] size-72 bg-leaf/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Our solutions
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Seven systems. One energy partner.
            </h2>
          </Reveal>
          <Reveal delay={140} className="max-w-md">
            <p className="text-muted-foreground">
              From generation to storage to water quality — every product is designed, installed
              and serviced by the same in-house engineering team.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
