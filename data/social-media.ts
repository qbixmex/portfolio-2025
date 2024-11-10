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
    id: "095f6db1-bda2-4b95-8aed-66807aaac8bb",
    name: "Youtube",
    url: "#",
    icon: YouTubeIcon,
  },
  {
    id: "3c47ddcd-3eac-4cd5-8ac2-15e0e47285d8",
    name: "Facebook",
    url: "#",
    icon: FacebookIcon,
  },
  {
    id: "f16a5d8e-d24d-40f7-9f69-997a817abd85",
    name: "Instagram",
    url: "#",
    icon: InstagramIcon,
  },
  {
    id: "330b88bc-260a-4659-9708-4f50a7f56651",
    name: "Linkedin",
    url: "#",
    icon: LinkedInIcon
  },
  {
    id: "f474139e-7a8c-41c8-9b09-66300ab8c73f",
    name: "Twitter",
    url: "#",
    icon: TwitterXIcon,
  },
];