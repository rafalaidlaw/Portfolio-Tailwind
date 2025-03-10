import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-flow-col-dense">
        <div className="relative  flex justify-center">
          <h1 className="text-6xl font-Monoton tracking-wider text-orange-600 drop-shadow absolute top-0.5 scale-125">
            E
          </h1>
          <h1 className="text-6xl font-Monoton tracking-wider text-orange-500 drop-shadow absolute top-0.5 scale-105">
            E
          </h1>
          <div className="scale-75">
            <h1 className="text-6xl font-Monoton tracking-wider text-orange-400 drop-shadow absolute top-0 scale-125">
              E
            </h1>
            <h1 className="text-6xl font-Monoton tracking-wider text-orange-300 drop-shadow pb-2 scale-110">
              E
            </h1>
          </div>
          <h1 className="text-6xl font-Monoton tracking-wider text-orange-200 drop-shadow absolute top-0 scale-75">
            E
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <section className="col-span-2 align-element" id="projects">
          <div className="bg-orange-600 rounded-lg py-1 px-1">
            <div className="bg-orange-500 rounded-lg py-1 px-1">
              <div className="bg-orange-400 rounded-lg py-1 px-1">
                <div className="bg-orange-300 rounded-lg  py-1 px-1">
                  <article className="bg-orange-200 rounded-lg ">
                    {/* <div className="border-b border-orange-500  pb-5 ">
                    <h2 className="text-lg text-center relative font-mono text-orange-600  tracking-wider drop-shadow">
                      Portfolio
                    </h2>
                  </div> */}
                    <div className="flex justify-center">
                      <div className="py-5 grid md:grid-cols-1 w-11/12">
                        {projects.map((project) => {
                          return <ProjectsCard key={project.id} {...project} />;
                        })}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1 y align-element " id="projects">
          <div className="bg-orange-600 rounded-lg py-1 px-1">
            <div className="bg-orange-500 rounded-lg py-1 px-1">
              <div className="bg-orange-400 rounded-lg py-1 px-1">
                <div className="bg-orange-300 rounded-lg  py-1 px-1">
                  <article className="bg-orange-200 rounded-lg ">
                    {/* <div className="border-b border-orange-500  pb-5 ">
                    <h2 className="text-lg text-center relative font-mono text-orange-600  tracking-wider drop-shadow">
                      Portfolio
                    </h2>
                  </div> */}
                    <div className="flex justify-center">
                      <div className="bg-orange-400">
                        <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                          React
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Projects;
