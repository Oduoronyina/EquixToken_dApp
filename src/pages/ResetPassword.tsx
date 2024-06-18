import { FunctionComponent } from "react";
import PasswordReset from "../components/PasswordReset";
import Footer from "../components/Footer";
import styles from "./ResetPassword.module.css";

const ResetPassword: FunctionComponent = () => {
  return (
    <div className={styles.resetPassword}>
      <div className={styles.mainContent}>
        <div className={styles.equixtokenParent}>
          <h2 className={styles.equixtoken}>EquixToken</h2>
          <PasswordReset />
        </div>
      </div>
      <Footer background="/background.svg" propOpacity="0.5" />
    </div>
  );
};

export default ResetPassword;
