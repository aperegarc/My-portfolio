import "./Menu.css";

function Menu() {
  return (
      <section className="menu">
          <div className="contacto">
            <a>CONTACT</a>
            <div className="submenu-contact">
            </div>
          </div>
          <div className="proyectos">
            <a href="#github-projects">PROJECTS</a>
            <div className="submenu-proyectos">
            </div>
          </div>
      </section>
  );
}

export default Menu;
