import { BrandMark } from "./brand-mark";

const links = [["Tentang", "about"], ["Layanan", "services"], ["Pengalaman", "experience"], ["Galeri", "gallery"]];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark compact />
        <nav className="main-nav" aria-label="Navigasi utama">
          {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="button button--small header-cta" href="#contact">Diskusikan acara <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
