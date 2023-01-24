import styles from "./Review.module.scss";
import Image, { StaticImageData } from "next/image";
import arrowBox from "@/../public/arrowBox.png";
import arrowBoxR from "@/../public/arrowBoxR.png";

import man1 from "@/../public/man1.png";
import man2 from "@/../public/man2.png";
import man3 from "@/../public/man3.png";
import { useState } from "react";

export type ReviewType = {
  id: number;
  title: string;
  text: string;
  img: StaticImageData;
  isOpen: boolean;
};

const initReviewList: ReviewType[] = [
  {
    id: 1,
    title: "Best courses ever",
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    img: man1,
    isOpen: true,
  },
  {
    id: 2,
    title: "Best courses ever",
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    img: man2,
    isOpen: true,
  },
  {
    id: 3,
    title: "Best courses ever",
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    img: man3,
    isOpen: true,
  },
];

export default function Review() {
  const [reviewList, setReviewList] = useState<ReviewType[]>(initReviewList);
  const [current, setCurrent] = useState<ReviewType>(reviewList[0]);

  const hadlerSwipe = (step: number) => {
    if (step > 0 && current.id === reviewList.length) {
      setCurrent(reviewList[0]);
    } else if (step < 0 && current.id === 1) {
      setCurrent(reviewList[reviewList.length - 1]);
    } else {
      const next = reviewList.find((elem) => elem.id === current.id + step);
      next && setCurrent(next);
    }
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <div className={styles.star1} />
        <div className={styles.star2} />
        <div className={styles.star3} />
        <div className={styles.star4} />
        <div className={styles.title}>Review</div>
      </div>
      <div className="flex_row_up">
        <div>
          {current.id}/{reviewList.length}
        </div>
        <div
          className="flex_row_up"
          style={{ justifyContent: "end", gap: "10px" }}
        >
          <div onClick={() => hadlerSwipe(-1)}>
            <Image src={arrowBox} alt="arrowBox" />
          </div>
          <div onClick={() => hadlerSwipe(1)}>
            <Image src={arrowBoxR} alt="arrowBox" />
          </div>
        </div>
      </div>

      <div className={styles.info_container}>
        <div>
          <div>{current.title}</div>
          <div>{current.text}</div>
        </div>
        <div className="flex_row_up" style={{ gap: "10px" }}>
          <div className={styles.item_container} style={{ width: "392px" }}>
            <div className={styles.item}>
              <div
                className={styles.image_container}
                style={{
                  backgroundImage: "url(elem.img)",
                  backgroundSize: "cover 100%",
                }}
              >
                <Image src={current.img} alt={current.title} layout="fill" />
              </div>
            </div>
          </div>
          {reviewList
            .filter((elem) => elem.id !== current.id)
            .map((elem) => (
              <div
                key={elem.id}
                className={styles.item_container}
                style={{ width: elem.id === current.id ? "392px" : "180px" }}
              >
                <div className={styles.item}>
                  <div className={styles.image_container}>
                    <Image
                      src={elem.img}
                      alt={elem.title}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
