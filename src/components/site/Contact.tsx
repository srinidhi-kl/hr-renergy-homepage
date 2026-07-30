import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { company, products } from "./data";

const rows = [
  { icon: MapPin, label: "Office", value: company.address },
  { icon: Phone, label: "Phone", value: company.phone },
  { icon: Mail, label: "Email", value: company.email },
  { icon: Clock, label: "Business Hours", value: company.hours },
];

const fieldClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-brand";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! Our team will contact you within one business day.");
    }, 600);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Let's talk about your energy needs</h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Share a few details and our engineers will get back with a tailored recommendation and estimate.
          </p>

          <ul className="mt-8 space-y-5">
            {rows.map((r) => (
              <li key={r.label} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <r.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{r.label}</p>
                  <p className="text-sm text-muted-foreground">{r.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="card-soft space-y-4 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" required placeholder="Your full name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" required placeholder="+91 " className={fieldClass} />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="interest" className="mb-1.5 block text-sm font-medium">
              Product Interest
            </label>
            <select id="interest" name="interest" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select a product
              </option>
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your property and monthly bill"
              className={fieldClass}
            />
          </div>
          <button type="submit" disabled={submitting} className="btn-base btn-primary w-full disabled:opacity-70">
            {submitting ? "Sending…" : "Submit Enquiry"} <Send className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
