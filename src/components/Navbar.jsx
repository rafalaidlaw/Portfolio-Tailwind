import { links } from "../data";
import { FaGithubSquare, FaLinkedin, FaEtsy, FaReact } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { colors, toggleTheme, currentTheme } = useTheme();

  const getNextTheme = () => {
    const themes = ['orange', 'blue', 'purple'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  };

  const getThemeColor = (theme) => {
    switch (theme) {
      case 'blue':
        return 'bg-blue-400';
      case 'purple':
        return 'bg-purple-400';
      default:
        return 'bg-orange-400';
    }
  };

  return (
    <div className={`border-t-2 ${colors.border[500]}`}>
      <div className={`border-l-2 ${colors.border[600]}`}>
        <div className={`border-r-2 ${colors.border[600]}`}>
          <div className={`border-t-2 ${colors.border[500]}`}>
            <div className={`border-l-2 ${colors.border[600]}`}>
              <div className={`border-r-2 ${colors.border[600]}`}>
                <div className={`border-t-2 ${colors.border[500]}`}>
                  <div className={`border-l-2 ${colors.border[600]}`}>
                    <div className={`border-r-2 ${colors.border[600]}`}>
                      <div className={`border-t-2 ${colors.border[500]}`}>
                        <div className={`border-l-2 ${colors.border[600]}`}>
                          <div className={`border-r-2 ${colors.border[600]}`}>
                            <div className={`border-t-2 ${colors.border[500]}`}>
                              <div className={`border-l-2 ${colors.border[600]}`}>
                                <div className={`border-r-2 ${colors.border[600]}`}>
                                  <div className={`border-t-8 ${colors.border[700]}`}>
                                    <nav className={`${colors.bg[700]}`}>
                                      <div className=" align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center animate-fade1">
                                        <article className="grid grid-rows-flow">
                                          <h2 className={`text-3xl font-bold ${colors.text[500]}`}>
                                            Rafael
                                            <span className={colors.text[500]}>
                                              {" "}
                                              Laidlaw
                                            </span>
                                          </h2>

                                          <p className={`lg:text-center sm:text-left relative font-mono ${colors.text[300]}`}>
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
                                                  className={`capitalize ${colors.text[500]} text-lg tracking-wide ${colors.hover[300]} duration-300`}
                                                >
                                                  {text}
                                                </a>
                                              );
                                            })}
                                          </div>
                                        </article>
                                        <div className="lg:absolute lg:right-20 flex gap-x-4 m-2">
                                          <a href="https://github.com/rafalaidlaw">
                                            <FaGithubSquare className={`h-8 w-8 ${colors.text[500]} ${colors.hover[900]} duration-300`} />
                                          </a>
                                          <a href="https://www.linkedin.com/in/rafalaidlaw/">
                                            <FaLinkedin className={`h-8 w-8 ${colors.text[500]} ${colors.hover[900]} duration-300`} />
                                          </a>
                                          <button
                                            onClick={toggleTheme}
                                            className={`h-8 w-8 ${colors.text[500]} ${colors.hover[900]} duration-300 flex items-center justify-center rounded-full border-2 ${colors.border[500]} hover:${colors.bg[500]}`}
                                            title={`Switch to ${getNextTheme().charAt(0).toUpperCase() + getNextTheme().slice(1)} theme`}
                                          >
                                            <div className={`w-4 h-4 rounded-full ${getThemeColor(getNextTheme())}`}></div>
                                          </button>
                                        </div>
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
