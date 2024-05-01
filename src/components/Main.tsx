"use client";
import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import InfiniteImages from "./InfiniteImages";
import InfiniteSlider from "./InfiniteSlider";
import Hero from "./Hero";
import MyProjects from "./MyProjects";
import MySkills from "./MySkills";
import GithubContributions from "./GithubContributions";

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
        <Hero />
        <section id="" className="hidden lg:flex py-8 flex-col gap-14">
          <InfiniteSlider />
        </section>
        <MyProjects />
        <MySkills />
        <GithubContributions />
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
        {/* <section id="" className="py-8 sm:py-14 flex flex-col items-center justify-center gap-14">
          <InfiniteImages />
        </section> */}
      </main>
    </div>
  );
};

export default Main;
