import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div className="md:sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <Hero className="bg-orange-400 py-5 px-4" />
      </div>

      <Skills />
      <About />
      <Projects />
    </>
  );
};
export default App;
