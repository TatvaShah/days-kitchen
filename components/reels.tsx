"use client";

import { useEffect, useRef } from "react";
import { reels } from "@/lib/content";

export function Reels() {
  return (
    <div className="reel-row">
      {reels.map((reel) => (
        <Reel key={reel.src} reel={reel} />
      ))}
    </div>
  );
}

function Reel({ reel }: { reel: (typeof reels)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    video.muted = true;
    const play = video.play();
    if (play) play.catch(() => undefined);
  }, []);

  return (
    <figure className="reel-card">
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        poster={reel.poster}
        aria-label={reel.title}
      >
        <source src={reel.src} type="video/mp4" />
      </video>
      <figcaption>
        <h3>{reel.title}</h3>
        <p>{reel.caption}</p>
        <a href={reel.href} target="_blank" rel="noreferrer">
          Watch on Instagram
        </a>
      </figcaption>
    </figure>
  );
}
