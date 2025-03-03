import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div className="">
      <section className="py-10 align-element " id="projects">
        <article className="bg-orange-200 rounded-lg py-5 px-8">
          <div className="border-b border-orange-500  pb-5">
            <h2 className="text-lg text-center relative font-mono text-orange-600  tracking-wider drop-shadow">
              Portfolio
            </h2>
          </div>
          <div className="py-16 grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              return <ProjectsCard key={project.id} {...project} />;
            })}
          </div>
        </article>
      </section>
    </div>
  );
};
export default Projects;
