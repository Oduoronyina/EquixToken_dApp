import { FunctionComponent } from "react";
import SignUpp from "../components/SignUpp";
import Footer from "../components/Footer";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <SignUpp />
      </div>
      <Footer background="/background.svg" propOpacity="0.5" />
    </div>
  );
};

export default SignUp;
