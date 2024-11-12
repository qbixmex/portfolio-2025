import Card from "@/modules/home/components/Card";
import Image from "next/image";
import Icon from '@/modules/home/components/Icon';
import styles from "./About.module.css";
import { twMerge } from "tailwind-merge";
import LocationDotIcon from "@/assets/icons/location-dot.svg"
import MapImage from "@/assets/images/map.png"

const AboutMap = () => {
  return (
    <Card className={twMerge(styles.cardClasses, styles.mapCard)}>
      <Image src={MapImage} alt="Map" className={styles.mapImage} />
      <div className={twMerge(styles.mapIconContainer)}>
        <div className={styles.mapIconBackground}></div>
        <div className={styles.mapIconAnimation}></div>
        <Icon
          component={LocationDotIcon}
          className={styles.mapIcon}
          fromColor="hsl(155, 100%, 95%)"
          toColor="hsla(155, 100%, 95%, 0.4)"
        />
      </div>
    </Card>
  );
};

export default AboutMap;