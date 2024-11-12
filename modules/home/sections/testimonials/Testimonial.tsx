import { FC, Fragment, useId } from "react";
import Card from "@/modules/home/components/Card";
import Image from "next/image";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import styles from "./Testimonials.module.css";
import { type Testimonial } from "@/data/testimonials";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard: FC<Props> = ({ testimonial }) => {
  const testimonialId = useId();
  return (
    <Card
      key={testimonialId}
      className={styles.cardClasses}
    >
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
        <div className={styles.info}>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.position}>{testimonial.position}</div>
          <div className={styles.icon}>
            <a href={testimonial.linkedIn}
              title={`Visit ${testimonial.name} Profile`}
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.text}>{testimonial.text}</p>
    </Card>
  );
};

export default TestimonialCard;