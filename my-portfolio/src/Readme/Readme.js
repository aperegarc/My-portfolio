import React, { useState } from 'react';
import "./Readme.css"

function Readme() {
  // Estado para controlar si el readme está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

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
        <i className={`arrow ${isOpen ? 'up' : ''}`}></i>
      </div>
      {/* Añadida clase dinámica para mostrar/ocultar el contenido */}
      <div className={`readme-content ${isOpen ? 'active' : ''}`}>
        <div>
          <h2>Welcome to my portfolio</h2>
          <p>
            Hello, my name is Adrián Pérez, I'm from La Coruña, Galicia, Spain,
            and I have been programming for just over 2 years. I have knowledge
            of Java, but I am also learning about JavaScript and the React
            framework. I don't leave Java aside and I'm also learning about
            SpringBoot. Thanks for checking out my profile!
          </p>
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
      </div>
    </div>
  );
}

export default Readme;