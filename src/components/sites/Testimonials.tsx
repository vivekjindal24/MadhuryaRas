import { Star, Quote } from "lucide-react";

const items = [
  { name: "Ananya Sharma", city: "Jaipur", text: "The consultation felt deeply personal and accurate. Every word resonated with my journey." },
  { name: "Rohit Verma", city: "Mumbai", text: "The fragrance collection feels devotional and luxurious — pure essence of tradition." },
  { name: "Meera Iyer", city: "Varanasi", text: "Our stay experience was peaceful and spiritually uplifting. Truly a sacred sanctuary." },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            What People Experience With Madhury Ras
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl glass-warm p-8 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute -top-3 left-7 h-7 w-7 text-gold rotate-180" />
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-foreground/90">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-gold flex items-center justify-center text-white font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
