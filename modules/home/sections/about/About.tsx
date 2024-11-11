import SectionHeader from "@/modules/home/components/SectionHeader";
import AboutReading from "./AboutReading";
import AboutToolbox from "./AboutToolbox";
import AboutHobbies from "./AboutHobbies";
import AboutMap from "./AboutMap";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div id="about" className={styles.aboutAnchor}></div>
      <div className="container">
        <SectionHeader>
          <SectionHeader.EyeBrow>About Me</SectionHeader.EyeBrow>
          <SectionHeader.Title>A Glimps Into my World</SectionHeader.Title>
          <SectionHeader.Description>
            Learn more about who I am, what I do, and what inspires me.
          </SectionHeader.Description>
        </SectionHeader>

        <div className={styles.cardsReadingAndToolbox}>
          <AboutReading />
          <AboutToolbox />
        </div>

        <div className={styles.cardsHobbiesAndMap}>
          <AboutHobbies />
          <AboutMap />
        </div>
      </div>
    </section>
  );
};

export default About;
