import Image from "next/image";

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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
        </a>
        <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted">
          © 2026 Kona Café Society.
        </p>
      </div>
    </footer>
  );
}
