import { StaticImageData } from "next/image";
import aiStartUpLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";

interface Project {
  id: string;
  company: string;
  year: string;
  title: string;
  url: string;
  image: StaticImageData;
  results: Result[];
};

interface Result {
  title: string;
};

const portfolioProjects: Project[] = [
  {
    id: "e9bd8940-e123-4d1e-85af-fd1a8688bfb6",
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    url: "#",
    image: aiStartUpLandingPage,
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
  },
  {
    id: "e89f8390-07b5-4098-89b2-53eb09a0f9f9",
    company: "Innovative Co",
    year: "2021",
    title: "Light Sass Landing Page",
    url: "#",
    image: darkSaasLandingPage,
    results: [
      { title: "Boosted sales by 40%" },
      { title: "Expanded customer reach by 50%" },
      { title: "Increased brand awareness by 35%" },
    ],
  },
  {
    id: "4a9d26c4-49eb-466e-8793-6d6e23d21e11",
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    url: "#",
    image: lightSaasLandingPage,
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased traffic by 35%" },
    ],
  },
] as const;

export default portfolioProjects;
