import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <a href={url}>
      <article className="bg-orange-300 hover:bg-orange-100 text-orange-700 rounded-lg shadow-md block hover:shadow-xl duration-300">
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-t-lg h-64 "
        />
        <div className="capitalize p-8">
          <h2 className="text-xl tracking-wide font-medium">{title}</h2>
          <p className="mt-4 text-orange-700 leading-loose">{text}</p>
          {/* <div className="mt-4 flex gap-x-4">
            <TbWorldWww className="h-8 w-8 text-orange-700 hover:text-orange-200 duration-300" />

            <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-orange-700 hover:text-orange-200 duration-300" />
          </a>
          </div> */}
        </div>
      </article>
    </a>
  );
};
export default ProjectsCard;
