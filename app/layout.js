"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { metadata } from "./components/Metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const background = document.querySelector(".background");
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      background.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <link rel="icon" href="/AA.jpg" />
        <link rel="apple-touch-icon" href="/AA.jpg" />
        <meta
          name="keywords"
          content="Abdurrahman, abdulhakeem, abdulrahman, rammy, web developer, development, software development, programming, solutions, "
        />
        <meta name="author" content="Abdurrahman Abdulhakeem" />

        {/* Open Graph (OG) meta tags for social media sharing  */}
        <meta
          property="og:title"
          content="Abdurrahman Abdulhakeem - Web Developer"
        />
        <meta
          property="og:description"
          content="Providing expert web development services to create high-quality digital solutions tailored to your needs."
        />
        <meta property="og:image" content="/rammy-3.jpg" />
        <meta property="og:url" content="https://abdurrahman.ng" />
        <meta property="og:type" content="website" />
        {/*  Twitter Card meta tags for Twitter sharing  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abdurrahman Abdulhakeem - Professional Web Developer"
        />
        <meta
          name="twitter:description"
          content="Providing expert web development services to create high-quality digital solutions tailored to your needs."
        />
        <meta name="twitter:image" content="/rammy-3.jpg" />
        <meta name="twitter:site" content="@rammymedia" />
        <meta name="twitter:creator" content="@rammymedia" />

        <link rel="canonical" href="https://abdurrahman.ng" />
      </head>

      <body
        className={`relative min-h-[100vh] w-full overflow-x-hidden ${inter.className}`}
      >
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -z-10 -top-3 -left-3 w-[115%] h-[115%] background bg-rammy-web bg-cover bg-center transition-all"></div>
        </div>

        <div className="z-10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
