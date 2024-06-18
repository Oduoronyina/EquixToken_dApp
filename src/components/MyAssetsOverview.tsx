import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Asset from "./Asset";
import styles from "./MyAssetsOverview.module.css";

export type MyAssetsOverviewType = {
  className?: string;
};

const MyAssetsOverview: FunctionComponent<MyAssetsOverviewType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFilterDropContainerClick = useCallback(() => {
    navigate("/offerings");
  }, [navigate]);

  return (
    <section className={[styles.myAssetsOverview, className].join(" ")}>
      <div className={styles.assetOverviewBackground} />
      <div className={styles.assetsContainer}>
        <div className={styles.assetsHeader}>
          <div className={styles.assetsHeading}>
            <div className={styles.myAssets}>My Assets</div>
          </div>
          <div
            className={styles.filterDrop}
            onClick={onFilterDropContainerClick}
          >
            <div className={styles.viewAllOfferings}>View all Offerings</div>
            <div className={styles.filterIcon}>
              <img
                className={styles.filterIcon1}
                alt=""
                src="/frame-10@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.assets}>
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
      </div>
    </section>
  );
};

export default MyAssetsOverview;
