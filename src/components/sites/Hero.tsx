import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g5 from "@/assets/g5.jpg";
import g2 from "@/assets/g2.jpg";
import { Ornament } from "./Ornament";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 lg:pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-glow opacity-70" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/70 shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Spiritual Lifestyle • Crafted with Devotion
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold">
            Where <em className="not-italic text-gold">Spirituality</em>
            <br /> Meets Modern Living
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Madhury Ras brings together astrology services, sacred fragrances,
            spiritual hospitality, Vedic guidance, and devotional experiences
            into one seamless platform.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-white shadow-gold hover:scale-[1.03] transition-transform"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Discover Madhury Ras
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Trusted spiritual experiences crafted with devotion and authenticity.
          </p>
        </div>

        {/* Right collage */}
        <div className="relative h-[520px] lg:h-[600px]">
          <div className="absolute top-0 right-0 w-[62%] h-[62%] rounded-3xl overflow-hidden shadow-luxe animate-float-slow">
            <img src={hero} alt="Sacred fragrance and temple" className="h-full w-full object-cover" width={800} height={800} />
          </div>
          <div className="absolute bottom-0 left-0 w-[48%] h-[44%] rounded-3xl overflow-hidden shadow-luxe animate-float-slower">
            <img src={g5} alt="Kundali chart" className="h-full w-full object-cover" loading="lazy" width={500} height={500} />
          </div>
          <div className="absolute top-[8%] left-0 w-[34%] h-[28%] rounded-2xl overflow-hidden shadow-soft animate-float-slow">
            <img src={g1} alt="Itra bottle" className="h-full w-full object-cover" loading="lazy" width={400} height={400} />
          </div>
          <div className="absolute bottom-[6%] right-[2%] w-[36%] h-[30%] rounded-2xl overflow-hidden shadow-soft animate-float-slower">
            <img src={g2} alt="Temple architecture" className="h-full w-full object-cover" loading="lazy" width={400} height={400} />
          </div>

          {/* floating badge */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 lg:-left-6 glass rounded-2xl px-4 py-3 shadow-luxe">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Since</div>
            <div className="font-display text-2xl font-semibold text-gold">2018</div>
          </div>
          <div className="absolute -bottom-4 right-10 glass rounded-full px-4 py-2 shadow-luxe text-xs font-medium">
            ✦ 5,000+ Souls Guided
          </div>
        </div>
      </div>

      <Ornament className="mt-20" />
    </section>
  );
}
