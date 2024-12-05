import { Metadata } from "next/types";

const mainMetadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Web developer portfolio made with Next.js",
  generator: "NextJS",
  applicationName: "Quantic Coders Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "TypeScript"],

  openGraph: {
    title: "Web Developer Portfolio",
    description: "Web developer portfolio made with Next.js",
    url: "https://qbix-portfolio.vercel.app/",
    images: [
      {
        url: "https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-desktop.jpg",
        width: 1280,
        height: 630,
      },
      {
        url: "https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-tablet.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-mobile.jpg",
        width: 600,
        height: 900,
      },
    ],
    locale: "en_CA",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Portfolio",
    description: "Web developer portfolio made with Next.js",
    siteId: '@qbixmex',
    creator: "Daniel González",
    images: [
      {
        url: "https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Desktop view of the Daniel's portfolio",
      }
    ],
  },
};

export default mainMetadata;
