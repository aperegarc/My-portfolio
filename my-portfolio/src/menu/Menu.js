import { useEffect, useState } from "react";
import "./Menu.css";

const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="20"
    height="20"
    viewBox="0 0 48 48"
  >
    <path fill="#FF9800" d="M11 11H37V37H11z"></path>
    <path
      fill="#FF9800"
      d="M11.272 11.272H36.728V36.728H11.272z"
      transform="rotate(-45.001 24 24)"
    ></path>
    <path
      fill="#FFEB3B"
      d="M13,24c0,6.077,4.923,11,11,11c6.076,0,11-4.923,11-11s-4.924-11-11-11C17.923,13,13,17.923,13,24"
    ></path>
  </svg>
);
const moon = <svg
xmlns="http://www.w3.org/2000/svg"
x="0px"
y="0px"
width="20"
height="20"
viewBox="0 0 48 48"
>
<path fill="#FF9800" d="M11 11H37V37H11z"></path>
<path
  fill="#FF9800"
  d="M11.272 11.272H36.728V36.728H11.272z"
  transform="rotate(-45.001 24 24)"
></path>
<path
  fill="#FFEB3B"
  d="M13,24c0,6.077,4.923,11,11,11c6.076,0,11-4.923,11-11s-4.924-11-11-11C17.923,13,13,17.923,13,24"
></path>
</svg>;

function Menu() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cargar el tema desde el localStorage al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  // Alternar el tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <section className="menu">
      <button className="oscuro" onClick={toggleTheme}>
        {isDarkMode ? moon : sun}
      </button>
      <div className="contacto">
        <a>CONTACT</a>
        <div className="submenu-contact"></div>
      </div>
      <div className="proyectos">
        <a href="#github-projects">PROJECTS</a>
        <div className="submenu-proyectos"></div>
      </div>
    </section>
  );
}

export default Menu;
