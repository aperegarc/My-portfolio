"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Nave() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} style={{ ...ball, x, y }} />;
}

const spring = { damping: 1000, stiffness: 10000, restDelta: 0.001 };

export function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current; // Removido el '!' y agregamos semicolon si lo deseas
      frame.read(() => {
        xPoint.set(
          clientX - element.offsetLeft - element.offsetWidth / 2
        );
        yPoint.set(
          clientY - element.offsetTop - element.offsetHeight / 2
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () =>
      window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */
const ball = {
  width: 25,
  height: 25,
  backgroundColor: "#ff0088",
  borderRadius: "50%",
};
