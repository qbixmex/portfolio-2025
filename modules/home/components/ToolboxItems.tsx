import { Fragment } from 'react';
import { type Skill } from '@/data/skills';
import Icon from '@/modules/home/components/Icon';
import styles from './ToolboxItems.module.css';
import { twMerge } from 'tailwind-merge';

type Props = {
  items: Skill[];
  className?: string;
  itemsWrapperClassName?: string;
  fromColor?: string;
  toColor?: string;
};

const ToolboxItems: React.FC<Readonly<Props>> = ({
  items,
  className = '',
  itemsWrapperClassName = '',
  fromColor,
  toColor,
}) => {
  return (
    <div className={twMerge(styles.wrapper, className)}>
      <div className={twMerge(styles.tools, itemsWrapperClassName)}>
        {new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map(({ id, title, iconType }) => (
              <div
                key={id}
                className={styles["tech-icon_title"]}
              >
                <Icon
                  component={iconType}
                  fromColor={fromColor}
                  toColor={toColor}
                />
                <span className={styles.techTitle}>{title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
