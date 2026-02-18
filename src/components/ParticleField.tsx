"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  drift: number;
}

const COLORS = [
  "rgba(255, 255, 255,",
  "rgba(180, 160, 255,",
  "rgba(120, 180, 255,",
  "rgba(200, 140, 255,",
];

export default function ParticleField() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const count = isMobile ? 40 : 80;

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      drift: (Math.random() - 0.5) * 150,
    }));
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[3] overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: `${p.color} ${p.opacity})`,
            boxShadow: p.size > 3 ? `0 0 ${p.size * 2}px ${p.color} 0.2)` : "none",
          }}
          animate={{
            y: [0, -(typeof window !== "undefined" ? window.innerHeight : 1000) * 1.2],
            x: [0, p.drift],
            opacity: [0, p.opacity, p.opacity, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
