import React, { FC, ReactNode } from 'react';
import styles from './SectionHeader.module.css';

type SubProps = {
  children: string;
};

type HeaderProps = {
  children: ReactNode;
};

type HeaderChildren = {
  Title: FC<SubProps>;
  EyeBrow: FC<SubProps>;
  Description: FC<SubProps>;
};

type SectionHeaderProps = FC<Readonly<HeaderProps>> & HeaderChildren;

const SectionHeader: SectionHeaderProps = ({ children }) => {
  return <div>{children}</div>;
};

SectionHeader.displayName = "SectionHeader";

SectionHeader.Title = ({ children }: Readonly<SubProps>) => {
  return <h2 className={styles.title}>{children}</h2>;
};

SectionHeader.Title.displayName = "SectionHeader.Title";

SectionHeader.EyeBrow = ({ children }: Readonly<SubProps>) => {
  return (
    <div className={styles.eyeBrowWrapper}>
      <div className={styles.eyeBrow}>
        {children}
      </div>
    </div>
  );
};

SectionHeader.EyeBrow.displayName = "SectionHeader.EyeBrow";

SectionHeader.Description = ({ children }: Readonly<SubProps>) => {
  return (
    <p className={styles.description}>
      {children}
    </p>
  );
};

SectionHeader.Description.displayName = "SectionHeader.Description";

export default SectionHeader;