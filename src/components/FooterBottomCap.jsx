import React from "react";
import { useTheme } from "../context/ThemeContext";

export const FooterBottomCap = () => {
  const { colors } = useTheme();
  
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full">
          <div className={`${colors.bg[700]} border-t-2 ${colors.border[800]}`}>
            <div className={`border-r-2 ${colors.border[600]}`}>
              <div className={`border-l-2 ${colors.border[600]}`}>
                <div className={`border-t-2 ${colors.border[800]}`}>
                  <div className={`border-r-2 ${colors.border[600]}`}>
                    <div className={`border-l-2 ${colors.border[600]}`}>
                      <div className={`border-t-2 ${colors.border[800]}`}>
                        <div className={`border-r-2 ${colors.border[600]}`}>
                          <div className={`border-l-2 ${colors.border[600]}`}>
                            <div className={`border-t-2 ${colors.border[800]}`}>
                              <div className={`border-r-2 ${colors.border[600]}`}>
                                <div className={`border-l-2 ${colors.border[600]}`}>
                                  <div className={`border-t-2 ${colors.border[800]}`}>
                                    <div className={`border-r-2 ${colors.border[600]}`}>
                                      <div className={`border-l-2 ${colors.border[600]}`}>
                                        <div className={`border-t-2 ${colors.border[800]}`}></div>
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
export default FooterBottomCap;
