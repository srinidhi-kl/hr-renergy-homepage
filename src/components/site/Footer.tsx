import { Sun, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { company, navLinks, products } from "./data";
import { Reveal } from "./motion";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 text-ink-foreground">
      <span className="blob animate-float-slow left-1/3 top-0 size-72 bg-primary/15" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-full bg-primary">
                <Sun className="size-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-extrabold">HR Renergy</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
              Clean energy and home-utility systems, engineered and serviced in-house across
              South India since 2013.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-ink-foreground/15 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
              Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
              {products.map((p) => (
                <li key={p.id}>
                  <a href="#solutions" className="transition-colors hover:text-accent">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
              </li>
              <li>{company.hours}</li>
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink-foreground/10 py-7 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HR Renergy. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
