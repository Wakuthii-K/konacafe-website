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
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-white/70">
            Advancing consequential conversations
          </p>
          <div className="w-12 h-[0.5px] bg-gold/50 mt-4" />
        </div>

        <div>
          <h1
            className="font-display font-normal italic text-white leading-none"
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

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/gatherings"
              className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.18em] uppercase bg-gold text-ink px-6 py-3 hover:bg-gold-light transition-colors font-medium"
            >
              Gathering →
            </a>
            <a
              href="#about"
              className="inline-flex items-center font-body text-[10px] tracking-[0.18em] uppercase border border-[0.5px] border-white/40 text-white px-6 py-3 hover:border-white/70 transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative col-span-12 lg:col-span-5 flex flex-col justify-end p-10 lg:p-16">
<p className="font-body text-white/80 leading-relaxed text-base max-w-sm">
          A convening platform and collective that brings together thought
          leaders, policy makers, academics, domain experts and creatives to
          unpack the dynamics of our world.
        </p>
      </div>
    </section>
  );
}
