import { FC, ReactNode } from "react";
import styles from "./HeroOrbit.module.css";

type Props = {
  children: ReactNode;
  size: number;
  rotation: number;
};

const Star: FC<Readonly<Props>> = ({ children, size, rotation }) => {
  return (
    <div className={styles.starIcon}>
      <div
        className={styles.starIconOuterWrapper}
        style={{
          transform: `rotate(${rotation}deg)`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div
          className={styles.starIconWrapper}
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Star;