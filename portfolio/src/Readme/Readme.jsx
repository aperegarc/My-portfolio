import React, { useState } from "react";
import "./Readme.css";
import CubeComponent from "../Components/UseAnimationFrame";

function Readme() {
  // Estado para controlar si el readme está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar la visibilidad de la imagen
  const [showImage, setShowImage] = useState(false);

  // Función que cambia el estado para mostrar/ocultar la imagen
  const toggleImage = () => {
    setShowImage(!showImage);
  };

  // Función para alternar el estado
  const toggleReadme = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="readme-block">
      {/* Cambiado a readme-header para mantener consistencia con el CSS */}
      <div className="readme-header" onClick={toggleReadme}>
        <p>README</p>
        {/* Añadida clase dinámica para la flecha */}
        <i className={`arrow ${isOpen ? "up" : ""}`}></i>
      </div>
      {/* Añadida clase dinámica para mostrar/ocultar el contenido */}
      <div className={`readme-content ${isOpen ? "active" : ""}`}>
        <div>
          <h2>Welcome to my portfolio</h2>
          <p>
            Me llamo Adrián Pérez y tengo 22 años. Cumplo el 6 de Septiembre.
            Vivo actualmente en A Coruña, vine hace casi medio año desde
            Pontevedra que está a una hora en tren. Estudié una formación
            profesional de Desarrollo de aplicaciones multiplataforma, y desde
            que acabé me he seguido formando. Tengo un perro llamado Hades, poco
            fotogénico, y aunque digan que parece una foca cuando le tapas las
            orejas, sigue siendo el mejor perro que va a ver jamás.
          </p>
          <button onClick={toggleImage}>Mira que guapo</button>
          {showImage && (
            <img
              className="hades"
              src={`${process.env.PUBLIC_URL}/medios/e68e0e5d-7c22-4399-8e7d-46470a918e0c.jpg`}
            />
          )}
        </div>
        <div>
          <h2>About me</h2>
          <p>📚 I'm currently learning React and SpringBoot.</p>
          <p>
            🎯 Goals: To build a solid foundation in any area of programming.
          </p>
          <p>🎲 Fun fact: I can count in binary using my hands.</p>
        </div>
        {/* Añadida clase skills para los badges de habilidades */}
        <div className="skills">
          <h2>My Skills</h2>
          <p>Java</p>
          <p>SpringBoot</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>GrapthQl</p>
          <p>Wordpress</p>
          <p>CSS</p>
          <p>MySql</p>
          <p>Python</p>
        </div>
        <CubeComponent />
      </div>
    </div>
  );
}

export default Readme;
