import styles from "./Footer.module.css";
import { socialMedia } from "@/data/social-media";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer id={styles["footer"]}>
      <div className={styles.footerBackground}></div>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerCopy}>&copy; 2024. All rights reserved.</div>
          <nav className={styles.footerLinks}>
            {socialMedia.map((social) => (
              <p key={social.id}>
                <a
                  href={social.url}
                  className={styles.footerLink}
                  title={`Go to ${social.name}`}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </p>
            ))}
          </nav>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
