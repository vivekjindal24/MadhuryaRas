import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sites/Header";
import { Hero } from "@/components/sites/Hero";
import { About } from "@/components/sites/About";
import { Services } from "@/components/sites/Services";
import { WhyChoose } from "@/components/sites/WhyChoose";
import { Gallery } from "@/components/sites/Gallery";
import { Testimonials } from "@/components/sites/Testimonials";
import { Community } from "@/components/sites/Community";
import { Founder } from "@/components/sites/Founder";
import { Contact } from "@/components/sites/Contact";
import { Footer } from "@/components/sites/Footer";
import { WhatsAppFab } from "@/components/sites/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhury Ras — Where Spirituality Meets Modern Living" },
      {
        name: "description",
        content:
          "Madhury Ras is a premium spiritual lifestyle platform offering Vedic astrology, sacred fragrances, devotional services, and spiritual hospitality.",
      },
      { property: "og:title", content: "Madhury Ras — Spiritual Lifestyle Platform" },
      {
        property: "og:description",
        content:
          "Astrology, sacred fragrances, spiritual stays and Vedic guidance — crafted with devotion.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Gallery />
        <Testimonials />
        <Community />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
