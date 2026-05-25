"use client";

import { useState } from "react";

export default function JoinCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to Mailchimp or backend API
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      id="join"
      className="border-b border-[0.5px] border-gold/10 p-10 lg:p-24 flex flex-col items-center text-center"
    >
      <h2
        className="font-display font-normal italic text-ink leading-tight mb-6"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        Join the conversation.
      </h2>
      <p className="font-body text-muted text-sm max-w-md mb-10 leading-relaxed">
        Receive invitations to upcoming gatherings and dispatches from the
        collective. Limited places. Curated membership.
      </p>

      {submitted ? (
        <div className="flex items-center gap-4">
          <div className="w-8 h-[0.5px] bg-gold" />
          <p className="font-body text-[10px] tracking-[0.18em] uppercase text-gold">
            Welcome to the collective. We&apos;ll be in touch.
          </p>
          <div className="w-8 h-[0.5px] bg-gold" />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row w-full max-w-md"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-transparent border border-[0.5px] border-gold/30 px-5 py-3 font-body text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
          />
          <button
            type="submit"
            className="font-body text-[10px] tracking-[0.18em] uppercase bg-gold text-ink px-6 py-3 hover:bg-gold-light transition-colors font-medium whitespace-nowrap"
          >
            Join →
          </button>
        </form>
      )}
    </section>
  );
}
