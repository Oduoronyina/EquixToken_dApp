import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  background?: string;

  /** Style props */
  propOpacity?: CSSProperties["opacity"];

  /** Action props */
  onBittpnSmallClick?: () => void;
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  background,
  propOpacity,
  onBittpnSmallClick,
}) => {
  const bittpnSmallStyle: CSSProperties = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const navigate = useNavigate();

  const onBittpnSmallClick1 = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  return (
    <div className={[styles.footer, className].join(" ")}>
      <img
        className={styles.backgroundIcon}
        loading="lazy"
        alt=""
        src={background}
      />
      <div className={styles.footerLinks}>
        <div className={styles.features}>Features</div>
      </div>
      <div className={styles.footerLinks1}>
        <div className={styles.aboutUs}>About us</div>
      </div>
      <div className={styles.footerLinks2}>
        <div className={styles.contact}>Contact</div>
      </div>
      <button
        className={styles.bittpnSmall}
        onClick={onBittpnSmallClick}
        style={bittpnSmallStyle}
      >
        <div className={styles.marketplace}>Marketplace</div>
      </button>
    </div>
  );
};

export default Footer;
