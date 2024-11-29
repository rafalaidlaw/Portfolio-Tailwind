import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-orange-300 py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          alt="Pixel Art"
          className=" h-64 hidden md:block "
        />
        <article className="bg-orange-200 rounded-lg py-5 px-8">
          <div className="border-b border-orange-500  pb-5">
            <h2 className="text-lg text-center relative font-mono text-orange-600  tracking-wider drop-shadow">
              About Me
            </h2>
          </div>

          <p className="text-orange-600 mt-8 leading-loose drop-shadow">
            Highly competent in building React.js apps and websites. I developed
            a strong knowledge of JavaScript during the three years I spent
            implementing banner ads for Publicis and Tribal DDB. Studio Plus K
            was a fast paced environment often having to tackle different looks
            and styles of interactivity. My background in animation and graphic
            design informs my code, allowing me to take direction and work well
            with designers. I have a Computer Programming diploma from Seneca
            College and I build games using C# in my freetime.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
