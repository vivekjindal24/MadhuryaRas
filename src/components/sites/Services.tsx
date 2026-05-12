import { ArrowUpRight, Sparkles, Star, Home, Plus } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g5 from "@/assets/g5.jpg";
import g4 from "@/assets/g4.jpg";
import { Ornament } from "./Ornament";

const services = [
  {
    icon: Sparkles,
    title: "Shriji Ras Madhuri",
    desc: "Sacred fragrances inspired by devotion and purity.",
    cta: "Shop Collection",
    image: g1,
  },
  {
    icon: Star,
    title: "Shri Ji Astrology",
    desc: "Kundali, vastu, numerology, gemstones, matchmaking & Vedic guidance.",
    cta: "Explore Astrology",
    image: g5,
  },
  {
    icon: Home,
    title: "Shriji Ashray",
    desc: "Peaceful spiritual hospitality experiences for pilgrims and seekers.",
    cta: "View Stays",
    image: g4,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/40 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Our Offerings</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Explore Our Sacred Services
          </h2>
          <Ornament className="mt-6" />
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1.5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl glass flex items-center justify-center text-gold shadow-soft">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:gap-2.5 transition-all"
                >
                  {s.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}

          {/* Coming soon */}
          <article className="rounded-3xl border border-dashed border-[color:var(--gold)]/40 bg-gradient-warm p-8 flex flex-col items-center justify-center text-center min-h-[380px]">
            <div className="h-14 w-14 rounded-2xl bg-card flex items-center justify-center text-gold shadow-soft">
              <Plus className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">More Divine Services</h3>
            <p className="mt-2 text-sm text-muted-foreground">Coming soon to the Madhury Ras family.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
