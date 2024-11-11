import { ComponentPropsWithoutRef, CSSProperties, FC, ReactNode } from 'react';
import GrainImage from '@/assets/images/grain.jpg';
import styles from './Card.module.css';
import { twMerge } from 'tailwind-merge';

const Card: FC<ComponentPropsWithoutRef<'div'>> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <div
      className={twMerge([ styles.wrapper, className ])}
      {...restProps}
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
