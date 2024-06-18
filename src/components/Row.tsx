import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Row.module.css";

export type RowType = {
  className?: string;
  vector?: string;
  topup?: string;
  prop?: string;
  completed?: string;

  /** Style props */
  row02Padding?: CSSProperties["padding"];
  row02Border?: CSSProperties["border"];
  backgroundBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivWidth?: CSSProperties["width"];
  icBuyFlex?: CSSProperties["flex"];
  icBuyWidth?: CSSProperties["width"];
  topupHeight?: CSSProperties["height"];
  topupDisplay?: CSSProperties["display"];
  frameDivWidth1?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
};

const Row: FunctionComponent<RowType> = ({
  className = "",
  vector,
  topup,
  prop,
  completed,
  row02Padding,
  row02Border,
  backgroundBorder,
  propBackgroundColor,
  frameDivWidth,
  icBuyFlex,
  icBuyWidth,
  topupHeight,
  topupDisplay,
  frameDivWidth1,
  propColor,
}) => {
  const row02Style: CSSProperties = useMemo(() => {
    return {
      padding: row02Padding,
      border: row02Border,
    };
  }, [row02Padding, row02Border]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      border: backgroundBorder,
    };
  }, [backgroundBorder]);

  const borderBotStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const icBuyStyle: CSSProperties = useMemo(() => {
    return {
      flex: icBuyFlex,
      width: icBuyWidth,
    };
  }, [icBuyFlex, icBuyWidth]);

  const topupStyle: CSSProperties = useMemo(() => {
    return {
      height: topupHeight,
      display: topupDisplay,
    };
  }, [topupHeight, topupDisplay]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth1,
    };
  }, [frameDivWidth1]);

  const completedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.row02, className].join(" ")} style={row02Style}>
      <div className={styles.background} style={backgroundStyle} />
      <div className={styles.borderbot} style={borderBotStyle} />
      <div className={styles.icBuyParent} style={frameDiv2Style}>
        <div className={styles.icBuy} style={icBuyStyle}>
          <div className={styles.background1} />
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={vector}
          />
        </div>
        <div className={styles.topupWrapper}>
          <div className={styles.topup} style={topupStyle}>
            {topup}
          </div>
        </div>
      </div>
      <div className={styles.amWrapper}>
        <div className={styles.am}>06:24:45 AM</div>
      </div>
      <div className={styles.wrapper} style={frameDiv3Style}>
        <div className={styles.div}>{prop}</div>
      </div>
      <div className={styles.completedWrapper}>
        <div className={styles.completed} style={completedStyle}>
          {completed}
        </div>
      </div>
    </div>
  );
};

export default Row;
