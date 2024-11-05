import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="emoji-buttons">
          <Image
            className="memoji-image"
            src={memojiImage}
            alt="Person emoji developing a website on a computer"
            width={200}
            height={200}
          />

          <div className="status">
            <div className="background"></div>
            <p className="text">Available for new projects</p>
          </div>

          <div className="info">
            <h1 className="heading">Building Exceptional User Experiences</h1>
            <p className="description">I specialized building great sites from UI Designs to fully functional high performance web applications. Let&apos;s build something amazing, Contact Me !</p>
          </div>
        </div>

        <div className="buttons">
          <button className="explore">
            <span>Explore My Work</span>
            <ArrowDown className="icon" />
          </button>
          <button className="connect">
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
