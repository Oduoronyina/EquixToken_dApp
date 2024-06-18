import { FunctionComponent } from "react";
import styles from "./TokenizationRequest.module.css";

export type TokenizationRequestType = {
  className?: string;
  onClose?: () => void;
};

const TokenizationRequest: FunctionComponent<TokenizationRequestType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.tokenizationRequest, className].join(" ")}>
      <div className={styles.tokenizationRequestWrapper}>
        <h1 className={styles.tokenizationRequest1}>Tokenization Request</h1>
      </div>
      <form className={styles.requesterDetails}>
        <div className={styles.requestDetails}>Request Details</div>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.label}>
              <img className={styles.lefticon} alt="" src="/lefticon.svg" />
              <b className={styles.text}>Full Name</b>
            </div>
            <div className={styles.inputcontainer}>
              <input
                className={styles.inputinnercontainer}
                placeholder="John"
                type="text"
              />
            </div>
            <div className={styles.response}>
              <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
              <b className={styles.text1}>Response</b>
            </div>
          </div>
          <div className={styles.input1}>
            <div className={styles.label1}>
              <img className={styles.lefticon2} alt="" src="/lefticon.svg" />
              <b className={styles.text2}>User ID</b>
            </div>
            <div className={styles.inputcontainer1}>
              <input
                className={styles.inputinnercontainer1}
                placeholder="Doe"
                type="text"
              />
            </div>
            <div className={styles.response1}>
              <img className={styles.lefticon3} alt="" src="/lefticon1.svg" />
              <b className={styles.text3}>Response</b>
            </div>
          </div>
        </div>
        <div className={styles.input2}>
          <div className={styles.label2}>
            <img className={styles.lefticon4} alt="" src="/lefticon.svg" />
            <b className={styles.text4}>Wallet ID</b>
          </div>
          <div className={styles.inputcontainer2}>
            <div className={styles.inputinnercontainer2}>
              <img className={styles.walletIcon} alt="" src="/wallet@2x.png" />
              <b className={styles.text5}>Connect Wallet</b>
              <img className={styles.righticon} alt="" src="/righticon.svg" />
            </div>
          </div>
          <div className={styles.response2}>
            <img className={styles.lefticon5} alt="" src="/lefticon1.svg" />
            <b className={styles.text6}>Response</b>
          </div>
        </div>
      </form>
      <section className={styles.tokenDetailsParent}>
        <div className={styles.tokenDetails}>Token Details</div>
        <div className={styles.input3}>
          <div className={styles.label3}>
            <img className={styles.lefticon6} alt="" src="/lefticon.svg" />
            <b className={styles.leftIcon}>Name</b>
          </div>
          <div className={styles.inputcontainer3}>
            <input
              className={styles.inputinnercontainer3}
              placeholder="Token name"
              type="text"
            />
          </div>
          <div className={styles.response3}>
            <img className={styles.lefticon7} alt="" src="/lefticon1.svg" />
            <b className={styles.text7}>Response</b>
          </div>
        </div>
        <div className={styles.input4}>
          <div className={styles.label4}>
            <img
              className={styles.lefticon8}
              loading="lazy"
              alt=""
              src="/lefticon.svg"
            />
            <b className={styles.text8}>Describe your case</b>
          </div>
          <textarea
            className={styles.inputcontainer4}
            placeholder="Tell us about your use case..."
            rows={5}
            cols={22}
          />
          <div className={styles.response4}>
            <img className={styles.lefticon9} alt="" src="/lefticon1.svg" />
            <b className={styles.text9}>Response</b>
          </div>
        </div>
      </section>
      <img className={styles.lefticon10} alt="" src="/lefticon.svg" />
      <div className={styles.response5}>
        <img className={styles.lefticon11} alt="" src="/lefticon1.svg" />
        <b className={styles.text10}>Response</b>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.textParent}>
          <b className={styles.text11}>Phone number</b>
          <div className={styles.inputcontainer5}>
            <div className={styles.inputinnercontainer4}>
              <div className={styles.lefticonWrapper}>
                <img
                  className={styles.lefticon12}
                  loading="lazy"
                  alt=""
                  src="/lefticon-7.svg"
                />
              </div>
              <b className={styles.text12}>+370</b>
              <div className={styles.righticonWrapper}>
                <img
                  className={styles.righticon1}
                  loading="lazy"
                  alt=""
                  src="/righticon.svg"
                />
              </div>
              <div className={styles.inputinnercontainerChild} />
              <b className={styles.text13}>Phone number</b>
            </div>
          </div>
        </div>
        <div className={styles.assetOverviewParent}>
          <div className={styles.assetOverview}>Asset Overview</div>
          <div className={styles.input5}>
            <div className={styles.label5}>
              <img className={styles.lefticon13} alt="" src="/lefticon.svg" />
              <b className={styles.text14}>Asset type</b>
            </div>
            <div className={styles.inputcontainer6}>
              <input
                className={styles.inputinnercontainer5}
                placeholder="Asset Type"
                type="text"
              />
            </div>
            <div className={styles.response6}>
              <img className={styles.lefticon14} alt="" src="/lefticon1.svg" />
              <b className={styles.text15}>Response</b>
            </div>
          </div>
          <div className={styles.inputStructure}>
            <div className={styles.input6}>
              <div className={styles.label6}>
                <img className={styles.lefticon15} alt="" src="/lefticon.svg" />
                <b className={styles.text16}>Credit card information</b>
              </div>
              <div className={styles.inputcontainer7}>
                <input
                  className={styles.inputinnercontainer6}
                  placeholder="MM / YY"
                  type="text"
                />
              </div>
              <div className={styles.response7}>
                <img
                  className={styles.lefticon16}
                  alt=""
                  src="/lefticon1.svg"
                />
                <b className={styles.text17}>Response</b>
              </div>
            </div>
            <div className={styles.input7}>
              <div className={styles.label7}>
                <img className={styles.lefticon17} alt="" src="/lefticon.svg" />
                <b className={styles.text18}>Credit card information</b>
              </div>
              <div className={styles.inputcontainer8}>
                <input
                  className={styles.inputinnercontainer7}
                  placeholder="CCV"
                  type="text"
                />
              </div>
              <div className={styles.response8}>
                <img
                  className={styles.lefticon18}
                  alt=""
                  src="/lefticon1.svg"
                />
                <b className={styles.text19}>Response</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.assetDocumentationParent}>
        <div className={styles.assetDocumentation}>Asset Documentation</div>
        <b className={styles.description}>Upload Asset Deed Documentation</b>
        <div className={styles.uploader}>
          <div className={styles.uploaderChild} />
          <h3 className={styles.dragDropContainer}>
            <span className={styles.dragDropContainer1}>
              <span>{`Drag & drop your files here or `}</span>
              <span className={styles.browse}>browse</span>
            </span>
          </h3>
        </div>
      </section>
      <button className={styles.button}>
        <img className={styles.lefticon19} alt="" src="/lefticon2.svg" />
        <b className={styles.value}>Submit</b>
        <img className={styles.righticon2} alt="" src="/righticon-2.svg" />
      </button>
    </div>
  );
};

export default TokenizationRequest;
