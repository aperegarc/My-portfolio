import { useEffect, useState } from "react";

function Pet() {
  const [sentado, setSentado] = useState();
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();
  const speed = 10;

  useEffect(() => {
    if (sentado) return;

    const moveAnimal = () => {
      const direccion = Math.floor(Math.random() * 4);
      setPosX((prev) => {
        let nuevaPosX = prev; // Tomamos la posición actual

        // Determinamos la dirección
        if (direction === 0) nuevaPosX += speed; // Derecha
        if (direction === 1) nuevaPosX -= speed; // Izquierda

        // Aseguramos que no se salga de la pantalla
        if (nuevaPosX < 0) nuevaPosX += speed; // Límite izquierdo
        if (nuevaPosX > window.innerWidth - 50)
          nuevaPosX = window.innerWidth - 50; // Límite derecho

        return nuevaPosX; // Retornamos la nueva posición
      });

      setPosY((prev) => {
        let nuevaPosY = prev; // Tomamos la posición actual

        // Determinamos la dirección
        if (direction === 2) nuevaPosY += speed; // Abajo
        if (direction === 3) nuevaPosY -= speed; // Arriba

        // Aseguramos que no se salga de la pantalla
        if (nuevaPosY < 0) nuevaPosY = 0; // Límite superior
        if (nuevaPosY > window.innerHeight - 50)
          nuevaPosY = window.innerHeight - 50; // Límite inferior

        return nuevaPosY; // Retornamos la nueva posición
      });
    };
  });

  useEffect(() => {
    const sitInterval = setTimeout(
      () => {
        setSentado(true);
        setTimeout(() => setSentado(false), 2000); // Se sienta por 2 segundos
      },
      Math.random() * 5000 + 5000
    ); // Se sienta en intervalos aleatorios

    return () => clearTimeout(sitInterval);
  }, []);


  return(
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: isSitting ? "gray" : "brown",
        position: "absolute",
        top: `${posY}px`,
        left: `${posX}px`,
        transition: "transform 0.2s ease-in-out",
      }}
    ></div>
  )


}
