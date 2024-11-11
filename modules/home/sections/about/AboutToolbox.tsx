import { twMerge } from "tailwind-merge";
import Card from "@/modules/home/components/Card";
import CardHeader from "@/modules/home/components/CardHeader";
import ToolboxItems from "@/modules/home/components//ToolboxItems";
import skills from '@/data/skills';
import styles from "./About.module.css";

const AboutToolbox = () => {
  return (
    <Card className={twMerge(styles.cardClasses, styles.skillsCard)}>
      <CardHeader className={styles.skillsCardHeader}>
        <CardHeader.Title>My Toolbox</CardHeader.Title>
        <CardHeader.Description>
          Explore the languages, libraries and frameworks I use to create these amazing technologies.
        </CardHeader.Description>
      </CardHeader>
      <ToolboxItems
        items={skills}
        fromColor="rgb(110, 231, 183)"
        toColor="rgb(56, 189, 248)"
        itemsWrapperClassName={styles.scrollLeft}
      />
      <ToolboxItems
        items={skills}
        className="mt-6"
        fromColor="rgb(110, 231, 183)"
        toColor="rgb(56, 189, 248)"
        itemsWrapperClassName={styles.scrollRight}
      />
    </Card>
  );
};

export default AboutToolbox;