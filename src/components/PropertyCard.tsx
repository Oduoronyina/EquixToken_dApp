import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PropertyCard.module.css";

export type PropertyCardType = {
  className?: string;
  rectangle34624569?: string;
  prop?: string;
  semiDetachedHouse?: string;
  southfieldRoadOxfordOX4?: string;
  prop1?: string;
  semiFurnished?: string;
  carousels?: string;
  forSale?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propBorderRadius2?: CSSProperties["borderRadius"];
  propColor?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorderRadius3?: CSSProperties["borderRadius"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const PropertyCard: FunctionComponent<PropertyCardType> = ({
  className = "",
  rectangle34624569,
  prop,
  semiDetachedHouse,
  southfieldRoadOxfordOX4,
  prop1,
  semiFurnished,
  carousels,
  forSale,
  propFlex,
  propMinWidth,
  propBorderRadius,
  propBorderRadius1,
  propBorderRadius2,
  propColor,
  propMinWidth1,
  propBackgroundColor,
  propBorderRadius3,
  propMinWidth2,
}) => {
  const propertyCard1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const cardRectangle1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const infoFeatures1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius2,
    };
  }, [propBorderRadius2]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const semiFurnished1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const tags1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      borderRadius: propBorderRadius3,
    };
  }, [propBackgroundColor, propBorderRadius3]);

  const forSale1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={[styles.propertyCard, className].join(" ")}
      style={propertyCard1Style}
    >
      <div className={styles.cardRectangle} style={cardRectangle1Style}>
        <img
          className={styles.cardRectangleChild}
          alt=""
          src={rectangle34624569}
          style={rectangleIconStyle}
        />
      </div>
      <div className={styles.infoFeatures} style={infoFeatures1Style}>
        <div className={styles.information}>
          <div className={styles.div} style={div1Style}>
            {prop}
          </div>
          <div className={styles.estValue7250}>Est. Value: £7,250</div>
          <div className={styles.semiDetachedHouse}>{semiDetachedHouse}</div>
          <div className={styles.southfieldRoadOxford}>
            {southfieldRoadOxfordOX4}
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.bed}>
            <img className={styles.bedIcon} alt="" src="/bed.svg" />
            <div className={styles.div1}>{prop1}</div>
          </div>
          <div className={styles.bathroom}>
            <input className={styles.bathub} type="checkbox" />
            <div className={styles.div2}>2</div>
          </div>
          <div className={styles.furniture}>
            <img className={styles.chairsIcon} alt="" src="/chairs.svg" />
            <div className={styles.semiFurnished} style={semiFurnished1Style}>
              {semiFurnished}
            </div>
          </div>
        </div>
      </div>
      <button className={styles.tags} style={tags1Style}>
        <img className={styles.carouselsIcon} alt="" src={carousels} />
        <b className={styles.forSale} style={forSale1Style}>
          {forSale}
        </b>
      </button>
    </div>
  );
};

export default PropertyCard;
