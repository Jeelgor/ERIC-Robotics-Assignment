import { Grip, Map, MapPin, Maximize, Target, Activity, User } from 'lucide-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={`${styles.sidebar} interactive`}>
      <div className={styles.logoContainer}>
        <div className={styles.logoText}>ERIC</div>
        <div className={styles.logoSubtext}>ROBOTICS</div>
      </div>
      
      <div className={styles.navIcons}>
        <div className={`${styles.iconWrap} ${styles.active}`}>
          <Grip size={24} />
        </div>
        <div className={styles.iconWrap}>
          <Map size={24} />
        </div>
        <div className={styles.iconWrap}>
          <MapPin size={24} />
        </div>
        <div className={styles.iconWrap}>
          <Maximize size={24} />
        </div>
        <div className={styles.iconWrap}>
          <Target size={24} />
        </div>
        <div className={styles.iconWrap}>
          <Activity size={24} />
        </div>
      </div>

      <div className={styles.bottomIcon}>
        <User size={24} />
      </div>
    </div>
  );
}
