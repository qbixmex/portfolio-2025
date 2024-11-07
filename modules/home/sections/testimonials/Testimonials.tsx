import Image from "next/image";

import testimonials from "@/data/testimonials";
import SectionHeader from '@/modules/home/components/SectionHeader';

import Card from "@/modules/home/components/Card";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id={styles["testimonials"]}>
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
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className={styles.cardClasses}>
                <div className={styles.testimonialHeader}>
                  <figure className={styles.imageWrapper}>
                    <Image
                      src={testimonial.avatar.src}
                      alt={testimonial.name}
                      className={styles.image}
                      width={100}
                      height={100}
                    />
                  </figure>
                  <div>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.position}>{testimonial.position}</div>
                  </div>
                </div>
                <p className={styles.text}>{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
