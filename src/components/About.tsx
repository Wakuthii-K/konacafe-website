export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[0.5px] border-gold/10 grid grid-cols-12"
    >
      {/* Left: sticky heading */}
      <div className="col-span-12 lg:col-span-4 p-10 lg:p-16 border-b border-[0.5px] border-gold/10 lg:border-b-0 lg:border-r">
        <div className="lg:sticky lg:top-24">
          <p className="font-body text-[9px] tracking-[0.22em] uppercase text-muted mb-4">
            001
          </p>
          <h2
            className="font-display font-normal italic text-cream leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            About the
            <br />
            Collective
          </h2>
          <div className="w-8 h-[0.5px] bg-gold/50 mt-6" />
        </div>
      </div>

      {/* Right: prose */}
      <div className="col-span-12 lg:col-span-8 p-10 lg:p-16">
        <div className="max-w-2xl space-y-6 font-body text-warm leading-relaxed text-base">
          <p>
            Kona Café Society is a curated intellectual collective based in
            Nairobi. We exist at the intersection of deep curiosity and
            consequential action — bringing together voices from across
            disciplines to interrogate the ideas that shape how we live, govern,
            and imagine the future.
          </p>
          <p>
            Each gathering anchors around a documentary, a text, or a
            provocation — then opens into a structured conversation designed to
            produce real intellectual friction. Not consensus, but clarity. Not
            agreement, but understanding.
          </p>
          <p>
            Our format is deliberate: an intimate room, a curated audience, and
            a set of voices selected not for their titles, but for the rigour
            and originality they bring. We convene quarterly, in Nairobi and
            beyond.
          </p>
          <p>
            The Kona Café Society is not a networking event. It is not a panel
            series. It is a fellowship of people who believe that the quality of
            our questions determines the quality of our future.
          </p>
        </div>
      </div>
    </section>
  );
}
