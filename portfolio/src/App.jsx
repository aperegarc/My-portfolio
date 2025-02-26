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
      <header><Menu /></header>
      <div className="componente"><Readme /></div>
      <div className="componente" id="github-projects"><Github /></div>
      <div className="componente" id="contacto"><Contacto /></div>
    </>
  );
}

export default App;
