export function VideoLayer({ isMain, onClick }: { isMain: boolean; onClick: () => void }) {
  return (
    <div className={isMain ? 'layer-main' : 'layer-pip'} onClick={onClick}>
      {!isMain && <div className="pip-overlay-text">Click to enter camera view</div>}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/background.mp4?v=2"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
