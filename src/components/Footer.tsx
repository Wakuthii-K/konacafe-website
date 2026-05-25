import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 lg:px-16 py-8">
      <Image
        src="/kona_cafe_logo_black_transparent.png"
        alt="Kona Café Society"
        width={120}
        height={30}
        className="h-14 w-auto opacity-60"
      />
      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/konacafe.ke/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-ink transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={18} strokeWidth={1.5} />
        </a>
        <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted">
          © 2024 Kona Café Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
