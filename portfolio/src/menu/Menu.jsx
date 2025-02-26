import { useEffect, useState } from "react";
import "./Menu.css";

const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="50"
    height="50"
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
const moon = <img width="50px" height="50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmUlEQVR4nO2Zz08bRxTHrSpSDk3+hTaRqrRSo/S/qHIIp1659YcqVVWI2TUGDGsbJH7aYGx+Gb9Zi0PBOUBABmPtm1rqpScS1CY55lCp6iEkElRVm5Bmq7fyWuvFxuPx2s3BT3rSsrvMfD8z78cs+Hxd61rXukaWTqevA8A3ALAJAD8zxp4xxv5ijL0GgJeMsSMAuA8A9wDgM9+7YIlE4rKu618zxp4yxswm/QljzJ9Kpa50XLimae/puv49APwhIbzKAeAYAPo0TbvUEfG6rl8DgFKrwmv4w0wm83FbxUcikS8A4KQN4s2ynzLGetoiXlGU3nA4/Myx9eb8/LwZjUbNoaEhU1VVMxAImKFQyJyamrKeS0KcAUCvp+L7+/t7FEV5Mzc395YmWV5eNkdGRizR9XxiYqKVnTgDgDueiPf7/TcURTklUaurq2YymbRW+iLx5MFg0Jmo5uTkpHWPfHx83Eyn040g/tR1/ZOWxFNlUBTl0Ba1sLAgJJ58cHCwImZ6evrccwo1aBBmAHDYUnVSFKVPRGwtJ9G2EBJb653Z2dlzoin0aJcceXRXSryqqlcVRTmWET86Olq1uvV2LRQKnQMYGBioPI/H41afyGQyV2VWX5Fd/ZWVlar4v+jdeDxeBTA8PFx5Rtfl+34ZgKeyAGtraxVBBNPo/Wg0WknqWCxWuU+7YR87mhV/yzlBOBy2XBTAFkRO1yK/EwwGzaWlJWvHKH+oCFDlshcik8ncbAbALwJADSwSiVgiaULZHVMdEM7dc7l4MquqmhNd6bGxMcsJpFUAVVWtHlGrvNIxXRggEAg88QqAKhAJODg4MLPZrBBEJBKxur0L4JEwgKZpb2oNTMcHEm3XdQob+pkmrBdCuq6bnHPLEVG6lzDGngsDxGKxf2sNaK+2aGLSYc8Wb3szuRJ0HEcYY/8IA2Sz2bNaA9LKE0C9zuo8clDIuMWTU6cVBQhVNzpxgEKh8ILoZROxnnjyzc3Nmp05mUxayZtIJKzqRvPTtVQIcc5/WVxcbAsAOQl1HhlUVRU5nR41A3CfRNCZRgZgY2PjQgDyfD5f1XU1TbOO6/UAdF1/IAxgGIafJtne3q46m4j6zMxMQwC7Ko04PowodOqIN3d2dqaFARDxlnOlqJo0A0JCRAB4OSdopymkqIm5xVPvyOfzbw3D+EAYoAzxq3uyra0tIQAqlaIA3OGFQsHM5XLm+vq6JZyui8UiPTtsSrwzjGTqOJ2bZAB4/VD7rmmAYrH4PiI+dw9GX1GNAFKplJcAv+3v71/2yRgi9rkH3N3dvTAfqJo0KqNNrv63PlkrlUqXOOcP3YPu7e1Z3ZaSj5oSAVEC0seLl+I55z+RBmmAMsRHnPMTL2NacOVfcs4/9HlhiNiDiGcdBHhlGMZtT8Q7IHo7AYGIfxuG4c1f5dxGAyPiaRsBTjjnn7dFvAPiBjWWNoj/0bOYb2RUGRDxLuf82APhv1Ojon+adES8C+QKdWxEfCwR648R8UvpJuW1cc4/pV1BxBwiPuKcv6BqgoivqaMj4hEi/oCIX5VKpWv/t96uda1rvnfD/gM0dKahps3mYgAAAABJRU5ErkJggg==" alt="moon-satellite"></img>;

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
      <div className="contacto">
        <a href="#contacto">CONTACT</a>
        <div className="submenu-contact"></div>
      </div>
      <div className="proyectos">
        <a href="#github-projects">PROJECTS</a>
        <div className="submenu-proyectos"></div>
      </div>
      <button className="oscuro" onClick={toggleTheme}>
        {isDarkMode ? moon : sun}
      </button>
    </section>
  );
}

export default Menu;
