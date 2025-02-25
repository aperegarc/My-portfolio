import React, { useState, useEffect } from "react";
import "./github.css";

function GitHub() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = "aperegarc"; // Reemplaza con tu usuario

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        // Verificamos si la respuesta es un array
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("La respuesta no es un array", data);
        }
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      <div className="github-container">
        <h1>Mis Proyectos en GitHub</h1>
        <ul>
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                <p>{project.description}</p>
              </li>
            ))
          ) : (
            <p>No se han encontrado proyectos.</p>
          )}
        </ul>
      </div>
      <div>
        <p>También estoy trabajando en una aplicación de web para la gestión de puertos deportivos. Estoy haciendo un prototipo de la app utilizando WordPress Headless. Utilizo el back de WordPress para generar la base de datos y las apis, y React para hacer las peticiones y la lógica de la aplicación desde el front. Más adelante migraré el back a SpringBoot para tener mayor seguridad y robustez.</p>
      </div>
    </>
  );
}

export default GitHub;
