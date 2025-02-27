import React, { useState, useEffect } from "react";
import "./github.css";
import { Parallax } from "react-scroll-parallax";

function GitHub() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = "aperegarc"; // Reemplaza con tu usuario de GitHub

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("La respuesta no es un array", data);
        }
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="github-container">
      <h1>Mis Proyectos</h1>
      <ul className="projects-list">
        {projects.length > 0 ? (
          projects.map((project, index) => (
              <li className="project-item">
                <a
                key={index}
                  href={project.html_url}
                  target="_blank"
                >
                  {project.name}
                </a>
                {project.description && (
                  <>
                    <h3>Descripción</h3>
                    <p>{project.description}</p>
                  </>
                )}
              </li>
          ))
        ) : (
          <p>No se han encontrado proyectos.</p>
        )}
      </ul>
    </div>
  );
}

export default GitHub;
