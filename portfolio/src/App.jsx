import logo from "./logo.svg";
import "./App.css";
import Readme from "./Readme/Readme";
import Menu from "./menu/Menu";
import Github from "./github/github";
import { useEffect, useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import Contacto from "./Contacto/Contacto";
import Nave from "./Components/nave";
import UseAnimationFrame from "./Components/UseAnimationFrame";
import DarkMode from "./menu/DarkMode";

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Posición del scroll en el eje Y
    const windowHeight = window.innerHeight; // Altura de la ventana

    // Calcula en qué proyecto estamos basándonos en la posición del scroll
    const newActiveProject = Math.floor(scrollPosition / windowHeight);
    setActiveProject(newActiveProject);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
          <DarkMode />
      <section className="secciones">
        <div>
          <Nave />
          <div className="seccion-izq">
            <div className="componente">
              <Readme />
              <Menu />
              <Contacto />
            </div>
          </div>
        </div>
        <div className="seccion-dcha">
          <div className="componente container-scroll" id="github-projects">
            <div
              className={`github-project ${
                activeProject === 0 ? "active" : ""
              }`}
            >
              <Github />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
