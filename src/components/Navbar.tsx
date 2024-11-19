import { slideInFromLeft } from "@/utils/motion";
import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import { FaCode, FaFile, FaLaptop, FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Navbar = ({ y }: Props & { y: any }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  const tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.div initial="hidden" animate="visible">
      <motion.header
        variants={slideInFromLeft(0)}
        className={
          "text-white fixed z-50 top-0 w-full px-6 py-4 flex items-center justify-between border-b border-solid " +
          (y > 0
            ? !toggle
              ? " py-4 bg-slate-950 border-blue-950"
              : " py-4 bg-slate-950 border-transparent"
            : " py-6 bg-transparent border-transparent")
        }
      >
        <a href="#introPage" className="flex items-center gap-4">
          {/* <FaLaptop className='text-2xl' /> */}
          <Image
            width={44}
            height={44}
            src="/alston.jpeg"
            alt="Alston Soares"
            className="rounded-full object-cover aspect-square"
          />
          <h1 className="font-medium text-xl">
            <b className="font-bold poppins">Alston Soares</b>
          </h1>
        </a>
        <div className="sm:flex items-center gap-6 hidden">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.link}
              className="font-medium text-base poppins duration-200 hover:text-blue-400"
              // target={index === 4 ? "_blank" : ""}
            >
              <p>{tab.name}</p>
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1I1HbYDABrPsTq0CFBkHnSHjIri6P_hjM/view?usp=sharing"
            target="_blank"
            className="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
          >
            <div className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h4 className="relative z-9 flex items-center gap-3 text-base font-medium">
              <FaFile /> Resume
            </h4>
          </a>
        </div>
        <div className="sm:hidden z-40" onClick={handleClick}>
          <Image
            width={28}
            height={28}
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            className="object-contain mr-5 cursor-pointer"
          />
        </div>
      </motion.header>
      <ul
        className={
          toggle
            ? "pt-24 pb-8 fixed top-0 bg-slate-950 shadow-sm z-40 w-full px-8 sm:hidden flex flex-col items-center gap-5 text-white border-b border-solid border-blue-950"
            : "hidden"
        }
      >
        {tabs.map((tab, index) => (
          <a
            onClick={() => setToggle(false)}
            key={index}
            href={tab.link}
            className="font-medium text-base poppins duration-200 hover:text-blue-400"
            // target={index === 4 ? "_blank" : ""}
          >
            <p>{tab.name}</p>
          </a>
        ))}
        <a
          onClick={() => setToggle(false)}
          href="https://drive.google.com/file/d/1I1HbYDABrPsTq0CFBkHnSHjIri6P_hjM/view?usp=sharing"
          target="_blank"
          className="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
          <div className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
          <h4 className="relative z-9 flex items-center gap-3 text-base font-medium">
            <FaFile /> Resume
          </h4>
        </a>
      </ul>
    </motion.div>
  );
};

export default Navbar;
