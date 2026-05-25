const TOPICS = [
  "Policy & Governance",
  "Climate & Environment",
  "Technology & Society",
  "Creative Practice",
  "Economic Justice",
  "Land & Sovereignty",
  "Knowledge Production",
  "Urban Futures",
];

export default function Marquee() {
  const items = [...TOPICS, ...TOPICS];

  return (
    <div className="overflow-hidden border-b border-[0.5px] border-gold/10 py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((topic, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8 font-body text-[10px] tracking-[0.20em] uppercase text-muted"
          >
            {topic}
            <span className="text-gold/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
