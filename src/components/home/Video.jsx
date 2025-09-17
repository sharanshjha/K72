import { useState } from 'react'

/**
 * Video component - plays a background video from `public/` with a fallback.
 * Uses a stateful `src` so the component can switch to an external fallback
 * if the local video fails to load (network or CSP issues). Keeps minimal
 * markup to avoid re-renders and layout thrashing.
 */
const Video = () => {
  // Primary source served from public folder for best caching and perf
  const [videoSrc, setVideoSrc] = useState('/videos/India.mp4')

  // If the video cannot load, switch to a remote fallback (small chance).
  // This keeps the UI usable even if the local asset fails to serve.
  const handleError = () => {
    setVideoSrc(
      'https://storage.googleapis.com/your-bucket/India-fallback.mp4'
    )
  }

  return (
    <div className="h-full w-full bg-black">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={videoSrc}
        onError={handleError}
      >
        {/* Provide a simple fallback for browsers that don't support <video> */}
        Your browser does not support the video tag. The background will be
        shown as a solid color.
      </video>
    </div>
  )
}

export default Video
