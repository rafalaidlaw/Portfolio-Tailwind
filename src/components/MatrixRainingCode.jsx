import React from "react";
import { useTheme } from "../context/ThemeContext";
import MatrixRainingCodeOrange from "./MatrixRainingCodeOrange";
import MatrixRainingCodeBlue from "./MatrixRainingCodeBlue";
import MatrixRainingCodePurple from "./MatrixRainingCodePurple";

const MatrixRainingCode = () => {
  const { currentTheme } = useTheme();

  // Switch between orange, blue, and purple matrix components based on theme
  switch (currentTheme) {
    case 'blue':
      return <MatrixRainingCodeBlue />;
    case 'purple':
      return <MatrixRainingCodePurple />;
    default:
      return <MatrixRainingCodeOrange />;
  }
};

export default MatrixRainingCode;
