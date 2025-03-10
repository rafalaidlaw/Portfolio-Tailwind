import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import RetroFont from "./RetroFont";

const Projects = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <div className="scale-75 pb-2 w-10/12">
          <div className="grid grid-flow-col-dense pb-4 ">
            <RetroFont txt={"E"} />
            <RetroFont txt={"-"} />
            <RetroFont txt={"C"} />
            <RetroFont txt={"O"} />
            <RetroFont txt={"M"} />
            <RetroFont txt={"M"} />
            <RetroFont txt={"E"} />
            <RetroFont txt={"R"} />
            <RetroFont txt={"C"} />
            <RetroFont txt={"E"} />
          </div>
          <div className="grid grid-flow-col-dense">
            <RetroFont txt={"W"} />
            <RetroFont txt={"E"} />
            <RetroFont txt={"B"} />
            <RetroFont txt={"S"} />
            <RetroFont txt={"I"} />
            <RetroFont txt={"T"} />
            <RetroFont txt={"E"} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 ">
        <section className="col-span-2 align-element" id="projects">
          <div className="bg-orange-600 rounded-lg py-1 px-1 grid grid-flow-row">
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
                      <div className="pt-5 grid md:grid-cols-1 w-11/12">
                        {projects.map((project) => {
                          return <ProjectsCard key={project.id} {...project} />;
                        })}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg text-center  font- text-orange-400  tracking-wider py-1">
                        Hover to Play || Click to Visit.
                      </h2>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1" id="projects">
          <div className="flex justify-center pb-4">
            <h1 className="text-4xl font-Caprasimo tracking-wider text-orange-300 drop-shadow ">
              MADE WITH
            </h1>
          </div>
          <article className="grid grid-cols-3 gap-2 ">
            <div className="bg-orange-600 rounded-lg py-1 px-1">
              <div className="bg-orange-500 rounded-lg py-1 px-1">
                <article className="bg-orange-400 rounded-lg px-2">
                  <div className="flex justify-center">
                    <div className="">
                      <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                        REACT
                      </h1>
                      <div></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-orange-600 rounded-lg py-1 px-1">
                <div className="bg-orange-500 rounded-lg py-1 px-1">
                  <article className="bg-orange-400 rounded-lg px-2">
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                          TYPESCRIPT
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-orange-600 rounded-lg py-1 px-1">
                <div className="bg-orange-500 rounded-lg py-1 px-1">
                  <article className="bg-orange-400 rounded-lg px-2">
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                          GRAPHQL
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="bg-orange-600 rounded-lg py-1 px-1">
              <div className="bg-orange-500 rounded-lg py-1 px-1">
                <article className="bg-orange-400 rounded-lg px-2">
                  <div className="flex justify-center">
                    <div className="">
                      <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                        HOOKS
                      </h1>
                      <div></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="bg-orange-600 rounded-lg py-1 px-1">
              <div className="bg-orange-500 rounded-lg py-1 px-1">
                <article className="bg-orange-400 rounded-lg px-2">
                  <div className="flex justify-center">
                    <div className="">
                      <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                        STRIPE
                      </h1>
                      <div></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-orange-600 rounded-lg py-1 px-1">
                <div className="bg-orange-500 rounded-lg py-1 px-1">
                  <article className="bg-orange-400 rounded-lg px-2">
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                          FIREBASE
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="bg-orange-600 rounded-lg py-1 px-1">
              <div className="bg-orange-500 rounded-lg py-1 px-1">
                <article className="bg-orange-400 rounded-lg px-2">
                  <div className="flex justify-center">
                    <div className="">
                      <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                        REDUX
                      </h1>
                      <div></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="bg-orange-600 rounded-lg py-1 px-1">
              <div className="bg-orange-500 rounded-lg py-1 px-1">
                <article className="bg-orange-400 rounded-lg px-2">
                  <div className="flex justify-center">
                    <div className="">
                      <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                        THUNK
                      </h1>
                      <div></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="bg-orange-600 rounded-lg py-1 px-1">
              <div className="bg-orange-500 rounded-lg py-1 px-1">
                <article className="bg-orange-400 rounded-lg px-2">
                  <div className="flex justify-center">
                    <div className="">
                      <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                        SAGA
                      </h1>
                      <div></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-orange-600 rounded-lg py-1 px-1">
                <div className="bg-orange-500 rounded-lg py-1 px-1">
                  <article className="bg-orange-400 rounded-lg px-2">
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className="text-lg font-Monoton tracking-wider text-amber-200 drop-shadow">
                          REACT-HOOK-FORM
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
      <section className="p-5 flex justify-center" id="projects">
        <div className="bg-orange-600 rounded-lg py-1 px-1 ">
          <div className="bg-orange-400 rounded-lg py-1 px-1">
            <article className="bg-orange-200 rounded-lg ">
              <div className="  py-5 px-7 ">
                <h2 className="text-lg text-center relative font-mono text-orange-600  tracking-wider drop-shadow">
                  React storefront for a Toronto vendor. Google Firebasebase to
                  create the distribution API. React-Hook-Form for building out
                  the customer check out form, and integrates with Stripe for
                  payment. Modern web practices to ensure a seamless user
                  experience across all devices. Additionally, it demonstrates a
                  solid understanding of version control systems, the ability to
                  scaffold out and bring to completion a fully realized product.
                </h2>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
