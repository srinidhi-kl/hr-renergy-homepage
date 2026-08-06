import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { company, navLinks, products } from "./data";
import { Reveal } from "./motion";
import { Logo } from "./Logo";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface pt-16 text-foreground">
      <span className="blob animate-float-slow left-1/3 top-0 size-72 bg-primary/10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <Logo markClassName="size-12" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
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
                    className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {products.map((p) => (
                <li key={p.id}>
                  <a href="#solutions" className="transition-colors hover:text-primary">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>{company.address}</li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-primary"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-primary">
                  {company.email}
                </a>
              </li>
              <li>{company.hours}</li>
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HR Renergy. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
