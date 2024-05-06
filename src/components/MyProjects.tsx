import Reveal, { Rotate, Slide } from "react-awesome-reveal";
import ProjectSlider from "./ProjectSlider";
import { FaGithub } from "react-icons/fa";

export default function MyProjects() {
  return (
    <section className="px-4 sm:px-8 py-12 sm:py-14 flex flex-col gap-14" id="projects">
      <Reveal>
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
      </Reveal>
      <ProjectSlider />
    </section>
  );
}
