import YouTubeIcon from "@/assets/icons/youtube.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import TwitterXIcon from "@/assets/icons/twitter-x.svg";

type Socia = {
  id: string;
  name: string;
  url: string;
  icon: any;
};

export const socialMedia: Socia[] = [
  {
    id: "330b88bc-260a-4659-9708-4f50a7f56651",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/qbix/",
    icon: LinkedInIcon
  },
  {
    id: "f474139e-7a8c-41c8-9b09-66300ab8c73f",
    name: "Twitter",
    url: "https://x.com/qbixmex",
    icon: TwitterXIcon,
  },
];