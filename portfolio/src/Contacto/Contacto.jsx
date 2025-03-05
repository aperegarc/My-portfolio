"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Instagram, Linkedin } from "lucide-react"

function Contacto() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const x = (e.clientX - centerX) / 25
      const y = (e.clientY - centerY) / 25
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="contacto-menu" style={{ display: "flex", gap: "20px", marginTop: "30px", position: "relative" }}>
      {[{ Icon: Github, href: "https://github.com/aperegarc", factor: 1 },
        { Icon: Instagram, href: "https://instagram.com/adri_peereez", factor: 1.2 },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/adrian-perez-garcia-apg/", factor: 0.8 }].map(
        ({ Icon, href, factor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px",
              color: "#000",
              backgroundColor: "#f0f0f0",
              borderRadius: "50%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-out",
              transform: `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`,
            }}
          >
            <Icon size={24} />
            <span className="sr-only">{Icon.name}</span>
          </a>
        )
      )}
    </div>
  )
}

export default Contacto
