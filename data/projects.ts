import { StaticImageData } from "next/image";
import omega_records from "@/assets/images/projects/omega-records.jpg";
import game_hub from "@/assets/images/projects/game-hub.jpg";
import tesloShop from "@/assets/images/projects/teslo-shop-2024.jpg";
import { type IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaPaypal } from "react-icons/fa6";
import { SiTypescript, SiCloudinary, SiPrisma, SiVite } from "react-icons/si";
import { RiNextjsFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

interface Project {
  id: string;
  company: string;
  year: string;
  title: string;
  url: string;
  image: StaticImageData;
  description: string;
  tools: Tool[];
};

interface Tool {
  name: string;
  icon: IconType;
};

const portfolioProjects: Project[] = [
  {
    id: "e9bd8940-e123-4d1e-85af-fd1a8688bfb6",
    company: "Omega Records",
    year: "2020",
    title: "Recordings Studio Web Site",
    url: "https://qbixmex.github.io/omega-records/",
    image: omega_records,
    description: "<p>This website showcases a Recording Studio, highlighting its services, state-of-the-art equipment, experienced team, available courses, and a contact page for inquiries.</p><p>It combines a clean design with responsive functionality to deliver an engaging user experience.</p>",
    tools: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Javascript", icon: RiJavascriptFill },
    ],
  },
  {
    id: "e89f8390-07b5-4098-89b2-53eb09a0f9f9",
    company: "Game Hub",
    year: "2023",
    title: "Video Games Platform",
    url: "https://game-hub-qbixmex.vercel.app",
    image: game_hub,
    description: "<p>This React-based website lets users explore a curated selection of video games, offering powerful filters by platform, genre, and relevance and search functionality.</p><p>Each game has a detailed view, showcasing its description, Metascore, publisher information, and Gameplay images for an immersive browsing experience.</p>",
    tools: [
      { name: "Vite", icon: SiVite },
      { name: "React", icon: FaReact },
      { name: "Typescript", icon: SiTypescript },
    ],
  },
  {
    id: "4a9d26c4-49eb-466e-8793-6d6e23d21e11",
    company: "Teslo Shop",
    year: "2024",
    title: "E-commerce Platform",
    url: "https://teslo-shop-2024-green.vercel.app/",
    image: tesloShop,
    description: "<p>This full-stack shopping cart website features a complete online clothing store for Men, Women, and Kids, with integrated database support, product image uploads, and PayPal payment processing.</p><p>Users can filter clothing by category, while an admin panel allows for seamless product management and updates.</p>",
    tools: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Typescript", icon: SiTypescript },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Prisma", icon: SiPrisma },
      { name: "Postgresql", icon: BiLogoPostgresql },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Paypal", icon: FaPaypal },
    ],
  },
] as const;

export default portfolioProjects;
