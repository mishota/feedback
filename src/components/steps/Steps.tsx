import { Inter } from "@next/font/google";
import styles from "./Steps.module.scss";
import Image from "next/image";
import StarBig from "@/../public/StarBig.png";
import Line from "@/../public/line.png";

import WadeWarren from "@/../public/WadeWarren.png";
import KristinWatson from "@/../public/KristinWatson.png";
import RobertFox from "@/../public/RobertFox.png";
import angular from "@/../public/angular.png";
import react from "@/../public/react.png";
import vue from "@/../public/vue.png";
import arrowL from "@/../public/arrowL.png";

const inter = Inter({ subsets: ["latin"] });
const items = [
  {
    id: "Step 1",
    title: "Introduction to Front-End",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    rotate: 0,
  },
  {
    id: "Step 2",
    title: "Overview of Development",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    rotate: 180,
  },
  {
    id: "Step 3",
    title: "Introduction to Front-End",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    rotate: 0,
  },
  {
    id: "Step 4",
    title: "Overview of Development",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    rotate: 180,
  },
  {
    id: "Step 5",
    title: "Introduction to Front-End",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    rotate: 0,
  },
  {
    id: "Step 6",
    title: "Overview of Development",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    rotate: 180,
  },
];

export default function Steps() {
  return (
    <div className={styles.main_container}>
      <div className={styles.title}> Steps</div>

      <div className={styles.content_container}>
        <div className={styles.side}>
          {items.map((elem) => (
            <div key={elem.id} className={styles.box_arrow_container}>
              <div className={styles.box_container}>
                <div className={styles.half_linear} />
                <div className={styles.main_box}>
                  <div className={styles.step_number}>{elem.id}</div>
                  <div className={styles.step_title}>{elem.title}</div>
                  <div className={styles.step_text}>{elem.text}</div>
                </div>
              </div>
              <div className={styles.arrow_container}>
                <div className={styles.arrow}>
                  <Image src={arrowL} alt="arrow" layout="responsive" />
                </div>
                <div className={styles.blue_round}></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.center_line} />
        <div className={styles.side}>
          {items.map((elem) => (
            <div
              key={elem.id}
              className={styles.box_arrow_container}
              style={{ transform: "rotate(180deg)" }}
            >
              <div className={styles.box_container}>
                <div className={styles.half_linear} />
                <div className={styles.main_box} style={{ transform: "rotate(180deg)" }}>
                  <div className={styles.step_number}>{elem.id}</div>
                  <div className={styles.step_title}>{elem.title}</div>
                  <div className={styles.step_text}>{elem.text}</div>
                </div>
              </div>
              <div className={styles.arrow_container}>
                <div className={styles.arrow}>
                  <Image src={arrowL} alt="arrow" layout="responsive" />
                </div>
                <div className={styles.blue_round}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}