import { FunctionComponent } from "react";
import ValueSubComponents from "./ValueSubComponents";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <img
          className={styles.nestedHeaderIcon}
          loading="lazy"
          alt=""
          src="/frame-8.svg"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangle2} />
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-9.svg"
        />
      </div>
      <div className={styles.overviewContent}>
        <div className={styles.overviewContentInner}>
          <div className={styles.helloNombusoKaluuyaParent}>
            <a className={styles.helloNombusoKaluuyaContainer}>
              <span className={styles.hello}>Hello,</span>
              <span className={styles.nombusoKaluuya}> Nombuso Kaluuya</span>
            </a>
            <div className={styles.hereIsYour}>Here is your quick overview</div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.rectangle3} />
          <div className={styles.pictureComponents} />
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
        </div>
      </div>
      <div className={styles.analyticsOverviewParent}>
        <h3 className={styles.analyticsOverview}>Analytics Overview</h3>
        <div className={styles.analyticsContent}>
          <div className={styles.valueContainer}>
            <div className={styles.valueSubComponentsParent}>
              <ValueSubComponents
                subtract="/subtract.svg"
                totalAssetValue="Total Asset Value"
                balanceSeparator="$12,366.56"
              />
              <ValueSubComponents
                subtract="/subtract-1.svg"
                totalAssetValue="Wallet balance"
                balanceSeparator="$123.456"
                propMinWidth="111px"
              />
            </div>
            <div className={styles.portfolioOverview}>
              <div className={styles.portfolioContent}>
                <div className={styles.portfolioItems}>
                  <div className={styles.portfolioHeader}>
                    <div className={styles.portfolioOverview1}>
                      Portfolio Overview
                    </div>
                    <div className={styles.portfolioButton}>
                      <div className={styles.viewButton} />
                      <div className={styles.apartmentsParent}>
                        <div className={styles.apartments}>Apartments</div>
                        <div className={styles.emptyLabel}>$12,366.56</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.imageParent}>
                    <img
                      className={styles.imageIcon1}
                      loading="lazy"
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <div className={styles.viewAllButtonParent}>
                      <div className={styles.viewAllButton}>
                        <a className={styles.viewAll}>View All</a>
                      </div>
                      <div className={styles.infrastructureProjectsParent}>
                        <div className={styles.infrastructureProjects}>
                          Infrastructure Projects
                        </div>
                        <div className={styles.infrastructureSeparator}>
                          $12,366.56
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.portfolioSeparatorOne} />
              <div className={styles.investmentContentParent}>
                <div className={styles.investmentContent}>
                  <div className={styles.rectangle4} />
                  <div className={styles.investmentLabel}>
                    <div className={styles.investmentFunds}>
                      Investment Funds
                    </div>
                    <div className={styles.investmentSeparator}>$12,366.56</div>
                  </div>
                </div>
                <div className={styles.line} />
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.line1} />
              </div>
              <div className={styles.portfolioOverviewInner}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangle5} />
                  <div className={styles.intellectualPropertyIpParent}>
                    <div className={styles.intellectualPropertyIp}>
                      Intellectual Property (IP)
                    </div>
                    <div className={styles.propertySeparator}>$12,366.56</div>
                  </div>
                </div>
              </div>
              <div className={styles.lineContainer}>
                <div className={styles.line2} />
              </div>
              <div className={styles.portfolioOverviewChild}>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangle6} />
                  <div className={styles.musicRoyaltiesParent}>
                    <div className={styles.musicRoyalties}>Music Royalties</div>
                    <div className={styles.div}>$12,366.56</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.performanceGraph}>
            <div className={styles.graphContent}>
              <div className={styles.graphHeader}>
                <h3 className={styles.salesPerformance}>Sales Performance</h3>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.chartContainerParent}>
                <div className={styles.chartContainer}>
                  <div className={styles.frameGroup}>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild} />
                      <div className={styles.salesChartBar} />
                    </div>
                    <div className={styles.salesChartMonth}>
                      <div className={styles.jan}>Jan</div>
                    </div>
                  </div>
                  <div className={styles.salesChartFeb}>
                    <div className={styles.salesChartFebChild} />
                    <div className={styles.salesChartValue} />
                  </div>
                  <div className={styles.salesChartMarValue}>
                    <div className={styles.salesChartValue1}>
                      <div className={styles.salesChartValue2}>
                        <div className={styles.salesChartValueChild} />
                        <div className={styles.salesChartValue3} />
                      </div>
                      <div className={styles.salesChartApr}>
                        <div className={styles.mar}>Mar</div>
                      </div>
                    </div>
                    <div className={styles.salesChartMayValue}>
                      <div className={styles.salesChartValue4}>
                        <div className={styles.salesChartValue5}>
                          <div className={styles.salesChartValueItem} />
                          <div className={styles.salesChartValue6} />
                        </div>
                        <div className={styles.salesChartDetails}>
                          <div className={styles.salesChartValues}>
                            <div className={styles.salesChartValuesChild} />
                            <div className={styles.salesChartJuneValues} />
                          </div>
                          <div className={styles.salesChartValues1}>
                            <div className={styles.salesChartValuesItem} />
                            <div className={styles.salesChartValuesInner} />
                          </div>
                          <div className={styles.salesChartValues2}>
                            <div className={styles.rectangleDiv} />
                            <div className={styles.salesChartValuesChild1} />
                          </div>
                          <div className={styles.viewsDetails}>
                            <div className={styles.viewsDetailsChild} />
                            <div className={styles.salesDetailsIcon}>
                              <div className={styles.bxssmile}>
                                <img
                                  className={styles.vectorIcon}
                                  loading="lazy"
                                  alt=""
                                  src="/vector-10.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.salesViews}>
                              <b className={styles.views}>20 views</b>
                              <div className={styles.mondayApril22nd}>
                                Monday, April 22nd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.salesMonths}>
                        <div className={styles.shortMonthNames}>
                          <div className={styles.may}>May</div>
                          <div className={styles.jul}>Jul</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.salesPerformanceDescription}>
                  <div className={styles.performanceDescription}>
                    <div className={styles.performanceComparison}>
                      <b className={styles.performanceBetter}>30%</b>
                    </div>
                    <div className={styles.yourSalesPerformanceContainer}>
                      <p className={styles.yourSalesPerformance}>
                        Your sales performance is 30%
                      </p>
                      <p className={styles.betterCompareTo}>
                        better compare to last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.salesDetailsButton}>
                <button className={styles.detailsContainer}>
                  <b className={styles.details}>Details</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
