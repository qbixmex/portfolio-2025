import Image from "next/image";
import SectionHeader from "@/modules/home/components/SectionHeader";
import Card from "@/modules/home/components/Card";
import BookImage from "@/assets/images/book-cover.png"
import MapImage from "@/assets/images/map.png"
import StarIcon from "@/assets/icons/star.svg";
import technologies from "@/data/technologies";
import TechIcon from "@/modules/home/components/TechIcon";
import profileImage from "@/assets/images/daniel-80s-video-game-200-250.png";
import hobbies from "@/data/hobbies";

const About = () => {
  return (
    <section id="about" className="mb-96">
      <SectionHeader>
        <SectionHeader.EyeBrow>About Me</SectionHeader.EyeBrow>
        <SectionHeader.Title>A Glimps Into my World</SectionHeader.Title>
        <SectionHeader.Description>
          Learn more about who I am, what I do, and what inspires me.
        </SectionHeader.Description>
      </SectionHeader>
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={BookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the languages, libraries and frameworks I use to create these amazing technologies.</p>
          </div>
          <div>
            {technologies.map(({ id, title, iconType }) => (
              <div key={id}>
                <span>
                  <TechIcon component={iconType} />
                </span>
                <span>{title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the code</h3>
            <p>Explore my interests and hobbies.</p>
            <div>
              {hobbies.map(({ id, title, emoji })=> (
                <div key={id}>
                  <span>{emoji}</span>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card>
          <Image src={MapImage} alt="Map" />
          <Image src={profileImage} alt="Profile Image" />
        </Card>
      </div>
    </section>
  );
};

export default About;
