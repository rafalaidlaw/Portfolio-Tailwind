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
import FooterBottomCap from "./components/FooterBottomCap";
import MatrixRainingCode from "./components/MatrixRainingCode";
import InternetBanner from "./components/InternetBanner";
import InternetBannerSMALL from "./components/InternetBannerSMALL";
import ModGodSite from "./components/ModGodSite";
import Animation from "./components/Animation";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import Nubbin from "./components/Nubbin";

const AppContent = () => {
  const { colors } = useTheme();
  
  return (
    <>
      <div className={`${colors.bg[900]} md:bg-transparent`}>
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

          <div className={`md:border-r-8 md:border-l-8 ${colors.border[600]}`}>
            <div className={`md:border-r-2 md:border-l-2 ${colors.border[600]}`}>
              <div className={`md:border-l-8 ${colors.border[700]}`}>
                <div className={`md:border-l-8 ${colors.border[700]}`}>
                  <div className={`md:border-r-8 ${colors.border[700]}`}>
                    <div className={` md:border-l-8 ${colors.border[800]}`}>
                      <div className={` md:border-r-8 ${colors.border[800]}`}>
                        <div className={` md:border-r-8 ${colors.border[800]}`}>
                          <div className={` md:border-l-8 ${colors.border[800]}`}>
                            <div className={`md:border-t- md:p-8 ${colors.border[800]}`}>
                              <div className="animate-box1 scale-95">
                                <Title />
                                <TitleBottomCap />
                              </div>
                              <div className="  ">
                                <div className="flex justify-center">
                                  <div className="scale-95  animate-box  ">
                                    <Hero className={`${colors.bg[400]}`} />

                                    <Skills className={`${colors.bg[400]} `} />
                                  </div>
                                </div>
                                <div className="flex justify-center">
                                  <div className="max-w-6xl">
                                    <Projects className="pb-4" />
                                  </div>
                                </div>
                                <div className="hidden md:block">
                                  <InternetBanner className="max-w-sm" />
                                </div>
                                <div className="md:hidden block">
                                  <InternetBannerSMALL />
                                </div>
                                <div className="flex justify-center">
                                  <div className="max-w-6xl">
                                    <Animation />
                                  </div>
                                </div>
                                <div className="flex justify-center">
                                  <div className="max-w-6xl">
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
        </div>
        <div className=" pb-5 md:hidden md:pb-0">
          <FooterBottomCap />
        </div>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
export default App;
