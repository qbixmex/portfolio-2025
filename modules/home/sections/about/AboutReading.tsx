import Image from "next/image";
import Card from "@/modules/home/components/Card";
import CardHeader from "@/modules/home/components/CardHeader";
import { twMerge } from "tailwind-merge";
import BookImage from "@/assets/images/book-cover.png"
import styles from "./About.module.css";

const AboutReading = () => {
  return (
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
  );
};

export default AboutReading;