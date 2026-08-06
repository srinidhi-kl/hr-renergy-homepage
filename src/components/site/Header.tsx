import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navLinks, company } from "./data";
import { useScrollY } from "./motion";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
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
            ? "bg-card/95 shadow-[0_10px_30px_-20px_oklch(0.32_0.03_255/0.45)] backdrop-blur-md"
            : "bg-card/70 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
            solid ? "h-[68px]" : "h-20 lg:h-24",
          )}
        >
          <a href="#home" aria-label="HR Renergy home">
            <Logo markClassName={solid ? "size-11" : "size-12 lg:size-14"} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <a
                    href={link.href}
                    className="nav-underline flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                  </a>
                  <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <ul className="card-soft translate-y-2 p-2 transition-transform duration-300 group-hover:translate-y-0">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-soft hover:text-primary"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-underline text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary xl:flex"
            >
              <Phone className="size-4" />
              {company.phone}
            </a>
            <a href="#contact" className="btn-base btn-primary glow-hover hidden sm:inline-flex">
              Get Free Quote
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] overflow-y-auto bg-background transition-opacity duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <Logo markClassName="size-10" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-7 pb-16 pt-6">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              {link.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                    className="flex w-full items-center justify-between py-2 font-display text-3xl font-bold text-foreground"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-6 text-primary transition-transform duration-300",
                        expanded === link.label && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-400",
                      expanded === link.label
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <ul className="min-h-0 space-y-1 pb-3 pl-1">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-base font-medium text-muted-foreground"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-3xl font-bold text-foreground"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${120 + navLinks.length * 60}ms` : "0ms" }}
            className={cn(
              "btn-base btn-primary mt-8 w-full transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            Get Free Quote
          </a>
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="mt-6 text-sm text-muted-foreground"
          >
            {company.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
