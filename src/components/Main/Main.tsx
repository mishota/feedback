import { Inter } from "@next/font/google";
import styles from "./Main.module.scss";
import BlueButton from "@/UIcomponents/BlueButton";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return (
    <>
      <div className={styles.left_blur} />
      <div className={styles.right_blur} />
      <div className={styles.main_container}>
        <div className={styles.title_container}>
          <div className={styles.title}>Front-End </div>
          <div className={styles.text}>
            Make UIs and websites beautiful, functional, and fast. Cover all the
            topics that expensive bootcamps teach (and more).{" "}
          </div>
        </div>

        <div className={styles.title_container}>
          <BlueButton title="Start my career change" />
          <div className={styles.title}>Developer</div>
        </div>
        <div className={styles.note}>Courses</div>
      </div>
    </>
  );
}
