import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import TokenizationRequest from "./TokenizationRequest";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./SideBarNav.module.css";

export type SideBarNavType = {
  className?: string;
  vector?: string;

  /** Style props */
  frameNavAlignSelf?: CSSProperties["alignSelf"];
  frameNavWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivFlex?: CSSProperties["flex"];
  assetOwnerDisplay?: CSSProperties["display"];
  assetOwnerMinWidth?: CSSProperties["minWidth"];
  vectorIconLeft?: CSSProperties["left"];
  overviewDisplay?: CSSProperties["display"];
  overviewMinWidth?: CSSProperties["minWidth"];
  portfolioDisplay?: CSSProperties["display"];
  portfolioMinWidth?: CSSProperties["minWidth"];
  marketplaceDisplay?: CSSProperties["display"];
  marketplaceMinWidth?: CSSProperties["minWidth"];
  documentsHeight?: CSSProperties["height"];
  documentsMinWidth?: CSSProperties["minWidth"];
  analyticsDisplay?: CSSProperties["display"];
  analyticsMinWidth?: CSSProperties["minWidth"];
  supportDisplay?: CSSProperties["display"];
  supportMinWidth?: CSSProperties["minWidth"];
  walletDisplay?: CSSProperties["display"];
  walletMinWidth?: CSSProperties["minWidth"];
  tokenizeDisplay?: CSSProperties["display"];
  tokenizeMinWidth?: CSSProperties["minWidth"];
  settingsDisplay?: CSSProperties["display"];
  settingsMinWidth?: CSSProperties["minWidth"];
  x1a2B3c4D5e6F7g8H9i0JDisplay?: CSSProperties["display"];
  x1a2B3c4D5e6F7g8H9i0JMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onVectorClick?: () => void;
  onMarketplaceContainerClick?: () => void;
  onVectorClick1?: () => void;
};

const SideBarNav: FunctionComponent<SideBarNavType> = ({
  className = "",
  vector,
  frameNavAlignSelf,
  frameNavWidth,
  frameDivPadding,
  frameDivFlex,
  assetOwnerDisplay,
  assetOwnerMinWidth,
  vectorIconLeft,
  overviewDisplay,
  overviewMinWidth,
  portfolioDisplay,
  portfolioMinWidth,
  marketplaceDisplay,
  marketplaceMinWidth,
  documentsHeight,
  documentsMinWidth,
  analyticsDisplay,
  analyticsMinWidth,
  supportDisplay,
  supportMinWidth,
  walletDisplay,
  walletMinWidth,
  tokenizeDisplay,
  tokenizeMinWidth,
  settingsDisplay,
  settingsMinWidth,
  x1a2B3c4D5e6F7g8H9i0JDisplay,
  x1a2B3c4D5e6F7g8H9i0JMinWidth,
  onVectorClick,
  onMarketplaceContainerClick,
  onVectorClick1,
}) => {
  const [isTokenizationRequestOpen, setTokenizationRequestOpen] =
    useState(false);
  const frameNavStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameNavAlignSelf,
      width: frameNavWidth,
    };
  }, [frameNavAlignSelf, frameNavWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  const assetOwnerStyle: CSSProperties = useMemo(() => {
    return {
      display: assetOwnerDisplay,
      minWidth: assetOwnerMinWidth,
    };
  }, [assetOwnerDisplay, assetOwnerMinWidth]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      left: vectorIconLeft,
    };
  }, [vectorIconLeft]);

  const overviewStyle: CSSProperties = useMemo(() => {
    return {
      display: overviewDisplay,
      minWidth: overviewMinWidth,
    };
  }, [overviewDisplay, overviewMinWidth]);

  const portfolioStyle: CSSProperties = useMemo(() => {
    return {
      display: portfolioDisplay,
      minWidth: portfolioMinWidth,
    };
  }, [portfolioDisplay, portfolioMinWidth]);

  const marketplaceStyle: CSSProperties = useMemo(() => {
    return {
      display: marketplaceDisplay,
      minWidth: marketplaceMinWidth,
    };
  }, [marketplaceDisplay, marketplaceMinWidth]);

  const documentsStyle: CSSProperties = useMemo(() => {
    return {
      height: documentsHeight,
      minWidth: documentsMinWidth,
    };
  }, [documentsHeight, documentsMinWidth]);

  const analyticsStyle: CSSProperties = useMemo(() => {
    return {
      display: analyticsDisplay,
      minWidth: analyticsMinWidth,
    };
  }, [analyticsDisplay, analyticsMinWidth]);

  const supportStyle: CSSProperties = useMemo(() => {
    return {
      display: supportDisplay,
      minWidth: supportMinWidth,
    };
  }, [supportDisplay, supportMinWidth]);

  const walletStyle: CSSProperties = useMemo(() => {
    return {
      display: walletDisplay,
      minWidth: walletMinWidth,
    };
  }, [walletDisplay, walletMinWidth]);

  const tokenizeStyle: CSSProperties = useMemo(() => {
    return {
      display: tokenizeDisplay,
      minWidth: tokenizeMinWidth,
    };
  }, [tokenizeDisplay, tokenizeMinWidth]);

  const settingsStyle: CSSProperties = useMemo(() => {
    return {
      display: settingsDisplay,
      minWidth: settingsMinWidth,
    };
  }, [settingsDisplay, settingsMinWidth]);

  const x1a2B3c4D5e6F7g8H9i0JStyle: CSSProperties = useMemo(() => {
    return {
      display: x1a2B3c4D5e6F7g8H9i0JDisplay,
      minWidth: x1a2B3c4D5e6F7g8H9i0JMinWidth,
    };
  }, [x1a2B3c4D5e6F7g8H9i0JDisplay, x1a2B3c4D5e6F7g8H9i0JMinWidth]);

  const navigate = useNavigate();

  const openTokenizationRequest = useCallback(() => {
    setTokenizationRequestOpen(true);
  }, []);

  const closeTokenizationRequest = useCallback(() => {
    setTokenizationRequestOpen(false);
  }, []);

  const onVectorClick2 = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onMarketplaceContainerClick1 = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onVectorClick3 = useCallback(() => {
    navigate("/documents");
  }, [navigate]);

  return (
    <>
      <nav
        className={[styles.frameParent, className].join(" ")}
        style={frameNavStyle}
      >
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer} style={frameDivStyle}>
              <div className={styles.rectangleParent} style={frameDiv1Style}>
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
                <div className={styles.assetOwner} style={assetOwnerStyle}>
                  Asset Owner
                </div>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame1@2x.png"
                />
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-12@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              alt=""
              src={vector}
              style={vectorIconStyle}
            />
            <div className={styles.navbar}>
              <button className={styles.overview}>
                <div className={styles.group}>
                  <img
                    className={styles.menuIcons}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.iconlyboldcategory}
                    alt=""
                    src="/iconlyboldcategory2@2x.png"
                  />
                  <div className={styles.overviewWrapper}>
                    <a className={styles.overview1} style={overviewStyle}>
                      Overview
                    </a>
                  </div>
                </div>
              </button>
              <div className={styles.portfolio}>
                <div className={styles.group1}>
                  <img
                    className={styles.vectorIcon1}
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
                    <a className={styles.portfolio1} style={portfolioStyle}>
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={styles.marketplace}
                onClick={onMarketplaceContainerClick}
              >
                <div className={styles.group2}>
                  <img
                    className={styles.vectorIcon2}
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
                    <b className={styles.marketplace1} style={marketplaceStyle}>
                      Marketplace
                    </b>
                  </div>
                </div>
              </div>
              <div className={styles.documents}>
                <div className={styles.group3}>
                  <img
                    className={styles.vectorIcon3}
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
                    <b className={styles.documents1} style={documentsStyle}>
                      Documents
                    </b>
                  </div>
                </div>
              </div>
              <div className={styles.analytics}>
                <div className={styles.group4}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.frameIcon4}
                    loading="lazy"
                    alt=""
                    src="/frame-42@2x.png"
                  />
                  <div className={styles.analyticsWrapper}>
                    <b className={styles.analytics1} style={analyticsStyle}>
                      Analytics
                    </b>
                  </div>
                </div>
              </div>
              <div className={styles.support}>
                <div className={styles.group5}>
                  <img
                    className={styles.vectorIcon5}
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
                    <b className={styles.support1} style={supportStyle}>
                      Support
                    </b>
                  </div>
                </div>
              </div>
              <div className={styles.wallet}>
                <div className={styles.group6}>
                  <img
                    className={styles.vectorIcon6}
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
                    <b className={styles.wallet1} style={walletStyle}>
                      Wallet
                    </b>
                  </div>
                </div>
              </div>
              <div
                className={styles.tokenise}
                onClick={openTokenizationRequest}
              >
                <div className={styles.group7}>
                  <img
                    className={styles.vectorIcon7}
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
                    <b className={styles.tokenize} style={tokenizeStyle}>
                      Tokenize
                    </b>
                  </div>
                </div>
              </div>
              <div className={styles.settings}>
                <div className={styles.group8}>
                  <img
                    className={styles.vectorIcon8}
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
                    <b className={styles.settings1} style={settingsStyle}>
                      Settings
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accountt}>
          <div className={styles.group9}>
            <div className={styles.rectangle} />
            <div className={styles.rectangle1} />
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
              <div
                className={styles.x1a2b3c4d5e6f7g8h9i0j}
                style={x1a2B3c4D5e6F7g8H9i0JStyle}
              >
                0x1a2B3c4D5e6F7g8H9i0J
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group2@2x.png"
            />
          </div>
        </div>
      </nav>
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

export default SideBarNav;
