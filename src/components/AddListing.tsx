import { FunctionComponent, useCallback } from "react";
import SubContainer from "./SubContainer";
import { useNavigate } from "react-router-dom";
import styles from "./AddListing.module.css";

export type AddListingType = {
  className?: string;
  onClose?: () => void;
};

const AddListing: FunctionComponent<AddListingType> = ({
  className = "",
  onClose,
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={[styles.addListing, className].join(" ")}>
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-3186.svg"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/frame-3187.svg"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/frame-3188.svg"
            />
          </div>
          <div className={styles.headingWrapper}>
            <h1 className={styles.heading}>Let's Make it Happen</h1>
          </div>
        </div>
        <div className={styles.paragraphWrapper}>
          <div className={styles.paragraph}>
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </div>
        </div>
      </section>
      <section className={styles.formWrapper}>
        <form className={styles.form}>
          <div className={styles.container}>
            <div className={styles.subContainer}>
              <div className={styles.heading1}>First Name</div>
              <div className={styles.inputField}>
                <input
                  className={styles.text}
                  placeholder="Enter First Name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.subContainer1}>
              <div className={styles.heading2}>Last Name</div>
              <div className={styles.inputField1}>
                <input
                  className={styles.text1}
                  placeholder="Enter Last Name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.subContainer2}>
              <div className={styles.heading3}>Email</div>
              <div className={styles.inputField2}>
                <input
                  className={styles.text2}
                  placeholder="Enter your Email"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.subContainer3}>
              <div className={styles.heading4}>Phone</div>
              <div className={styles.inputField3}>
                <input
                  className={styles.text3}
                  placeholder="Enter Phone Number"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.container1}>
            <SubContainer
              heading="Preferred Location"
              text="Select Location"
              icon="/icon11.svg"
            />
            <SubContainer
              heading="Property Type"
              text="Select Property Type"
              icon="/icon11.svg"
              propMinWidth="204px"
              propTextDecoration="none"
              propDisplay="unset"
              propMinHeight="20px"
            />
            <SubContainer
              heading="No. of Bathrooms"
              text="Select no. of Bedrooms"
              icon="/icon11.svg"
              propMinWidth="204px"
              propTextDecoration="unset"
              propDisplay="unset"
              propMinHeight="20px"
            />
            <SubContainer
              heading="No. of Bedrooms"
              text="Select no. of Bedrooms"
              icon="/icon11.svg"
              propMinWidth="204px"
              propTextDecoration="unset"
              propDisplay="unset"
              propMinHeight="20px"
            />
          </div>
          <div className={styles.contentFooter}>
            <SubContainer
              heading="Budget"
              text="Select Budget"
              icon="/icon-41.svg"
              propMinWidth="374px"
              propTextDecoration="unset"
              propDisplay="inline-block"
              propMinHeight="unset"
            />
            <div className={styles.headingParent}>
              <div className={styles.heading5}>Preferred Contact Method</div>
              <div className={styles.shapeInputField}>
                <div className={styles.inputField4}>
                  <img className={styles.icon} alt="" src="/icon-51.svg" />
                  <input
                    className={styles.text4}
                    placeholder="Enter Your Number"
                    type="text"
                  />
                  <div className={styles.shapeWrapper}>
                    <div className={styles.shape} />
                  </div>
                </div>
                <div className={styles.inputField5}>
                  <img className={styles.icon1} alt="" src="/icon-61.svg" />
                  <input
                    className={styles.text5}
                    placeholder="Enter Your Email"
                    type="text"
                  />
                  <div className={styles.shapeContainer}>
                    <div className={styles.shape1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.headingGroup}>
            <div className={styles.heading6}>Message</div>
            <div className={styles.inputField6}>
              <input
                className={styles.text6}
                placeholder="Enter your Message here.."
                type="text"
              />
            </div>
          </div>
          <div className={styles.shapeContainerParent}>
            <div className={styles.shapeContainer1}>
              <input className={styles.shape2} type="checkbox" />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text7}>
                {`I agree with `}
                <span className={styles.termsOfUse}>Terms of Use</span>
                {` and `}
                <span className={styles.privacyPolicy}>Privacy Policy</span>
              </div>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.text8}>Send Your Message</div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddListing;
