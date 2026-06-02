import FeaturedEvent from "@/components/FeaturedEvent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFeaturedEvent } from "@/lib/notion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gatherings — Kona Café Society",
  description: "Upcoming and past gatherings by the Kona Café Society.",
};

export default async function GatheringsPage() {
  const event = await getFeaturedEvent();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="p-10 lg:p-16 border-b border-[0.5px] border-gold/20">
          <p className="font-display text-[9px] tracking-[0.22em] uppercase text-muted">
            Gatherings
          </p>
        </div>
        <FeaturedEvent event={event} />
      </main>
      <Footer />
    </>
  );
}
