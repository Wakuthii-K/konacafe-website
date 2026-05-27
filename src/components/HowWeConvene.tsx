"use client";

const WORDS = [
  { text: "Screenings",        size: "clamp(5rem, 12vw, 10rem)",  opacity: 0.9,  indent: "0%" },
  { text: "Panel",             size: "clamp(3rem, 7vw, 6rem)",    opacity: 0.4,  indent: "18%" },
  { text: "Discussions",       size: "clamp(3rem, 7vw, 6rem)",    opacity: 0.55, indent: "10%" },
  { text: "Policy & Industry", size: "clamp(2rem, 5vw, 4rem)",    opacity: 0.85, indent: "0%" },
  { text: "Conversations",     size: "clamp(2rem, 5vw, 4rem)",    opacity: 0.85, indent: "0%" },
  { text: "Lectures",          size: "clamp(4rem, 9vw, 7.5rem)",  opacity: 0.35, indent: "8%" },
  { text: "Workshops",         size: "clamp(4rem, 9vw, 7.5rem)",  opacity: 0.9,  indent: "0%" },
  { text: "Salons",            size: "clamp(1.8rem, 4vw, 3rem)",  opacity: 0.55, indent: "22%" },
];

export default function HowWeConvene() {
  return (
    <section className="bg-ink border-b border-[0.5px] border-gold/10 px-10 lg:px-16 py-16">
      <p className="font-body text-[9px] tracking-[0.22em] uppercase text-muted mb-12">
        How We Convene
      </p>
      <div className="flex flex-col gap-1">
        {WORDS.map(({ text, size, opacity, indent }) => (
          <span
            key={text}
            className="block font-display font-bold uppercase transition-colors duration-300 cursor-default hover:text-gold"
            style={{
              fontSize: size,
              lineHeight: 0.92,
              opacity,
              marginLeft: indent,
              color: "var(--color-cream)",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
