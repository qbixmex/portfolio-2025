'use client';

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grain from "@/assets/images/grain.jpg";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div id={styles["contact"]}>
      <div className="container">
        <div className={styles.card}>
          <div
            className={styles.cardBackground}
            style={{ backgroundImage: `url(${grain.src})` }}
          ></div>
          <div className={styles.cardWrapper}>
            <div>
              <h2 className={styles.carHeading}>
                Let&apos;s Create something amazing together
              </h2>
              <p className={styles.cardDescription}>
                Ready to bring your next project to life ?
                <br />
                Let&apos;ss Connect and discus how<br />
                I can help you achieve our goals.
              </p>
            </div>
            <div className="">
              <button
                type="button"
                className={styles.cardButton}
                onClick={() => console.log("Should open contact page")}
              >
                <span>Contact Me</span>
                <ArrowUpRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
