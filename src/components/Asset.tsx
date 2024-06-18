import { FunctionComponent } from "react";
import styles from "./Asset.module.css";

export type AssetType = {
  className?: string;
};

const Asset: FunctionComponent<AssetType> = ({ className = "" }) => {
  return (
    <div className={[styles.asset, className].join(" ")}>
      <div className={styles.assetCard}>
        <img
          className={styles.assetImageIcon}
          loading="lazy"
          alt=""
          src="/vector-11@2x.png"
        />
        <div className={styles.assetTagContainer}>
          <div className={styles.tag}>
            <div className={styles.live}>Live</div>
          </div>
        </div>
        <div className={styles.slideIndicator}>
          <div className={styles.autoLayoutHorizontal}>
            <div className={styles.inactiveDot} />
            <div className={styles.activeDot} />
            <div className={styles.dot} />
          </div>
        </div>
      </div>
      <div className={styles.assetDetails}>
        <div className={styles.autoLayoutVertical}>
          <div className={styles.autoLayoutVertical1}>
            <div className={styles.bungalow}>Bungalow</div>
            <div className={styles.autoLayoutHorizontal1}>
              <img
                className={styles.locationIcon}
                loading="lazy"
                alt=""
                src="/frame-111@2x.png"
              />
              <div className={styles.leedsCityCenter}>Leeds city center</div>
            </div>
          </div>
          <div className={styles.div}>$755.00</div>
        </div>
      </div>
    </div>
  );
};

export default Asset;
