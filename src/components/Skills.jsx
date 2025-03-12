import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="bg-orange-400 border-b-2 border-orange-500 max-w-7xl">
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
                                                                  <section className="py-5 align-element bg-orange-400 ">
                                                                    <SectionTitle text="These are the languages I have worked in. Click for example. " />
                                                                    <div className="py-5 gap-2 flex flex-wrap justify-center">
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
