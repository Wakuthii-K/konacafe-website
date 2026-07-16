import ConvectionsView from "@/components/ConvectionsView";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFeaturedEvent, getPastEvents } from "@/lib/notion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conventions — Kona Cafe Society",
  description: "Upcoming and past conventions by the Kona Cafe Society.",
};

export default async function ConvectionsPage() {
  const [featured, past] = await Promise.all([
    getFeaturedEvent(),
    getPastEvents(),
  ]);

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-cream">
        <div
          className="mx-auto w-full"
          style={{
            maxWidth: 1240,
            paddingTop: 56,
            paddingBottom: 90,
            paddingLeft: 64,
            paddingRight: 64,
          }}
        >
          {/* Header */}
          <header className="mb-12">
            <p className="font-display text-[12px] font-semibold tracking-[0.12em] uppercase text-gold mb-4">
              KONACAFE
            </p>
            <h1 className="font-display font-bold text-[56px] leading-none text-ink mb-4">
              Conventions
            </h1>
            <div className="w-12 h-1 bg-gold" />
          </header>

          {/* Content grid */}
          <ConvectionsView featured={featured} past={past} />
        </div>
      </main>
      <Footer />
    </>
  );
}
