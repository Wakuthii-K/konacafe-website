const PILLARS = [
  {
    title: "Newsmakers & Trendsetters",
    desc: "Those shaping the conversation — journalists, influencers, and cultural voices defining what matters now.",
  },
  {
    title: "Policymakers",
    desc: "Legislators, advisors, and civil servants with the leverage to translate ideas into structural change.",
  },
  {
    title: "Academics & Practitioners",
    desc: "Researchers and on-the-ground practitioners bridging theory with lived experience and evidence.",
  },
  {
    title: "Inventors & Authors",
    desc: "Thinkers who build and write new worlds — from product inventors to the authors shaping our intellectual landscape.",
  },
  {
    title: "Technology Leaders",
    desc: "Builders and strategists at the frontier of technology, driving the systems that shape society.",
  },
  {
    title: "Artists & Creatives",
    desc: "Artists, designers, and creatives whose practice illuminates what data and argument alone cannot.",
  },
  {
    title: "The (Re)Public",
    desc: "Citizens, communities, and everyday voices whose lived realities ground every conversation in truth.",
  },
];

export default function WhoWeConvene() {
  return (
    <section id="convene" className="border-b border-[0.5px] border-gold/10 overflow-hidden">
      <div className="p-6 lg:p-16 border-b border-[0.5px] border-gold/10">
        <p className="font-display text-[9px] tracking-[0.22em] uppercase text-muted">
          Who We Convene
        </p>
      </div>
      {/* Gap-as-border grid technique */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.5px] bg-gold/10">
        {PILLARS.map((pillar, i) => {
          const isLast = i === PILLARS.length - 1;
          const remainder = PILLARS.length % 3;
          const spansFullRow = isLast && remainder === 1;
          return (
            <div
              key={pillar.title}
              className={`bg-cream p-6 lg:p-12 ${spansFullRow ? "lg:col-span-3 flex flex-col items-center text-center" : ""}`}
            >
              <h3 className="font-display font-normal text-ink text-2xl mt-3 mb-4">
                {pillar.title}
              </h3>
              <p className={`font-display text-muted text-sm leading-relaxed ${spansFullRow ? "max-w-sm" : ""}`}>
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
