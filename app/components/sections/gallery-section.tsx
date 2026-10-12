import { VideoList } from "./video-list";

export function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="page-width">
        <div className="gallery-heading">
          <div>
            <div className="section-kicker">
              <span>04 / MOMEN YANG KAMI CIPTAKAN</span>
              <i />
            </div>
            <h2>Setiap acara,<br /><em>sebuah cerita.</em></h2>
          </div>
          <p className="body-copy">Lihat langsung suasana dan momen dari berbagai acara yang kami hadirkan.</p>
        </div>

        <VideoList />
      </div>
    </section>
  );
}
