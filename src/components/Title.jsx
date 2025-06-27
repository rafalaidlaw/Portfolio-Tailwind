import React from "react";
import { useTheme } from "../context/ThemeContext";

export const Title = () => {
  const { colors } = useTheme();
  
  return (
    <div className="flex justify-center">
      <div className="w-96 ">
        <div className={`${colors.bg[700]} border-t-2 ${colors.border[600]}`}>
          <div className={`border-r-2 ${colors.border[700]}`}>
            <div className={`border-l-2 ${colors.border[700]}`}>
              <div className={`border-t-2 ${colors.border[600]}`}>
                <div className={`border-r-2  ${colors.border[700]}`}>
                  <div className={`border-l-2 ${colors.border[700]}`}>
                    <div className={`border-t-2 ${colors.border[600]}`}>
                      <div className={`border-r-2 ${colors.border[700]}`}>
                        <div className={`border-l-2 ${colors.border[700]}`}>
                          <div className={`border-t-2 ${colors.border[600]}`}>
                            <div className={`border-r-2 ${colors.border[700]}`}>
                              <div className={`border-l-2 ${colors.border[700]}`}>
                                <div className={`border-t-2 ${colors.border[600]}`}>
                                  <div className={`border-r-2 ${colors.border[700]}`}>
                                    <div className={`border-l-2 ${colors.border[700]}`}>
                                      <div className={`border-t-2 ${colors.border[600]}`}>
                                        <div className={`border-r-2 ${colors.border[700]}`}>
                                          <div className={`border-l-2 ${colors.border[700]}`}>
                                            <div className={`border-t-2 ${colors.border[600]}`}>
                                              <div className={`border-r-2 ${colors.border[700]}`}>
                                                <div className={`border-l-2 ${colors.border[700]}`}>
                                                  <div className={`border-t-2 ${colors.border[600]}`}>
                                                    <div className={`border-r-2 ${colors.border[700]}`}>
                                                      <div className={`border-l-2 ${colors.border[700]}`}>
                                                        <div className={`border-t-2 ${colors.border[600]}`}>
                                                          <div className={`border-r-2 ${colors.border[700]}`}>
                                                            <div className={`border-l-2 ${colors.border[700]}`}>
                                                              <div className={`border-t-2 ${colors.border[600]}`}>
                                                                <div className={`border-r-2 ${colors.border[700]}`}>
                                                                  <div className={`border-l-2 ${colors.border[700]}`}>
                                                                    <div className={`${colors.bg[500]} py-6`}>
                                                                      <div className="flex justify-center font-Oswald">
                                                                        <h1 className={`text-3xl font-bold tracking-wider ${colors.text[200]} drop-shadow`}>
                                                                          Rafael
                                                                          Laidlaw
                                                                        </h1>
                                                                      </div>
                                                                      <div className="flex justify-center font-Oswald">
                                                                        <h1 className={`text-2xl font-bold tracking-wider ${colors.text[300]} drop-shadow`}>
                                                                          Web
                                                                          Developer
                                                                          Portfolio
                                                                        </h1>
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

export default Title;
