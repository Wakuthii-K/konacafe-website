import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
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

      <div className="hidden md:flex items-center gap-8">
        {(
          [
            { label: "About", href: "#about" },
            { label: "Gatherings", href: "/gatherings" },
          ] as const
        ).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-display text-[10px] tracking-[0.18em] uppercase text-muted hover:text-cream transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

    </nav>
  );
}
