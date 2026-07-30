import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Sun } from "lucide-react";
import { navLinks, products } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-card/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground">
            <Sun className="size-5" />
          </span>
          <span className="truncate font-display text-xl font-extrabold tracking-tight">
            HR <span className="text-brand">Renergy</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          <a href="#home" className="rounded-full px-3 py-2 text-sm font-medium transition hover:text-brand">
            Home
          </a>
          <a href="#why-us" className="rounded-full px-3 py-2 text-sm font-medium transition hover:text-brand">
            About
          </a>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition hover:text-brand">
              Products <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full w-72 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <ul className="card-soft overflow-hidden p-2">
                {products.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-brand-soft hover:text-brand-dark"
                    >
                      <p.icon className="size-4 shrink-0 text-brand" />
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {navLinks.slice(2).map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3 py-2 text-sm font-medium transition hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href="#contact" className="btn-base btn-primary hidden sm:inline-flex">
            Get Free Quote
          </a>
          <button
            className="rounded-xl border border-border p-2 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-in panel */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/40 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-dvh w-[82%] max-w-sm overflow-y-auto bg-card p-6 shadow-lift transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-lg font-bold">Menu</span>
          <button aria-label="Close menu" onClick={close} className="rounded-xl border border-border p-2">
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          <a href="#home" onClick={close} className="rounded-xl px-3 py-3 font-medium hover:bg-surface">
            Home
          </a>
          <a href="#why-us" onClick={close} className="rounded-xl px-3 py-3 font-medium hover:bg-surface">
            About
          </a>
          <button
            onClick={() => setMobileProductsOpen((v) => !v)}
            aria-expanded={mobileProductsOpen}
            className="flex items-center justify-between rounded-xl px-3 py-3 text-left font-medium hover:bg-surface"
          >
            Products
            <ChevronDown className={`size-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`grid transition-all duration-300 ${
              mobileProductsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <ul className="overflow-hidden pl-3">
              {products.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    onClick={close}
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:text-brand"
                  >
                    <p.icon className="size-4 text-brand" />
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {navLinks.slice(2).map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="rounded-xl px-3 py-3 font-medium hover:bg-surface">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn-base btn-primary mt-4">
            Get Free Quote
          </a>
        </nav>
      </aside>
    </header>
  );
}
