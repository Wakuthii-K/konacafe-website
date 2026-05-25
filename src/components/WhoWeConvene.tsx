const PILLARS = [
  {
    title: "Thought Leaders",
    desc: "Practitioners and public intellectuals whose ideas cut across disciplines and challenge dominant narratives.",
  },
  {
    title: "Policy Makers",
    desc: "Legislators, advisors, and civil servants with the leverage to translate ideas into structural change.",
  },
  {
    title: "Academics",
    desc: "Researchers and scholars bringing empirical rigour and theoretical depth to the conversations that matter.",
  },
  {
    title: "Domain Experts",
    desc: "Specialists in fields from ecology to finance whose deep knowledge grounds discussion in reality.",
  },
  {
    title: "Creatives",
    desc: "Artists, writers, filmmakers, and designers whose practice illuminates what data and argument alone cannot.",
  },
  {
    title: "Changemakers",
    desc: "Organisers, advocates, and entrepreneurs operating at the frontier of social and environmental transformation.",
  },
];

export default function WhoWeConvene() {
  return (
    <section id="convene" className="border-b border-[0.5px] border-gold/10">
      <div className="p-10 lg:p-16 border-b border-[0.5px] border-gold/10">
        <p className="font-body text-[9px] tracking-[0.22em] uppercase text-muted">
          002 — Who We Convene
        </p>
      </div>
      {/* Gap-as-border grid technique */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.5px] bg-gold/10">
        {PILLARS.map((pillar, i) => (
          <div key={pillar.title} className="bg-ink p-10 lg:p-12">
            <span className="font-body text-[9px] tracking-[0.18em] text-gold/50">
              0{i + 1}
            </span>
            <h3 className="font-display font-normal text-cream text-2xl mt-3 mb-4">
              {pillar.title}
            </h3>
            <p className="font-body text-muted text-xs leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
