import { Inter } from "@next/font/google";
import styles from "./Technologies.module.scss";
import Image from "next/image";
import angular from "@/../public/angular.png";
import react from "@/../public/react.png";
import vue from "@/../public/vue.png";

const inter = Inter({ subsets: ["latin"] });
const items = [
  { id: 1, img: angular, title: "Angular" },
  { id: 2, img: react, title: "React" },
  { id: 3, img: vue, title: "Vue.js" },
];

export default function Technologies() {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_blur} />
      <div className={styles.right_blur} />
      <div className={styles.title_container}>
        <div className={styles.star1} />
        <div className={styles.star2} />
        <div className={styles.star3} />
        <div className={styles.star4} />
        <div className={styles.title}>Programming technologies</div>
      </div>

      <div className={styles.description}>
        By the end, you’ll have the portfolio and interview skills you need to
        start your new career.
      </div>

      <div className={styles.info_container}>
        {items.map((elem) => (
          <div key={elem.id} className={styles.item_container}>
            <div className={styles.item}>
              <div className={styles.image_container}>
                <Image src={elem.img} alt={elem.title} layout="responsive" />
              </div>
              <div className={styles.title}>{elem.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
