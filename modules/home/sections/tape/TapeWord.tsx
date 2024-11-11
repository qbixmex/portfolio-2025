import { FC, useId } from "react";
import StarIcon from "@/assets/icons/star.svg";
import styles from "./Tape.module.css";

const TapeWord: FC<{ word: string }> = ({ word }) => {
  const wordId = useId();
  return (
    <div key={wordId} className={styles.word_star}>
      <span className={styles.word}>{word}</span>
      <StarIcon className={styles.starIcon} />
    </div>
  );
};

export default TapeWord;
