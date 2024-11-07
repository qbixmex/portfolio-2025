import Image from "next/image";
import SectionHeader from "@/modules/home/components/SectionHeader";
import Card from "@/modules/home/components/Card";
import BookImage from "@/assets/images/book-cover.png"
import MapImage from "@/assets/images/map.png"
import profileImage from "@/assets/images/daniel-80s-video-game-200-250.png";
import hobbies from "@/data/hobbies";
import styles from "./About.module.css";
import CardHeader from "@/modules/home/components/CardHeader";
import ToolboxItems from "@/modules/home/components//ToolboxItems";
import skills from '@/data/skills';

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
        <div className={styles.readingContainer}>
          <Card className={styles.cardClasses}>
            <CardHeader>
              <CardHeader.Title>My Reads</CardHeader.Title>
              <CardHeader.Description>
                Explore the books shaping my perspectives.
              </CardHeader.Description>
            </CardHeader>
            <div className={styles.readingImageWrapper}>
              <Image
                src={BookImage}
                alt="Book Cover"
                className={styles.image}
              />
            </div>
          </Card>

          <Card className={styles.cardClasses} style={{ padding: 0 }}>
            <CardHeader style={{ padding: "24px 24px 0px" }}>
              <CardHeader.Title>My Toolbox</CardHeader.Title>
              <CardHeader.Description>
                Explore the languages, libraries and frameworks I use to create these amazing technologies.
              </CardHeader.Description>
            </CardHeader>
            <ToolboxItems items={skills} className="mt-6" />
            <ToolboxItems
              items={skills} 
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>

          <Card className={styles.cardClasses}>
            <CardHeader>
              <CardHeader.Title>Beyond the code</CardHeader.Title>
              <CardHeader.Description>
                Explore my interests and hobbies.
              </CardHeader.Description>
            </CardHeader>
            <div>
              {hobbies.map(({ id, title, emoji })=> (
                <div key={id}>
                  <span>{emoji}</span>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className={styles.cardClasses}>
            <Image src={MapImage} alt="Map" />
            <Image src={profileImage} alt="Profile Image" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
