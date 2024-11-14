import SectionHeader from '@/modules/home/components/SectionHeader';
import TestimonialsList from './TestimonialsList';
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id={styles.testimonials}>
      <div className="container">
        <SectionHeader>
          <SectionHeader.EyeBrow>Happy Clients</SectionHeader.EyeBrow>
          <SectionHeader.Title>What Clients Say About Me</SectionHeader.Title>
          <SectionHeader.Description>
            <>Let my <b>Clients&apos;s Opinions</b>
              <br />illuminate the value I deliver and<br />
              See what they say about my <b>Work</b>.
            </>
          </SectionHeader.Description>
        </SectionHeader>
        <div className={styles.wrapper}>
          <div className={styles.testimonialsContainer}>
            {new Array(2).fill(0).map((_,index) => (<TestimonialsList key={index} />))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
