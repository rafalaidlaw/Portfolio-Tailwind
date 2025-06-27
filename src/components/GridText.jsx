import React from "react";
import { useTheme } from "../context/ThemeContext";

export const GridText = ({ img }) => {
  const { colors } = useTheme();
  
  return (
    <div>
      <article className="">
        <div className={`border-t-2 ${colors.border[200]} ${colors.bg[300]}`}>
          <div className={`border-l-2 ${colors.border[300]}`}>
            <div className={`border-t-2 ${colors.border[200]}`}>
              <div className={`border-l-2 ${colors.border[300]}`}>
                <div className={`border-t-2 ${colors.border[200]}`}>
                  <div className={`border-l-2 ${colors.border[300]}`}>
                    <div className={`border-t-2 ${colors.border[200]}`}>
                      <div className={`border-l-2 ${colors.border[300]}`}>
                        <div className={`border-t-2 ${colors.border[200]}`}>
                          <div className={`border-l-2 ${colors.border[300]}`}>
                            <div className={`border-t-2 ${colors.border[200]}`}>
                              <div className={`border-l-2 ${colors.border[300]}`}>
                                <div className={`border-t-2 ${colors.border[200]}`}>
                                  <div className={`border-l-2 ${colors.border[300]}`}>
                                    <div className={`border-t-2 ${colors.border[200]}`}>
                                      <div className={`border-l-2 ${colors.border[300]}`}>
                                        <div className={`border-t-2 ${colors.border[200]}`}>
                                          <div className={`border-l-2 ${colors.border[300]}`}>
                                            <div className={`border-r-2 ${colors.border[300]}`}>
                                              <div className={`border-b-2 ${colors.border[300]}`}>
                                                <div className="flex justify-center ">
                                                  <div className={`${colors.bg[400]} grid grid-flow-row `}>
                                                    <h1 className={`text-6xl text-center font-Caprasimo tracking-wider ${colors.text[500]} drop-shadow-glow scale-y-90`}>
                                                      Internet Banner Ads
                                                    </h1>
                                                    <p className={`text-lg text-center  font- ${colors.text[200]}  tracking-wider py-1 scale-y-90`}>
                                                      Hover Over Ads To Play
                                                    </p>
                                                    <div>
                                                      {/* <p className={`${colors.text[900]} text-3xl`}>
                                                                                          The
                                                                                          fast
                                                                                          paced
                                                                                          world
                                                                                          of
                                                                                          internet
                                                                                          advertising!
                                                                                        </p> */}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default GridText;
