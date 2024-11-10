import { CSSProperties, FC, ReactNode } from 'react';
import GrainImage from '@/assets/images/grain.jpg';
import styles from './Card.module.css';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode,
  className?: string;
  style?: CSSProperties;
};

const Card: FC<Readonly<Props>> = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={twMerge([ styles.wrapper, className ])}
      style={style}
    >
      <div
        className={styles.cardBackground}
        style={{ background: `url(${GrainImage.src})` }}
      />
      {children}
    </div>
  );
};

export default Card;
