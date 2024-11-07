import { CSSProperties, FC, ReactNode } from 'react';
import StarIcon from '@/assets/icons/star.svg';
import styles from './CardHeader.module.css';
import { twMerge } from 'tailwind-merge';

type CardHeaderProps = FC<Readonly<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}>> & {
  Title: FC<Readonly<SubProps>>;
  Description: FC<Readonly<SubProps>>;
};

type SubProps = {
  children: string | JSX.Element;
};

const CardHeader: CardHeaderProps = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={twMerge(styles.wrapper, className)}
      style={style}
    >
      {children}
    </div>
  );
};

CardHeader.displayName = "CardHeader";

CardHeader.Title = ({ children }: SubProps) => {
  return (
    <div className={styles['icon_title']}>
      <StarIcon className={styles.icon} />
      <h3 className={styles.title}>{children}</h3>
    </div>
  );
};

CardHeader.Title.displayName = "CardHeader.Title";

CardHeader.Description = ({ children }: SubProps) => {
  return (
    <p className={styles.description}>{children}</p>
  );
};

CardHeader.Description.displayName = "CardHeader.Description";

export default CardHeader;
