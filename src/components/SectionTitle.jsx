import { useTheme } from "../context/ThemeContext";

const SectionTitle = ({ text, className = "" }) => {
  const { colors } = useTheme();
  
  return (
    <div className={`border-b ${colors.border[200]} pb-5 flex items-center justify-center ${className}`}>
      <h2
        className={`text-lg text-center relative font-mono ${colors.text[200]} md:before:absolute before:inset-0 ${colors.bg[400]}
md:before:animate-typewriter animate-fade3 tracking-wider`}
      >
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
