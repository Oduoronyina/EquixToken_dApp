import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubContainer.module.css";

export type SubContainerType = {
  className?: string;
  heading?: string;
  text?: string;
  icon?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propDisplay?: CSSProperties["display"];
  propMinHeight?: CSSProperties["minHeight"];
};

const SubContainer: FunctionComponent<SubContainerType> = ({
  className = "",
  heading,
  text,
  icon,
  propMinWidth,
  propTextDecoration,
  propDisplay,
  propMinHeight,
}) => {
  const subContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
    };
  }, [propTextDecoration, propDisplay]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={[styles.subContainer, className].join(" ")}
      style={subContainerStyle}
    >
      <div className={styles.heading}>{heading}</div>
      <div className={styles.inputField}>
        <div className={styles.text} style={textStyle}>
          {text}
        </div>
        <img className={styles.icon} alt="" src={icon} style={iconStyle} />
      </div>
    </div>
  );
};

export default SubContainer;
