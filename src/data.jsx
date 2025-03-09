import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaAngular,
  FaGit,
  FaMarkdown,
  FaBootstrap,
  FaCss3,
} from "react-icons/fa";
import heroImg from "./assets/Rafa_Bale_Developer_Reel.gif";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "portfolio" },
];

export const skills = [
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="hover-icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: (
      <svg viewBox="0 0 280 280" className="hover-icon">
        <path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" />
      </svg>
    ),
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: (
      <svg className="hover-icon" viewBox="0 0 50 50">
        <path d="M5 4a1 1 0 0 0-1 1v40a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5zm1 2h38v38H6V6zm9 17v3.445h5V42h4V26.445h5V23H15zm21.691.01c-3.114-.013-6.673.931-6.673 5.314 0 5.73 7.72 5.732 7.72 8.317 0 .245.104 2.025-2.62 2.025-2.726 0-4.997-1.713-4.997-1.713v4.158s11.881 3.843 11.881-4.822c-.001-5.625-7.793-5.344-7.793-8.139 0-1.083.77-2.095 2.9-2.095 2.131 0 4.018 1.258 4.018 1.258l.14-3.706s-2.153-.588-4.576-.597z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "NodeJs",
    icon: <FaNodeJs className="hover-icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "FireBase",
    icon: (
      <svg className="hover-icon" viewBox="0 0 24 24">
        <path d="M3.89 15.673 6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "C#",
    icon: (
      <svg className="hover-icon" viewBox="0 0 50 50">
        <path d="M25 2c-.715 0-1.43.18-2.066.54L6.09 12.003A4.066 4.066 0 0 0 4 15.535v18.93c0 1.453.8 2.808 2.09 3.531l16.844 9.465c.636.36 1.351.539 2.066.539.715 0 1.43-.18 2.066-.54L43.91 38A4.077 4.077 0 0 0 46 34.465v-18.93c0-1.453-.8-2.808-2.09-3.531L27.066 2.539A4.206 4.206 0 0 0 25 2Zm0 11c3.781 0 7.277 1.754 9.543 4.738l-4.383 2.54A6.993 6.993 0 0 0 25 18c-3.86 0-7 3.14-7 7s3.14 7 7 7a6.993 6.993 0 0 0 5.16-2.277l4.383 2.539A11.933 11.933 0 0 1 25 37c-6.617 0-12-5.383-12-12s5.383-12 12-12Zm10 7h2v2h2v-2h2v2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2h-2v-2h-2v-2h2v-2h-2v-2h2Zm2 4v2h2v-2Z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "MUI",
    icon: (
      <svg className="hover-icon" viewBox="0 -26 256 256">
        <path d="M0 110.848V0l96 55.424v36.949L32 55.424v73.899z" />
        <path d="M96 55.424 192 0v110.848l-64 36.949-32-18.474 64-36.95V55.424L96 92.373z" />
        <path d="M96 129.323v36.949l64 36.949v-36.949z" />
        <path d="m160 203.221 96-55.424V73.9l-32 18.474v36.95l-64 36.949v36.95Zm64-147.797v-36.95L256 0v36.95l-32 18.474Z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Sass",
    icon: <FaSass className="hover-icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "Tailwind",
    icon: (
      <svg className="hover-icon" viewBox="0 0 54 33">
        <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "Angular",
    icon: <FaAngular className="hover-icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="hover-icon" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Jquery",
    icon: (
      <svg className="hover-icon" viewBox="0 0 512 512">
        <path d="M499.161 364.63s-63.554 171.386-282.354 131.488c-3.443-.641-6.745-1.838-10.089-2.849-.782-.229-1.572-.479-2.354-.703a302.903 302.903 0 0 1-9.769-3.197c-.37-.129-.723-.25-1.098-.383a326.662 326.662 0 0 1-8.762-3.244c-.757-.295-1.51-.582-2.263-.89a273.273 273.273 0 0 1-9.277-3.859c-.565-.249-1.11-.499-1.684-.752a317.762 317.762 0 0 1-7.959-3.685c-.682-.346-1.368-.666-2.055-.99-.374-.187-.777-.374-1.16-.565-1.696-.848-3.352-1.729-5.023-2.604-1.289-.665-2.599-1.313-3.88-2a329.103 329.103 0 0 1-7.02-3.938c-.861-.491-1.73-.965-2.583-1.46a332.068 332.068 0 0 1-9.344-5.727c-.869-.557-1.729-1.147-2.586-1.722-2.004-1.297-4.009-2.595-5.972-3.95-.208-.142-.407-.291-.611-.437-.761-.516-1.484-1.044-2.241-1.593a266.52 266.52 0 0 1-6.15-4.408 512.55 512.55 0 0 1-2.932-2.229 321.13 321.13 0 0 1-5.481-4.284c-.902-.723-1.817-1.438-2.719-2.17a341.36 341.36 0 0 1-6.575-5.548c-.408-.357-.84-.707-1.256-1.081-.042-.017-.071-.05-.117-.088a271.49 271.49 0 0 1-7.236-6.591c-.719-.657-1.435-1.36-2.158-2.05a314.61 314.61 0 0 1-5.277-5.178c-.72-.707-1.431-1.422-2.121-2.138a323.508 323.508 0 0 1-6.616-6.97c-.079-.107-.158-.17-.253-.274-.038-.041-.092-.096-.129-.142a305.821 305.821 0 0 1-6.508-7.427 228.322 228.322 0 0 1-1.78-2.133 331.47 331.47 0 0 1-4.674-5.743 360.112 360.112 0 0 1-1.9-2.42 257.465 257.465 0 0 1-5.057-6.721c-.308-.424-.636-.84-.932-1.256a1.41 1.41 0 0 1-.158-.216 283.24 283.24 0 0 1-5.547-8.001c-.561-.824-1.089-1.672-1.63-2.521a240.738 240.738 0 0 1-3.826-5.988c-.648-1.031-1.264-2.066-1.888-3.103a243.51 243.51 0 0 1-3.298-5.655c-.611-1.073-1.214-2.121-1.805-3.223-.329-.582-.686-1.182-1.006-1.792-.562-1.016-1.069-2.075-1.618-3.111-.848-1.626-1.709-3.26-2.528-4.915C-6.655 275.1-12.294 190.5 32.95 125.471l35.314-44.789c-39.843 77.007-21.936 170.778 27.908 238.76 1.8 2.475 3.643 4.916 5.526 7.356.583.736 1.168 1.477 1.751 2.184a284.177 284.177 0 0 0 4.786 5.918c.583.686 1.152 1.359 1.747 2.066a252.343 252.343 0 0 0 6.646 7.564c.108.12.212.229.316.345a303.605 303.605 0 0 0 6.558 6.933c.69.698 1.393 1.389 2.096 2.088a206.2 206.2 0 0 0 5.344 5.235c.686.682 1.376 1.339 2.088 2.017a358.359 358.359 0 0 0 7.435 6.758c.262.229.532.44.773.652a336.406 336.406 0 0 0 7.074 5.96c.832.678 1.68 1.355 2.528 2.029a287.085 287.085 0 0 0 5.681 4.437c.911.699 1.846 1.41 2.791 2.108a342.403 342.403 0 0 0 6.288 4.55c.719.486 1.418 1.015 2.146 1.505a237.617 237.617 0 0 0 6.654 4.425c.84.558 1.672 1.14 2.52 1.681a337.537 337.537 0 0 0 9.357 5.73c.811.466 1.622.902 2.42 1.352a246.141 246.141 0 0 0 7.19 4.029c1.314.731 2.666 1.393 3.996 2.096 1.988 1.023 3.976 2.063 5.988 3.044.761.374 1.501.724 2.246 1.077a371.386 371.386 0 0 0 7.743 3.605c.616.267 1.214.545 1.834.811 3.032 1.327 6.096 2.6 9.186 3.817.794.316 1.589.62 2.387.937a295.645 295.645 0 0 0 8.508 3.156c.445.158.89.32 1.322.478a291.045 291.045 0 0 0 9.648 3.136c.827.258 1.655.508 2.503.757 3.318.981 6.616 2.042 10.018 2.812 89.773 20.431 184.517 2.083 237.895-67.46zM182.44 254.758c4.907 7.024 10.338 15.386 16.846 21.031 2.354 2.598 4.824 5.13 7.34 7.621.632.648 1.285 1.272 1.938 1.908a215.525 215.525 0 0 0 7.494 6.97c.108.079.204.188.308.263.029.033.054.041.075.074 2.845 2.487 5.781 4.887 8.758 7.244.662.508 1.318 1.036 1.988 1.552 2.99 2.291 6.039 4.545 9.166 6.69.096.066.17.134.266.2 1.376.956 2.782 1.846 4.175 2.761.674.433 1.31.898 1.983 1.306a185.394 185.394 0 0 0 6.795 4.167c.325.2.641.366.961.553a250.168 250.168 0 0 0 6.005 3.356c.698.391 1.414.74 2.129 1.114 1.389.724 2.786 1.468 4.2 2.171.212.1.433.199.637.287a199.91 199.91 0 0 0 8.762 4.079c.632.283 1.289.532 1.934.799a224.016 224.016 0 0 0 7.178 2.915c1.022.387 2.059.757 3.073 1.127 2.191.815 4.383 1.556 6.595 2.296 1.003.319 1.984.648 2.986.956 3.144.973 6.254 2.212 9.535 2.753C472.501 366.942 511.5 236.873 511.5 236.873c-35.16 50.633-103.243 74.791-175.897 55.936a209.508 209.508 0 0 1-9.56-2.77 96.802 96.802 0 0 1-2.883-.928 197.877 197.877 0 0 1-6.694-2.308c-1.011-.37-2.025-.74-3.02-1.123a228.945 228.945 0 0 1-7.198-2.902c-.653-.283-1.306-.533-1.942-.824a201.833 201.833 0 0 1-8.812-4.094c-1.493-.729-2.953-1.499-4.425-2.254l-2.549-1.312a213.673 213.673 0 0 1-5.594-3.154c-.437-.252-.894-.491-1.339-.755a228.56 228.56 0 0 1-6.77-4.134c-.687-.438-1.352-.915-2.038-1.366a239.846 239.846 0 0 1-4.392-2.902c-3.11-2.146-6.138-4.399-9.128-6.678-.69-.543-1.376-1.073-2.059-1.616-31.796-25.111-57-59.423-68.994-98.33-12.555-40.352-9.847-85.647 11.914-122.406l-26.735 37.738c-32.715 47.085-30.939 110.113-5.419 159.91 4.286 8.349 9.097 16.445 14.474 24.157zm178.06-58.252c1.393.52 2.782.981 4.191 1.458.616.189 1.231.401 1.851.584 1.988.626 3.963 1.352 6.018 1.738 93.284 18.023 118.58-47.869 125.317-57.566-22.165 31.91-59.405 39.57-105.111 28.481-3.605-.881-7.572-2.185-11.058-3.416a135.451 135.451 0 0 1-13.124-5.456 136.046 136.046 0 0 1-23.025-14.045c-40.891-31.029-66.291-90.221-39.61-138.425L291.51 29.76c-19.287 28.386-21.179 63.638-7.801 94.991 14.114 33.274 43.036 59.381 76.791 71.755z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "ActionScript",
    icon: (
      <svg viewBox="0 0 31 31" className="hover-icon">
        <path d="M2 15.281c1.918 0 2.11-1.055 2.11-1.918a17.119 17.119 0 0 0-.192-2.205 18.723 18.723 0 0 1-.192-2.205c0-2.4 1.63-3.452 3.836-3.452h.575v1.437h-.479c-1.534 0-2.11.767-2.11 2.205a14.412 14.412 0 0 0 .192 1.918 14.306 14.306 0 0 1 .192 2.014c0 1.726-.671 2.493-1.918 2.877v.1c1.151.288 1.918 1.151 1.918 2.877a14.306 14.306 0 0 1-.192 2.014 13 13 0 0 0-.192 1.918c0 1.438.575 2.3 2.11 2.3h.479V26.6h-.575c-2.205 0-3.836-.959-3.836-3.644a18.723 18.723 0 0 1 .192-2.205 15.68 15.68 0 0 0 .192-2.11c0-.863-.288-1.918-2.11-1.918Z" />
        <path d="M9.479 18.062 8.233 21.8H6.6l4.03-11.889h1.822L16.479 21.8h-1.534L13.7 18.062Zm3.932-1.151-1.151-3.452a9.364 9.364 0 0 1-.575-2.205c-.192.671-.384 1.438-.575 2.11l-1.151 3.451h3.452ZM17.918 19.979a5.941 5.941 0 0 0 2.781.767c1.534 0 2.493-.863 2.493-2.014s-.671-1.726-2.205-2.4c-1.918-.671-3.164-1.726-3.164-3.356 0-1.822 1.534-3.26 3.836-3.26a5.135 5.135 0 0 1 2.589.575l-.384 1.247a5.519 5.519 0 0 0-2.3-.479c-1.63 0-2.205.959-2.205 1.822 0 1.151.767 1.63 2.4 2.3 2.014.767 3.068 1.726 3.068 3.452 0 1.822-1.342 3.452-4.123 3.452a5.807 5.807 0 0 1-3.068-.767Z" />
        <path d="M30 16.623c-1.918 0-2.11 1.151-2.11 1.918a15.68 15.68 0 0 0 .192 2.11 15.738 15.738 0 0 1 .192 2.205c0 2.685-1.63 3.644-3.836 3.644h-.575v-1.438h.479c1.438 0 2.11-.863 2.11-2.3a13 13 0 0 0-.192-1.918 14.306 14.306 0 0 1-.192-2.014c0-1.726.767-2.589 1.918-2.877v-.1c-1.151-.288-1.918-1.151-1.918-2.877a14.306 14.306 0 0 1 .192-2.014 13 13 0 0 0 .192-1.918c0-1.438-.575-2.205-2.11-2.3h-.479V5.4h.575c2.205 0 3.836 1.055 3.836 3.452a17.119 17.119 0 0 1-.192 2.205 17.119 17.119 0 0 0-.192 2.205c0 .959.288 1.918 2.11 1.918Z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "Git",
    icon: <FaGit className="hover-icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Markdown",
    icon: <FaMarkdown className="hover-icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <FaBootstrap className="hover-icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "CSS/Flexbox",
    icon: (
      <svg className="hover-icon" viewBox="0 0 512 512">
        <path d="M204.064 46.682V68.7h-56.302V.501h56.302v24.13h-32.172v22.051h32.172zm57.877-22.051h22.492V.501h-56.308v24.13c7.533 7.533 11.461 11.139 22.356 22.034-6.369 0-22.356.022-22.356.021V68.7h56.308V46.682l-22.492-22.051zm79.805 0h22.49V.501H307.93v24.13c7.531 7.533 11.461 11.139 22.355 22.034-6.365 0-22.355.022-22.355.021V68.7h56.307V46.682l-22.491-22.051zm96.649 76.481-34.203 370.486-148.193 39.9-148.196-39.9-34.198-370.486h364.79zm-68.918 75.332H140.245l5.529 44.739H262.049l-6.184 2.574-106.067 44.177 3.518 43.73 102.549.333 54.963.175-3.521 58.311-51.442 14.484v-.046l-.422.116-49.684-12.542-3.015-36.195h-46.411l6.032 69.876 93.5 27.649v-.05l.168.05 93-27.146L361.1 267.935H255.605l.26-.112 109.086-46.639 4.526-44.74z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "HTML5",
    icon: <FaHtml5 className="hover-icon" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "GraphQl",
    icon: (
      <svg className="hover-icon" viewBox="0 0 24 24">
        <svg viewBox="0 0 400 400">
          <path d="m57.468 302.66-14.376-8.3 160.15-277.38 14.376 8.3z" />
          <path d="M39.8 272.2h320.3v16.6H39.8z" />
          <path d="m206.348 374.026-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z" />
          <path d="m54.482 132.883-8.3-14.375 160.21-92.5 8.3 14.375z" />
          <path d="m342.568 302.663-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5z" />
          <path d="M330.9 107.5h16.6v185h-16.6z" />
          <path d="m203.522 367-7.25-12.558 139.34-80.45 7.25 12.557z" />
          <path d="M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9" />
        </svg>
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "JSON",
    icon: (
      <svg className="hover-icon" viewBox="150 -30 300 300">
        <path d="M218.178 0C208.299 0 200 7.762 200 17.564v227.052c0 9.767 8.284 17.564 18.178 17.564h164.609c9.879 0 18.177-7.762 18.177-17.564v-6.555c0-.127.036-.247.036-.374V188.15a4.188 4.188 0 0 0-.036-.593V56.877a4.451 4.451 0 0 0-1.411-3.247l-54.83-52.381A4.45 4.45 0 0 0 341.633 0H218.178Zm0 8.948H339.84l.36.338v34.408c0 3.846.127 7.664 1.898 11.234 1.772 3.571 5.999 6.245 10.804 6.245h39.136v122.319H208.941V17.564c0-4.742 3.93-8.616 9.237-8.616Zm130.765 8.686 36.44 34.803h-32.46c-2.455 0-2.392-.225-2.971-1.41-.578-1.186-.988-3.924-.988-7.347l-.021-26.046Zm-72.196 51.873a21.605 21.605 0 0 0-21.536 21.53v10.768a10.634 10.634 0 0 1-10.769 10.769 5.359 5.359 0 0 0-5.329 6.51 5.367 5.367 0 0 0 1.568 2.762c.261.24.542.457.84.649.465.283.969.494 1.496.628.336.102.681.171 1.03.205.125.007.25.007.374 0a10.613 10.613 0 0 1 7.657 3.112 10.606 10.606 0 0 1 2.33 3.513c.535 1.315.801 2.724.782 4.143v10.769a21.609 21.609 0 0 0 21.557 21.508 5.387 5.387 0 0 0 5.459-5.31 5.391 5.391 0 0 0-3.256-5.02 5.357 5.357 0 0 0-2.054-.438h-.149a10.615 10.615 0 0 1-10.768-10.762v-10.74a21.461 21.461 0 0 0-7.466-16.152 21.407 21.407 0 0 0 7.466-16.146V91.037a10.634 10.634 0 0 1 3.117-7.648 10.615 10.615 0 0 1 7.651-3.106 5.385 5.385 0 0 0 .149-10.761l-.149-.015Zm42.34 0a5.387 5.387 0 1 0 .55 10.762 10.627 10.627 0 0 1 10.762 10.768v10.768a21.398 21.398 0 0 0 7.501 16.167 21.472 21.472 0 0 0-7.466 16.152v10.769a10.62 10.62 0 0 1-10.761 10.761 5.394 5.394 0 0 0-3.83 1.522 5.38 5.38 0 0 0-1.252 5.851 5.39 5.39 0 0 0 2.872 2.956c.649.28 1.347.429 2.054.439h.156a21.596 21.596 0 0 0 21.529-21.529v-10.769a10.63 10.63 0 0 1 10.74-10.796 5.323 5.323 0 0 0 3.486-1.221c.141-.117.275-.242.403-.374a5.385 5.385 0 0 0-3.889-9.173 10.635 10.635 0 0 1-7.656-3.112 10.623 10.623 0 0 1-3.112-7.657V91.058a21.602 21.602 0 0 0-21.53-21.53 3.58 3.58 0 0 0-.55 0l-.007-.02Zm-20.902 21.488a5.382 5.382 0 0 0-5.28 6.434 5.378 5.378 0 0 0 4.23 4.231 5.388 5.388 0 0 0 5.527-2.29 5.38 5.38 0 0 0 .907-2.991 5.39 5.39 0 0 0-5.377-5.363l-.007-.021Zm-.084 21.473a5.38 5.38 0 0 0-5.3 5.44v32.305a5.384 5.384 0 1 0 10.768.149v-32.461a5.385 5.385 0 0 0-5.32-5.44l-.148.007Zm-88.815 80.325h182.427v44.894c0 8.785-5.963 15.172-12.779 15.172H222.066c-6.817 0-12.78-6.387-12.78-15.172v-44.894Z" />
        <path d="M239.257 240.926c-.692-.165-1.268-.544-1.729-1.136a3.597 3.597 0 0 1-.642-2.075c0-.593.23-1.054.691-1.383a1.696 1.696 0 0 1 1.581-.198 20.79 20.79 0 0 0 6.619 1.087c2.305 0 3.985-.708 5.038-2.124 1.087-1.416 1.631-3.836 1.631-7.261v-19.907c0-.757.279-1.416.839-1.976.56-.559 1.219-.839 1.976-.839h.049c.758 0 1.417.28 1.976.839.56.56.84 1.219.84 1.976v21.389c0 4.314-.988 7.458-2.964 9.434-1.976 1.943-5.104 2.915-9.385 2.915-2.338 0-4.511-.247-6.52-.741ZM277.109 225.119c-3.754-1.284-6.471-2.816-8.151-4.594-1.646-1.811-2.469-3.984-2.469-6.52 0-2.898.922-5.187 2.766-6.866 1.844-1.68 4.38-2.519 7.607-2.519 3.029 0 5.697.362 8.002 1.086.692.231 1.251.675 1.679 1.334.462.626.692 1.334.692 2.124 0 .56-.247.988-.741 1.284a1.582 1.582 0 0 1-1.531.099c-2.503-1.054-5.039-1.581-7.607-1.581-1.778 0-3.145.445-4.1 1.334-.955.889-1.433 2.124-1.433 3.705 0 1.284.445 2.453 1.334 3.507.889 1.021 2.206 1.828 3.952 2.42 4.347 1.449 7.36 3.063 9.039 4.841 1.713 1.778 2.569 4.034 2.569 6.767 0 3.326-1.021 5.846-3.063 7.558-2.041 1.712-5.055 2.569-9.039 2.569-2.602 0-4.956-.395-7.064-1.186-1.548-.626-2.321-1.844-2.321-3.655 0-.56.247-.972.741-1.235a1.489 1.489 0 0 1 1.481 0c2.042 1.087 4.265 1.63 6.669 1.63 4.775 0 7.162-1.893 7.162-5.681 0-1.448-.477-2.683-1.432-3.704-.922-1.021-2.503-1.927-4.742-2.717ZM319.179 212.622c-1.811-2.371-4.396-3.557-7.755-3.557s-5.961 1.186-7.805 3.557c-1.811 2.338-2.717 5.845-2.717 10.521 0 4.676.906 8.2 2.717 10.571 1.844 2.338 4.446 3.507 7.805 3.507s5.944-1.169 7.755-3.507c1.844-2.371 2.766-5.895 2.766-10.571s-.922-8.183-2.766-10.521Zm3.952 24.154c-2.865 3.261-6.768 4.891-11.707 4.891-4.94 0-8.859-1.63-11.757-4.891-2.865-3.26-4.297-7.804-4.297-13.633 0-5.829 1.432-10.373 4.297-13.633 2.898-3.26 6.817-4.89 11.757-4.89 4.939 0 8.842 1.63 11.707 4.89 2.897 3.26 4.346 7.804 4.346 13.633 0 5.829-1.449 10.373-4.346 13.633ZM340.352 240.382c-.527.527-1.153.791-1.877.791-.725 0-1.351-.264-1.877-.791-.527-.527-.791-1.152-.791-1.877v-30.724c0-.724.264-1.35.791-1.877.526-.527 1.152-.79 1.877-.79 1.745 0 3.079.773 4.001 2.321l14.028 24.55c0 .033.033.049.099.049.033 0 .049-.016.049-.049v-24.204c0-.724.264-1.35.791-1.877.527-.527 1.152-.79 1.877-.79.724 0 1.35.263 1.877.79.527.527.79 1.153.79 1.877v30.724c0 .725-.263 1.35-.79 1.877-.527.527-1.153.791-1.877.791-1.746 0-3.079-.774-4.001-2.322l-14.078-24.55c0-.033-.017-.049-.05-.049s-.049.016-.049.049v24.204c0 .725-.263 1.35-.79 1.877Z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "XML",
    icon: (
      <svg className="hover-icon" viewBox="0 0 32 32">
        <path d="m20.42 21.157 2.211 2.211L30 16l-7.369-7.369-2.211 2.212L25.58 16ZM11.58 10.843 9.369 8.631 2 16l7.369 7.369 2.211-2.211L6.42 16ZM17.411 7.677l1.6.437-4.42 16.209-1.6-.437 4.42-16.209Z" />
      </svg>
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "./src/assets/Retro_Mod_Site.gif",
    url: "https://cosmic-seahorse-cfa092.netlify.app/",
    github: "https://github.com/rafalaidlaw",
    title: "React E-Commerce Website",
    text: "My most recent project involved migrating my e-commerce business to a React and Google Firebase-based website, where I implemented modern web practices and ensured a seamless user experience across all devices. Additionally, I have a solid understanding of version control systems like Git.",
  },
  // {
  //   id: nanoid(),
  //   img: "https://i.ibb.co/jwD0g16/Rafa-Bale-Developer-Reel.gif",
  //   url: "https://vimeo.com/950854029",
  //   github: "https://github.com/rafalaidlaw",
  //   title: "Internet Advertisments",
  //   text: "These banner ads were built with Javascript. All movements, ease-outs, and effects.  We did this to save on memory and to quickly implement and update multiple iterations for evolving ad campaigns. With reusable and sustainable code we could create many ads with minor tweaks.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://react-projects.netlify.app/",
  //   github: "https://github.com/john-smilga",
  //   title: "third project",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
];
