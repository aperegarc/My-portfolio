import React, { useState, useEffect } from "react";
import "./github.css";
import { Parallax } from "react-scroll-parallax";

function GitHub() {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);

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

  // Lista de repositorios que deseas mostrar
  const repositoriosParaMostrar = [
    "SpringProjects",
    "Filtro-post-y-taxonomia-para-WordPress"
    // Agrega los nombres de los repositorios que deseas incluir
  ];

  // Filtrar los proyectos que están en la lista de repositorios a mostrar
  useEffect(() => {
    if (projects.length > 0) {
      const filteredProjects = projects.filter((project) =>
        repositoriosParaMostrar.includes(project.name)
      );
      setSelectedProjects(filteredProjects);
    }
  }, [projects]);

  return (
    <div className="github-container">
      <h1>Mis Proyectos</h1>
      <ul className="projects-list">
        {selectedProjects.length > 0 ? (
          selectedProjects.map((project, index) => (
            <li className="project-item" key={index}>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
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
