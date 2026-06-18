import styles from './BottomRightHUD.module.css';

export function BottomRightHUD() {
  return (
    <div className={`${styles.bottomRightContainer} interactive`}>
      
      {/* Emergency Stop Button */}
      <div className={styles.eStopButton}>
        <div className={styles.eStopInner}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.syncIcon}>
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </div>
        <svg viewBox="0 0 100 100" className={styles.eStopTextSvg}>
          <path id="curve" d="M 10,50 A 40,40 0 1,1 90,50 A 40,40 0 1,1 10,50" fill="transparent" />
          <text width="500">
            <textPath href="#curve" startOffset="25%" textAnchor="middle" className={styles.eStopTextTop}>EMERGENCY</textPath>
            <textPath href="#curve" startOffset="75%" textAnchor="middle" className={styles.eStopTextBottom}>STOP</textPath>
          </text>
        </svg>
      </div>

      {/* D-Pad */}
      <div className={styles.dPad}>
        <div className={styles.dPadButton} style={{ top: '8%', left: '50%', transform: 'translate(-50%, 0)' }}>W</div>
        <div className={styles.dPadButton} style={{ bottom: '8%', left: '50%', transform: 'translate(-50%, 0)' }}>S</div>
        <div className={styles.dPadButton} style={{ left: '8%', top: '50%', transform: 'translate(0, -50%)' }}>A</div>
        <div className={styles.dPadButton} style={{ right: '8%', top: '50%', transform: 'translate(0, -50%)' }}>D</div>
        
        <div className={styles.dPadCenter}>
          <div className={styles.centerText}>H</div>
          <div className={styles.centerSubText}>key</div>
        </div>
      </div>

    </div>
  );
}
