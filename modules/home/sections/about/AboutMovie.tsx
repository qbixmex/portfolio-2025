import Image from "next/image";
import Card from "@/modules/home/components/Card";
import CardHeader from "@/modules/home/components/CardHeader";
import { twMerge } from "tailwind-merge";
import MovieImage from "@/assets/images/about/your-name-anime-movie.jpg"
import styles from "./About.module.css";

const AboutMovie = () => {
  return (
    <Card className={twMerge(styles.cardClasses, styles.movieCard)}>
      <CardHeader>
        <CardHeader.Title>My Favorite Movie</CardHeader.Title>
      </CardHeader>
      <div className={styles.movieImageWrapper}>
        <Image src={MovieImage} alt="Your name anime movie" />
      </div>
    </Card>
  );
};

export default AboutMovie;