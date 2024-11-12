import { StaticImageData } from "next/image";

import hugo_bibriesca_balboa from "@/assets/images/hugo-bibriesca-balboa.png";
import rafael_massimo from "@/assets/images/rafael-massimo.png";
import bart_kang from "@/assets/images/bart_kang.png";
import daniel_santos from "@/assets/images/daniel_santos.png";
import rogelio_martinez from "@/assets/images/rogelio_martinez.png";

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
  linkedIn: string;
};

const testimonials: Testimonial[] = [
  {
    id: "97473f03-e6e2-4a79-be1a-326e7b633fa1",
    name: "Hubo B. Balboa",
    position: "Project manager",
    text: "Working with Daniel on our landing page has been an incredible experience. What truly sets Daniel apart is the passion they bring to web development and proactive throughout the process, anticipating our needs and ensuring every detail aligned with our vision.",
    avatar: hugo_bibriesca_balboa,
    linkedIn: "https://www.linkedin.com/in/hugo-b-balboa-1812b273/",
  },
  {
    id: "e8a020bb-774c-447a-bd67-752d3944837b",
    name: "Rafael Massimo",
    position: "Web Developer & Talent Acquisition",
    text: "Working with Daniel on our Next.js project was truly productive for our team. Daniel stepped up as a natural leader, guiding the project with a clear vision and inspiring everyone involved. His commitment was evident every step of the way and   dedicated to the team to each task with unmatched passion for the web development.",
    avatar: rafael_massimo,
    linkedIn: "https://www.linkedin.com/in/rafael--almeida/",
  },
  {
    id: "7c4835e3-969a-4786-b6ac-142d3f9de2e1",
    name: "Bart Kang",
    position: "Program Manager | Software Developer",
    text: "Having Daniel lead our team for the final project was a game-changer. He brought unwavering commitment and dedication, inspiring everyone to give their best as we worked toward creating an outstanding web development product.",
    avatar: bart_kang,
    linkedIn: "https://www.linkedin.com/in/byeongjae-bart-kang-71376620b/",
  },
  {
    id: "38b3350c-d9ae-4a21-92c5-160ed723c887",
    name: "Daniel Santos",
    position: "Digital Artist",
    text: "Collaborating with Daniel on bringing our UX/UI designs to life was a fantastic experience. Daniel has an incredible eye for detail, ensuring that every design element was translated perfectly into clean, responsive HTML and CSS, ready for production.",
    avatar: daniel_santos,
    linkedIn: "https://www.linkedin.com/in/daniel-matts-santos/",
  },
  {
    id: "a0ceb917-9638-46cc-814a-0f8b51cc8bc6",
    name: "Rogelio Martinez",
    position: "Android Mobile Developer",
    text: "Collaborating with Daniel on our Android app development was an outstanding experience. He expose expertise as an Android developer shining through every stage of the project. Daniel demonstrated an exceptional commitment to our vision, consistently meeting deadlines, and ensuring top-notch quality in every feature.",
    avatar: rogelio_martinez,
    linkedIn: "https://www.linkedin.com/in/rogmg-swdev/",
  },
] as const;

export default testimonials;
