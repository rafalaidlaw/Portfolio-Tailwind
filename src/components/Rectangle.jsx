import React from "react";
import { useTheme } from "../context/ThemeContext";

export const Rectangle = () => {
  const { colors } = useTheme();
  return (
    <div className="opacity- sm:hidden md:block">
      <div className={`absolute top-1/2 transform left-56 -translate-y-1/2  w-96 h-full ${colors.bg[900]} mix-blend- filter blur-3xl`}></div>
      <div className={`absolute top-1/2 transform right-56  -translate-y-1/2  w-96 h-full ${colors.bg[900]} mix-blend- filter blur-3xl`}></div>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-full ${colors.bg[900]} mix-blend- filter blur-3xl`}></div>
      <div className={`absolute top-1/2 left-1/2 transform right-64  -translate-y-1/2  w-96 h-full ${colors.bg[900]} mix-blend- filter blur-3xl`}></div>
      <div className={`absolute top-1/2 transform left-64  -translate-y-1/2  w-auto h-full ${colors.bg[900]} mix-blend- filter blur-3xl`}></div>
      <div className={`opacity-50 absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full ${colors.bg[400]} mix-blend-overlay filter blur-3xl`}></div>

      {/* <div className="absolute top-1/2 transform -left-56  -translate-y-1/2  w-96 h-full bg-purple-300 mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute top-1/2 transform -right-56 -translate-y-1/2  w-96 h-full bg-purple-300 mix-blend-overlay filter blur-3xl"></div> */}
    </div>
  );
};

export default Rectangle;
