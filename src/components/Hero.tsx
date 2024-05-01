import { AttentionSeeker } from "react-awesome-reveal";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Typewriter from "typewriter-effect";
import { AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      id="introPage"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 place-items-center"
    >
      <AttentionSeeker effect="bounce" delay={1500}>
        <div className="flex flex-col lg:justify-center items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-blue-400 opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[16px] text-white font-semibold poppins flex gap-2">
              {"🚀 "}{" "}
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                    "AI/ML & Blockchain Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h1>
          </motion.div>
          <motion.h2
            variants={slideInFromLeft(0.5)}
            className="font-semibold text-4xl sm:text-5xl md:text-6xl"
          >
            <span className="xl:inline-block hidden">Hi! I&apos;m </span>
            <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              {" "}
              Alston
            </span>{" "}
            Soares
            <br />
            FullStack
            <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              {" "}
              Developer
            </span>
          </motion.h2>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base sm:text-lg md:text-xl"
          >
            I am a Passionate{" "}
            <span className="text-blue-400 text-extrabold">
              <strong>Web</strong>
            </span>{" "}
            Developer,{" "}
            <span className="text-blue-400 text-extrabold">
              <strong>Open Source</strong>
            </span>{" "}
            Contributor and{" "}
            <span className="text-blue-400 text-extrabold">
              <strong>AI/ML + Blockchain</strong>
            </span>{" "}
            Enthusiast. My{" "}
            <span className="text-blue-400 text-extrabold">
              <strong> favorite tech</strong>
            </span>{" "}
            includes MERN, Next.js, Prisma, Tailwind CSS, Flask and Python.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            href="mailto:alstonsoares17@gmail.com"
            target="_blank"
            className="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
          >
            <div className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h4 className="relative z-9 flex items-center gap-3">
              <AiOutlineMail /> Contact Me
            </h4>
          </motion.a>
        </div>
      </AttentionSeeker>
      <AttentionSeeker effect="tada" delay={1500}>
        <motion.div
          className="relative shadow-2xl grid place-items-center"
          variants={slideInFromRight(0.8)}
        >
          <img
            src="/alston.jpeg"
            alt="Alstudd"
            className="object-cover z-[2] max-h-[70vh] rounded-3xl"
          />
        </motion.div>
      </AttentionSeeker>
    </motion.section>
  );
}
