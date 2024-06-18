import { FunctionComponent } from "react";
import styles from "./BalanceOVerview.module.css";

export type BalanceOVerviewType = {
  className?: string;
};

const BalanceOVerview: FunctionComponent<BalanceOVerviewType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.balanceoverview, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.overviewBalanceParent}>
            <div className={styles.overviewBalance}>Overview Balance</div>
            <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
          <div className={styles.lastWeek563443Container}>
            <span>Last Week</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.span1}>$563,443</span>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.tabmenuParent}>
            <div className={styles.tabmenu}>
              <div className={styles.background1} />
              <div className={styles.weeklyTab}>
                <div className={styles.weekly2020}>Weekly (2020)</div>
              </div>
              <img
                className={styles.icChevronIcon}
                alt=""
                src="/ic-chevron@2x.png"
              />
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>$557,235.31</div>
              <div className={styles.wrapper}>
                <div className={styles.div1}>7%</div>
              </div>
              <div className={styles.icChevronWrapper}>
                <img
                  className={styles.icChevronIcon1}
                  loading="lazy"
                  alt=""
                  src="/ic-chevron-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chartLabelsParent}>
        <div className={styles.chartLabels}>
          <div className={styles.k}>1,000k</div>
          <div className={styles.k1}>800k</div>
          <div className={styles.k2}>600k</div>
          <div className={styles.k3}>400k</div>
          <div className={styles.k4}>200k</div>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <div className={styles.chartBackground} />
            <img
              className={styles.barsIcon}
              loading="lazy"
              alt=""
              src="/bars@2x.png"
            />
          </div>
          <div className={styles.barsContainerParent}>
            <div className={styles.barsContainer}>
              <div className={styles.div2}>06</div>
            </div>
            <div className={styles.barsContainer1}>07</div>
            <div className={styles.barsContainer2}>08</div>
            <div className={styles.barsContainer3}>09</div>
            <div className={styles.barsContainer4}>
              <div className={styles.div3}>10</div>
            </div>
            <div className={styles.barsContainer5}>
              <div className={styles.div4}>11</div>
            </div>
            <div className={styles.barsContainer6}>
              <div className={styles.div5}>12</div>
            </div>
            <div className={styles.barsContainer7}>
              <div className={styles.div6}>13</div>
            </div>
            <div className={styles.barsContainer8}>
              <div className={styles.div7}>14</div>
            </div>
            <div className={styles.barsContainer9}>
              <div className={styles.div8}>15</div>
            </div>
            <div className={styles.barsContainer10}>16</div>
            <div className={styles.barsContainer11}>
              <div className={styles.div9}>17</div>
            </div>
            <div className={styles.barsContainer12}>18</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceOVerview;
