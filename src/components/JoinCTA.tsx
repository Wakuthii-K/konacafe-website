"use client";

import { useState } from "react";

export default function JoinCTA() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    organization: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  }

  function handleClose() {
    setOpen(false);
    setSubmitted(false);
    setForm({ firstName: "", lastName: "", email: "", profession: "", organization: "" });
  }

  return (
    <section
      id="join"
      className="border-b border-[0.5px] border-gold/10 p-10 lg:p-24 flex flex-col items-center text-center"
    >
      <h2
        className="font-display font-normal text-ink leading-tight mb-6"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        Join the Conversation.
      </h2>
      <p className="font-display text-muted text-sm max-w-md mb-3 leading-relaxed">
        Receive invitations to upcoming convections.
      </p>
      <p className="font-display text-muted text-sm max-w-md mb-6 leading-relaxed">
        Limited Places. Curated Membership.
      </p>

      <button
        onClick={() => setOpen(true)}
        className="font-display text-[10px] tracking-[0.18em] uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-light transition-colors font-medium"
      >
        Join the Conversation →
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm">
          <div className="relative bg-cream w-full max-w-lg border border-[0.5px] border-gold/20 p-8 lg:p-12">
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-5 font-display text-muted hover:text-ink transition-colors text-xl leading-none"
            >
              ×
            </button>

            {submitted ? (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="w-8 h-[0.5px] bg-gold" />
                <p className="font-display text-[10px] tracking-[0.18em] uppercase text-gold">
                  Welcome to the Kona Cafe Society. We will be in touch.
                </p>
                <div className="w-8 h-[0.5px] bg-gold" />
              </div>
            ) : (
              <>
                <p className="font-display text-[9px] tracking-[0.22em] uppercase text-muted mb-6">
                  Join the Conversation
                </p>
                <h3
                  className="font-display font-normal text-ink leading-tight mb-8"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  Tell us about yourself.
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="bg-transparent border border-[0.5px] border-gold/30 px-4 py-3 font-display text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="bg-transparent border border-[0.5px] border-gold/30 px-4 py-3 font-display text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-[0.5px] border-gold/30 px-4 py-3 font-display text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                  />
                  <input
                    type="text"
                    name="profession"
                    placeholder="Domain / What You Do / Area of Expertise / Profession"
                    value={form.profession}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-[0.5px] border-gold/30 px-4 py-3 font-display text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                  />
                  <input
                    type="text"
                    name="organization"
                    placeholder="Your Organization (Freelance / Independent if not affiliated)"
                    value={form.organization}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-[0.5px] border-gold/30 px-4 py-3 font-display text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                  />
                  <button
                    type="submit"
                    className="mt-2 font-display text-[10px] tracking-[0.18em] uppercase bg-gold text-ink px-6 py-4 hover:bg-gold-light transition-colors font-medium"
                  >
                    Submit →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
