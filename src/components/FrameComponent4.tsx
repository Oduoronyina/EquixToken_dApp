import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.settingsParent, className].join(" ")}>
      <div className={styles.settings} />
      <div className={styles.toggle}>
        <button className={styles.buttonSecondary}>
          <a className={styles.label}>New Upload</a>
        </button>
        <button className={styles.buttonSecondary1}>
          <div className={styles.label1}>Recent</div>
        </button>
      </div>
      <div className={styles.settings1}>
        <img
          className={styles.iconSettings}
          loading="lazy"
          alt=""
          src="/icon--settings@2x.png"
        />
      </div>
    </header>
  );
};

export default FrameComponent4;
