import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./AssetInformation.module.css";

const AssetInformation: FunctionComponent = () => {
  return (
    <div className={styles.assetInformation}>
      <FrameComponent />
      <main className={styles.content}>
        <section className={styles.editorBackgroundParent}>
          <div className={styles.editorBackground} />
          <div className={styles.editor}>
            <header className={styles.container}>
              <div className={styles.subContainer}>
                <h3 className={styles.heading}>Seaside Serenity Villa</h3>
                <div className={styles.container1}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.text}>Malibu, California</div>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading1}>Price</div>
                <div className={styles.text1}>$1,250,000</div>
              </div>
            </header>
            <div className={styles.containerParent}>
              <div className={styles.container2}>
                <div className={styles.imagesContainer}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/image-4@2x.png"
                  />
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/image-5@2x.png"
                  />
                  <img
                    className={styles.imageIcon5}
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <img
                    className={styles.imageIcon6}
                    alt=""
                    src="/image-7@2x.png"
                  />
                  <img
                    className={styles.imageIcon7}
                    alt=""
                    src="/image-8@2x.png"
                  />
                  <img
                    className={styles.imageIcon8}
                    alt=""
                    src="/image-9@2x.png"
                  />
                </div>
                <div className={styles.imagesContainer1}>
                  <img
                    className={styles.imageIcon9}
                    alt=""
                    src="/image-10@2x.png"
                  />
                  <img
                    className={styles.imageIcon10}
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
                <div className={styles.buttonsContainerWrapper}>
                  <div className={styles.buttonsContainer}>
                    <div className={styles.button}>
                      <img className={styles.icon1} alt="" src="/icon-1.svg" />
                    </div>
                    <div className={styles.indicatorsContainerWrapper}>
                      <div className={styles.indicatorsContainer}>
                        <div className={styles.shape} />
                        <div className={styles.shape1} />
                        <div className={styles.shape2} />
                        <div className={styles.shape3} />
                        <div className={styles.shape4} />
                        <div className={styles.shape5} />
                      </div>
                    </div>
                    <div className={styles.button1}>
                      <img className={styles.icon2} alt="" src="/icon-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <footer className={styles.containerGroup}>
                <div className={styles.container3}>
                  <div className={styles.infoHeader}>
                    <div className={styles.heading2}>Description</div>
                    <div className={styles.paragraph}>
                      Discover your own piece of paradise with the Seaside
                      Serenity Villa. T With an open floor plan, breathtaking
                      ocean views from every room, and direct access to a
                      pristine sandy beach, this property is the epitome of
                      coastal living.
                    </div>
                  </div>
                  <div className={styles.subContainer1}>
                    <div className={styles.frameParent}>
                      <div className={styles.iconParent}>
                        <img
                          className={styles.icon3}
                          alt=""
                          src="/icon-3.svg"
                        />
                        <div className={styles.heading3}>Bedrooms</div>
                      </div>
                      <div className={styles.categoryDescriptions}>04</div>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.frameGroup}>
                      <div className={styles.iconGroup}>
                        <img
                          className={styles.icon4}
                          alt=""
                          src="/icon-4.svg"
                        />
                        <div className={styles.heading4}>Bathrooms</div>
                      </div>
                      <div className={styles.text2}>03</div>
                    </div>
                    <div className={styles.line1} />
                    <div className={styles.frameContainer}>
                      <div className={styles.iconContainer}>
                        <img
                          className={styles.icon5}
                          alt=""
                          src="/icon-5.svg"
                        />
                        <div className={styles.heading5}>Area</div>
                      </div>
                      <div className={styles.text3}>2,500 Square Feet</div>
                    </div>
                  </div>
                </div>
                <div className={styles.container4}>
                  <div className={styles.heading6}>
                    Key Features and Amenities
                  </div>
                  <form className={styles.subContainer2}>
                    <div className={styles.container5}>
                      <img className={styles.icon6} alt="" src="/icon-6.svg" />
                      <div className={styles.featureDescriptions}>
                        Expansive oceanfront terrace for outdoor entertaining
                      </div>
                    </div>
                    <button className={styles.container6}>
                      <img className={styles.icon7} alt="" src="/icon-6.svg" />
                      <div className={styles.text4}>
                        Gourmet kitchen with top-of-the-line appliances
                      </div>
                    </button>
                    <div className={styles.container7}>
                      <img className={styles.icon8} alt="" src="/icon-6.svg" />
                      <div className={styles.text5}>
                        Private beach access for morning strolls and sunset
                        views
                      </div>
                    </div>
                    <div className={styles.container8}>
                      <img className={styles.icon9} alt="" src="/icon-6.svg" />
                      <div className={styles.text6}>
                        Master suite with a spa-inspired bathroom and
                        ocean-facing balcony
                      </div>
                    </div>
                    <div className={styles.container9}>
                      <img className={styles.icon10} alt="" src="/icon-6.svg" />
                      <div className={styles.text7}>
                        Private garage and ample storage space
                      </div>
                    </div>
                  </form>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AssetInformation;
