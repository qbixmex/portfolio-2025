import { type Skill } from '@/data/skills';
import SkillIcon from '@/modules/home/components/SkillIcon';
import styles from './ToolboxItems.module.css';
import { twMerge } from 'tailwind-merge';

type Props = {
  items: Skill[];
  className?: string;
  itemsWrapperClassName?: string;
};

const ToolboxItems: React.FC<Readonly<Props>> = ({
  items,
  className = '',
  itemsWrapperClassName = '',
}) => {
  return (
    <div className={twMerge(styles.wrapper, className)}>
      <div className={twMerge(styles.tools, itemsWrapperClassName)}>
        {items.map(({ id, title, iconType }) => (
          <div key={id} className={styles["tech-icon_title"]}>
            <span>
              <SkillIcon component={iconType} />
            </span>
            <span className={styles.techTitle}>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
