"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaCheck, FaTimes } from "react-icons/fa";
import Github from "./Github";
import Typewriter from "typewriter-effect";
import { AiOutlineMail } from "react-icons/ai";
import Contact from "./Contact";
import ProjectSlider from "./ProjectSlider";
import Skills from "./Skills";

type Props = {};

const Main = (props: Props) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length > 3 ? "." : prevDots + "."));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      name: "a curious learner",
      description:
        "I am always looking for new ways to solve problems and create new and innovative solutions. I am driven by a dream to build something new that can bring meaning and value to everyone's lives, and I am eager to collaborate with like-minded individuals to turn this dream into reality. I'm also interested in working on exciting projects and exploring new opportunities in the tech space.",
    },
    {
      name: "a team player",
      description:
        "I have participated in 8+ national level hackathons and emerged as winner at 3 hackathons. I am able to manage and lead a team to deliver high-quality software solutions on time and within budget. I am a strong believer in the power of teamwork and I am always looking for new ways to improve my leadership skills and help my team achieve their goals.",
    },
    {
      name: "a self taught developer",
      description:
        "I have a coding experience of over 2 years. I am a self-taught developer with a passion for learning new technologies and building innovative solutions. I have a strong passion for learning and I am always looking for new ways to improve my skills and expand my knowledge. I started off with HTML, CSS and JavaScript and have since expanded my skills to include a variety of different languages and frameworks.",
    },
  ];
  return (
    <div className="mt-20">
      <main className="relative z-[20] flex flex-col flex-1 p-4">
        <section
          id="introPage"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
        >
          <div className="flex flex-col lg:justify-center items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <div className="Welcome-box py-[8px] px-[7px] border border-blue-400 opacity-[0.9]">
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
            </div>
            <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
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
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
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
            </p>
            <a
              href="mailto:alstonsoares17@gmail.com"
              target="_blank"
              className="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
              <div className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
              <h4 className="relative z-9 flex items-center gap-3">
                <AiOutlineMail /> Contact Me
              </h4>
            </a>
          </div>
          <div className="relative shadow-2xl grid place-items-center">
            <img
              src="/alston.jpeg"
              alt="Alstudd"
              className="object-cover z-[2] max-h-[70vh] rounded-3xl"
            />
          </div>
        </section>
        <section className="py-8 sm:py-14 flex flex-col gap-14" id="projects">
          <div className="flex flex-col gap-2 text-center">
            <h6 className="text-large sm:text-xl md:text-2xl">
              Some of my amazing projects.
            </h6>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              Excited to{" "}
              <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                view
              </span>{" "}
              my work?
            </h3>
          </div>
          <a
            href="https://www.github.com/Alstudd"
            target="_blank"
            className="Welcome-box-2 opacity-[0.9] mx-auto px-4 py-2 border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 hover:border-blue-700 duration-200"
          >
            <FaGithub />
            <p>View my github</p>
          </a>
          <ProjectSlider />
        </section>
        <section id="skills" className="py-8 sm:py-14 flex flex-col gap-2">
          <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-600 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-600 py-4">
            <h6 className="text-large sm:text-xl md:text-2xl">
              View my tech stack.
            </h6>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              My{" "}
              <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                skills
              </span>{" "}
              as a developer
            </h3>
          </div>
          <Skills />
        </section>
        <section id="" className="py-8 sm:py-14 flex flex-col gap-14">
          <div className="flex flex-col gap-2 text-center">
            <h6 className="text-large sm:text-xl md:text-2xl">
              View my github contributions.
            </h6>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              Days I{" "}
              <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                code on
              </span>{" "}
              Github
            </h3>
          </div>
          <Github />
        </section>
        <section id="" className="py-8 sm:py-14 flex flex-col gap-14">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col text-center">
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Alston&apos;s{" "}
                <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Contribution
                </span>{" "}
                Graph
              </h3>
            </div>
            <img src="https://github-readme-activity-graph.vercel.app/graph?username=Alstudd&theme=github-compact&hide_border=true&color=ffffff&line=42a5f5&point=ffffff&hide_title=true" />
          </div>
        </section>
        <section
          id="about"
          className="py-8 sm:py-14 flex flex-col gap-10 relative"
        >
          <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-600 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-600 py-4">
            <h6 className="text-large sm:text-xl md:text-2xl">
              Want to know me better?
            </h6>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              A bit{" "}
              <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                about
              </span>{" "}
              me.
            </h3>
          </div>
          <p className="w-full text-center py-2 mx-auto poppins font-semibold text-2xl sm:text-3xl md:text-4xl">
            I am{" "}
            <span className="poppins" id="wait">
              {dots}
            </span>
          </p>
          <div className="flex flex-col sm:gap-16 gap-10 w-full mx-auto max-w-[800px]">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 sm:gap-16">
                <p className="poppins text-4xl sm:text-5xl md:text-6xl font-semibold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                    0{index + 1}
                  </span>
                </p>
                <div className="mt-0.5 flex flex-col gap-6 sm:gap-8">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl">
                    {benefit.name}
                  </h3>
                  {/* Make the description short in mobile and add ... to view */}
                  <p className="sm:block hidden">{benefit.description}</p>
                  <p className="sm:hidden block">
                    {index === expandedIndex
                      ? benefit.description
                      : benefit.description.slice(0, 100) + "..."}
                    {index !== expandedIndex && (
                      <button className="" onClick={() => toggleExpand(index)}>
                        View More
                      </button>
                    )}
                    {index === expandedIndex && (
                      <button className="" onClick={() => toggleExpand(index)}>
                        View Less
                      </button>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-center mt-20">
            {/* <h6 className="text-large sm:text-xl md:text-2xl">
                            Qualities that make me stand out.
                        </h6> */}
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              The{" "}
              <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                Complete
              </span>{" "}
              Package
            </h3>
          </div>
          <div className="flex flex-col gap-10 max-w-[800px] mx-auto w-full shadow-2xl shadow-blue-500 mb-10">
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full bg-white rounded-4xl text-slate-500">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-4 text-left">Criteria</th>
                    <th className="p-4 text-left">Candidate #1</th>
                    <th className="p-4 text-left">Candidate #2</th>
                    <th className="p-4 text-left">Candidate #3</th>
                    <th className="p-4 text-left bg-blue-700 text-white">Me</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Dedication</td>
                    <td className="p-4">
                      <FaTimes className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaTimes className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-blue-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Reliability</td>
                    <td className="p-4">
                      <FaTimes className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-blue-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Communication Skills</td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaTimes className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-blue-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Confidence</td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaTimes className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-blue-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Programming Ability</td>
                    <td className="p-4">
                      <FaCheck className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaTimes className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaTimes className="text-slate-500" />
                    </td>
                    <td className="p-4">
                      <FaCheck className="text-blue-500" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
          </div>
        </section>
        <section id="contact" className="py-8 sm:py-14 flex flex-col gap-14">
          <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-600 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-600 py-4">
            <h6 className="text-large sm:text-xl md:text-2xl">
              Let&#x2019;s connect.
            </h6>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              Contact{" "}
              <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                Me
              </span>{" "}
            </h3>
          </div>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Main;
