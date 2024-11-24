import heroImg from "../assets/hero.svg";
import {
  FaGithubSquare,
  FaLinkedin,
  FaEtsy,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-orange-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-orange-700 drop-shadow">
            Rafael
          </h1>
          <p className="mt-4 text-3xl text-orange-500 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-orange-500 capitalize tracking-wide">
            React.js, Animator, E-commerce
          </p>

          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/rafalaidlaw">
              <FaGithubSquare className="h-8 w-8 text-orange-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-orange-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaInstagram className="h-8 w-8 text-orange-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaEtsy className="h-8 w-8 text-orange-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="Rafa Package" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
