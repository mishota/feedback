import BlueButton from "@/UIcomponents/BlueButton";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_box}>
        <div className={styles.title_container}>
          <div className={styles.title}>Contact</div>
        </div>
        <div>Do you have any kind of help please contact with us.</div>
        <div>
          <input className={styles.input} placeholder="Name" />
          <input className={styles.input} placeholder="Phone" />
          <input className={styles.input} placeholder="E-mail" />
          <BlueButton title="Send" callBackFunction={() => {}} fill={true} />
        </div>
      </div>
    </div>
  );
}
