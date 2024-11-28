import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="py-5 align-element bg-orange-400" id="skills">
      <SectionTitle
        text="React.js Redux Typescript Node.js Firebase C# SASS Tailwind
             Angular JavaScript JQuery ActionScript Git Markdown 
            BootStrap Flexbox/CSS HTML GraphQL JSON XML MUI"
      />
      <div className="py-5 gap-3 md:gap-5 flex flex-wrap justify-center">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
