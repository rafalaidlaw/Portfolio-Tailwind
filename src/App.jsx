import Hero from "./components/Hero";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Title from "./components/Title";
import TitleBottomCap from "./components/TitleBottomCap";

import Nubbin from "./components/Nubbin";

const App = () => {
  return (
    <>
      <div className="bg-orange-950">
        <Top />
        <div className="bg-orange-900 animate-fade5">
          <div className="md:sticky top-0 z-50 ">
            <Navbar />
          </div>

          <div className="border-orange-600 border-r-8 border-l-8">
            <div className="border-orange-600 border-r-2 border-l-2">
              <div className="border-l-8 border-orange-700">
                <div className="border-l-8 border-orange-700">
                  <div className="border-r-8 border-orange-700">
                    <div className="border-r-8 border-orange-700">
                      <div className=" border-l-8 border-orange-800">
                        <div className=" border-r-8 border-orange-800">
                          <div className=" border-r-8 border-orange-800">
                            <div className=" border-l-8 border-orange-800">
                              <div className=" border-t-8 border-orange-800 p-8">
                                <div className="animate-box1">
                                  <Title />
                                  <TitleBottomCap />
                                </div>
                                <div className=" md:p-6">
                                  <div className="flex justify-center">
                                    <div className="scale-95  animate-box  ">
                                      <Hero className="bg-orange-400 py-5 px-4" />

                                      <Skills />
                                    </div>
                                  </div>

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
        </div>
        <Footer />
      </div>
    </>
  );
};
export default App;
