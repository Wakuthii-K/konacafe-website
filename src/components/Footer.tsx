import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 lg:px-16 py-8">
      <Image
        src="/kona_cafe_logo_gold_transparent.png"
        alt="Kona Café Society"
        width={120}
        height={30}
        className="h-14 w-auto opacity-60"
      />
      <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted">
        © 2024 Kona Café Society. All rights reserved.
      </p>
    </footer>
  );
}
