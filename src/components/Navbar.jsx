import { links } from "../data";

const Navbar = () => {
  return (
    <div className="border-t-2 border-orange-500 ">
      <div className="border-l-2 border-orange-600 ">
        <div className="border-r-2 border-orange-600">
          <div className="border-t-2 border-orange-500 ">
            <div className="border-l-2 border-orange-600 ">
              <div className="border-r-2 border-orange-600">
                <div className="border-t-2 border-orange-500 ">
                  <div className="border-l-2 border-orange-600 ">
                    <div className="border-r-2 border-orange-600">
                      <div className="border-t-2 border-orange-500 ">
                        <div className="border-l-2 border-orange-600 ">
                          <div className="border-r-2 border-orange-600">
                            <div className="border-t-2 border-orange-500 ">
                              <div className="border-l-2 border-orange-600 ">
                                <div className="border-r-2 border-orange-600">
                                  <div className="border-t-8 border-orange-700 ">
                                    <nav className="bg-orange-700  ">
                                      <div className=" align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center animate-fade1">
                                        <article className="grid grid-rows-2">
                                          <h2 className="text-3xl font-bold text-orange-500">
                                            Rafael
                                            <span className="text-amber-500">
                                              {" "}
                                              Laidlaw
                                            </span>
                                          </h2>

                                          <p className="lg:text-center sm:text-left relative font-mono text-orange-300">
                                            Web Dev Portfolio
                                          </p>
                                        </article>
                                        <article className="grid grid-rows-1">
                                          {/* <div className="xl:text-center capitalize text-orange-500">
                    Devlopment
                  </div> */}
                                          <div className="flex gap-x-3">
                                            {links.map((link) => {
                                              const { id, href, text } = link;
                                              return (
                                                <a
                                                  key={id}
                                                  href={href}
                                                  className="capitalize text-orange-500 text-lg tracking-wide hover:text-orange-300 duration-300"
                                                >
                                                  {text}
                                                </a>
                                              );
                                            })}
                                          </div>
                                        </article>
                                      </div>
                                    </nav>
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
export default Navbar;
