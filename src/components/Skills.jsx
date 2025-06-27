import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { useState } from "react";

const Skills = () => {
  const [name, setName] = useState(
    "These are the languages I have worked in. Click icon for more info."
  );
  const handleClick = (text) => {
    setName(text);
    console.log(this);
  };
  return (
    <div
      className="bg-orange-300 border-b-2 border-orange-500 max-w-7xl"
      onMouseLeave={() =>
        handleClick(
          "These are the languages I have worked in. Click icon for more info."
        )
      }
    >
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
                                                                    <SectionTitle
                                                                      text={name}
                                                                      className="min-h-[5rem]"
                                                                    />
                                                                    <div className="py-5 gap-2 flex flex-wrap justify-center">
                                                                      {skills.map(
                                                                        (
                                                                          skill
                                                                        ) => {
                                                                          return (
                                                                            <button
                                                                              id={
                                                                                skill.id
                                                                              }
                                                                              key={
                                                                                skill.id
                                                                              }
                                                                              onClick={() => setName(skill.text)}
                                                                              onMouseEnter={() => setName(skill.text)}
                                                                              onMouseLeave={() => setName("These are the languages I have worked in. Click icon for more info.")}
                                                                              className="animate-box1"
                                                                            >
                                                                              <article className="hover:text-orange-900 duration-300">
                                                                                <span>
                                                                                  {
                                                                                    skill.icon
                                                                                  }
                                                                                </span>
                                                                                {/* <h4 className="mt-6 font-bold text-orange-200">{title}</h4>
      <p className="mt-2 text-orange-200">{text}</p> */}
                                                                              </article>
                                                                            </button>
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
