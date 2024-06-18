import { FunctionComponent } from "react";
import PropertyCard1 from "./PropertyCard1";
import styles from "./Cards.module.css";

export type CardsType = {
  className?: string;
};

const Cards: FunctionComponent<CardsType> = ({ className = "" }) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <PropertyCard1
        cardBackground="/rectangle-34624569@2x.png"
        prop="£22,250"
        penthouse="Residential Building"
        manchesterCity="Manchester city"
        bedroomPlaceholder="3"
        bathroomPlaceholder="2"
        carousels="/carousels1.svg"
        forSale="For sale"
        propFlex="unset"
        propMinWidth="300px"
        propBorderRadius="unset"
        propAlignSelf="unset"
        propWidth="393px"
        propBorderRadius1="30px"
        propBorderRadius2="unset"
        propColor="#e6e8ef"
        propBorder="1px solid var(--color-gray-1700)"
        propMinWidth1="106px"
        propFontWeight="unset"
        propBackgroundColor="#f9fafb"
        propBorderRadius3="0px var(--br-xs) var(--br-xs) 0px"
        propColor1="#0d0e0f"
        propMinWidth2="43px"
        propFontWeight1="unset"
        propTextDecoration="none"
      />
      <div className={styles.propertyCard}>
        <div className={styles.cardRectangle}>
          <img
            className={styles.cardRectangleChild}
            alt=""
            src="/rectangle-34624569-1@2x.png"
          />
        </div>
        <div className={styles.infoFeatures}>
          <div className={styles.information}>
            <div className={styles.div}>£654,250</div>
            <div className={styles.estValue7250}>Est. Value: £7,250</div>
            <div className={styles.semiDetachedHouse}>Semi detached house</div>
            <div className={styles.southfieldRoadOxford}>
              Southfield Road, Oxford OX4
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.bed}>
              <img
                className={styles.bedIcon}
                loading="lazy"
                alt=""
                src="/bed.svg"
              />
              <div className={styles.div1}>3</div>
            </div>
            <div className={styles.bathroom}>
              <img
                className={styles.bathubIcon}
                loading="lazy"
                alt=""
                src="/bathub-1.svg"
              />
              <div className={styles.div2}>2</div>
            </div>
            <div className={styles.furniture}>
              <img className={styles.chairsIcon} alt="" src="/chairs.svg" />
              <div className={styles.semiFurnished}>Semi-furnished</div>
            </div>
          </div>
        </div>
        <div className={styles.tags}>
          <img
            className={styles.carouselsIcon}
            loading="lazy"
            alt=""
            src="/carousels1.svg"
          />
          <a className={styles.forSale}>For sale</a>
        </div>
      </div>
      <PropertyCard1
        cardBackground="/rectangle-34624569-21@2x.png"
        prop="£926,250"
        penthouse="Commercial Building"
        manchesterCity="Leeds city center"
        bedroomPlaceholder="3"
        bathroomPlaceholder="2"
        carousels="/carousels1.svg"
        forSale="For sale"
        propFlex="unset"
        propMinWidth="300px"
        propBorderRadius="30px"
        propAlignSelf="unset"
        propWidth="393px"
        propBorderRadius1="12px"
        propBorderRadius2="unset"
        propColor="#fff"
        propBorder="1px solid var(--light-black)"
        propMinWidth1="100px"
        propFontWeight="unset"
        propBackgroundColor="#f9fafb"
        propBorderRadius3="0px var(--br-xs) var(--br-xs) 0px"
        propColor1="#0d0e0f"
        propMinWidth2="43px"
        propFontWeight1="unset"
        propTextDecoration="unset"
      />
    </div>
  );
};

export default Cards;
