import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonShapeClick = useCallback(() => {
    navigate("/owner-dashboard");
  }, [navigate]);

  const onDontHaveAnyClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2 className={styles.equixtoken}>EquixToken</h2>
          <div className={styles.signIn}>
            <h1 className={styles.signInTo}>Sign In to EquixToken</h1>
            <form className={styles.credentials}>
              <div className={styles.inputFields}>
                <a className={styles.email}>Email</a>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <input
                    className={styles.enterYourEmail}
                    placeholder="Enter your email"
                    type="text"
                  />
                  <img
                    className={styles.envelopeIcon}
                    alt=""
                    src="/envelope1.svg"
                  />
                </div>
              </div>
              <div className={styles.inputFields1}>
                <div className={styles.password}>Password</div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <input
                    className={styles.characters1Capital}
                    placeholder="6+ Characters, 1 Capital letter"
                    type="text"
                  />
                  <img
                    className={styles.lockAltIcon}
                    alt=""
                    src="/lockalt1.svg"
                  />
                </div>
              </div>
              <div className={styles.signInButton}>
                <button className={styles.buttonShapeParent}>
                  <div
                    className={styles.buttonShape}
                    onClick={onButtonShapeClick}
                  />
                  <b className={styles.signIn1}>Sign In</b>
                </button>
              </div>
              <button className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.googleIcon}>
                  <img
                    className={styles.google11}
                    alt=""
                    src="/google-1-11.svg"
                  />
                </div>
                <div className={styles.signInWith}>Sign in with Google</div>
              </button>
              <div className={styles.footerLinks}>
                <div className={styles.links}>
                  <div
                    className={styles.dontHaveAnyContainer}
                    onClick={onDontHaveAnyClick}
                  >
                    <span
                      className={styles.dontHaveAny}
                    >{`Don’t have any account? `}</span>
                    <span className={styles.signUp}>Sign Up</span>
                  </div>
                  <div className={styles.forgotPasswordLink}>
                    <div
                      className={styles.forgotPassword}
                      onClick={onForgotPasswordTextClick}
                    >
                      Forgot password?
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer background="/background.svg" propOpacity="0.5" />
    </div>
  );
};

export default Login;
