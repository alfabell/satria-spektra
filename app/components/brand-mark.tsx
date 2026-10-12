import Image from "next/image";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand-mark-layout ${compact ? "brand-mark-layout--compact" : ""}`} href="#home" aria-label="Satria Spektra Production, beranda">
      <Image className="brand-mark-image" src="/satria-spektra-logo.png" alt="" width={1280} height={1280} priority />
      <span className="brand-mark-name">SATRIA <b>SPEKTRA</b><small>PRODUCTION</small></span>
    </a>
  );
}
