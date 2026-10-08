const services = [
  ["01", "Perencanaan acara", "Konsep, strategi, dan perencanaan yang disusun sesuai tujuan serta karakter acara."],
  ["02", "Produksi & panggung", "Tata panggung, audio visual, pencahayaan, dan kebutuhan teknis yang terkoordinasi."],
  ["03", "Pengalaman brand", "Aktivasi dan pengalaman interaktif yang menghubungkan brand dengan audiens."],
  ["04", "Koordinasi acara", "Pengelolaan alur, vendor, dan detail lapangan agar hari acara berjalan lancar."],
];

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="page-width">
        <div className="section-heading"><div className="section-kicker section-kicker--light"><span>02 / YANG KAMI KERJAKAN</span><i /></div><div><p className="eyebrow">DARI IDE HINGGA EKSEKUSI</p><h2>Satu tim untuk<br /><em>semua detail.</em></h2></div><p className="section-heading__note">Setiap acara punya kebutuhan berbeda. Kami membantu menyatukan bagian-bagiannya menjadi satu pengalaman yang terasa menyeluruh.</p></div>
        <div className="service-list">{services.map(([number, title, description]) => <article className="service-row" key={number}><span className="service-row__number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-row__arrow" aria-hidden="true">↗</span></article>)}</div>
      </div>
    </section>
  );
}
