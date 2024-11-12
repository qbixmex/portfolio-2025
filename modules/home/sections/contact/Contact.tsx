'use client';

import grain from "@/assets/images/grain.jpg";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className={styles.card}>
          <div
            className={styles.cardBackground}
            style={{ backgroundImage: `url(${grain.src})` }}
          ></div>
          <div className={styles.cardContent}>
            <h2 className={styles.carHeading}>
              Let&apos;s Create something amazing together
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
