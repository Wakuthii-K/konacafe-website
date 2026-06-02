"use client";

const WORDS = [
  { text: "Screenings",        size: "clamp(1.5rem, 8vw, 10rem)",  opacity: 0.9,  indent: "0%" },
  { text: "Panel",             size: "clamp(1.4rem, 7vw, 6rem)",  opacity: 0.4,  indent: "18%" },
  { text: "Discussions",       size: "clamp(1.4rem, 7vw, 6rem)",  opacity: 0.55, indent: "10%" },
  { text: "Policy & Industry", size: "clamp(1rem, 5vw, 4rem)",    opacity: 0.85, indent: "0%" },
  { text: "Conversations",     size: "clamp(1rem, 5vw, 4rem)",    opacity: 0.85, indent: "0%" },
  { text: "Lectures",          size: "clamp(1.8rem, 9vw, 7.5rem)", opacity: 0.35, indent: "8%" },
  { text: "Workshops",         size: "clamp(1.8rem, 9vw, 7.5rem)", opacity: 0.9,  indent: "0%" },
];

export default function HowWeConvene() {
  return (
    <section className="bg-ink border-b border-[0.5px] border-gold/10 px-6 lg:px-16 py-10 lg:py-16 flex flex-col min-h-[90vh] overflow-hidden">
      <p className="font-display text-[9px] tracking-[0.22em] uppercase text-muted mb-8">
        How We Convene
      </p>
      <div className="flex flex-col justify-between flex-1">
        {WORDS.map(({ text, size, opacity, indent }) => (
          <span
            key={text}
            className="block font-display font-bold uppercase cursor-default how-we-convene-word"
            style={{
              fontSize: size,
              lineHeight: 0.92,
              color: `rgba(245, 240, 232, ${opacity})`,
              marginLeft: indent,
            }}
          >
            {text}
          </span>
        ))}
      </div>

      <style>{`
        .how-we-convene-word {
          transition: color 0.6s ease, letter-spacing 0.4s ease;
        }
        .how-we-convene-word:hover {
          color: #b8943a !important;
          letter-spacing: 0.04em;
        }
      `}</style>
    </section>
  );
}
