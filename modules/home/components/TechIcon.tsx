import { ElementType, FC } from "react";
import styles from "./TechIcon.module.css";

const TechIcon: FC<{component: ElementType}> = (props) => {
  const Component = props.component;
  return (
    <Component className={styles.icon} />
  );
};

export default TechIcon;
