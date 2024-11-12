import { StaticImageData } from "next/image";
import homega_records from "@/assets/images/projects/homega-records.jpg";
import game_hub from "@/assets/images/projects/game-hub.jpg";
import tesloShop from "@/assets/images/projects/teslo-shop-2024.jpg";

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
    company: "Homega Records",
    year: "2020",
    title: "Recorgins Studio Web Site",
    url: "https://qbixmex.github.io/omega-records/",
    image: homega_records,
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
  },
  {
    id: "e89f8390-07b5-4098-89b2-53eb09a0f9f9",
    company: "Game Hub",
    year: "2023",
    title: "Video Games Platform",
    url: "https://game-hub-qbixmex.vercel.app",
    image: game_hub,
    results: [
      { title: "Boosted sales by 40%" },
      { title: "Expanded customer reach by 50%" },
      { title: "Increased brand awareness by 35%" },
    ],
  },
  {
    id: "4a9d26c4-49eb-466e-8793-6d6e23d21e11",
    company: "Teslo Shop",
    year: "2024",
    title: "E-commerce Platform",
    url: "https://teslo-shop-2024-green.vercel.app/",
    image: tesloShop,
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased traffic by 35%" },
    ],
  },
] as const;

export default portfolioProjects;
