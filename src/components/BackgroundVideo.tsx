import styles from './BackgroundVideo.module.css';

export function BackgroundVideo() {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        src="/background.mp4"
      />
    </div>
  );
}
