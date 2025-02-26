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

function App() {
  return (
    <>
      <section className="secciones">
        <div>
          <Nave />
          <div className="seccion-izq">
            <div className="componente">
              <Readme />
              <Menu />
            </div>
          </div>
        </div>
        <div className="seccion-dcha">
          <div className="componente" id="github-projects">
            <Github />
          </div>
          <Parallax speed={10}>
            <div className="componente" id="contacto">
              <Contacto />
            </div>
          </Parallax>
        </div>
      </section>
    </>
  );
}

export default App;
