import React from "react";
import { useTheme } from "../context/ThemeContext";
import MatrixRainingCodeOrange from "./MatrixRainingCodeOrange";
import MatrixRainingCodeBlue from "./MatrixRainingCodeBlue";

const MatrixRainingCode = () => {
  const { isBlueTheme } = useTheme();

  // Switch between orange and blue matrix components based on theme
  return isBlueTheme ? <MatrixRainingCodeBlue /> : <MatrixRainingCodeOrange />;
};

export default MatrixRainingCode;
