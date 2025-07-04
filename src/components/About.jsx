import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { colors } = useTheme();
  
  return (
    <div className="">
      <div className="px-8">
        <section
          className={`border-4 ${colors.border[800]} ${colors.bg[300]} rounded-3xl py-8`}
          id="about"
        >
          <div className="align-element grid  md:grid-cols-2 items-center gap-16">
            <img
              src={aboutSvg}
              alt="Pixel Art"
              className=" h-64 hidden md:block "
            />
            <article className={`${colors.bg[200]} rounded-lg py-5 px-8 `}>
              <div className={`border-b ${colors.border[500]}  pb-5`}>
                <h2 className={`text-lg text-center relative font-mono ${colors.text[600]}  tracking-wider drop-shadow`}>
                  About Me
                </h2>
              </div>

              <p className={`${colors.text[600]} mt-8 leading-loose drop-shadow`}>
                Highly competent in building React.js apps and websites. I
                developed a strong knowledge of JavaScript during the three
                years I spent implementing banner ads for Publicis and Tribal
                DDB. Studio Plus K was a fast paced environment often having to
                tackle different looks and styles of interactivity. My
                background in animation and graphic design informs my code,
                allowing me to take direction and work well with designers. I
                have a Computer Programming diploma from Seneca College and I
                build games using C# in my freetime.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};
export default About;
