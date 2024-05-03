"use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Alston Soares",
//   description: "Next.js Portfolio Website of Alston Soares (DEV from INDIA)",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function goTop() {
    document.body.scrollIntoView();
  }
  const [y, setY] = useState(0)
  const onScroll = () => {
    if (typeof window !== "undefined") {
      let y = window.scrollY;
      setY(y);
      console.log(y);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll])
  return (
    <html lang="en">
      <body className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <div
          className={"fixed bottom-0 right-0 z-[21] duration-200 mb-10 mr-10" +
            (y > 0
              ? " opacity-full pointer-events-auto"
              : " opacity-0 pointer-events-none")}
        >
          <button
            onClick={goTop}
            className="ml-auto rounded-full bg-blue-600 text-white px-3 sm:px-4 hover:bg-blue-800 cursor-pointer aspect-square grid place-items-center"
          >
            <FaArrowUp />
          </button>
        </div>
        <StarsCanvas />
        <Navbar y={y} />
        <div className="py-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
