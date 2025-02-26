"use client"

import { useRef, useEffect } from "react";
import "./CubeStyles.css"; // Importamos el archivo CSS

export default function CubeComponent() {
    const ref = useRef(null);

    useEffect(() => {
        let animationFrameId;

        const animate = (t) => {
            if (ref.current) {
                const rotate = Math.sin(t / 1000) * 30; // Controla la amplitud del giro
                const translateY = Math.sin(t / 500) * 20; // Controla el desplazamiento en Y

                ref.current.style.transform = `translateY(${translateY}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="container cube-container">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
        </div>
    );
}
