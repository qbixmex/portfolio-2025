import { Metadata } from "next/types";

const mainMetadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Web developer portfolio made with Next.js",
  generator: 'Next JS',
  applicationName: 'Quantic Coders Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'TypeScript'],

  openGraph: {
    title: "Web Developer Portfolio",
    description: "Web developer portfolio made with Next.js",
    url: "https://qbix-portfolio.vercel.app/",
    images: [
      {
        url: 'https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-desktop.jpg',
        width: 1280,
        height: 834,
      },
      {
        url: 'https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-tablet.jpg',
        width: 1226,
        height: 1500,
      },
      {
        url: 'https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-mobile.jpg',
        width: 679,
        height: 1220,
      },
    ],
    locale: "en_CA",
    type: "profile",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer Portfolio',
    description: 'Web developer portfolio made with Next.js',
    siteId: '@qbixmex',
    creator: 'Daniel González',
    images: [
      'https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-desktop.jpg',
      'https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-tablet.jpg',
      'https://qbix-portfolio.vercel.app/images/qbix-portfolio-app-mobile.jpg'
    ],
  },
};

export default mainMetadata;
