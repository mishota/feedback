import instance from "@/api/instanse";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import styles from "./Contact.module.scss";
import style from "../../UIcomponents/UI.module.scss";

type ContactForm = {
  name: string;
  phone: string;
  email: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactForm>({
    mode: "all",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    console.log("data", data);
    try {
      await instance.put("/feedback", data);
      reset();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.main_box}>
        <div className={styles.title_container}>
          <div className={styles.title}>Contact</div>
        </div>
        <div>Do you have any kind of help please contact with us.</div>
        <div>
          <input
            className={styles.input}
            placeholder="Name"
            {...register("name", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 2,
                message: "Минимум 2 символов!",
              },
              maxLength: {
                value: 12,
                message: "Максимум 12 символов!",
              },
            })}
          />
          {errors?.name && (
            <div className="required">{errors.name.message || "Error!"}</div>
          )}
          <input
            className={styles.input}
            placeholder="Phone"
            {...register("phone", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 11,
                message: "Минимум 11 символов!",
              },
              maxLength: {
                value: 12,
                message: "Максимум 12 символов!",
              },
            })}
          />
          {errors?.phone && (
            <div className="required">{errors.phone.message || "Error!"}</div>
          )}
          <input
            className={styles.input}
            placeholder="E-mail"
            {...register("email", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 2,
                message: "Минимум 2 символов!",
              },
              maxLength: {
                value: 12,
                message: "Максимум 12 символов!",
              },
            })}
          />
          {errors?.email && (
            <div className="required">{errors.email.message || "Error!"}</div>
          )}
          <button
            className={style.blueButtonShort}
            onClick={handleSubmit(onSubmit)}
            style={{ width: "100%" }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
