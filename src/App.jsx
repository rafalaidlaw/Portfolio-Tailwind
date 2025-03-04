import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Nubbin from "./components/Nubbin";

const App = () => {
  return (
    <>
      <div className="bg-orange-950">
        <div className="bg-orange-900">
          <div className="md:sticky top-0 z-50  ">
            <Navbar />
            <Nubbin />
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
        </div>
        <Footer />
      </div>
    </>
  );
};
export default App;
