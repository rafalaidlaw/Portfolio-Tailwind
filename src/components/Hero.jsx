import heroImg from "../assets/hero-cube.gif";
import shadowImg from "../assets/shadowpng.png";
import { FaGithubSquare, FaLinkedin, FaEtsy, FaReact } from "react-icons/fa";

// borderGenerator = (n) => {
//   let nubbin = [];
//   for (let i = 0; i < n; i++) {
//     nubbin.push(`<div className="border-t-2 border-orange-200">`);
//     nubbin.push(`<div className="border-r-2  border-orange-300">`);
//     nubbin.push(`<div className="border-l-2 border-orange-300">`);
//   }
//   return nubbin;
// };
// divGenerator = (n) => {
//   let nubbin = [];
//   for (let i = 0; i < n; i++) {
//     nubbin.push(`</div>`);
//     nubbin.push(`</div>`);
//     nubbin.push(`</div>`);
//   }
//   return nubbin;
// };

const Hero = () => {
  return (
    <div
      className="bg-orange-300 Aborder-t-2 border-orange-200 max-w-7xl "
      id="skills"
    >
      <div className="border-r-2 border-orange-300">
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
                                                                <div className="bg-orange-100 py-6">
                                                                  <div className="align-element grid lg:grid-cols-3 items-center gap-2">
                                                                    <article className=" animate-fade1 flex justify-center">
                                                                      <h1 className="text-7xl font-bold tracking-wider  text-orange-400 drop-shadow"></h1>
                                                                      <div className="grid grid-cols-2 gap-x-6">
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:text-orange-300 animate-dance1 hover:animate-none">
                                                                            JavaScript
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance12">
                                                                            React.js
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance4">
                                                                            Redux
                                                                          </p>
                                                                        </div>
                                                                        <div className="">
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance10">
                                                                            Typescript
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance2">
                                                                            Node.js
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance5">
                                                                            Firebase
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance11">
                                                                            MUI
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance3">
                                                                            AS3
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance8">
                                                                            SASS
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance4">
                                                                            Tailwind
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance6">
                                                                            ThreeJS
                                                                          </p>
                                                                        </div>
                                                                        <div>
                                                                          <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance9">
                                                                            Phaser
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                    </article>
                                                                    <div>
                                                                      <div className="flex justify-center animate-fade  ">
                                                                        <div className="animate-float ">
                                                                          <img
                                                                            src={
                                                                              heroImg
                                                                            }
                                                                            alt="Rafael in Packaging"
                                                                            className=""
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                      <article className="hidden md:flex justify-center">
                                                                        <div className="">
                                                                          <article className="sm:block animate-fade">
                                                                            <div className="animate-pulse ">
                                                                              <img
                                                                                src={
                                                                                  shadowImg
                                                                                }
                                                                                alt="Packaging Shadow"
                                                                                className="h-6"
                                                                              />
                                                                            </div>
                                                                          </article>
                                                                          <article className="sm:block"></article>
                                                                        </div>
                                                                      </article>
                                                                    </div>
                                                                    <article>
                                                                      <div className="animate-fade2 flex justify-center">
                                                                        <div className="grid grid-cols-2 gap-x-6">
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance11">
                                                                              Angular
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance6">
                                                                              Vite
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance12">
                                                                              JQuery
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance1">
                                                                              C#
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance4">
                                                                              Git
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance7">
                                                                              Markdown
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance5">
                                                                              BootStrap
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance8">
                                                                              CSS
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance2">
                                                                              HTML
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance10">
                                                                              GraphQL
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance3">
                                                                              JSON
                                                                            </p>
                                                                          </div>
                                                                          <div>
                                                                            <p className="hidden md:block mt-2 text-2xl text-orange-300 tracking-wide hover:animate-none hover:text-orange-300 animate-dance9">
                                                                              XML
                                                                            </p>
                                                                          </div>
                                                                        </div>
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
