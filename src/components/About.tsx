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
            About the
            <br />
            Collective
          </h2>
          <div className="w-8 h-[0.5px] bg-gold/50 mt-6" />
        </div>
      </div>

      {/* Right: prose */}
      <div className="col-span-12 lg:col-span-8 p-10 lg:p-16">
        <div className="max-w-2xl space-y-6 font-body text-muted leading-relaxed text-base">
          <p>
            Kona Café Society is a collective consisting of literati,
            conversationalists, and leading creative entrepreneurs. Our mission
            is to advance consequential conversations.
          </p>
          <p>
            We bring together newsmakers and trendsetters; policymakers,
            academics and practitioners; inventors, authors, technology leaders,
            artists and creatives; and the (re)public under one roof to explore
            the dynamics of our contemporary society and world, and chart a
            collectively safe, predictable, and innovative future.
          </p>
          <p>
            We create the reality we so desire to see exist, even as we make
            meaning of the present realities.
          </p>
          <p>
            At the Kona Café Society, you hear it first, and firsthand — and
            see beyond the obvious.
          </p>
        </div>
      </div>
    </section>
  );
}
