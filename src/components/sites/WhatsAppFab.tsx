import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[color:var(--gold)] animate-ping opacity-30" />
      <span className="relative h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-white shadow-gold hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
