import React from "react";
import styles from "./Questions.module.scss";

import { useState } from "react";

export type QuestionType = {
  id: number;
  title: string;
  answer: string;
  isOpen: boolean;
};

const initQuestions: QuestionType[] = [
  {
    id: 1,
    title: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    isOpen: true,
  },
  {
    id: 2,
    title: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    isOpen: false,
  },
  {
    id: 3,
    title: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    isOpen: false,
  },
  {
    id: 4,
    title: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    isOpen: false,
  },
  {
    id: 5,
    title: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    isOpen: false,
  },
];

export default function Questions() {
  const [questions, setQuestions] = useState<QuestionType[]>(initQuestions);

  const hadlerAnswers = (elem: QuestionType) => {
    const copy = [...questions];
    copy.forEach((el) => {
      if (el.id === elem.id) {
        el.isOpen = true;
      } else {
        el.isOpen = false;
      }
    });
    setQuestions(copy);
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.left_blur} />
      <div className={styles.right_blur} />
      <div className={styles.title_container}>
        <div className={styles.star1} />
        <div className={styles.star2} />
        <div className={styles.star3} />
        <div className={styles.star4} />
        <div className={styles.title}>Frequently Asked Questions</div>
      </div>
      <div className="flex_row_up">
        <div className="flex_column">
          <div className={styles.description}>
            Do you have any kind of questions? We are here to help.
          </div>
        </div>

        <div className="flex_column" style={{ width: "100%", gap: "15px" }}>
          {questions.map((elem) => (
            <div
              key={elem.id}
              className={styles.item_container}
              style={{ height: elem.isOpen ? "166px" : "64px" }}
            >
              <div
                className={styles.item}
                style={{ height: elem.isOpen ? "164px" : "62px" }}
              >
                <div className={styles.title}>{elem.title}</div>
                {elem.isOpen && (
                  <div className={styles.text}>{elem.answer}</div>
                )}
              </div>
              <div
                className={styles.icon_open}
                onClick={() => hadlerAnswers(elem)}
              >
                {elem.isOpen ? "-" : "+"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
