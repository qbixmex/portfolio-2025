"use client";

import { FC, useState } from "react";
import styles from "./TestimonialText.module.css";

type Props = {
  children: string;
  maxChars?: number;
};

const TestimonialText: FC<Props> = ({ children, maxChars = 100 }) => {
  const [ isExpanded, setIsExpanded ] = useState(false);

  if (children.length < maxChars) {
    return (
      <div>{children}</div>
    );
  }

  const text = isExpanded ? children : children.substring(0, 150) + ' ...';

  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
      <button
        className={styles.btn}
        onClick={() => setIsExpanded(prev => !prev)}
      >{ isExpanded ? 'less' : 'more' }</button>
    </div>
  );
};

export default TestimonialText;
