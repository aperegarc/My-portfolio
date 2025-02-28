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

  return (
    <>
          <DarkMode />
      <section className="secciones">
        <div>
          <Nave />
          <div className="seccion-izq">
            <div className="componente">
            <h1 className="mi-nombre">ADRIÁN PÉREZ</h1>
              <Menu />
              <Contacto />
            </div>
          </div>
        </div>
        <div className="seccion-dcha">
            <div className="container-readme">
              <Readme />
            </div>
            <div className="container-github" id="github">
              <Github />
            </div>
          </div>
      </section>
    </>
  );
}

export default App;
