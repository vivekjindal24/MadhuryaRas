import founder from "@/assets/founder.jpg";

export function Founder() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Founder</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
          Message From The Founder
        </h2>

        <div className="mt-12 inline-block relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-gold opacity-30 blur-xl" />
          <img
            src={founder}
            alt="Founder"
            className="relative h-32 w-32 rounded-full object-cover object-top ring-4 ring-card shadow-luxe"
            loading="lazy"
            width={128}
            height={128}
          />
        </div>

        <blockquote className="mt-8 font-display text-2xl md:text-3xl leading-relaxed text-foreground/85 italic">
          "Madhury Ras was created to bring authentic spiritual experiences into modern digital
          spaces while preserving devotion, trust, and tradition."
        </blockquote>

        <div className="mt-8 font-display text-2xl text-gold">~ Founder, Madhury Ras</div>
      </div>
    </section>
  );
}
