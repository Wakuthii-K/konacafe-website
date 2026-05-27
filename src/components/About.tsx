export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[0.5px] border-gold/10 grid grid-cols-12"
    >
      {/* Left: sticky heading */}
      <div className="col-span-12 lg:col-span-4 p-10 lg:p-16 border-b border-[0.5px] border-gold/10 lg:border-b-0 lg:border-r">
        <div className="lg:sticky lg:top-24">
<h2
            className="font-display font-normal italic text-ink leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            About
          </h2>
          <div className="w-8 h-[0.5px] bg-gold/50 mt-6" />
        </div>
      </div>

      {/* Right: prose */}
      <div className="col-span-12 lg:col-span-8 p-10 lg:p-16">
        <div className="max-w-2xl space-y-8">
          <h3
            className="font-display font-normal italic text-ink leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            We are the Kona Café Society.
          </h3>
          <div className="space-y-6 font-body text-muted leading-relaxed text-base">
            <p>
              A convening platform and collective that brings together thought
              leaders, policy makers, academics, domain experts and creatives to
              unpack the dynamics of our world.
            </p>
            <p className="font-display italic text-ink text-xl">
              Advancing consequential conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
