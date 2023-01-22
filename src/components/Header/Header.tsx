import { Inter } from "@next/font/google";
import styles from "./Header.module.scss";
import Logo from "../../../public/logo_webtronics.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const menuList = ["About", "About", "Questions", "Get in touch"];

export default function Header() {
  return (
    <div className={styles.main_container}>
      <div className={styles.logo_container}>
        <Image src={Logo} alt="logo" />
      </div>
      <div className={styles.menu_container}>
        {menuList.map((elem) => (
          <div key={elem} className={styles.menu_item}>
            {elem}
          </div>
        ))}
      </div>
    </div>
  );
}
