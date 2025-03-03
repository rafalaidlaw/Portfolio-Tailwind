import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import nubbin from "./assets/nubbinsvg.svg";

const App = () => {
  return (
    <>
      <div className="bg-orange-900 ">
        <div className="md:sticky top-0 z-50  ">
          <Navbar />
          <article className=" grid grid-flow-col grid-rows-1">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="">
              <img
                src={nubbin}
                alt="Packaging Shadow"
                className="h-50 flex absolute"
              />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </article>
        </div>
        <div className="border-orange-600 border-r-8 border-l-8">
          <div className="border-l-8 border-orange-700">
            <div className="border-l-8 border-orange-700">
              <div className="border-r-8 border-orange-700">
                <div className="border-r-8 border-orange-700">
                  <div className=" border-l-8 border-orange-800">
                    <div className=" border-r-8 border-orange-800">
                      <div className=" border-r-8 border-orange-800">
                        <div className=" border-l-8 border-orange-800">
                          <div className=" border-t-8 border-orange-800">
                            <div className=" p-14">
                              <div>
                                <Hero className="bg-orange-400 py-5 px-4" />
                              </div>

                              <Skills />
                              <About />
                              <Projects />
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
      <Footer />
    </>
  );
};
export default App;
