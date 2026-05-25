import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedEvent from "@/components/FeaturedEvent";
import About from "@/components/About";
import WhoWeConvene from "@/components/WhoWeConvene";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";
import { getFeaturedEvent } from "@/lib/notion";

export default async function Home() {
  const event = await getFeaturedEvent();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeaturedEvent event={event} />
        <About />
        <WhoWeConvene />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
