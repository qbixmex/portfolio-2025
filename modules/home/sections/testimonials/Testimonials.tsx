import Image from "next/image";

import testimonials from "@/data/testimonials";
import SectionHeader from '@/modules/home/components/SectionHeader';

import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id={styles["testimonials"]}>
      <SectionHeader>
        <SectionHeader.EyeBrow>Happy Clients</SectionHeader.EyeBrow>
        <SectionHeader.Title>What Clients Say About Me</SectionHeader.Title>
        <SectionHeader.Description>
          Don&apos;t take just my word for it. See what my clients have to say about work.
        </SectionHeader.Description>
      </SectionHeader>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <Image
            src={testimonial.avatar.src}
            alt={testimonial.name}
            width={100}
            height={100}
          />
          <div>{testimonial.name}</div>
          <div>{testimonial.position}</div>
          <p>{testimonial.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
