import styles from './BottomLeftHUD.module.css';

export function BottomLeftHUD() {
  return (
    <div className={`${styles.bottomLeftContainer} interactive`}>
      {/* Zoom Slider */}
      <div className={styles.sliderControl}>
        <div className={styles.sliderButton}>+</div>
        <div className={styles.sliderTrack}>
          <div className={styles.sliderKnob} style={{ bottom: '20%' }}></div>
        </div>
        <div className={styles.sliderButton}>-</div>
      </div>
    </div>
  );
}
