// src/components/BackgroundVideo.jsx
export default function BackgroundVideo({ videoSrc, overlay = true, children, className }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      {overlay && <div className="absolute inset-0 bg-black/40"></div>}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
