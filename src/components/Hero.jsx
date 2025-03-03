import heroImg from "../assets/hero-cube.gif";
import shadowImg from "../assets/shadowpng.png";
import { FaGithubSquare, FaLinkedin, FaEtsy, FaReact } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="border-t-2 border-orange-200">
      <div className="border-r-2  border-orange-300">
        <div className="border-l-2 border-orange-300">
          <div className="border-t-2 border-orange-200">
            <div className="border-r-2  border-orange-300">
              <div className="border-l-2 border-orange-300">
                <div className="border-t-2 border-orange-200">
                  <div className="border-r-2  border-orange-300">
                    <div className="border-l-2 border-orange-300">
                      <div className="border-t-2 border-orange-200">
                        <div className="border-r-2  border-orange-300">
                          <div className="border-l-2 border-orange-300">
                            <div className="border-t-2 border-orange-200">
                              <div className="border-r-2  border-orange-300">
                                <div className="border-l-2 border-orange-300">
                                  <div className="border-t-2 border-orange-200">
                                    <div className="border-r-2  border-orange-300">
                                      <div className="border-l-2 border-orange-300">
                                        <div className="border-t-2 border-orange-200">
                                          <div className="border-r-2  border-orange-300">
                                            <div className="border-l-2 border-orange-300">
                                              <div className="border-t-2 border-orange-200">
                                                <div className="border-r-2  border-orange-300">
                                                  <div className="border-l-2 border-orange-300">
                                                    <div className="border-t-2 border-orange-200">
                                                      <div className="border-r-2  border-orange-300">
                                                        <div className="border-l-2 border-orange-300">
                                                          <div className="border-t-2 border-orange-200">
                                                            <div className="border-r-2  border-orange-300">
                                                              <div className="border-l-2 border-orange-300">
                                                                <div
                                                                  className="bg-orange-100 py-16"
                                                                  id="home"
                                                                >
                                                                  <div className="align-element grid md:grid-cols-3 items-center gap-4">
                                                                    <article className="grow animate-fade1">
                                                                      <h1 className="text-7xl font-bold tracking-wider text-orange-400 drop-shadow">
                                                                        Rafael
                                                                      </h1>
                                                                      <p className="mt-4 text-3xl text-orange-500 capitalize tracking-wide">
                                                                        Front-End
                                                                        Developer
                                                                      </p>
                                                                      <p className="mt-2 text-lg text-orange-500 tracking-wide">
                                                                        Responsive
                                                                        websites,
                                                                        applications,
                                                                        and
                                                                        banner
                                                                        ads.
                                                                        Eye-catching
                                                                        design
                                                                        adhering
                                                                        to
                                                                        modern
                                                                        best
                                                                        practices,
                                                                        accessibility,
                                                                        and
                                                                        cross-device
                                                                        compatibility.
                                                                      </p>

                                                                      <div className="flex gap-x-4 mt-4">
                                                                        <a href="https://github.com/rafalaidlaw">
                                                                          <FaGithubSquare className="h-8 w-8 text-orange-500 hover:text-orange-900 duration-300" />
                                                                        </a>
                                                                        <a href="https://www.linkedin.com/in/rafalaidlaw/">
                                                                          <FaLinkedin className="h-8 w-8 text-orange-500 hover:text-orange-900 duration-300" />
                                                                        </a>
                                                                        <a href="https://cosmic-seahorse-cfa092.netlify.app/">
                                                                          <FaReact className="h-8 w-8 text-orange-500 hover:text-orange-900 duration-300" />
                                                                        </a>
                                                                        <a href="https://retromodgod.etsy.com">
                                                                          <FaEtsy className="h-8 w-8 text-orange-500 hover:text-orange-900 duration-300" />
                                                                        </a>
                                                                      </div>
                                                                    </article>
                                                                    <article className="mt-2 text-lg text-orange-300 tracking-wide sm:animate-fade2">
                                                                      <h1 className="hidden md:block text-7xl font-bold tracking-wider text-orange-100 opacity-0">
                                                                        Rafael
                                                                      </h1>
                                                                      {/* <h1 class="relative font-mono md:inset-x-10">
            React.js, Redux, Typescript, Node.js, Firebase, C#, SASS, Tailwind,
            Angular, JavaScript, ActionScript, Git, Markdown, Flexbox,
            BootStrap, CSS, HTML, GraphQL, JSON, XML, MUI
          </h1> */}
                                                                    </article>
                                                                    <article className="hidden md:block animate-fade">
                                                                      <div className="grid grid-cols-subgrid gap-4 md:grid-cols-2">
                                                                        {/* <article className="sm:block"></article> */}
                                                                        <article className="lg:block justify-end">
                                                                          <div className="animate-float">
                                                                            <img
                                                                              src={
                                                                                heroImg
                                                                              }
                                                                              alt="Rafael in Packaging"
                                                                              className="h-50 flex"
                                                                            />
                                                                          </div>
                                                                        </article>
                                                                        {/* <article className="sm:block"></article> */}
                                                                      </div>
                                                                    </article>
                                                                  </div>
                                                                  <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-3 items-end gap-4">
                                                                    <article></article>
                                                                    <article></article>
                                                                    <article className="hidden md:block">
                                                                      <div className="grid grid-cols-subgrid gap-4 md:grid-cols-2">
                                                                        {/* <article className="sm:block"></article> */}
                                                                        <article className="sm:block animate-fade">
                                                                          <div className="animate-pulse">
                                                                            <img
                                                                              src={
                                                                                shadowImg
                                                                              }
                                                                              alt="Packaging Shadow"
                                                                              className="h-50 flex"
                                                                            />
                                                                          </div>
                                                                        </article>
                                                                        <article className="sm:block"></article>
                                                                      </div>
                                                                    </article>
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
    </div>
  );
};
export default Hero;
