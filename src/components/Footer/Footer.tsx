import styles from "./Footer.module.scss";
import Logo from "../../../public/logo_webtronics.png";
import Image from "next/image";
import f from "@/../public/f.png";
import fox from "@/../public/fox.png";
import tw from "@/../public/tw.png";
import linkedin from "@/../public/linkedin.png";

const menuList = ["About", "About", "Questions", "Get in touch"];

export default function Footer() {
  return (
    <div className={styles.main_container}>
      <div className={styles.part}>
        <div className={styles.logo_container}>
          <Image src={Logo} alt="logo" />
        </div>
        <div>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</div>
      </div>
      <div className={styles.part}>
        <div className={styles.head}>Company</div>
        <div>About Us</div>
        <div>Steps</div>
        <div>FAQs</div>
      </div>
      <div className={styles.part}>
        <div className={styles.head}></div>
        <div>Review</div>
        <div>Gallery</div>
      </div>
      <div>
        <div className={styles.head}>Social media</div>
        <div className="flex_row_up">
          <Image src={f} alt="f" />
          <Image src={fox} alt="fox" />
          <Image src={tw} alt="twitter" />
          <Image src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
}
