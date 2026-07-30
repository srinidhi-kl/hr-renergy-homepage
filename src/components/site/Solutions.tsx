import { ArrowUpRight } from "lucide-react";
import { products } from "./data";
import { Reveal } from "./motion";
import { cn } from "@/lib/utils";

const [featured, ...rest] = products;

function ProductCard({
  product,
  index,
  className,
  large,
}: {
  product: (typeof products)[number];
  index: number;
  className?: string;
  large?: boolean;
}) {
  const Icon = product.icon;
  return (
    <Reveal
      delay={index * 110}
      className={cn("group relative overflow-hidden rounded-3xl bg-ink", className)}
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-70 transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,15,0.94)_8%,rgba(10,18,15,0.45)_55%,rgba(10,18,15,0.2)_100%)]" />
      <div
        className={cn(
          "relative flex h-full flex-col justify-end p-6 transition-transform duration-500 group-hover:-translate-y-1.5",
          large && "p-8 lg:p-10",
        )}
      >
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-ink-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
          {product.tag}
        </span>
        <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110">
          <Icon className="size-5" />
        </span>
        <h3
          className={cn(
            "mt-4 font-display font-bold text-ink-foreground",
            large ? "text-2xl lg:text-4xl" : "text-xl",
          )}
        >
          {product.name}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-md text-sm leading-relaxed text-ink-foreground/75",
            large && "lg:text-base",
          )}
        >
          {product.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-all duration-500 group-hover:opacity-100">
          Learn more <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Reveal>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="section-pad relative overflow-hidden bg-background">
      <span className="blob animate-float-slow -right-24 top-24 size-80 bg-primary/10" />
      <span className="blob animate-float bottom-10 left-[-6rem] size-72 bg-accent/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Our solutions
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Six systems. One energy partner.
            </h2>
          </Reveal>
          <Reveal delay={140} className="max-w-md">
            <p className="text-muted-foreground">
              From generation to storage to water quality — every product is designed, installed
              and serviced by the same in-house engineering team.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-[repeat(4,150px)]">
          <ProductCard
            product={featured}
            index={0}
            large
            className="min-h-[420px] md:col-span-2 md:row-span-4"
          />
          <ProductCard product={rest[0]} index={1} className="min-h-[280px] md:row-span-2" />
          <ProductCard product={rest[1]} index={2} className="min-h-[280px] md:row-span-2" />
          <ProductCard product={rest[2]} index={3} className="min-h-[280px] md:row-span-2" />
          <ProductCard product={rest[3]} index={4} className="min-h-[280px] md:row-span-2" />
          <ProductCard
            product={rest[4]}
            index={5}
            className="min-h-[280px] md:col-span-4 md:row-span-2 md:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}
