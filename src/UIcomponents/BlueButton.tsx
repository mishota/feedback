import { Inter } from "@next/font/google";
import styles from "./UI.module.scss";

// const inter = Inter({ subsets: ["latin"] });

type PropsType = {
  title: string;
  callBackFunction?: () => void;
};

export default function BlueButton({ title, callBackFunction }: PropsType) {
  return (
    <button 
    className={styles.blueButtonShort} 
    onClick={callBackFunction}>
      {title}
    </button>
  );
}
