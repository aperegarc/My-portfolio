"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Nave() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref); // Usamos el hook para obtener las posiciones

  return (
    <motion.div
      ref={ref}
      style={{
        ...ball,
        top: y,
        left: x,
        position: "absolute", // Aseguramos que la pelota esté posicionada absolutamente
        zIndex: -1, // La pelota estará detrás de los demás elementos
      }}
    />
  );
}

const spring = { damping: 1000, stiffness: 10000 }; // Ajustamos los valores de la física para mayor suavidad

export function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring); // Movemos suavemente en el eje X
  const y = useSpring(yPoint, spring); // Movemos suavemente en el eje Y

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      // Obtenemos la posición de desplazamiento (scroll) en la página
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Calculamos la posición en relación con la página y ajustamos según el desplazamiento
      xPoint.set(clientX - element.offsetWidth / 2 + scrollX);
      yPoint.set(clientY - element.offsetHeight / 2 + scrollY);
    };

    // Añadimos el evento de movimiento del ratón
    window.addEventListener("pointermove", handlePointerMove);

    // Limpiamos el evento cuando el componente se desmonte
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [xPoint, yPoint]);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */
const ball = {
  width: 1,
  height: 1,
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)", // Fondo muy sutil
  boxShadow: "0 0 200px 200px rgba(14, 204, 252, 1), inset 0 0 300px 150px rgba(14, 204, 252, 1)", // Sombra externa e interna más grandes
  opacity: 0.1, // Opacidad muy baja para el círculo
};



