import { FunctionComponent } from "react";
import styles from "./TotalOrder.module.css";

export type TotalOrderType = {
  className?: string;
};

const TotalOrder: FunctionComponent<TotalOrderType> = ({ className = "" }) => {
  return (
    <div className={[styles.totalOrder, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.orderTypeLabelsParent}>
        <div className={styles.orderTypeLabels}>
          <a className={styles.totalOrder1}>Total Investments</a>
          <a className={styles.typeSeparator}>10293</a>
        </div>
        <img
          className={styles.icon}
          loading="lazy"
          alt=""
          src="/icon1@2x.png"
        />
      </div>
      <div className={styles.icTrendingUp24pxParent}>
        <input className={styles.icTrendingUp24px} type="checkbox" />
        <div className={styles.trendLabels}>
          <div className={styles.upFromPastContainer}>
            <span>1.3%</span>
            <span className={styles.upFromPast}> Up from past week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalOrder;
