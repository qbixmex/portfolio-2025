import Image from "next/image";
import SectionHeader from "@/modules/home/components/SectionHeader";
import Card from "@/modules/home/components/Card";
import BookImage from "@/assets/images/book-cover.png"
import MapImage from "@/assets/images/map.png"
import Icon from '@/modules/home/components/Icon';
import LocationDotIcon from "@/assets/icons/location-dot.svg"
import hobbies from "@/data/hobbies";
import styles from "./About.module.css";
import CardHeader from "@/modules/home/components/CardHeader";
import ToolboxItems from "@/modules/home/components//ToolboxItems";
import skills from '@/data/skills';
import { twMerge } from "tailwind-merge";

const About = () => {
  return (
    <section id={styles["about"]}>
      <div className="container">
        <SectionHeader>
          <SectionHeader.EyeBrow>About Me</SectionHeader.EyeBrow>
          <SectionHeader.Title>A Glimps Into my World</SectionHeader.Title>
          <SectionHeader.Description>
            Learn more about who I am, what I do, and what inspires me.
          </SectionHeader.Description>
        </SectionHeader>

        <div className={styles.cardsReadingAndToolbox}>
          {/* READING */}
          <Card className={twMerge(styles.cardClasses, styles.readingCard)}>
            <CardHeader>
              <CardHeader.Title>My Reads</CardHeader.Title>
              <CardHeader.Description>
                Explore the books shaping my perspectives.
              </CardHeader.Description>
            </CardHeader>
            <div className={styles.readingImageWrapper}>
              <Image src={BookImage} alt="Book Cover" />
            </div>
          </Card>

          {/* TOOLBOX */}
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
            />
            <ToolboxItems
              items={skills}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
              fromColor="rgb(110, 231, 183)"
              toColor="rgb(56, 189, 248)"
            />
          </Card>
        </div>

        <div className={styles.cardsHobbiesAndMap}>
          {/* HOBBIES */}
          <Card className={twMerge(styles.cardClasses, styles.hobbiesCard)}>
            <CardHeader className={styles.hobbiesCardHeader}>
              <CardHeader.Title>Beyond the code</CardHeader.Title>
              <CardHeader.Description>
                Explore my interests and hobbies.
              </CardHeader.Description>
            </CardHeader>
            <div className={styles.hobbies}>
              {hobbies.map((hobby)=> (
                <div
                  key={hobby.id}
                  className={styles.hobby}
                  style={{
                    top: hobby.top,
                    left: hobby.left,
                    zIndex: hobby.z,
                  }}
                >
                  <span className={styles.hobbyEmoji}>
                    {hobby.emoji}
                  </span>
                  <span className={styles.hobbyTitle}>
                    {hobby.title}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* MAP */}
          <Card className={twMerge(styles.cardClasses, styles.mapCard)}>
            <Image src={MapImage} alt="Map" className={styles.mapImage} />
            <div className={styles.mapIconContainer}>
              <Icon
                component={LocationDotIcon}
                className={styles.mapIcon}
                fromColor="hsl(155, 100%, 95%)"
                toColor="hsla(155, 100%, 95%, 0.4)"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
