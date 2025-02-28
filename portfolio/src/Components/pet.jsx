import { useEffect, useState, useRef } from "react";

function Pet() {
  const [sentado, setSentado] = useState(false);
  const [posX, setPosX] = useState(window.innerWidth / 2); // Posición inicial en el centro de la pantalla
  const [posY, setPosY] = useState(window.innerHeight / 2); // Posición inicial en el centro de la pantalla
  const [isFlipped, setIsFlipped] = useState(false); // Para voltear la imagen
  const [textoVisible, setTextoVisible] = useState(false); // Estado para controlar la visibilidad del texto
  const textoRef = useRef(null); // Referencia al elemento con la clase texto-perro

  const speed = 10;

  useEffect(() => {
    // Solo mueve al perro si no está sentado
    if (sentado) return;

    const menuElement = document.querySelector(".menu");
    const menuRect = menuElement.getBoundingClientRect(); // Obtener las dimensiones del contenedor .menu
    const maxX = menuRect.width - 50; // 50 es el tamaño de la imagen del perro
    const maxY = menuRect.height - 50; // 50 es el tamaño de la imagen del perro

    const moveAnimal = () => {
      const direction = Math.floor(Math.random() * 4); // Generar dirección aleatoria

      setPosX((prev) => {
        let nuevaPosX = prev;

        if (direction === 0) {
          nuevaPosX += speed; // Derecha
          setIsFlipped(false); // Imagen normal
        }
        if (direction === 1) {
          nuevaPosX -= speed; // Izquierda
          setIsFlipped(true); // Imagen volteada
        }

        // Limitar dentro de los límites del contenedor
        nuevaPosX = Math.max(0, Math.min(maxX, nuevaPosX));
        return nuevaPosX;
      });

      setPosY((prev) => {
        let nuevaPosY = prev;

        if (direction === 2) nuevaPosY += speed; // Abajo
        if (direction === 3) nuevaPosY -= speed; // Arriba

        // Limitar dentro de los límites del contenedor
        nuevaPosY = Math.max(0, Math.min(maxY, nuevaPosY));
        return nuevaPosY;
      });
    };

    const moveInterval = setInterval(moveAnimal, 500); // Mueve el perro cada 500ms
    return () => clearInterval(moveInterval);
  }, [sentado]);

  useEffect(() => {
    const sitInterval = setTimeout(
      () => {
        setSentado(true);
        setTimeout(() => setSentado(false), 2000); // El perro se sienta por 2 segundos
      },
      Math.random() * 5000 + 5000
    ); // Se sienta en intervalos aleatorios

    return () => clearTimeout(sitInterval);
  }, []);

  // Función para mostrar el texto y añadir la clase mostrar
  const mostrarTexto = () => {
    if (textoRef.current) {
      // Añadir la clase 'mostrar' y quitar la clase 'ocultar'
      textoRef.current.classList.add("mostrar");
      textoRef.current.classList.remove("ocultar");
      setTextoVisible(true);
    }

    // Limpiar cualquier timeout anterior antes de añadir uno nuevo
    clearTimeout(window.timeoutId);

    // Configurar el timeout para quitar la clase 'mostrar' y añadir la clase 'ocultar'
    window.timeoutId = setTimeout(() => {
      if (textoRef.current) {
        textoRef.current.classList.remove("mostrar");
        textoRef.current.classList.add("ocultar");
        setTextoVisible(false);
      }
    }, 2000); // Duración de la animación, en este caso 2 segundos
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "100",
          top: `${posY}px`,
          left: `${posX}px`,
        }}
      >
        <img
          onClick={mostrarTexto}
          src="/My-portfolio/hades.jpeg"
          alt="Dog"
          style={{
            width: "50px",
            height: "30px",
            transform: `scaleX(${isFlipped ? -1 : 1})`,
            transition: "top 0.2s, left 0.2s",
          }}
        />
        <div className="texto-perro" ref={textoRef}>
          {textoVisible && (
            <p
              style={{
                width: "12rem",
              }}
            >
              "Este es Hades"
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Pet;
