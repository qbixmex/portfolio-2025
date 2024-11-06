import { twMerge } from "tailwind-merge";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.navContainer}>
      <nav className={styles.nav}>
        <a
          href="#home"
          title="Go to Home"
          className={styles.navItem}
        >
          Home
        </a>
        <a
          href="#projects"
          title="Go to Projects"
          className={styles.navItem}
        >
          Projects
        </a>
        <a
          href="#about"
          title="Go to About"
          className={styles.navItem}
        >
          About
        </a>
        <a
          href="#contact"
          title="Go to Contact"
          className={twMerge([styles.navItem, styles.navItemSelected])}
        >
          Contact
        </a>
      </nav>
    </section>
  );
};

export default Header;
