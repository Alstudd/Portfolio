import React from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDev,
  FaCode,
} from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-950 border-t border-solid border-blue-950 text-gray-300 py-6 relative z-[20] px-24">
      <div className="container mx-auto flex sm:flex-row flex-col gap-4 items-center justify-between">
        <div className="sm:flex hidden items-center gap-1">
          <Slide direction="down" duration={500} cascade>
            <h1 className="font-medium">
              Developed by{" "}
              <b className="font-bold poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                Alston
              </b>{" "}
              <span className=""> Soares</span>
            </h1>
            <a
              href="https://github.com/Alstudd/Portfolio"
              target="_blank"
              style={{ color: "#42a5f5" }}
            >
              <AiFillHeart />
            </a>
          </Slide>
        </div>
        <div className="sm:hidden flex flex-col gap-1 items-center">
          <Slide direction="down" duration={500} delay={100} cascade>
            <h1 className="font-medium">Developed by</h1>
            <div className="flex items-center gap-1">
              <h1 className="font-medium">
                <b className="font-bold poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Alston
                </b>{" "}
                <span className=""> Soares</span>
              </h1>
              <a
                href="https://github.com/Alstudd/Portfolio"
                target="_blank"
                style={{ color: "#42a5f5" }}
              >
                <AiFillHeart />
              </a>
            </div>
          </Slide>
        </div>
        <div className="flex items-center space-x-4">
          <Slide direction="down" cascade delay={100} duration={500}>
            <a
              href="https://www.github.com/Alstudd"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alston-soares-724a641b9/"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://devfolio.co/@Alstudd17"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaCode />
            </a>
            <a
              href="https://dev.to/alstudd"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaDev />
            </a>
            <a
              href="https://www.instagram.com/alstonsoares17"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaInstagram />
            </a>
          </Slide>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
