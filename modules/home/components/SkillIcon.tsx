import { ElementType, FC } from "react";
import styles from "./SkillIcon.module.css";

const SkillIcon: FC<{component: ElementType}> = (props) => {
  const Component = props.component;
  return (
    <>
      <Component className={styles.icon} />
      <svg style={{ width: 0, height: 0, position: "absolute" }}>
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};

export default SkillIcon;
