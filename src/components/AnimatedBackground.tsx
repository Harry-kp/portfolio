export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Gradient mesh blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/[0.04] dark:bg-amber-500/[0.07] blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-400/[0.03] dark:bg-orange-400/[0.05] blur-[120px]" />
      <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-amber-300/[0.02] dark:bg-amber-300/[0.03] blur-[100px]" />

      {/* Grain texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25] dark:opacity-[0.35]">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
