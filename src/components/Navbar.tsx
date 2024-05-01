import { slideInFromLeft } from "@/utils/motion";
import React from "react";
import Reveal from "react-awesome-reveal";
import { FaCode, FaFile, FaLaptop, FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {};

const Navbar = ({ y }: Props & { y: any }) => {
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
            ? " py-4 bg-slate-950 border-blue-950"
            : " py-6 bg-transparent border-transparent")
        }
      >
        <div className="flex items-center gap-4">
          {/* <FaLaptop className='text-2xl' /> */}
          <img
            src="/alston.jpeg"
            alt="Alston Soares"
            className="w-11 h-11 rounded-full"
          />
          <h1 className="font-medium text-xl">
            <b className="font-bold poppins">Alston Soares</b>
          </h1>
        </div>
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
            href="https://drive.google.com/file/d/1OWdIFr8xQtDqI9ZQ0Ve6O8laKE4V1dv5/view?usp=sharing"
            target="_blank"
            className="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
          >
            <div className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h4 className="relative z-9 flex items-center gap-3 text-base font-medium">
              <FaFile /> Resume
            </h4>
          </a>
        </div>
      </motion.header>
    </motion.div>
  );
};

export default Navbar;
