import { FunctionComponent } from "react";
import PropertyCard1 from "./PropertyCard1";
import styles from "./OfferingsCards.module.css";

export type OfferingsCardsType = {
  className?: string;
};

const OfferingsCards: FunctionComponent<OfferingsCardsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.propertyCardParent, className].join(" ")}>
      <PropertyCard1
        cardBackground="/rectangle-34624569@2x.png"
        prop="£22,250"
        penthouse="Penthouse"
        manchesterCity="Manchester city"
        bedroomPlaceholder="3"
        bathroomPlaceholder="2"
        carousels="/carousels1.svg"
        forSale="For sale"
        propFlex="1"
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
        propTextDecoration="unset"
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
              <img
                className={styles.chairsIcon}
                loading="lazy"
                alt=""
                src="/chairs.svg"
              />
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
          <div className={styles.forSale}>For sale</div>
        </div>
      </div>
      <PropertyCard1
        cardBackground="/rectangle-34624569-21@2x.png"
        prop="£926,250"
        penthouse="Bungalow"
        manchesterCity="Leeds city center"
        bedroomPlaceholder="3"
        bathroomPlaceholder="2"
        carousels="/carousels1.svg"
        forSale="For sale"
        propFlex="1"
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
      <div className={styles.propertyCard1}>
        <div className={styles.cardRectangle1}>
          <img
            className={styles.cardRectangleItem}
            alt=""
            src="/rectangle-34624569@2x.png"
          />
          <div className={styles.bubbleIcons}>
            <div className={styles.heartShapes} />
            <img
              className={styles.heartIcon}
              loading="lazy"
              alt=""
              src="/heart.svg"
            />
          </div>
        </div>
        <div className={styles.infoFeatures1}>
          <div className={styles.information1}>
            <div className={styles.div3}>£22,250</div>
            <div className={styles.estValue72501}>Est. Value: £7,250</div>
            <div className={styles.penthouse}>Penthouse</div>
            <div className={styles.manchesterCity}>Manchester city</div>
          </div>
          <div className={styles.features1}>
            <div className={styles.bed1}>
              <img className={styles.bedIcon1} alt="" src="/bed.svg" />
              <div className={styles.div4}>3</div>
            </div>
            <div className={styles.bathroom1}>
              <img className={styles.bathubIcon1} alt="" src="/bathub-1.svg" />
              <div className={styles.div5}>2</div>
            </div>
            <div className={styles.furniture1}>
              <img className={styles.chairsIcon1} alt="" src="/chairs.svg" />
              <b className={styles.semiFurnished1}>Semi-furnished</b>
            </div>
          </div>
        </div>
        <div className={styles.tags1}>
          <img className={styles.carouselsIcon1} alt="" src="/carousels1.svg" />
          <div className={styles.forSale1}>For sale</div>
        </div>
      </div>
      <div className={styles.propertyCard2}>
        <div className={styles.cardRectangle2}>
          <img
            className={styles.cardRectangleInner}
            alt=""
            src="/rectangle-34624569-1@2x.png"
          />
        </div>
        <div className={styles.infoFeatures2}>
          <div className={styles.information2}>
            <div className={styles.div6}>£654,250</div>
            <div className={styles.estValue72502}>Est. Value: £7,250</div>
            <div className={styles.semiDetachedHouse1}>Semi detached house</div>
            <div className={styles.southfieldRoadOxford1}>
              Southfield Road, Oxford OX4
            </div>
          </div>
          <div className={styles.features2}>
            <div className={styles.bed2}>
              <img className={styles.bedIcon2} alt="" src="/bed.svg" />
              <div className={styles.div7}>3</div>
            </div>
            <div className={styles.bathroom2}>
              <img className={styles.bathubIcon2} alt="" src="/bathub-1.svg" />
              <div className={styles.div8}>2</div>
            </div>
            <div className={styles.furniture2}>
              <img className={styles.chairsIcon2} alt="" src="/chairs.svg" />
              <div className={styles.semiFurnished2}>Semi-furnished</div>
            </div>
          </div>
        </div>
        <div className={styles.bubbleIcons1}>
          <div className={styles.bubbleIconsChild} />
          <img
            className={styles.heartIcon1}
            loading="lazy"
            alt=""
            src="/heart.svg"
          />
        </div>
        <div className={styles.tags2}>
          <img className={styles.carouselsIcon2} alt="" src="/carousels1.svg" />
          <div className={styles.forSale2}>For sale</div>
        </div>
      </div>
      <div className={styles.propertyCard3}>
        <div className={styles.cardRectangle3}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-34624569-21@2x.png"
          />
          <div className={styles.bubbleIcons2}>
            <div className={styles.bubbleIconsItem} />
            <img className={styles.heartIcon2} alt="" src="/heart.svg" />
          </div>
        </div>
        <div className={styles.infoFeatures3}>
          <div className={styles.information3}>
            <div className={styles.div9}>£926,250</div>
            <div className={styles.estValue72503}>Est. Value: £7,250</div>
            <div className={styles.bungalow}>Bungalow</div>
            <div className={styles.leedsCityCenter}>Leeds city center</div>
          </div>
          <div className={styles.features3}>
            <div className={styles.bed3}>
              <img className={styles.bedIcon3} alt="" src="/bed.svg" />
              <div className={styles.div10}>3</div>
            </div>
            <div className={styles.bathroom3}>
              <img className={styles.bathubIcon3} alt="" src="/bathub-1.svg" />
              <div className={styles.div11}>2</div>
            </div>
            <div className={styles.furniture3}>
              <img className={styles.chairsIcon3} alt="" src="/chairs.svg" />
              <div className={styles.semiFurnished3}>Semi-furnished</div>
            </div>
          </div>
        </div>
        <div className={styles.tags3}>
          <img className={styles.carouselsIcon3} alt="" src="/carousels1.svg" />
          <div className={styles.forSale3}>For sale</div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsCards;
