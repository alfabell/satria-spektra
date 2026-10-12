const moments = [
  { title: "Panggung & pertunjukan", tag: "LIVE EXPERIENCE", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1100&q=85", className: "moment-card--large" },
  { title: "Detail yang bercerita", tag: "BRAND ACTIVATION", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85", className: "" },
  { title: "Ruang untuk terhubung", tag: "GATHERING", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85", className: "" },
];

export function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="page-width"><div className="gallery-heading"><div><div className="section-kicker"><span>04 / MOMEN YANG KAMI CIPTAKAN</span><i /></div><h2>Setiap acara,<br /><em>sebuah cerita.</em></h2></div><p className="body-copy">Beberapa inspirasi untuk membayangkan kemungkinan acara Anda.</p></div>
        <div className="moments-grid">{moments.map((moment, index) => <article key={moment.title} className={`moment-card ${moment.className}`} style={{ backgroundImage: `linear-gradient(0deg, rgba(8,9,10,.78), transparent 65%), url("${moment.image}")` }}><span className="moment-card__index">0{index + 1} — {moment.tag}</span><div><h3>{moment.title}</h3><span className="moment-card__arrow">↗</span></div></article>)}</div>
      </div>
    </section>
  );
}
