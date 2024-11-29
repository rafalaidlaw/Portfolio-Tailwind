import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
};
export default App;
