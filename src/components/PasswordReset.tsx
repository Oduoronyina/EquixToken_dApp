import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PasswordReset.module.css";

export type PasswordResetType = {
  className?: string;
};

const PasswordReset: FunctionComponent<PasswordResetType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={[styles.emailInstructionParent, className].join(" ")}>
      <div className={styles.emailInstruction}>
        <h1 className={styles.resetPassword}>Reset Password</h1>
        <div className={styles.enterYourEmailContainer}>
          <p className={styles.enterYourEmail}>
            Enter your email address to receive a password
          </p>
          <p className={styles.resetLink}>reset link.</p>
        </div>
      </div>
      <div className={styles.emailField}>
        <div className={styles.email}>Email</div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <input
            className={styles.enterYourEmail1}
            placeholder="Enter your email"
            type="text"
          />
          <img className={styles.envelopeIcon} alt="" src="/envelope1.svg" />
        </div>
      </div>
      <button className={styles.rectangleGroup} onClick={onGroupButtonClick}>
        <div className={styles.frameItem} />
        <b className={styles.sendPasswordReset}>Send Password Reset Link</b>
      </button>
    </div>
  );
};

export default PasswordReset;
