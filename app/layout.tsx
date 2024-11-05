import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Web Developer Portfolio",
  description: "Web developer portfolio made with Next.js",
};

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Readonly<Props>> = ({ children}) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
