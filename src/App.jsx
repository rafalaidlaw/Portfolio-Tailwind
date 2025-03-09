import Hero from "./components/Hero";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Rectangle from "./components/Rectangle";
import TitleBottomCap from "./components/TitleBottomCap";
import NavBottomCap from "./components/NavBottomCap";
import MatrixRainingCode from "./components/MatrixRainingCode";
import InternetBanner from "./components/InternetBanner";
import ModGodSite from "./components/ModGodSite";

import Nubbin from "./components/Nubbin";

const App = () => {
  return (
    <>
      <div className="bg-orange-900 md:bg-transparent">
        <div className="hidden  md:block ">
          <Rectangle />
          <MatrixRainingCode />
        </div>

        <Top />
        <div className=" animate-fade5">
          <div className="md:sticky top-0 z-50 scale-100">
            <Navbar />
            <div className=" pb-5 md:hidden md:pb-0">
              <NavBottomCap />
            </div>
          </div>

          <div className="md:border-orange-600 md:border-r-8 md:border-l-8">
            <div className="md:border-orange-600 md:border-r-2 md:border-l-2">
              <div className="md:border-l-8 md:border-orange-700">
                <div className="md:border-l-8 md:border-orange-700">
                  <div className="md:border-r-8 md:border-orange-700">
                    <div className="md:border-r-8 md:border-orange-700">
                      <div className=" md:border-l-8 md:border-orange-800">
                        <div className=" md:border-r-8 md:border-orange-800">
                          <div className=" md:border-r-8 md:border-orange-800">
                            <div className=" md:border-l-8 md:border-orange-800">
                              <div className="md:border-t- md:border-orange-800 md:p-8 ">
                                <div className="animate-box1 scale-95">
                                  <Title />
                                  <TitleBottomCap />
                                </div>
                                <div className="  ">
                                  <div className="flex justify-center">
                                    <div className="scale-95  animate-box  ">
                                      <Hero className="bg-orange-400" />

                                      <Skills className="bg-orange-400 " />
                                    </div>
                                  </div>
                                  <Projects />

                                  <InternetBanner />

                                  <About />
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
        <Footer />
      </div>
    </>
  );
};
export default App;
