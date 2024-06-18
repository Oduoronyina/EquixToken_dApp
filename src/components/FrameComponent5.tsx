import { FunctionComponent, useState, useCallback } from "react";
import TokenizationRequest from "./TokenizationRequest";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const [isTokenizationRequestOpen, setTokenizationRequestOpen] =
    useState(false);
  const navigate = useNavigate();

  const openTokenizationRequest = useCallback(() => {
    setTokenizationRequestOpen(true);
  }, []);

  const closeTokenizationRequest = useCallback(() => {
    setTokenizationRequestOpen(false);
  }, []);

  const onVectorClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  return (
    <>
      <div className={[styles.frameParent, className].join(" ")}>
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
        <div className={styles.navbarWrapper}>
          <div className={styles.navbar}>
            <button className={styles.overview}>
              <div className={styles.group}>
                <img
                  className={styles.navbarItemIcons}
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
                  className={styles.vectorIcon}
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
            <div
              className={styles.marketplace}
              onClick={onMarketplaceContainerClick}
            >
              <div className={styles.group2}>
                <img
                  className={styles.vectorIcon1}
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
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-2.svg"
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
            <div className={styles.analytics}>
              <div className={styles.group4}>
                <img
                  className={styles.vectorIcon3}
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
                  className={styles.vectorIcon4}
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
            <div className={styles.wallet} onClick={onWalletContainerClick}>
              <div className={styles.group6}>
                <img
                  className={styles.vectorIcon5}
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
            <div className={styles.tokenise} onClick={openTokenizationRequest}>
              <div className={styles.group7}>
                <img
                  className={styles.vectorIcon6}
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
                  className={styles.vectorIcon7}
                  alt=""
                  src="/vector-2.svg"
                />
                <img
                  className={styles.iconlyboldsetting}
                  loading="lazy"
                  alt=""
                  src="/iconlyboldsetting2@2x.png"
                />
                <div className={styles.settingsWrapper}>
                  <b className={styles.settings1}>Settings</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accountt}>
          <div className={styles.group9}>
            <div className={styles.rectangle} />
            <div className={styles.profilePicture} />
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
          </div>
          <div className={styles.userNameDetailsWrapper}>
            <div className={styles.userNameDetails}>
              <div className={styles.nombusoKaluuya}>Nombuso Kaluuya</div>
              <div className={styles.x1a2b3c4d5e6f7g8h9i0j}>
                0x1a2B3c4D5e6F7g8H9i0J
              </div>
            </div>
          </div>
          <div className={styles.userActions}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group1@2x.png"
            />
          </div>
        </div>
      </div>
      {isTokenizationRequestOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTokenizationRequest}
        >
          <TokenizationRequest onClose={closeTokenizationRequest} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent5;
