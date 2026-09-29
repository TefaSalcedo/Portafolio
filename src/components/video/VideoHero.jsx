import { useEffect, useRef } from 'react';

// Video con lazy-load: no descarga nada hasta que la sección entra al viewport.
function VideoHero({ src, poster, titulo }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <figure className="video-card">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={titulo}
      />
      <figcaption className="video-caption">{titulo}</figcaption>
    </figure>
  );
}

export default VideoHero;
