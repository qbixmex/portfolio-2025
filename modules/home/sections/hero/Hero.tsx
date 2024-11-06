import Image from "next/image";
import { twMerge } from "tailwind-merge";
import HeroOrbit from "./components/HeroOrbit";
import Graphic from "./components/Graphic";

import styles from "./Hero.module.css";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import profileImage from "@/assets/images/daniel-80s-video-game-200-250.png";
import GrainImage from "@/assets/images/grain.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundWrapper}>
        {/* GRAIN */}
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${GrainImage.src})` }}
        ></div>

        {/* RINGS */}
        <div className={twMerge([styles.rings, styles.ring1])}></div>
        <div className={twMerge([styles.rings, styles.ring2])}></div>
        <div className={twMerge([styles.rings, styles.ring3])}></div>
        <div className={twMerge([styles.rings, styles.ring4])}></div>

        {/* STARS */}
        <HeroOrbit size={750} rotation={-72}>
          <Graphic
            size={128}
            color="green"
            type="star"
            duration={2}
            delay={1}
          />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={75}>
          <Graphic
            size={60}
            color="green"
            type="star"
            duration={3}
            delay={1}
          />
        </HeroOrbit>

        <HeroOrbit size={880} rotation={150}>
          <Graphic
            size={100}
            color="green"
            type="star"
            duration={4}
            delay={2}
          />
        </HeroOrbit>

        {/* SPARKLES */}
        <HeroOrbit size={850} rotation={0}>
          <Graphic
            size={75}
            color="gray"
            type="sparkle"
            opacity={0.2}
            duration={3}
            delay={1}
          />
        </HeroOrbit>

        <HeroOrbit size={690} rotation={100}>
          <Graphic
            size={50}
            color="gray"
            type="sparkle"
            opacity={0.35}
            duration={2}
          />
        </HeroOrbit>

        <HeroOrbit size={760} rotation={190}>
          <Graphic
            size={50}
            color="gray"
            type="sparkle"
            opacity={0.3}
            duration={3}
            delay={2}
          />
        </HeroOrbit>

        {/* CIRCLES */}
        <HeroOrbit size={670} rotation={-20}>
          <Graphic
            size={30}
            color="gray"
            type="circle"
            opacity={0.2}
            duration={5}
            delay={1}
          />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={120}>
          <Graphic
            size={20}
            color="gray"
            type="circle"
            opacity={0.2}
            duration={5}
            delay={1}
          />
        </HeroOrbit>

        <HeroOrbit size={510} rotation={140}>
          <Graphic
            size={20}
            color="gray"
            type="circle"
            opacity={0.25}
            duration={5}
            delay={2}
          />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className={styles.imageButtonsWrapper}>
          <Image
            className={styles.profileImage}
            src={profileImage}
            alt="Person emoji developing a website on a computer"
            width={200}
            height={250}
          />

          <div className={styles.status}>
            <div className={styles.statusDot}></div>
            <p className={styles.statusText}>Available for new projects</p>
          </div>

          <div className={styles.info}>
            <h1 className={styles.heading}>Building Exceptional User Experiences</h1>
            <p className={styles.description}>I specialized building great sites from UI Designs to fully functional high performance web applications. Let&apos;s build something amazing, Contact Me !</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.explore}>
            <span>Explore My Work</span>
            <ArrowDown className={styles.icon} />
          </button>
          <button className={styles.connect}>
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
