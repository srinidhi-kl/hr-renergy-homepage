import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { company } from "./data";

const socials = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
];

export function TopBar() {
  return (
    <div className="bg-brand-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 text-xs sm:flex sm:justify-between sm:text-sm">
        <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1">
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 opacity-90 transition-opacity hover:opacity-100">
            <Phone className="size-3.5 shrink-0" />
            <span className="truncate">{company.phone}</span>
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-2 opacity-90 transition-opacity hover:opacity-100">
            <Mail className="size-3.5 shrink-0" />
            <span className="truncate">{company.email}</span>
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {socials.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="rounded-full p-1.5 opacity-80 transition hover:bg-primary-foreground/15 hover:opacity-100"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
