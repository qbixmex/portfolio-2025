'use client';

import { FC, useRef } from "react";
import { motion } from "framer-motion";
import Card from "@/modules/home/components/Card";
import CardHeader from "@/modules/home/components/CardHeader";
import hobbies from "@/data/hobbies";
import styles from "./About.module.css";
import { twMerge } from "tailwind-merge";

const AboutHobbies: FC = () => {
  const constraintRef = useRef<HTMLDivElement|null>(null);

  return (
    <Card className={twMerge(styles.cardClasses, styles.hobbiesCard)}>
      <CardHeader className={styles.hobbiesCardHeader}>
        <CardHeader.Title>Beyond the code</CardHeader.Title>
        <CardHeader.Description>
          Explore my interests and hobbies.
        </CardHeader.Description>
      </CardHeader>
      <div
        ref={constraintRef}
        className={styles.hobbies}
      >
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.id}
            className={styles.hobby}
            style={{
              top: hobby.top,
              left: hobby.left,
              zIndex: hobby.z,
            }}
            drag={true}
            dragConstraints={constraintRef}
          >
            <span className={styles.hobbyEmoji}>
              {hobby.emoji}
            </span>
            <span className={styles.hobbyTitle}>
              {hobby.title}
            </span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default AboutHobbies;
