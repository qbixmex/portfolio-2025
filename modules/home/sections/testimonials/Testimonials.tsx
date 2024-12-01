import SectionHeader from '@/modules/home/components/SectionHeader';
import TestimonialsList from './TestimonialsList';
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id={styles.testimonials}>
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>Testimonials</SectionHeader.Title>
          <SectionHeader.EyeBrow>What people say</SectionHeader.EyeBrow>
          <SectionHeader.Description>
            <>
              Check reviews and opinions<br />
              from my colleges about my skills.
            </>
          </SectionHeader.Description>
        </SectionHeader>
        <div className={styles.testimonialsBackground}>
          <div className={styles.testimonialsContainer}>
            {['a','b'].map((list) => (<TestimonialsList key={list} />))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
