import SectionHeader from "@/modules/home/components/SectionHeader";
import AboutToolbox from "./AboutToolbox";
import OtherTools from "./OtherTools";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div id="about" className={styles.aboutAnchor}></div>
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>Skills and Tools</SectionHeader.Title>
          <SectionHeader.EyeBrow>Tech Stack</SectionHeader.EyeBrow>
          <SectionHeader.Description>
            <>Check out my skills and tools<br />I use to build projects.</>
          </SectionHeader.Description>
        </SectionHeader>

        <div className={styles.cardsReadingAndToolbox}>
          <AboutToolbox />
        </div>

        <div className={styles.cardsHobbiesAndMap}>
          <OtherTools />
        </div>
      </div>
    </section>
  );
};

export default About;
