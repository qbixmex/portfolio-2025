import { FC, Fragment, useId } from "react";
import words from "@/data/tape";
import TapeWord from "./TapeWord";

const TapeWordsList: FC = () => {
  const id = useId();
  return (
    <Fragment key={id}>
      {words.map((word, index) => <TapeWord key={`${index}-${id}`} word={word} />)}
    </Fragment>
  );
};

export default TapeWordsList;
