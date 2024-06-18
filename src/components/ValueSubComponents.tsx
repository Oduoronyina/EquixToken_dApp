import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ValueSubComponents.module.css";

export type ValueSubComponentsType = {
  className?: string;
  subtract?: string;
  totalAssetValue?: string;
  balanceSeparator?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const ValueSubComponents: FunctionComponent<ValueSubComponentsType> = ({
  className = "",
  subtract,
  totalAssetValue,
  balanceSeparator,
  propMinWidth,
}) => {
  const totalAssetValueStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.valueSubComponents, className].join(" ")}>
      <img className={styles.subtractIcon} alt="" src={subtract} />
      <div className={styles.autoLayoutHorizontal}>
        <div className={styles.emptyValue}>+2.3%</div>
      </div>
      <div className={styles.totalAssetValue} style={totalAssetValueStyle}>
        {totalAssetValue}
      </div>
      <div className={styles.balanceSeparator}>{balanceSeparator}</div>
    </div>
  );
};

export default ValueSubComponents;
