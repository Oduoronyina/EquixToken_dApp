import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBittpnSmallClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.headerInner}>
        <div className={styles.frameParent}>
          <div className={styles.equixtokenWrapper}>
            <h2 className={styles.equixtoken}>EquixToken</h2>
          </div>
          <div className={styles.introducingEquixtokenParent}>
            <h1 className={styles.introducingEquixtoken}>
              <p className={styles.introducing}>{`Introducing `}</p>
              <p className={styles.equixtoken1}>EquixToken</p>
            </h1>
            <div className={styles.forMarketplaceSellersLookinWrapper}>
              <h3 className={styles.forMarketplaceSellersContainer}>
                <span className={styles.forMarketplaceSellers}>
                  For marketplace sellers looking to grow their business,
                </span>
                <b>EquixToken</b>
                <span className={styles.offersTheBest}>
                  {" "}
                  offers the best platform.
                </span>
              </h3>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.emailBlack24dp11Parent}>
                  <img
                    className={styles.emailBlack24dp11}
                    loading="lazy"
                    alt=""
                    src="/email-black-24dp-1-1.svg"
                  />
                  <div className={styles.yourEmailAddress}>
                    Your email address
                  </div>
                </div>
              </div>
              <button className={styles.getEarlyAccessWrapper}>
                <div className={styles.getEarlyAccess}>Get early access</div>
              </button>
            </div>
            <div className={styles.noCreditCardRequiredCanceWrapper}>
              <div className={styles.noCreditCard}>
                No credit card required, cancel any time
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        background="/background1.svg"
        onBittpnSmallClick={onBittpnSmallClick}
      />
    </div>
  );
};

export default Header;
