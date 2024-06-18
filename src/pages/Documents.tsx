import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import RecentUploads from "../components/RecentUploads";
import styles from "./Documents.module.css";

const Documents: FunctionComponent = () => {
  return (
    <div className={styles.documents}>
      <FrameComponent5 />
      <main className={styles.mainBgColor}>
        <RecentUploads />
        <section className={styles.emptyAssets}>
          <div className={styles.empty}>
            <h2 className={styles.yourAssetsWill}>
              Your Assets will appear here
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Documents;
