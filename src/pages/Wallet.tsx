import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideBarNav from "../components/SideBarNav";
import BalanceOVerview from "../components/BalanceOVerview";
import Row from "../components/Row";
import styles from "./Wallet.module.css";

const Wallet: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onVectorClick1 = useCallback(() => {
    navigate("/documents");
  }, [navigate]);

  return (
    <div className={styles.wallet}>
      <div className={styles.walletInner}>
        <SideBarNav
          vector="/vector11.svg"
          onVectorClick={onVectorClick}
          onMarketplaceContainerClick={onMarketplaceContainerClick}
          onVectorClick1={onVectorClick1}
        />
      </div>
      <main className={styles.frameParent}>
        <section className={styles.backgroundcardParent}>
          <div className={styles.backgroundcard}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background2.svg"
            />
            <div className={styles.maskGroup}>
              <img
                className={styles.waveelementsIcon}
                alt=""
                src="/waveelements@2x.png"
              />
              <div className={styles.div}>444 221 224 ***</div>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
              <div className={styles.div1}>$45.500,12</div>
              <a className={styles.mainWallet}>Main Wallet</a>
            </div>
          </div>
          <div className={styles.connectWalletButton}>
            <button className={styles.btnfilter}>
              <a className={styles.connectWallet}>+ Connect Wallet</a>
            </button>
          </div>
        </section>
        <section className={styles.balance}>
          <BalanceOVerview />
          <div className={styles.activity}>
            <div className={styles.backgroundParent}>
              <div className={styles.background} />
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.walletActivityParent}>
                    <a className={styles.walletActivity}>
                      <p className={styles.walletActivity1}>Wallet Activity</p>
                    </a>
                    <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                  <div className={styles.filter}>
                    <div className={styles.filterOptions}>
                      <div className={styles.optionLabels}>
                        <div className={styles.monthly}>Monthly</div>
                      </div>
                      <div className={styles.optionLabels1}>
                        <a className={styles.weekly}>Weekly</a>
                      </div>
                      <button className={styles.active}>
                        <div className={styles.backgroundactive} />
                        <div className={styles.today}>Today</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.activityList}>
                <div className={styles.row06Highlighted}>
                  <div className={styles.background1} />
                  <div className={styles.highlightContent}>
                    <div className={styles.pendingDetails}>
                      <div className={styles.pendingSellIcon}>
                        <div className={styles.icSell}>
                          <div className={styles.background2} />
                          <img
                            className={styles.sellImageIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-101.svg"
                          />
                        </div>
                        <div className={styles.withdrawTitle}>
                          <div className={styles.withdraw}>Withdraw</div>
                        </div>
                      </div>
                      <div className={styles.pendingTransaction}>
                        <div className={styles.am}>06:24:45 AM</div>
                      </div>
                      <div className={styles.pendingTransaction1}>
                        <div className={styles.div2}>-$542</div>
                      </div>
                      <div className={styles.pendingTransaction2}>
                        <div className={styles.pending}>Pending</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.borderbot} />
                </div>
                <div className={styles.row01}>
                  <div className={styles.background3} />
                  <div className={styles.borderbot1} />
                  <div className={styles.iconRow}>
                    <div className={styles.icBuy}>
                      <div className={styles.background4} />
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-111.svg"
                      />
                    </div>
                    <div className={styles.transactionTypeRow}>
                      <div className={styles.typeLabels}>
                        <div className={styles.topup}>Topup</div>
                        <div className={styles.topup1}>Topup</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.timeRow}>
                    <div className={styles.am1}>06:24:45 AM</div>
                  </div>
                  <div className={styles.blankActivity}>
                    <div className={styles.statusActivity}>+$5,553</div>
                  </div>
                  <div className={styles.transactionStatus}>
                    <div className={styles.completed}>Completed</div>
                  </div>
                </div>
                <Row
                  vector="/vector-101.svg"
                  topup="Wihtdraw"
                  prop="-$912"
                  completed="Canceled"
                  row02Padding="var(--padding-2xs) var(--padding-32xl) var(--padding-xs) var(--padding-11xl)"
                  row02Border="1px solid var(--absolute-white)"
                  backgroundBorder="1px solid var(--absolute-white)"
                  propBackgroundColor="#fff"
                  frameDivWidth="unset"
                  icBuyFlex="unset"
                  icBuyWidth="63px"
                  topupHeight="22px"
                  topupDisplay="inline-block"
                  frameDivWidth1="66px"
                  propColor="#ff3e3e"
                />
                <Row
                  vector="/vector-111.svg"
                  topup="Topup"
                  prop="+$7,762"
                  completed="Completed"
                  row02Padding="var(--padding-2xs) var(--padding-26xl) var(--padding-xs) var(--padding-11xl)"
                  row02Border="1px solid var(--absolute-white)"
                  backgroundBorder="1px solid var(--absolute-white)"
                  propBackgroundColor="#fff"
                  frameDivWidth="187px"
                  icBuyFlex="1"
                  icBuyWidth="unset"
                  topupHeight="unset"
                  topupDisplay="unset"
                  frameDivWidth1="82px"
                  propColor="#2bc155"
                />
                <Row
                  vector="/vector-111.svg"
                  topup="Topup"
                  prop="+$5,553"
                  completed="Completed"
                />
                <Row
                  vector="/vector-101.svg"
                  topup="Withdraw"
                  prop="-$912"
                  completed="Canceled"
                  row02Padding="var(--padding-2xs) var(--padding-32xl) var(--padding-xs) var(--padding-11xl)"
                  row02Border="1px solid var(--color-goldenrod-500)"
                  backgroundBorder="1px solid var(--color-goldenrod-500)"
                  propBackgroundColor="1px solid rgba(223, 195, 43, 0.5)"
                  frameDivWidth="unset"
                  icBuyFlex="unset"
                  icBuyWidth="63px"
                  topupHeight="22px"
                  topupDisplay="inline-block"
                  frameDivWidth1="66px"
                  propColor="#ff3e3e"
                />
              </div>
            </div>
            <div className={styles.btnMore}>
              <div className={styles.background5} />
              <img
                className={styles.icChevronIcon}
                loading="lazy"
                alt=""
                src="/ic-chevron-2@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wallet;
