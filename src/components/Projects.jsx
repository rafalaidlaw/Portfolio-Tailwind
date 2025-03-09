import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div className="grid grid-cols-8">
      <section className="col-span-7 align-element w-8/12" id="projects">
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
                    <div className="bg-orange-400 grid grid-flow-row">
                      <h1 className="text-lg font-bold tracking-wider text-amber-200 drop-shadow">
                        React E-Commerce Website
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
  );
};
export default Projects;
