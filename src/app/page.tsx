import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import HowWeConvene from "@/components/HowWeConvene";
import ConveneDescription from "@/components/ConveneDescription";
import WhoWeConvene from "@/components/WhoWeConvene";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <HowWeConvene />
        <ConveneDescription />
        <WhoWeConvene />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
