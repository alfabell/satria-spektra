import Image from "next/image";

const mediaPartners = [
  {
    name: "CV Nur Tech Solution",
    shortName: "NTS",
    src: "/media-partner-nts.jpeg",
    width: 447,
    height: 288,
    className: "partner-logo--nts",
  },
  {
    name: "SB Production",
    shortName: "SB Production",
    src: "/media-partner-sb-production.jpeg",
    width: 1254,
    height: 1254,
    className: "partner-logo--sb",
  },
  {
    name: "Kuda Emas Indonesia Berlian",
    shortName: "Kuda Emas Indonesia",
    src: "/media-partner-kuda-emas.png",
    width: 1280,
    height: 1280,
    className: "partner-logo--kuda-emas",
  },
];

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="page-width contact-inner">
        <div className="section-kicker section-kicker--light">
          <span>05 / MULAI CERITAMU</span>
          <i />
        </div>

        <div className="contact-main">
          <p className="eyebrow">PUNYA RENCANA ACARA?</p>
          <h2>Mari buat sesuatu<br /><em>yang berarti.</em></h2>
          <a className="button button--light" href="https://wa.me/6285353736886" target="_blank" rel="noreferrer">
            Hubungi tim kami <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-meta">
          <span>EMAIL<br /><b>satriaspektra.production@gmail.com</b></span>
          <span>WHATSAPP<br /><b>+62 853 5373 6886</b></span>
          <span>INSTAGRAM<br /><b>satriaspektra.production</b></span>
          <span>TIKTOK<br /><b>satriaspektra.production</b></span>
          <span>LOKASI<br /><b>Surabaya, Indonesia</b></span>
        </div>

        <div className="media-partners" aria-labelledby="media-partners-title">
          <div className="media-partners__heading">
            <div>
              <p className="eyebrow">BERSAMA MENGHADIRKAN PENGALAMAN</p>
              <h3 id="media-partners-title">Media partner</h3>
            </div>
            <span>Terima kasih atas dukungannya</span>
          </div>
          <ul className="media-partners__list">
            {mediaPartners.map((partner) => (
              <li className="media-partners__item" key={partner.shortName}>
                <Image
                  className={`partner-logo ${partner.className}`}
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  sizes="(max-width: 640px) 44vw, 260px"
                />
              </li>
            ))}
          </ul>
        </div>

        <span className="contact-watermark" aria-hidden="true">S</span>
      </div>
    </section>
  );
}
