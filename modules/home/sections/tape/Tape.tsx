import styles from "./Tape.module.css";
import words from "@/data/tape";
import StarIcon from "@/assets/icons/star.svg";

const Tape = () => {
  return (
    <section id={styles["tape"]}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.wordsList}>
            {words.map((word) => (
              <div key={word} className={styles.word_star}>
                <span className={styles.word}>{word}</span>
                <StarIcon className={styles.starIcon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tape;
