import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainContent from "../components/MainContent";
import MyAssetsOverview from "../components/MyAssetsOverview";
import styles from "./OwnerDashboard.module.css";

const OwnerDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onVectorClick1 = useCallback(() => {
    navigate("/documents");
  }, [navigate]);

  const onAnalyticsContainerClick = useCallback(() => {
    navigate("/investor-dashboard");
  }, [navigate]);

  return (
    <div className={styles.ownerDashboard}>
      <div className={styles.ownerDashboardInner}>
        <nav className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.rectangleIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle1@2x.png"
                  />
                  <div className={styles.equixtokenWrapper}>
                    <a className={styles.equixtoken}>Equixtoken</a>
                  </div>
                </div>
              </div>
              <div className={styles.usertype}>
                <div className={styles.assetOwnerWrapper}>
                  <div className={styles.assetOwner}>Asset Owner</div>
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameIcon}
                    loading="lazy"
                    alt=""
                    src="/type-options@2x.png"
                  />
                  <img
                    className={styles.frameIcon1}
                    loading="lazy"
                    alt=""
                    src="/frame-11@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
              <div className={styles.navbar}>
                <button className={styles.overview}>
                  <div className={styles.group}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className={styles.iconlyboldcategory}
                      alt=""
                      src="/iconlyboldcategory1@2x.png"
                    />
                    <div className={styles.overviewWrapper}>
                      <a className={styles.overview1}>Overview</a>
                    </div>
                  </div>
                </button>
                <div className={styles.portfolio}>
                  <div className={styles.group1}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-2.svg"
                      onClick={onVectorClick}
                    />
                    <img
                      className={styles.frameIcon2}
                      loading="lazy"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className={styles.portfolioWrapper}>
                      <a className={styles.portfolio1}>Portfolio</a>
                    </div>
                  </div>
                </div>
                <div className={styles.marketplace}>
                  <div className={styles.group2}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.frameIcon3}
                      loading="lazy"
                      alt=""
                      src="/frame-31@2x.png"
                    />
                    <div className={styles.marketplaceWrapper}>
                      <b className={styles.marketplace1}>Marketplace</b>
                    </div>
                  </div>
                </div>
                <div className={styles.documents}>
                  <div className={styles.group3}>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-2.svg"
                      onClick={onVectorClick1}
                    />
                    <img
                      className={styles.iconlybolddocument}
                      loading="lazy"
                      alt=""
                      src="/iconlybolddocument1@2x.png"
                    />
                    <div className={styles.documentsWrapper}>
                      <b className={styles.documents1}>Documents</b>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.analytics}
                  onClick={onAnalyticsContainerClick}
                >
                  <div className={styles.group4}>
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.frameIcon4}
                      loading="lazy"
                      alt=""
                      src="/frame-41@2x.png"
                    />
                    <div className={styles.analyticsWrapper}>
                      <b className={styles.analytics1}>Analytics</b>
                    </div>
                  </div>
                </div>
                <div className={styles.support}>
                  <div className={styles.group5}>
                    <img
                      className={styles.vectorIcon6}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.frameIcon5}
                      loading="lazy"
                      alt=""
                      src="/frame-51@2x.png"
                    />
                    <div className={styles.supportWrapper}>
                      <b className={styles.support1}>Support</b>
                    </div>
                  </div>
                </div>
                <div className={styles.wallet}>
                  <div className={styles.group6}>
                    <img
                      className={styles.vectorIcon7}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.frameIcon6}
                      loading="lazy"
                      alt=""
                      src="/frame-6.svg"
                    />
                    <div className={styles.walletWrapper}>
                      <b className={styles.wallet1}>Wallet</b>
                    </div>
                  </div>
                </div>
                <div className={styles.tokenise}>
                  <div className={styles.group7}>
                    <img
                      className={styles.vectorIcon8}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.frameIcon7}
                      loading="lazy"
                      alt=""
                      src="/frame-71@2x.png"
                    />
                    <div className={styles.tokenizeWrapper}>
                      <b className={styles.tokenize}>Tokenize</b>
                    </div>
                  </div>
                </div>
                <div className={styles.settings}>
                  <div className={styles.group8}>
                    <img
                      className={styles.vectorIcon9}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.iconlyboldsetting}
                      loading="lazy"
                      alt=""
                      src="/iconlyboldsetting1@2x.png"
                    />
                    <div className={styles.settingsWrapper}>
                      <b className={styles.settings1}>Settings</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accountt}>
            <div className={styles.group9}>
              <div className={styles.rectangle} />
              <div className={styles.pictureElements} />
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image1@2x.png"
              />
            </div>
            <div className={styles.accounttInner}>
              <div className={styles.nombusoKaluuyaParent}>
                <div className={styles.nombusoKaluuya}>Nombuso Kaluuya</div>
                <div className={styles.x1a2b3c4d5e6f7g8h9i0j}>
                  0x1a2B3c4D5e6F7g8H9i0J
                </div>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group1@2x.png"
              />
            </div>
          </div>
        </nav>
      </div>
      <main className={styles.mainContentParent}>
        <MainContent />
        <MyAssetsOverview />
      </main>
    </div>
  );
};

export default OwnerDashboard;
