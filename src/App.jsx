import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <article className="bg-orange-400 py-5 px-4">
        <Navbar />
        <Hero />
      </article>
      <Skills />
      <About />
      <Projects />
    </>
  );
};
export default App;
