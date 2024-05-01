"use client";
import Contact from "./Contact";
import InfiniteImages from "./InfiniteImages";
import InfiniteSlider from "./InfiniteSlider";
import Hero from "./Hero";
import MyProjects from "./MyProjects";
import MySkills from "./MySkills";
import GithubContributions from "./GithubContributions";
import About from "./About";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="mt-20">
      <main className="relative z-[20] flex flex-col flex-1 p-4">
        <Hero />
        <section id="" className="hidden lg:flex py-8 flex-col gap-14">
          <InfiniteSlider />
        </section>
        <MyProjects />
        <MySkills />
        <About />
        <GithubContributions />
        <Contact />
        {/* <section id="" className="sm:block hidden py-8 sm:py-14 flex flex-col items-center justify-center gap-14">
          <InfiniteImages />
        </section> */}
      </main>
    </div>
  );
};

export default Main;
