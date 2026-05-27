"use client";

const WORDS = [
  { text: "Screenings",        size: "clamp(5rem, 13vw, 11rem)",  opacity: 0.9,  align: "left"   },
  { text: "Panel",             size: "clamp(5rem, 13vw, 11rem)",  opacity: 0.4,  align: "right"  },
  { text: "Discussions",       size: "clamp(4rem, 10vw, 8.5rem)", opacity: 0.55, align: "left"   },
  { text: "Policy & Industry", size: "clamp(2.5rem, 6vw, 5rem)",  opacity: 0.85, align: "right"  },
  { text: "Conversations",     size: "clamp(3rem, 7.5vw, 6.5rem)",opacity: 0.85, align: "left"   },
  { text: "Lectures",          size: "clamp(5rem, 12vw, 10rem)",  opacity: 0.35, align: "right"  },
  { text: "Workshops",         size: "clamp(4rem, 10vw, 8.5rem)", opacity: 0.9,  align: "left"   },
  { text: "Salons",            size: "clamp(5rem, 12vw, 10rem)",  opacity: 0.55, align: "right"  },
];

export default function HowWeConvene() {
  return (
    <section className="bg-ink border-b border-[0.5px] border-gold/10 px-10 lg:px-16 py-16 flex flex-col min-h-[90vh]">
      <p className="font-body text-[9px] tracking-[0.22em] uppercase text-muted mb-8">
        How We Convene
      </p>
      <div className="flex flex-col justify-between flex-1">
        {WORDS.map(({ text, size, opacity, align }) => (
          <span
            key={text}
            className="block font-display font-bold uppercase cursor-default how-we-convene-word"
            style={{
              fontSize: size,
              lineHeight: 0.92,
              color: `rgba(245, 240, 232, ${opacity})`,
              textAlign: align as "left" | "right",
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
