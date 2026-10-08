const steps = [["01", "Dengar", "Kami mulai dengan memahami tujuan, audiens, dan cerita yang ingin disampaikan."], ["02", "Rancang", "Ide diterjemahkan menjadi konsep, rencana kerja, dan pengalaman yang terukur."], ["03", "Wujudkan", "Tim kami mengoordinasikan setiap detail agar semuanya siap pada waktunya."], ["04", "Rayakan", "Saatnya menikmati acara. Kami tetap siaga memastikan semuanya berjalan." ]];

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="page-width experience-grid">
        <div className="experience-intro"><div className="section-kicker"><span>03 / CARA KAMI BEKERJA</span><i /></div><div><p className="eyebrow eyebrow--dark">JELAS DI SETIAP LANGKAH</p><h2>Proses yang rapi.<br /><em>Hasil yang terasa.</em></h2><p className="body-copy">Kolaborasi yang baik membuat ide berkembang dan hari acara terasa lebih ringan. Ini gambaran perjalanan kita bersama.</p></div><span className="experience-watermark" aria-hidden="true">SS</span></div>
        <div className="steps-list">{steps.map(([number, title, description]) => <article className="step" key={number}><span className="step__number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="step__plus" aria-hidden="true">+</span></article>)}</div>
      </div>
    </section>
  );
}
