import { useEffect, useState } from "react";
import { Menu, X, Phone, Sun } from "lucide-react";
import { navLinks, company } from "./data";
import { useScrollY } from "./motion";
import { cn } from "@/lib/utils";

export function Header() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const solid = scrollY > 80;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          solid
            ? "bg-ink/95 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
            solid ? "h-16" : "h-20 lg:h-24",
          )}
        >
          <a href="#home" className="flex items-center gap-2.5 text-ink-foreground">
            <span className="relative grid size-9 place-items-center rounded-full bg-primary">
              <Sun className="size-5 text-primary-foreground" />
              <span className="absolute inset-0 animate-pulse-glow rounded-full bg-accent/30" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
              HR&nbsp;Renergy
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-underline text-sm font-medium text-ink-foreground/85 transition-colors hover:text-ink-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="hidden items-center gap-2 text-sm font-medium text-ink-foreground/85 transition-colors hover:text-accent xl:flex"
            >
              <Phone className="size-4" />
              {company.phone}
            </a>
            <a href="#contact" className="btn-base btn-accent glow-hover hidden sm:inline-flex">
              Get Free Quote
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink transition-opacity duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <span className="font-display text-lg font-extrabold text-ink-foreground">
            HR Renergy
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid size-10 place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-7 pt-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={cn(
                "font-display text-3xl font-bold text-ink-foreground transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${120 + navLinks.length * 70}ms` : "0ms" }}
            className={cn(
              "btn-base btn-accent mt-8 w-full transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            Get Free Quote
          </a>
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="mt-6 text-sm text-ink-foreground/70"
          >
            {company.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
