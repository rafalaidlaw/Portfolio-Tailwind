import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { colors } = useTheme();
  
  return (
    <div className={`${colors.bg[700]}`}>
      <div className={`border-b-2 ${colors.border[900]}`}>
        <div className={`border-l-2 ${colors.border[600]}`}>
          <div className={`border-r-2 ${colors.border[600]}`}>
            <div className={`border-b-2 ${colors.border[900]}`}>
              <div className={`border-l-2 ${colors.border[600]}`}>
                <div className={`border-r-2 ${colors.border[600]}`}>
                  <div className={`border-b-2 ${colors.border[900]}`}>
                    <div className={`border-l-2 ${colors.border[600]}`}>
                      <div className={`border-r-2 ${colors.border[600]}`}>
                        <div className={`border-b-2 ${colors.border[900]}`}>
                          <div className={`border-l-2 ${colors.border[600]}`}>
                            <div className={`border-r-2 ${colors.border[600]}`}>
                              <div className={`border-b-2 ${colors.border[900]}`}>
                                <div className={`border-l-2 ${colors.border[600]}`}>
                                  <div className={`border-r-2 ${colors.border[600]}`}>
                                    <div className={`border-b-8 ${colors.border[700]}`}></div>
                                    <div className={`border-b-8 ${colors.border[700]}`}></div>

                                    <nav className={`${colors.bg[700]}`}>
                                      <div className=" align-element flex justify-center items-center animate-fade1">
                                        <article className="grid grid-rows-2">
                                          <p className={`lg:text-center sm:text-left relative font-mono ${colors.text[500]}`}>
                                            You have reached the end of the
                                            page.
                                          </p>
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

export default Footer;
