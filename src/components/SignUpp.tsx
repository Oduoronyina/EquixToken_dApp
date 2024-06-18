import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpp.module.css";

export type SignUppType = {
  className?: string;
};

const SignUpp: FunctionComponent<SignUppType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCreateAccountButtonBackgrouClick = useCallback(() => {
    navigate("/owner-dashboard");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <form className={[styles.frameParent, className].join(" ")}>
      <div className={styles.equixtokenWrapper}>
        <h2 className={styles.equixtoken}>EquixToken</h2>
      </div>
      <div className={styles.startForFreeParent}>
        <a className={styles.startForFree}>Start for free</a>
        <h1 className={styles.signUpTo}>Sign Up to EquixToken</h1>
      </div>
      <div className={styles.nameParent}>
        <a className={styles.name}>Name</a>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <input
            className={styles.enterYourFull}
            placeholder="Enter your full name"
            type="text"
          />
          <img className={styles.userAlt4Icon} alt="" src="/useralt4.svg" />
        </div>
      </div>
      <div className={styles.emailParent}>
        <a className={styles.email}>Email</a>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <input
            className={styles.enterYourEmail}
            placeholder="Enter your email"
            type="text"
          />
          <img className={styles.envelopeIcon} alt="" src="/envelope.svg" />
        </div>
      </div>
      <div className={styles.passwordParent}>
        <div className={styles.password}>Password</div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <input
            className={styles.enterYourPassword}
            placeholder="Enter your password"
            type="text"
          />
          <img className={styles.lockAltIcon} alt="" src="/lockalt.svg" />
        </div>
      </div>
      <div className={styles.reTypePasswordParent}>
        <div className={styles.reTypePassword}>Re-type Password</div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <input
            className={styles.reEnterYourPassword}
            placeholder="Re-enter your password"
            type="text"
          />
          <img className={styles.lockAltIcon1} alt="" src="/lockalt.svg" />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.createAccountButtonBackgrouParent}>
          <div
            className={styles.createAccountButtonBackgrou}
            onClick={onCreateAccountButtonBackgrouClick}
          />
          <b className={styles.createAccount}>Create account</b>
        </button>
      </div>
      <div className={styles.frameContainer}>
        <button className={styles.groupButton}>
          <div className={styles.frameChild1} />
          <div className={styles.google11Wrapper}>
            <img className={styles.google11} alt="" src="/google-1-1.svg" />
          </div>
          <div className={styles.signUpWithGoogleWrapper}>
            <div className={styles.signUpWith}>Sign up with Google</div>
          </div>
        </button>
      </div>
      <div className={styles.alreadyHaveAnAccountSignWrapper}>
        <div
          className={styles.alreadyHaveAnContainer}
          onClick={onAlreadyHaveAnClick}
        >
          <span
            className={styles.alreadyHaveAn}
          >{`Already have an account? `}</span>
          <span className={styles.signIn}>Sign in</span>
        </div>
      </div>
    </form>
  );
};

export default SignUpp;
