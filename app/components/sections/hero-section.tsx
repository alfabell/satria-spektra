export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__grid page-width">
        <div className="hero__copy">
          <div className="eyebrow"><span className="eyebrow__line" /> EVENT & EXPERIENCE PRODUCTION</div>
          <h1>Momen besar<br />dimulai dari <em>ide.</em></h1>
          <p className="hero__intro">Kami merancang pengalaman yang terasa, terlihat, dan terus diingat. Dari ide pertama hingga momen terakhir.</p>
          <div className="hero__actions">
            <a className="button" href="#contact">Ceritakan rencanamu <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#about">Kenali Satria Spektra <span aria-hidden="true">↓</span></a>
          </div>
          
        </div>
        <div className="hero__visual" aria-label="Panggung acara dengan pencahayaan dramatis">
          <div className="hero__photo" />
          <div className="hero__visual-shade" />
          <div className="hero__frame" />
          <div className="hero__vertical-label">CREATING THE SPECTACULAR <span>— EST. 20XX</span></div>
          <div className="hero__caption"><span className="caption-dot" /> BUILT AROUND YOUR MOMENT <span className="caption-rule" /></div>
          <div className="hero__number">01 <span>/ 04</span></div>
        </div>
      </div>
      <div className="hero__bottom page-width"><span>SURABAYA · INDONESIA</span><span>EVENT DESIGN & PRODUCTION</span><a href="#about" aria-label="Gulir ke bagian tentang">SCROLL TO EXPLORE <b>↓</b></a></div>
    </section>
  );
}
