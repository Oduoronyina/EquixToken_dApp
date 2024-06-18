import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import styles from "./RecentUploads.module.css";

export type RecentUploadsType = {
  className?: string;
};

const RecentUploads: FunctionComponent<RecentUploadsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.recentUploads, className].join(" ")}>
      <FrameComponent4 />
      <div className={styles.separator}>
        <div className={styles.separatorChild} />
      </div>
      <div className={styles.uploadItem}>
        <div className={styles.uploadContent}>
          <div className={styles.wrap}>
            <div className={styles.details}>
              <img
                className={styles.iconPdf}
                loading="lazy"
                alt=""
                src="/icon--pdf.svg"
              />
              <div className={styles.text}>
                <div className={styles.userJourney01pdf}>
                  user-journey-01.pdf
                </div>
                <div className={styles.mAgo}>2m ago</div>
              </div>
            </div>
            <div className={styles.tags}>
              <img className={styles.iconRetry} alt="" src="/icon--retry.svg" />
              <div className={styles.tag}>
                <div className={styles.kb}>604KB</div>
              </div>
            </div>
            <img
              className={styles.iconEllipsis}
              alt=""
              src="/icon--ellipsis.svg"
            />
          </div>
          <div className={styles.li} />
        </div>
      </div>
      <div className={styles.recentUploads1}>
        <div className={styles.uploadContainer}>
          <div className={styles.wrap1}>
            <div className={styles.details1}>
              <img
                className={styles.iconFolder}
                loading="lazy"
                alt=""
                src="/icon--folder.svg"
              />
              <div className={styles.text1}>
                <div className={styles.stockPhotos}>Stock Photos</div>
                <div className={styles.mAgo1}>3m ago</div>
              </div>
            </div>
            <div className={styles.tags1}>
              <img
                className={styles.iconRetry1}
                alt=""
                src="/icon--retry.svg"
              />
              <div className={styles.tag1}>
                <div className={styles.kb1}>2.20GB</div>
              </div>
            </div>
            <img
              className={styles.iconEllipsis1}
              alt=""
              src="/icon--ellipsis.svg"
            />
          </div>
          <div className={styles.uploadsList}>
            <div className={styles.li1} />
            <div className={styles.wrap2}>
              <div className={styles.details2}>
                <img
                  className={styles.iconFolder1}
                  loading="lazy"
                  alt=""
                  src="/icon--folder.svg"
                />
                <div className={styles.text2}>
                  <div className={styles.optimisedPhotos}>Optimised Photos</div>
                  <div className={styles.daysAgo}>3 days ago</div>
                </div>
              </div>
              <div className={styles.tags2}>
                <img
                  className={styles.iconRetry2}
                  alt=""
                  src="/icon--retry.svg"
                />
                <div className={styles.tag2}>
                  <div className={styles.kb2}>1.46MB</div>
                </div>
              </div>
              <img
                className={styles.iconEllipsis2}
                alt=""
                src="/icon--ellipsis.svg"
              />
            </div>
          </div>
          <div className={styles.li2} />
        </div>
      </div>
      <div className={styles.uploadItem1}>
        <div className={styles.wrapParent}>
          <div className={styles.wrap3}>
            <div className={styles.details3}>
              <div className={styles.iconDocument}>
                <img
                  className={styles.outlineStrokeIcon}
                  loading="lazy"
                  alt=""
                  src="/outline-stroke.svg"
                />
                <div className={styles.text3}>
                  <div className={styles.li3} />
                  <div className={styles.li4} />
                  <div className={styles.li5} />
                  <div className={styles.li6} />
                  <div className={styles.li7} />
                  <div className={styles.li8} />
                </div>
              </div>
              <div className={styles.text4}>
                <div className={styles.strategyPitchFinalpptx}>
                  Strategy-Pitch-Final.pptx
                </div>
                <div className={styles.daysAgo1}>3 days ago</div>
              </div>
            </div>
            <div className={styles.tags3}>
              <img
                className={styles.iconRetry3}
                loading="lazy"
                alt=""
                src="/icon--retry.svg"
              />
              <div className={styles.tag3}>
                <div className={styles.negative}>Error</div>
              </div>
            </div>
            <img
              className={styles.iconEllipsis3}
              loading="lazy"
              alt=""
              src="/icon--ellipsis.svg"
            />
          </div>
          <div className={styles.li9} />
        </div>
      </div>
      <div className={styles.imageUploads}>
        <div className={styles.imageUploadContainer}>
          <div className={styles.wrap4}>
            <div className={styles.details4}>
              <img
                className={styles.iconImage}
                loading="lazy"
                alt=""
                src="/icon--image@2x.png"
              />
              <div className={styles.text5}>
                <div className={styles.manHoldingMobilePhoneWhile}>
                  man-holding-mobile-phone-while...
                </div>
                <div className={styles.daysAgo2}>7 days ago</div>
              </div>
            </div>
            <div className={styles.tags4}>
              <img
                className={styles.iconRetry4}
                alt=""
                src="/icon--retry.svg"
              />
              <div className={styles.tag4}>
                <div className={styles.kb3}>929KB</div>
              </div>
            </div>
            <img
              className={styles.iconEllipsis4}
              alt=""
              src="/icon--ellipsis.svg"
            />
          </div>
          <div className={styles.li10} />
          <div className={styles.uploadButton}>
            <button className={styles.buttonSecondary}>
              <div className={styles.label}>View all uploads</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.synced}>
        <img className={styles.iconTick} alt="" src="/icon--tick.svg" />
        <input
          className={styles.lastSynced3}
          placeholder="Last synced: 3 mins ago"
          type="text"
        />
      </div>
    </section>
  );
};

export default RecentUploads;
