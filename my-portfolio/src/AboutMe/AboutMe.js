import { useState } from "react";

function AboutMe(){
     // Estado para controlar la visibilidad de la imagen
  const [showImage, setShowImage] = useState(false);

  // Función que cambia el estado para mostrar/ocultar la imagen
  const toggleImage = () => {
    setShowImage(!showImage);
  };

return(
    <section className="aboutme-container">
        <h1>Quien soy</h1>
        <div>
            <p>Me llamo Adrián Pérez y tengo 22 años.
              Cumplo el 6 de Septiembre.
              Vivo actualmente en A Coruña, vine hace casi medio año desde Pontevedra que está a una hora en tren. Estudié una formación profesional de Desarrollo de aplicaciones multiplataforma, y desde que acabé me he seguido formando. Tengo un perro llamado Hades, poco fotogénico, y aunque digan que parece una foca cuando le tapas las orejas, sigue siendo el mejor perro que va a ver jamás.</p>
            <button onClick={toggleImage}>Mira que guapo</button>
            {showImage && <img className="hades" src="" alt="Imagen" />}
        </div>
    </section>
)

}

export default AboutMe