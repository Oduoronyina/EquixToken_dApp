import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import OrderReport from "../components/OrderReport";
import styles from "./InvestorDashboard.module.css";

const InvestorDashboard: FunctionComponent = () => {
  return (
    <div className={styles.investorDashboard}>
      <FrameComponent3 />
      <main className={styles.mainBgColor}>
        <section className={styles.performance}>
          <FrameComponent2 />
        </section>
        <section className={styles.investmentPerformance}>
          <div className={styles.sales}>
            <div className={styles.salesLabel}>
              <h2 className={styles.sales1}>Investment Performance</h2>
            </div>
            <div className={styles.monthSelector}>
              <div className={styles.rectangle} />
              <div className={styles.october}>October</div>
              <div className={styles.iconChevronDown}>
                <div className={styles.frame} />
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
            </div>
          </div>
          <div className={styles.salesChart}>
            <div className={styles.chartContainer}>
              <div className={styles.chartGrid}>
                <div className={styles.div}>100%</div>
                <div className={styles.div1}>80%</div>
                <div className={styles.div2}>60%</div>
                <div className={styles.div3}>40%</div>
                <div className={styles.div4}>20%</div>
              </div>
              <div className={styles.chart}>
                <div className={styles.lineParent}>
                  <img className={styles.lineIcon} alt="" src="/line.svg" />
                  <img
                    className={styles.graphIcon}
                    loading="lazy"
                    alt=""
                    src="/graph.svg"
                  />
                  <div className={styles.chartAxis}>
                    <img
                      className={styles.combinedShapeIcon}
                      loading="lazy"
                      alt=""
                      src="/combined-shape.svg"
                    />
                    <b className={styles.chartLabel}>64,3664.77</b>
                  </div>
                  <img className={styles.pointIcon} alt="" src="/point.svg" />
                </div>
              </div>
            </div>
            <div className={styles.chartLegend}>
              <div className={styles.legendItems}>
                <div className={styles.k}>5k</div>
                <div className={styles.k1}>10k</div>
                <div className={styles.k2}>15k</div>
                <div className={styles.k3}>20k</div>
                <div className={styles.k4}>25k</div>
                <div className={styles.k5}>30k</div>
                <div className={styles.k6}>35k</div>
                <div className={styles.k7}>40k</div>
                <div className={styles.k8}>45k</div>
                <div className={styles.k9}>50k</div>
                <div className={styles.k10}>55k</div>
                <div className={styles.k11}>60k</div>
              </div>
            </div>
          </div>
        </section>
        <OrderReport />
      </main>
    </div>
  );
};

export default InvestorDashboard;
