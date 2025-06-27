import React from "react";
import { useTheme } from "../context/ThemeContext";

export const GridCopy = ({ img }) => {
  const { colors } = useTheme();
  
  return (
    <div>
      <article className="">
        <div className={`border-b-2 ${colors.border[200]}`}>
          <div className={`border-l-2 ${colors.border[300]}`}>
            <div className={`border-r-2 ${colors.border[300]}`}>
              <div className={`border-b-2 ${colors.border[200]}`}>
                <div className={`border-l-2 ${colors.border[300]}`}>
                  <div className={`border-r-2 ${colors.border[300]}`}>
                    <div className={`border-b-2 ${colors.border[200]}`}>
                      <div className={`border-l-2 ${colors.border[300]}`}>
                        <div className={`border-r-2 ${colors.border[300]}`}>
                          <div className={`border-b-2 ${colors.border[200]}`}>
                            <div className={`border-t-2 ${colors.border[200]}`}>
                              <div className={`border-l-2 ${colors.border[300]}`}>
                                <div className={`border-r-2 ${colors.border[300]}`}>
                                  <div className={`border-b-2 ${colors.border[200]}`}>
                                    <div className="flex justify-center ">
                                      <div className={`${colors.bg[400]} p-2 grid grid-flow-row`}>
                                        <h1 className={`text-lg text-center relative font-mono ${colors.text[200]}  tracking-wider drop-shadow`}>
                                          Service work for Publicis and Tribal
                                          DDB implementing functional banner
                                          ads. Initially built with ActionScript
                                          we moved to Javascript to meet
                                          industry requirements. Building ads
                                          with reusable code saved on memory and
                                          allowed for quick production and
                                          updating of multiple iterations for
                                          evolving ad campaigns.
                                        </h1>

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
      </article>
    </div>
  );
};
export default GridCopy;
