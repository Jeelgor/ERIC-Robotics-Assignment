import { Pause, ArrowRight, Battery, Signal } from 'lucide-react';
import styles from './TopHUD.module.css';

export function TopHUD() {
  return (
    <div className={styles.topHudContainer}>
      
      {/* Top Left */}
      <div className={`${styles.topLeft} interactive`}>
        <div className={styles.statusPill}>
          <span className={styles.statusLabel}>Status</span>
          <span className={styles.statusText}>On Mission 1234</span>
          <div className={styles.pauseBtn}>
            <Pause size={14} color="#fff" fill="#fff" />
          </div>
        </div>
        <button className={styles.quickGoalBtn}>
          <span className={styles.btnText}>QUICK GOAL</span>
          <div className={styles.arrowCircle}>
            <ArrowRight size={14} color="#fff" />
          </div>
        </button>
      </div>

      {/* Top Center */}
      <div className={`${styles.topCenter} interactive`}>
        <div className={styles.metricsBar}>
          <div className={styles.metricItem}>
            <span>100%</span>
            <Battery size={16} color="#4ade80" />
          </div>
          <div className={styles.metricItem}>
            <Signal size={16} color="#eab308" />
            <span>Strong</span>
          </div>
          <div className={styles.metricItem}>
            <span>Failsafe</span>
            <span className={styles.statusValue}>Okay</span>
            <div className={styles.greenDot}></div>
          </div>
          <div className={styles.metricItem}>
            <span>System</span>
            <span className={styles.statusValue}>Okay</span>
            <div className={styles.greenDot}></div>
          </div>
        </div>
        <div className={styles.viewTab}>
          Camera View
        </div>
      </div>

      {/* Top Right */}
      <div className={`${styles.topRight} interactive`}>
        <div className={styles.modeTogglePill}>
          <span className={styles.modeLabel}>MODE</span>
          <div className={styles.modeSwitch}>
            <div className={`${styles.modeOption} ${styles.activeMode}`}>AUTO</div>
            <div className={styles.modeOption}>MANUAL</div>
          </div>
        </div>
        <button className={styles.initiateBtn}>
          <span className={styles.btnText}>INITIATE</span>
          <div className={styles.arrowCircle}>
            <ArrowRight size={14} color="#fff" />
          </div>
        </button>
      </div>

    </div>
  );
}
