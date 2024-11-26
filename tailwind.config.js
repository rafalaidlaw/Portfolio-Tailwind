/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": {
            scale: "1",
            opacity: "1",
          },
          "50%": {
            scale: ".9",
            opacity: "1",
          },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        typewriter: "typewriter 1.2s steps(163) forwards",
        fade1: "fadeIn .7s ease-in-out",
        fade2: "fadeIn 1s ease-in-out",
        fade3: "fadeIn 1.2s ease-in-out",
        fade: "fadeIn 1.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
