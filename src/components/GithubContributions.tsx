import { AttentionSeeker, Bounce, Flip, Zoom } from "react-awesome-reveal";
import Github from "./Github";

export default function GithubContributions() {
  return (
    <section id="github" className="py-8 sm:py-14 flex flex-col gap-14">
      <Flip direction="vertical">
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
      </Flip>
      <Flip direction="horizontal">
        <Github />
      </Flip>
      <Zoom direction="down">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col text-center">
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My{" "}
              <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                Contribution
              </span>{" "}
              Graph
            </h3>
          </div>
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=Alstudd&theme=github-compact&hide_border=true&color=ffffff&line=42a5f5&point=ffffff&hide_title=true" />
        </div>
      </Zoom>
    </section>
  );
}
