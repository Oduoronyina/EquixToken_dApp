import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PropertyCard1.module.css";

export type PropertyCard1Type = {
  className?: string;
  cardBackground?: string;
  prop?: string;
  penthouse?: string;
  manchesterCity?: string;
  bedroomPlaceholder?: string;
  bathroomPlaceholder?: string;
  carousels?: string;
  forSale?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propBorderRadius2?: CSSProperties["borderRadius"];
  propColor?: CSSProperties["color"];
  propBorder?: CSSProperties["border"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFontWeight?: CSSProperties["fontWeight"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorderRadius3?: CSSProperties["borderRadius"];
  propColor1?: CSSProperties["color"];
  propMinWidth2?: CSSProperties["minWidth"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const PropertyCard1: FunctionComponent<PropertyCard1Type> = ({
  className = "",
  cardBackground,
  prop,
  penthouse,
  manchesterCity,
  bedroomPlaceholder,
  bathroomPlaceholder,
  carousels,
  forSale,
  propFlex,
  propMinWidth,
  propBorderRadius,
  propAlignSelf,
  propWidth,
  propBorderRadius1,
  propBorderRadius2,
  propColor,
  propBorder,
  propMinWidth1,
  propFontWeight,
  propBackgroundColor,
  propBorderRadius3,
  propColor1,
  propMinWidth2,
  propFontWeight1,
  propTextDecoration,
}) => {
  const propertyCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const cardRectangleStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propBorderRadius, propAlignSelf, propWidth]);

  const cardBackgroundIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const infoFeaturesStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius2,
    };
  }, [propBorderRadius2]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const featuresStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const semiFurnishedStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      fontWeight: propFontWeight,
    };
  }, [propMinWidth1, propFontWeight]);

  const tagsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      borderRadius: propBorderRadius3,
    };
  }, [propBackgroundColor, propBorderRadius3]);

  const forSaleStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth2,
      fontWeight: propFontWeight1,
      textDecoration: propTextDecoration,
    };
  }, [propColor1, propMinWidth2, propFontWeight1, propTextDecoration]);

  return (
    <div
      className={[styles.propertyCard, className].join(" ")}
      style={propertyCardStyle}
    >
      <div className={styles.cardRectangle} style={cardRectangleStyle}>
        <img
          className={styles.cardBackgroundIcon}
          alt=""
          src={cardBackground}
          style={cardBackgroundIconStyle}
        />
      </div>
      <div className={styles.infoFeatures} style={infoFeaturesStyle}>
        <div className={styles.information}>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
          <div className={styles.estValue7250}>Est. Value: £7,250</div>
          <div className={styles.penthouse}>{penthouse}</div>
          <div className={styles.manchesterCity}>{manchesterCity}</div>
        </div>
        <div className={styles.features} style={featuresStyle}>
          <div className={styles.bed}>
            <img
              className={styles.bedIcon}
              loading="lazy"
              alt=""
              src="/bed.svg"
            />
            <div className={styles.bedroomPlaceholder}>
              {bedroomPlaceholder}
            </div>
          </div>
          <div className={styles.bathroom}>
            <input className={styles.bathub} type="checkbox" />
            <div className={styles.bathroomPlaceholder}>
              {bathroomPlaceholder}
            </div>
          </div>
          <div className={styles.furniture}>
            <img
              className={styles.chairsIcon}
              loading="lazy"
              alt=""
              src="/chairs.svg"
            />
            <b className={styles.semiFurnished} style={semiFurnishedStyle}>
              Semi-furnished
            </b>
          </div>
        </div>
      </div>
      <div className={styles.tags} style={tagsStyle}>
        <img
          className={styles.carouselsIcon}
          loading="lazy"
          alt=""
          src={carousels}
        />
        <b className={styles.forSale} style={forSaleStyle}>
          {forSale}
        </b>
      </div>
    </div>
  );
};

export default PropertyCard1;
