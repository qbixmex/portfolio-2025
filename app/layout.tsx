import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import mainMetadata from "@/data/metadata";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata = mainMetadata;

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Readonly<Props>> = ({ children}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        twMerge([
          inter.variable,
          orbitron.variable,
        ])
      }>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
