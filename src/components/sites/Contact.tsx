import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Contact</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Begin Your Sacred Journey
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Reach out for consultations, product enquiries, or to plan your
              spiritual stay. We respond with care.
            </p>

            {[
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "hello@madhuryras.com" },
              { icon: MapPin, label: "Studio", value: "Jaipur, Rajasthan, India" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-soft">
                <div className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center text-white shadow-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-display text-lg">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl bg-card border border-border p-8 shadow-luxe space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" placeholder="Your name" />
              <Field label="Email Address" type="email" placeholder="you@email.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone Number" placeholder="+91 ..." />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
                <select className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/40">
                  <option>Astrology Consultation</option>
                  <option>Fragrance Collection</option>
                  <option>Spiritual Stay</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                rows={4}
                placeholder="Share what brings you here..."
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/40"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-white shadow-gold hover:scale-[1.01] transition-transform"
            >
              Request Consultation <Send className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy and spiritual journey.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...props}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/40"
      />
    </div>
  );
}
