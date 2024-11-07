import { FC, ReactNode } from 'react';
import GrainImage from '@/assets/images/grain.jpg';
import styles from './Card.module.css';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode,
  className?: string;
};

const Card: FC<Readonly<Props>> = ({ children, className = "" }) => {
  return (
    <div className={twMerge([ styles.wrapper, className ])}>
      <div
        className={styles.cardBackground}
        style={{ background: `url(${GrainImage.src})` }}
      />
      {children}
    </div>
  );
};

export default Card;
