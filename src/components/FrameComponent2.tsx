import { FunctionComponent } from "react";
import TotalOrder from "./TotalOrder";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.orders, className].join(" ")}>
      <TotalOrder />
      <TotalOrder />
      <div className={styles.pendingOrders}>
        <div className={styles.orderPending}>
          <div className={styles.bg} />
          <div className={styles.pendingCount}>
            <div className={styles.pendingValue}>
              <a className={styles.totalPending}>Total Pending</a>
              <a className={styles.pendingSeparator}>2040</a>
            </div>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon-21@2x.png"
            />
          </div>
          <div className={styles.pendingTrend}>
            <img
              className={styles.icTrendingUp24pxIcon}
              alt=""
              src="/ictrendingup24px-1.svg"
            />
            <div className={styles.pendingTrendLabel}>
              <div className={styles.upFromYesterd}>1.8% Up from yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
