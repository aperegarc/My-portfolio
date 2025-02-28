import { useEffect, useState } from "react";
import "./Menu.css";
import Pet from "../Components/pet";


function Menu() {
  

  return (
    <section className="menu">
      {/* <Pet /> */}
      <div className="proyectos">
        <a href="#github">PROJECTS</a>
        <div className="submenu-proyectos"></div>
      </div>
    </section>
  );
}

export default Menu;
