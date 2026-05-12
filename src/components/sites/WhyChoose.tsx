const stats = [
  { value: "5000+", label: "Spiritual Consultations" },
  { value: "PAN India", label: "Trusted Across Communities" },
  { value: "Vedic", label: "Authentic Guidance" },
  { value: "Personal", label: "Tailored Experiences" },
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Why Choose Us</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            A Sanctuary of Trust
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-border bg-border">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card p-8 lg:p-10 text-center hover:bg-secondary/60 transition-colors"
            >
              <div className="font-display text-4xl lg:text-5xl font-semibold text-gold">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
