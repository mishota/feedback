import { Inter } from "@next/font/google";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import StarBig from "@/../public/StarBig.png";
import Line from "@/../public/line.png";

import WadeWarren from "@/../public/WadeWarren.png";
import KristinWatson from "@/../public/KristinWatson.png";
import RobertFox from "@/../public/RobertFox.png";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <div className={styles.star1} />
        <div className={styles.star2} />
        <div className={styles.star3} />
        <div className={styles.star4} />
        <div className={styles.title}>About Us</div>
      </div>

      <div className={styles.info_container}>
        <div className={styles.mentors_container}>
          <div>Mentors</div>
          <div className={styles.line_container}>
            <div className={styles.line}>
              <Image src={Line} alt="Line" layout="responsive" />
            </div>
          </div>
          <div className={styles.items_container}>
            <div className={styles.item1}>
              <Image src={WadeWarren} alt="WadeWarren" layout="responsive" />
              <div className={styles.title}>Wade Warren</div>
              <div className={styles.text}>
                Front-end engineers work closely with designers
              </div>
            </div>
            <div className={styles.item2}>
              <Image
                src={KristinWatson}
                alt="KristinWatson"
                layout="responsive"
              />
              <div className={styles.title}>Kristin Watson</div>
              <div className={styles.text}>
                Front-end engineers work closely with designers
              </div>
            </div>
            <div className={styles.item1}>
              <Image src={RobertFox} alt="RobertFox" layout="responsive" />
              <div className={styles.title}>Robert Fox</div>
              <div className={styles.text}>
                Front-end engineers work closely with designers
              </div>
            </div>
          </div>
        </div>

        <div className={styles.text}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </div>
      </div>
      <div className={styles.title_container}></div>
    </div>
  );
}
