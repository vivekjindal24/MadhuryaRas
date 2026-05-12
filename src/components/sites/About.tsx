import { Compass, Flower2, Sparkles, ShieldCheck } from "lucide-react";
import about from "@/assets/about.jpg";

const features = [
  { icon: Compass, title: "Authentic Guidance", desc: "Vedic wisdom from trusted practitioners." },
  { icon: Flower2, title: "Spiritual Wellness", desc: "Rituals & products for inner balance." },
  { icon: Sparkles, title: "Sacred Experiences", desc: "Curated journeys of devotion." },
  { icon: ShieldCheck, title: "Trusted Services", desc: "Crafted with integrity and care." },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-15 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={about} alt="Sacred ritual" className="w-full h-[560px] object-cover" loading="lazy" width={800} height={1000} />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-luxe hidden md:block">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">A Quiet Promise</div>
            <div className="font-display text-lg">Devotion · Trust · Tradition</div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">About</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            What is Madhury Ras?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
            Madhury Ras is a spiritual lifestyle platform created to connect
            people with authentic Vedic experiences through astrology, sacred
            products, spiritual stays, and devotional services.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card/70 p-5 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-gold flex items-center justify-center text-white shadow-gold">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-xl font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
