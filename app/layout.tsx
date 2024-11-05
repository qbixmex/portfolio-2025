import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "My Web Developer Portfolio",
  description: "Web developer portfolio made with Next.js",
};

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Readonly<Props>> = ({ children}) => {
  return (
    <html lang="en">
      <body className={
        twMerge([
          inter.variable,
          calistoga.variable,
        ])
      }>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
