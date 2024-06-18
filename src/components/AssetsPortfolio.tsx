import { FunctionComponent } from "react";
import styles from "./AssetsPortfolio.module.css";

export type AssetsPortfolioType = {
  className?: string;
};

const AssetsPortfolio: FunctionComponent<AssetsPortfolioType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.orderReport, className].join(" ")}>
      <div className={styles.title}>
        <h3 className={styles.assets}>Assets</h3>
        <div className={styles.findPropertyField}>
          <div className={styles.searchField}>
            <input
              className={styles.fixText}
              placeholder="Search query..."
              type="text"
            />
          </div>
          <button className={styles.buttons}>
            <img className={styles.filterIcon} alt="" src="/filter.svg" />
            <a className={styles.filters}>Filters</a>
          </button>
          <button className={styles.buttons1}>
            <img className={styles.searchIcon} alt="" src="/search.svg" />
            <div className={styles.search}>Search</div>
          </button>
        </div>
      </div>
      <div className={styles.reportTable}>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderLabels}>
              <div className={styles.columnHeaderNames}>
                <div className={styles.assetName}>Asset name</div>
              </div>
              <div className={styles.purchaseDate}>Purchase date</div>
              <div className={styles.columnHeaderNames1}>
                <div className={styles.unitPrice}>Unit Price</div>
              </div>
              <div className={styles.statusHeader}>
                <div className={styles.content}>
                  <div className={styles.status}>Status</div>
                </div>
              </div>
              <div className={styles.columnHeaderNames2}>
                <div className={styles.marketValue}>Market Value</div>
              </div>
              <div className={styles.holdingsValue}>Holdings Value</div>
            </div>
          </div>
          <img
            className={styles.dividerIcon}
            loading="lazy"
            alt=""
            src="/divider.svg"
          />
        </div>
      </div>
      <div className={styles.rows}>
        <div className={styles.rows1}>
          <div className={styles.row3}>
            <div className={styles.content1}>
              <div className={styles.assetName1}>Asset name</div>
              <div className={styles.menu}>Menu</div>
              <div className={styles.unitPrice1}>Unit Price</div>
              <div className={styles.content2}>
                <div className={styles.status1}>Status</div>
              </div>
              <div className={styles.marketValue1}>Market Value</div>
              <div className={styles.holdingsValue1}>Holdings Value</div>
            </div>
          </div>
          <div className={styles.row4}>
            <div className={styles.content3}>
              <div className={styles.assetName2}>Asset name</div>
              <div className={styles.menu1}>Menu</div>
              <div className={styles.unitPrice2}>Unit Price</div>
              <div className={styles.content4}>
                <div className={styles.status2}>Status</div>
              </div>
              <div className={styles.marketValue2}>Market Value</div>
              <div className={styles.holdingsValue2}>Holdings Value</div>
            </div>
          </div>
          <div className={styles.row5}>
            <div className={styles.content5}>
              <div className={styles.assetName3}>Asset name</div>
              <div className={styles.menu2}>Menu</div>
              <div className={styles.unitPrice3}>Unit Price</div>
              <div className={styles.content6}>
                <div className={styles.status3}>Status</div>
              </div>
              <div className={styles.marketValue3}>Market Value</div>
              <div className={styles.holdingsValue3}>Holdings Value</div>
            </div>
          </div>
          <div className={styles.row6}>
            <div className={styles.content7}>
              <div className={styles.assetName4}>Asset name</div>
              <div className={styles.menu3}>Menu</div>
              <div className={styles.unitPrice4}>Unit Price</div>
              <div className={styles.content8}>
                <div className={styles.status4}>Status</div>
              </div>
              <div className={styles.marketValue4}>Market Value</div>
              <div className={styles.holdingsValue4}>Holdings Value</div>
            </div>
          </div>
          <div className={styles.row7}>
            <div className={styles.content9}>
              <div className={styles.assetName5}>Asset name</div>
              <div className={styles.menu4}>Menu</div>
              <div className={styles.unitPrice5}>Unit Price</div>
              <div className={styles.content10}>
                <div className={styles.status5}>Status</div>
              </div>
              <div className={styles.marketValue5}>Market Value</div>
              <div className={styles.holdingsValue5}>Holdings Value</div>
            </div>
          </div>
          <div className={styles.row8}>
            <div className={styles.content11}>
              <div className={styles.assetName6}>Asset name</div>
              <div className={styles.menu5}>Menu</div>
              <div className={styles.unitPrice6}>Unit Price</div>
              <div className={styles.content12}>
                <div className={styles.status6}>Status</div>
              </div>
              <div className={styles.marketValue6}>Market Value</div>
              <div className={styles.holdingsValue6}>Holdings Value</div>
            </div>
          </div>
          <div className={styles.rowBackground} />
        </div>
      </div>
    </section>
  );
};

export default AssetsPortfolio;
