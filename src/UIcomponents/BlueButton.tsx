import { Inter } from "@next/font/google";
import styles from "./UI.module.scss";

// const inter = Inter({ subsets: ["latin"] });

type PropsType = {
  title: string;
  callBackFunction?: () => void;
  fill?: boolean;
};

export default function BlueButton({
  title,
  callBackFunction,
  fill,
}: PropsType) {
  return (
    <button
      className={styles.blueButtonShort}
      style={{ width: fill ? "100%" : "" }}
      onClick={callBackFunction}
    >
      {title}
    </button>
  );
}
