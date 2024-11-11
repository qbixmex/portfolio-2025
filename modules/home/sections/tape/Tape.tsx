import styles from "./Tape.module.css";
import TapeWords from "./TapeWordsList";

const Tape = () => {
  return (
    <section id={styles["tape"]}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.wordsList}>
            {new Array(2).fill(0).map((_,index) => (
              <TapeWords />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tape;
