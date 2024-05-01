import { AttentionSeeker } from "react-awesome-reveal";
import SkillSlider from "./SkillSlider";

export default function MySkills() {
  return (
    <section id="skills" className="py-8 sm:py-14 flex flex-col gap-2">
      <AttentionSeeker effect="jello">
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
      </AttentionSeeker>
      <SkillSlider />
    </section>
  );
}
