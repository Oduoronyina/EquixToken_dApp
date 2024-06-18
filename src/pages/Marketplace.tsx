import { FunctionComponent } from "react";
import Page from "../components/Page";
import PropertyCard1 from "../components/PropertyCard1";
import PropertyCard from "../components/PropertyCard";
import FooterInfo from "../components/FooterInfo";
import styles from "./Marketplace.module.css";

const Marketplace: FunctionComponent = () => {
  return (
    <div className={styles.marketplace}>
      <main className={styles.main}>
        <section className={styles.content}>
          <Page />
          <div className={styles.listings}>
            <div className={styles.listingCategories}>
              <div className={styles.categoryResidential}>
                <div className={styles.residentialHeader}>
                  <h1 className={styles.residential}>Residential</h1>
                  <div className={styles.residentialSorting}>
                    <div className={styles.propertyDropdown}>
                      <div className={styles.sortOrderAnytimeContainer}>
                        <span>{`Sort order: `}</span>
                        <span className={styles.anytime}>Anytime</span>
                      </div>
                      <div className={styles.residentialOrderDropdown}>
                        <img
                          className={styles.angleDownIcon}
                          alt=""
                          src="/angledown-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.residentialProperties}>
                <div className={styles.residentialCards}>
                  <PropertyCard1
                    cardBackground="/card-background@2x.png"
                    prop="£22,250"
                    penthouse="Penthouse"
                    manchesterCity="Manchester city"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    carousels="/carousels.svg"
                    forSale="Sold Out"
                  />
                  <PropertyCard
                    rectangle34624569="/rectangle-34624569-1@2x.png"
                    prop="£654,250"
                    semiDetachedHouse="Semi detached house"
                    southfieldRoadOxfordOX4="Southfield Road, Oxford OX4"
                    prop1="3"
                    semiFurnished="Semi-furnished"
                    carousels="/carousels-1.svg"
                    forSale="Coming soon"
                  />
                  <PropertyCard1
                    cardBackground="/rectangle-34624569-2@2x.png"
                    prop="£926,250"
                    penthouse="Bungalow"
                    manchesterCity="Leeds city center"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    carousels="/carousels-2.svg"
                    forSale="Live"
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="30px"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propBorderRadius1="12px"
                    propBorderRadius2="unset"
                    propColor="#fff"
                    propBorder="1px solid var(--light-black)"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px var(--br-xs) var(--br-xs) 0px"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard1
                    cardBackground="/card-background@2x.png"
                    prop="£22,250"
                    penthouse="Penthouse"
                    manchesterCity="Manchester city"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    carousels="/carousels-2.svg"
                    forSale="Live"
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    propColor="#fff"
                    propBorder="1px solid var(--color-gray-1700)"
                    propMinWidth1="106px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px var(--br-xs) var(--br-xs) 0px"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard1
                    cardBackground="/rectangle-34624569-1@2x.png"
                    prop="£654,250"
                    penthouse="Semi detached house"
                    manchesterCity="Southfield Road, Oxford OX4"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    carousels="/carousels-2.svg"
                    forSale="Live"
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propBorderRadius1="30px"
                    propBorderRadius2="30px"
                    propColor="#fff"
                    propBorder="1px solid var(--light-black)"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="30px"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard
                    rectangle34624569="/rectangle-34624569-2@2x.png"
                    prop="£926,250"
                    semiDetachedHouse="Bungalow"
                    southfieldRoadOxfordOX4="Leeds city center"
                    prop1="3"
                    semiFurnished="Semi-furnished"
                    carousels="/carousels-1.svg"
                    forSale="Coming soon"
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="30px"
                    propBorderRadius1="12px"
                    propBorderRadius2="unset"
                    propColor="#fff"
                    propMinWidth1="100px"
                    propBackgroundColor="#b6af9d"
                    propBorderRadius3="30px"
                    propMinWidth2="77px"
                  />
                </div>
                <div className={styles.categoryCommercial}>
                  <h1 className={styles.commercial}>Commercial</h1>
                  <div className={styles.commercialSorting}>
                    <div className={styles.propertyDropdown1}>
                      <div className={styles.sortOrderAnytimeContainer1}>
                        <span>{`Sort order: `}</span>
                        <span className={styles.anytime1}>Anytime</span>
                      </div>
                      <div className={styles.commercialOrderDropdown}>
                        <img
                          className={styles.angleDownIcon1}
                          alt=""
                          src="/angledown-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.commercialProperties}>
                <div className={styles.cards}>
                  <PropertyCard1
                    cardBackground="/rectangle-34624569-6@2x.png"
                    prop="£107,250"
                    penthouse="Bungalow"
                    manchesterCity="Leeds city center"
                    bedroomPlaceholder="4"
                    bathroomPlaceholder="4"
                    carousels="/carousels-2.svg"
                    forSale="Live"
                    propFlex="unset"
                    propMinWidth="300px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    propColor="#fff"
                    propBorder="1px solid var(--light-black)"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px var(--br-xs) var(--br-xs) 0px"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard
                    rectangle34624569="/rectangle-34624569-7@2x.png"
                    prop="£829,250"
                    semiDetachedHouse="Penthouse"
                    southfieldRoadOxfordOX4="Manchester city"
                    prop1="1"
                    semiFurnished="Unfurnished"
                    carousels="/carousels.svg"
                    forSale="Sold out"
                    propFlex="unset"
                    propMinWidth="300px"
                    propBorderRadius="unset"
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    propColor="#fff"
                    propMinWidth1="81px"
                    propBackgroundColor="#e8ae00"
                    propBorderRadius3="0px var(--br-xs) var(--br-xs) 0px"
                    propMinWidth2="49px"
                  />
                  <PropertyCard1
                    cardBackground="/rectangle-34624569-8@2x.png"
                    prop="£100,250"
                    penthouse="Semi detached house"
                    manchesterCity="Southfield Road, Oxford OX4"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    carousels="/carousels-2.svg"
                    forSale="Live"
                    propFlex="unset"
                    propMinWidth="300px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    propColor="#fff"
                    propBorder="1px solid var(--light-black)"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px var(--br-xs) var(--br-xs) 0px"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                </div>
              </div>
              <div className={styles.pagination}>
                <div className={styles.buttonsoutiline2radiusmdd}>
                  <img
                    className={styles.angleLeftIcon}
                    alt=""
                    src="/angleleft.svg"
                  />
                </div>
                <div className={styles.buttons}>
                  <img
                    className={styles.angleRightIcon}
                    alt=""
                    src="/angleright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.bg}>
        <img
          className={styles.buildingillustrationIcon}
          alt=""
          src="/buildingillustration-1.svg"
        />
        <div className={styles.footerContent}>
          <div className={styles.footer}>
            <div className={styles.inputField}>
              <div className={styles.searchField}>
                <div className={styles.texts}>
                  <div
                    className={styles.fixText}
                  >{`Subscribe to our newsletter `}</div>
                  <div className={styles.flashing} />
                </div>
                <div className={styles.buttons1}>
                  <div className={styles.textHere}>Subscribe</div>
                  <img
                    className={styles.angleRightIcon1}
                    alt=""
                    src="/angleright-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerShape} />
          <div className={styles.footerContentChild} />
          <FooterInfo />
        </div>
      </footer>
    </div>
  );
};

export default Marketplace;
