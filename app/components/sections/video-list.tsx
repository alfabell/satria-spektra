"use client";

import { useState } from "react";

const videos = [
  { file: "Vid 2.mp4", title: "Event Highlight 01", category: "LIVE EXPERIENCE" },
  { file: "Vid 3.mp4", title: "Event Highlight 02", category: "STAGE MOMENT" },
  { file: "Vid 4.mp4", title: "Event Highlight 03", category: "EVENT PRODUCTION" },
  { file: "Vid 5.mp4", title: "Event Highlight 04", category: "LIVE EXPERIENCE" },
  { file: "Vid 6.mp4", title: "Event Highlight 05", category: "STAGE MOMENT" },
  { file: "Vid 7.mp4", title: "Event Highlight 06", category: "EVENT PRODUCTION" },
  { file: "Vid 8.mp4", title: "Event Highlight 07", category: "LIVE EXPERIENCE" },
  { file: "WhatsApp Video 2026-10-12 at 10.55.30 AM.mp4", title: "Event Highlight 08", category: "EVENT RECAP" },
];

const initiallyVisible = 4;

export function VideoList() {
  const [showAll, setShowAll] = useState(false);
  const visibleVideos = showAll ? videos : videos.slice(0, initiallyVisible);

  return (
    <>
      <div className="portfolio-videos" id="portfolio-video-list">
        {visibleVideos.map((video, index) => (
          <article className="portfolio-video-card" key={video.file}>
            <div className="portfolio-video-card__screen">
              <video controls preload="metadata" playsInline aria-label={`Putar ${video.title}`}>
                <source src={`/videos/${encodeURIComponent(video.file)}`} type="video/mp4" />
                Browser kamu belum mendukung pemutaran video.
              </video>
              <span className="portfolio-video-card__number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="portfolio-video-card__details">
              <span>{video.category}</span>
              <h3>{video.title}</h3>
            </div>
          </article>
        ))}
      </div>
      {videos.length > initiallyVisible && (
        <div className="portfolio-videos__actions">
          <button
            className="portfolio-videos__toggle"
            type="button"
            aria-expanded={showAll}
            aria-controls="portfolio-video-list"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Tampilkan lebih sedikit" : `Lihat semua (+${videos.length - initiallyVisible})`}
            <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
          </button>
        </div>
      )}
    </>
  );
}
