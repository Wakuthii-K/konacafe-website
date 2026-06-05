"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Gatherings", href: "/gatherings" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-cream/80 backdrop-blur-md border-b border-[0.5px] border-gold/20">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/kona_cafe_logo_black_transparent.png"
            alt="Kona Café Society"
            width={160}
            height={40}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1px] bg-ink transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[1px] bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1px] bg-ink transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-cream border-b border-[0.5px] border-gold/20 flex flex-col md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors px-8 py-5 border-b border-[0.5px] border-gold/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
