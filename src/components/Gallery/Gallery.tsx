import styles from "./Gallery.module.scss";
import Image from "next/image";
import developer1 from "@/../public/developer1.png";
import developer2 from "@/../public/developer2.png";
import developer3 from "@/../public/developer3.png";
import developer4 from "@/../public/developer4.png";

export default function Gallery() {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_blur} />
      <div className={styles.right_blur} />
      <div className={styles.title_container}>
        <div className={styles.star1} />
        <div className={styles.star2} />
        <div className={styles.star3} />
        <div className={styles.star4} />
        <div className={styles.title}>Gallery</div>
      </div>
      <div className="flex_row_up">
        <div className={styles.left}>
          <div>
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.{" "}
          </div>
          <div className={styles.image}>
            <Image src={developer1} alt="developer" />
          </div>
        </div>
        <div className={styles.right}>
          <div className="flex_row_up">
            <div style={{ width: "60%" }} className={styles.image}>
              <Image src={developer2} alt="developer" />
            </div>
            <div className="flex_column" style={{ width: "40%", gap: "20px" }}>
              <div className={styles.image}>
                <Image src={developer3} alt="developer" />
              </div>
              <div className={styles.image}>
                <Image src={developer4} alt="developer" />
              </div>
            </div>
          </div>
          <div className={styles.text}>
            If you would like to learn web development and get a job in the tech
            industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video
            tutorials! This course was designed to be extremely beginner
            friendly. We will begin with the very basics of HTML and build a
            simple web page.
          </div>
        </div>
      </div>
    </div>
  );
}
