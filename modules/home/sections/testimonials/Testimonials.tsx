import Image from "next/image";

import testimonials from "@/data/testimonials";
import SectionHeader from '@/modules/home/components/SectionHeader';

import styles from "./Testimonials.module.css";
import Card from "@/modules/home/components/Card";

const Testimonials = () => {
  return (
    <section id={styles["testimonials"]}>
      <div className="container">
        <SectionHeader>
          <SectionHeader.EyeBrow>Happy Clients</SectionHeader.EyeBrow>
          <SectionHeader.Title>What Clients Say About Me</SectionHeader.Title>
          <SectionHeader.Description>
            <>Let our <b>&ldquo;Clients&apos;s voices&rdquo;</b> illuminate the value we deliver<br />
              and See what they say about my <b>&ldquo;Work&rdquo;</b>.</>
          </SectionHeader.Description>
        </SectionHeader>

        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <Image
              src={testimonial.avatar.src}
              alt={testimonial.name}
              width={100}
              height={100}
            />
            <div>{testimonial.name}</div>
            <div>{testimonial.position}</div>
            <p>{testimonial.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
