import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g2, h: "h-72" },
  { src: g1, h: "h-96" },
  { src: g3, h: "h-80" },
  { src: g6, h: "h-64" },
  { src: g5, h: "h-96" },
  { src: g4, h: "h-72" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Gallery</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Moments of Devotion & Experience
          </h2>
        </div>

        <div className="mt-14 columns-2 md:columns-3 gap-5 [column-fill:_balance]">
          {items.map((it, i) => (
            <div
              key={i}
              className={`mb-5 overflow-hidden rounded-3xl shadow-soft hover:shadow-luxe transition-shadow break-inside-avoid group`}
            >
              <img
                src={it.src}
                alt=""
                className={`w-full ${it.h} object-cover transition-transform duration-700 group-hover:scale-110`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
