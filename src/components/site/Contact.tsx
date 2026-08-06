import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { company, products } from "./data";
import { Reveal } from "./motion";

const details = [
  { icon: MapPin, label: "Visit us", value: company.address },
  { icon: Phone, label: "Call us", value: company.phone },
  { icon: Mail, label: "Email us", value: company.email },
  { icon: Clock, label: "Working hours", value: company.hours },
];

function Field({
  id,
  label,
  type = "text",
  required,
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const shared =
    "peer w-full rounded-2xl border border-border bg-card px-4 pb-2.5 pt-6 text-sm outline-none transition-all duration-300 placeholder-transparent focus:border-primary focus:shadow-[0_0_0_4px_oklch(0.575_0.147_251/0.14)]";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={4} placeholder={label} required={required} className={shared} />
      ) : (
        <input id={id} name={id} type={type} placeholder={label} required={required} className={shared} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      e.currentTarget?.reset();
      toast.success("Thanks! Our team will call you within one working day.");
    }, 700);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-background">
      <span className="blob animate-float-slow left-[-6rem] top-24 size-80 bg-primary/10" />
      <span className="blob animate-float right-[-4rem] bottom-10 size-72 bg-sun/20" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Let's design your system.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Share a few details and an HR Renergy engineer will get back with a tailored
              proposal — no pressure, no jargon.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.label} delay={i * 110} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-1 text-sm font-medium sm:text-base">{d.value}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="card-soft space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Full name" required />
              <Field id="phone" label="Phone" type="tel" required />
            </div>
            <Field id="email" label="Email" type="email" required />
            <div className="relative">
              <select
                id="product"
                name="product"
                defaultValue=""
                required
                className="w-full appearance-none rounded-2xl border border-border bg-card px-4 pb-2.5 pt-6 text-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_4px_oklch(0.575_0.147_251/0.14)]"
              >
                <option value="" disabled>
                  Select a product
                </option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
              <label
                htmlFor="product"
                className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                Product interest
              </label>
            </div>
            <Field id="message" label="Message" textarea />
            <button
              type="submit"
              disabled={sending}
              className="btn-base btn-primary glow-hover w-full disabled:opacity-70"
            >
              {sending ? "Sending…" : "Send enquiry"}
              <Send className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
