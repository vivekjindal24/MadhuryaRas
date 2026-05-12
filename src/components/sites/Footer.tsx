import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-warm border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Madhury Ras" className="h-9 w-auto rounded" />
            <span className="font-display text-xl font-semibold">
              Madhury <span className="text-gold">Ras</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            A spiritual lifestyle platform blending Vedic wisdom with modern
            living — devotion, trust, and tradition.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["Home", "About", "Gallery", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["Shriji Ras Madhuri", "Shri Ji Astrology", "Shriji Ashray", "Vedic Guidance"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Connect</h4>
          <div className="mt-4 flex gap-3">
            {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/70 hover:text-white hover:bg-gradient-gold hover:border-transparent transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Subscribe to receive monthly devotional notes.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-muted-foreground">
          © 2026 Madhury Ras. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
