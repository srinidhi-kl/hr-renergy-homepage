import { Sun, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";
import { company, navLinks, products } from "./data";

const socials = [Facebook, Instagram, Linkedin, Youtube];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-primary-foreground/15">
              <Sun className="size-5" />
            </span>
            <span className="font-display text-xl font-extrabold">HR Renergy</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Renewable energy and home-utility solutions for homes, societies and industry across India.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="rounded-full bg-primary-foreground/10 p-2 transition hover:bg-primary-foreground/20"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-primary-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold">Our Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {products.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="transition hover:text-primary-foreground">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {company.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              {company.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              {company.email}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" />
              {company.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} HR Renergy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
