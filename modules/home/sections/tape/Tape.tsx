import styles from "./Tape.module.css";
import TapeWords from "./TapeWordsList";

const Tape = () => {
  return (
    <section id={styles["tape"]}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.wordsList}>
            {['a','b'].map((list) => <TapeWords key={list} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tape;
