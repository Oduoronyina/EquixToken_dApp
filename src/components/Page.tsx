import { FunctionComponent, useState, useCallback } from "react";
import AddListing from "./AddListing";
import PortalPopup from "./PortalPopup";
import styles from "./Page.module.css";

export type PageType = {
  className?: string;
};

const Page: FunctionComponent<PageType> = ({ className = "" }) => {
  const [isAddListingOpen, setAddListingOpen] = useState(false);

  const openAddListing = useCallback(() => {
    setAddListingOpen(true);
  }, []);

  const closeAddListing = useCallback(() => {
    setAddListingOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.page, className].join(" ")}>
        <header className={styles.headerHom}>
          <div className={styles.branding}>
            <img
              className={styles.rectangleIcon}
              loading="lazy"
              alt=""
              src="/rectangle11@2x.png"
            />
            <div className={styles.token}>
              <a className={styles.equixtoken}>Equixtoken</a>
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.navBar}>
              <a className={styles.marketplace}>Marketplace</a>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.buttons} onClick={openAddListing}>
              <div className={styles.pounds}>
                <img
                  className={styles.homePoundsIcon}
                  alt=""
                  src="/home-pounds@2x.png"
                />
              </div>
              <a className={styles.addListing}>Add Listing</a>
            </button>
          </div>
        </header>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.pageBanners}>
              <img
                className={styles.buildingillustrationIcon}
                alt=""
                src="/buildingillustration.svg"
              />
              <h1 className={styles.assetsInThe}>Assets in the market</h1>
              <h1 className={styles.searchForAssets}>
                Search for assets and properties in your area.
              </h1>
            </div>
            <div className={styles.findPropertyFieldWrapper}>
              <form className={styles.findPropertyField}>
                <div className={styles.searchField}>
                  <input
                    className={styles.fixText}
                    placeholder="Enter City, Zip, Address"
                    type="text"
                  />
                </div>
                <div className={styles.priceComponent}>
                  <div className={styles.dropdownList}>
                    <div className={styles.text}>Price</div>
                    <img
                      className={styles.angleDownIcon}
                      alt=""
                      src="/angledown.svg"
                    />
                  </div>
                </div>
                <div className={styles.propertyDropdown}>
                  <div className={styles.assetType}>Asset type</div>
                  <img
                    className={styles.angleDownIcon1}
                    alt=""
                    src="/angledown.svg"
                  />
                </div>
                <button className={styles.buttons1}>
                  <img
                    className={styles.filterIcon}
                    alt=""
                    src="/filter1.svg"
                  />
                  <a className={styles.filters}>Filters</a>
                </button>
                <button className={styles.buttons2}>
                  <img className={styles.searchIcon} alt="" src="/search.svg" />
                  <a className={styles.search}>Search</a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isAddListingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddListing}
        >
          <AddListing onClose={closeAddListing} />
        </PortalPopup>
      )}
    </>
  );
};

export default Page;
