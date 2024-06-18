import { FunctionComponent } from "react";
import styles from "./FooterInfo.module.css";

export type FooterInfoType = {
  className?: string;
};

const FooterInfo: FunctionComponent<FooterInfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.footerInfo, className].join(" ")}>
      <div className={styles.socialIcons}>
        <div className={styles.bubbleIcons}>
          <div className={styles.iconBackground} />
          <img
            className={styles.facebookIcon}
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
        </div>
        <div className={styles.bubbleIcons1}>
          <div className={styles.bubbleIconsChild} />
          <img
            className={styles.linkedinIcon}
            loading="lazy"
            alt=""
            src="/linkedin.svg"
          />
        </div>
        <div className={styles.bubbleIcons2}>
          <div className={styles.bubbleIconsItem} />
          <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
        </div>
        <div className={styles.bubbleIcons3}>
          <div className={styles.bubbleIconsInner} />
          <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
        </div>
      </div>
      <div className={styles.equixtokenCapitalAllContainer}>
        <span className={styles.span}>{`© 2024 `}</span>
        <b>Equixtoken Capital</b>
        <span className={styles.allRightsReserved}>. All rights reserved.</span>
      </div>
    </div>
  );
};

export default FooterInfo;
