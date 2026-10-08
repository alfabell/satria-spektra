export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#home" aria-label="Satria Spektra Production, beranda">
      <span className="brand__symbol" aria-hidden="true"><span>S</span><i /></span>
      <span className="brand__name">SATRIA <b>SPEKTRA</b><small>PRODUCTION</small></span>
    </a>
  );
}
