"use client";

import styles from './ContactForm.module.css';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const ContactForm = () => {
  return (
    <form>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="topic" className={styles.formLabel}>Topic</label>
        <input
          type="text"
          id="topic"
          name="topic"
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroupMessage}>
        <label htmlFor="message" className={styles.formLabel}>Message</label>
        <textarea
          id="message"
          name="message"
          className={styles.formTextArea}
          rows={8}
        ></textarea>
      </div>
      <div className={styles.sendGroup}>
        <button
          type="button"
          className={styles.formButton}
          onClick={() => console.log("Should open contact page")}
        >
          <span>Contact Me</span>
          <ArrowUpRightIcon />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
