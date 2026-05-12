import { Play, Instagram, Youtube } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const reels = [
  { src: g3, label: "Daily Mantra", icon: Instagram },
  { src: g1, label: "Itra Story", icon: Instagram },
  { src: g6, label: "Diya Ritual", icon: Youtube },
  { src: g2, label: "Temple Walk", icon: Instagram },
  { src: g5, label: "Kundali Tips", icon: Youtube },
  { src: g4, label: "Ashray Tour", icon: Instagram },
];

export function Community() {
  const loop = [...reels, ...reels];
  return (
    <section className="py-24 lg:py-32 bg-secondary/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Community</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            From Our Community
          </h2>
          <p className="mt-4 text-muted-foreground">Devotional reels, rituals, and stories from across India.</p>
        </div>
      </div>

      <div className="mt-14 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--ivory)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--ivory)] to-transparent z-10" />
        <div className="flex gap-5 animate-marquee w-max">
          {loop.map((r, i) => (
            <div
              key={i}
              className="relative w-[220px] aspect-[9/14] rounded-2xl overflow-hidden shadow-soft group cursor-pointer"
            >
              <img src={r.src} alt={r.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 glass rounded-full p-1.5">
                <r.icon className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-luxe">
                  <Play className="h-5 w-5 text-gold fill-current" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
