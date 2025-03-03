import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="bg-orange-400 border-b-2 border-orange-500">
      <div className="border-r-2 border-orange-300">
        <div className="border-l-2 border-orange-300">
          <div className="border-b-2 border-orange-500">
            <div className="border-r-2 border-orange-300">
              <div className="border-l-2 border-orange-300">
                <div className="border-b-2 border-orange-500">
                  <div className="border-r-2 border-orange-300">
                    <div className="border-l-2 border-orange-300">
                      <div className="border-b-2 border-orange-500">
                        <div className="border-r-2 border-orange-300">
                          <div className="border-l-2 border-orange-300">
                            <div className="border-b-2 border-orange-500">
                              <div className="border-r-2 border-orange-300">
                                <div className="border-l-2 border-orange-300">
                                  <div className="border-b-2 border-orange-500">
                                    <div className="border-r-2 border-orange-300">
                                      <div className="border-l-2 border-orange-300">
                                        <div className="border-b-2 border-orange-500">
                                          <div className="border-r-2 border-orange-300">
                                            <div className="border-l-2 border-orange-300">
                                              <div className="border-b-2 border-orange-500">
                                                <div className="border-r-2 border-orange-300">
                                                  <div className="border-l-2 border-orange-300">
                                                    <div className="border-b-2 border-orange-500">
                                                      <div className="border-r-2 border-orange-300">
                                                        <div className="border-l-2 border-orange-300">
                                                          <div className="border-b-2 border-orange-500">
                                                            <div className="border-r-2 border-orange-300">
                                                              <div className="border-l-2 border-orange-300">
                                                                <div className="border-b-2 border-orange-500">
                                                                  <section
                                                                    className="py-5 align-element bg-orange-400"
                                                                    id="skills"
                                                                  >
                                                                    <SectionTitle
                                                                      text="React.js Redux Typescript Node.js Firebase C# MUI SASS Tailwind 
             Angular JavaScript JQuery ActionScript Git Markdown 
            BootStrap Flexbox/CSS HTML GraphQL JSON XML "
                                                                    />
                                                                    <div className="py-5 gap-3 md:gap-5 flex flex-wrap justify-center">
                                                                      {skills.map(
                                                                        (
                                                                          skill
                                                                        ) => {
                                                                          return (
                                                                            <SkillsCard
                                                                              key={
                                                                                skill.id
                                                                              }
                                                                              {...skill}
                                                                            />
                                                                          );
                                                                        }
                                                                      )}
                                                                    </div>
                                                                  </section>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
