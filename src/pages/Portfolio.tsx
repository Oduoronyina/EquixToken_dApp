import { FunctionComponent } from "react";
import SideBarNav from "../components/SideBarNav";
import AssetsPortfolio from "../components/AssetsPortfolio";
import styles from "./Portfolio.module.css";

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio}>
      <SideBarNav
        vector="/vector1.svg"
        frameNavAlignSelf="unset"
        frameNavWidth="227px"
        frameDivPadding="0px var(--padding-3xs) 0px var(--padding-xs)"
        frameDivFlex="1"
        assetOwnerDisplay="inline-block"
        assetOwnerMinWidth="96px"
        vectorIconLeft="18.2px"
        overviewDisplay="inline-block"
        overviewMinWidth="70px"
        portfolioDisplay="inline-block"
        portfolioMinWidth="68px"
        marketplaceDisplay="inline-block"
        marketplaceMinWidth="97px"
        documentsHeight="unset"
        documentsMinWidth="90px"
        analyticsDisplay="inline-block"
        analyticsMinWidth="74px"
        supportDisplay="inline-block"
        supportMinWidth="64px"
        walletDisplay="inline-block"
        walletMinWidth="50px"
        tokenizeDisplay="inline-block"
        tokenizeMinWidth="69px"
        settingsDisplay="inline-block"
        settingsMinWidth="67px"
        x1a2B3c4D5e6F7g8H9i0JDisplay="inline-block"
        x1a2B3c4D5e6F7g8H9i0JMinWidth="127px"
      />
      <main className={styles.dashbackground}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.portfolio1}>Portfolio</h1>
          <div className={styles.thursday2May}>Thursday 2 May, 2024</div>
        </div>
        <img
          className={styles.dividerIcon}
          loading="lazy"
          alt=""
          src="/divider1.svg"
        />
        <div className={styles.mosTypeOfOrder}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h3 className={styles.assetAllocation}>Asset Allocation</h3>
              <div className={styles.formElementsDropdownDef}>
                <img
                  className={styles.iconoutlinearrowIosDown}
                  alt=""
                  src="/iconoutlinearrowiosdown.svg"
                />
                <div className={styles.today}>Today</div>
              </div>
            </div>
            <img className={styles.dividerIcon1} alt="" src="/divider-1.svg" />
          </div>
          <div className={styles.orderTypeChart}>
            <div className={styles.chartContainer}>
              <div className={styles.wrapperCircle}>
                <img
                  className={styles.circleIcon}
                  loading="lazy"
                  alt=""
                  src="/circle.svg"
                />
              </div>
              <div className={styles.chartElements}>
                <div className={styles.chartSegments}>
                  <div className={styles.frameParent}>
                    <div className={styles.segmentItemsParent}>
                      <div className={styles.segmentItems}>
                        <div className={styles.segmentParts} />
                      </div>
                      <div className={styles.land}>Land</div>
                    </div>
                    <div className={styles.investorsWrapper}>
                      <div className={styles.investors}>200 Investors</div>
                    </div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameContainer}>
                      <div className={styles.ellipseWrapper}>
                        <div className={styles.frameChild} />
                      </div>
                      <div className={styles.apartments}>Apartments</div>
                    </div>
                    <div className={styles.investorsContainer}>
                      <div className={styles.investors1}>122 Investors</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.ellipseContainer}>
                        <div className={styles.frameItem} />
                      </div>
                      <div className={styles.condos}>Condos</div>
                    </div>
                    <div className={styles.investorsFrame}>
                      <div className={styles.investors2}>264 Investors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AssetsPortfolio />
      </main>
    </div>
  );
};

export default Portfolio;
