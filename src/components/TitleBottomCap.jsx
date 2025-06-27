import React from "react";
import { useTheme } from "../context/ThemeContext";

export const TitleBottomCap = () => {
  const { colors } = useTheme();
  
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-96 ">
          <div className={`${colors.bg[700]} border-b-2 ${colors.border[800]}`}>
            <div className={`border-r-2 ${colors.border[700]}`}>
              <div className={`border-l-2 ${colors.border[700]}`}>
                <div className={`border-b-2 ${colors.border[800]}`}>
                  <div className={`border-r-2 ${colors.border[700]}`}>
                    <div className={`border-l-2 ${colors.border[700]}`}>
                      <div className={`border-b-2 ${colors.border[800]}`}>
                        <div className={`border-r-2 ${colors.border[700]}`}>
                          <div className={`border-l-2 ${colors.border[700]}`}>
                            <div className={`border-b-2 ${colors.border[800]}`}>
                              <div className={`border-r-2 ${colors.border[700]}`}>
                                <div className={`border-l-2 ${colors.border[700]}`}>
                                  <div className={`border-b-2 ${colors.border[800]}`}>
                                    <div className={`border-r-2 ${colors.border[700]}`}>
                                      <div className={`border-l-2 ${colors.border[700]}`}>
                                        <div className={`border-b-2 ${colors.border[800]}`}>
                                          <div className={`border-r-2 ${colors.border[700]}`}>
                                            <div className={`border-l-2 ${colors.border[700]}`}>
                                              <div className={`border-b-2 ${colors.border[800]}`}>
                                                <div className={`border-r-2 ${colors.border[700]}`}>
                                                  <div className={`border-l-2 ${colors.border[700]}`}>
                                                    <div className={`border-b-2 ${colors.border[800]}`}>
                                                      <div className={`border-r-2 ${colors.border[700]}`}>
                                                        <div className={`border-l-2 ${colors.border[700]}`}>
                                                          <div className={`border-b-2 ${colors.border[800]}`}>
                                                            <div className={`border-r-2 ${colors.border[700]}`}>
                                                              <div className={`border-l-2 ${colors.border[700]}`}>
                                                                <div className={`border-b-2 ${colors.border[800]}`}>
                                                                  <div className={`border-r-2 ${colors.border[700]}`}>
                                                                    <div className={`border-l-2 ${colors.border[700]}`}>
                                                                      <div className={`border-b-2 ${colors.border[800]}`}></div>
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
export default TitleBottomCap;
