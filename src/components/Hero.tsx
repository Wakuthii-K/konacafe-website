export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 grid grid-cols-12 border-b border-[0.5px] border-gold/10 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/kona cafe.jpeg')" }}
      />

      {/* Left */}
      <div className="relative col-span-12 lg:col-span-7 flex flex-col justify-between p-10 lg:p-16 border-b border-[0.5px] border-gold/10 lg:border-b-0 lg:border-r">
        <div>
          <p className="font-display text-[10px] tracking-[0.22em] uppercase text-white/70">
            Advancing consequential conversations
          </p>
          <div className="w-12 h-[0.5px] bg-gold/50 mt-4" />
        </div>

        <div>
          <h1
            className="font-display font-bold text-white leading-none"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            Intellectually
            <br />
            restless minds
            <br />
            in Nairobi are
            <br />
            assembling...
          </h1>

          <div className="mt-10">
            <a
              href="/convections"
              className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.18em] uppercase bg-gold text-ink px-6 py-3 hover:bg-gold-light transition-colors font-medium"
            >
              Upcoming Conventions →
            </a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative col-span-12 lg:col-span-5 flex flex-col justify-end p-10 lg:p-16">
<p
            className="font-display font-bold text-white leading-none"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
          >
            Limited seats,
            <br />
            unlimited opinions...
          </p>
      </div>
    </section>
  );
}
