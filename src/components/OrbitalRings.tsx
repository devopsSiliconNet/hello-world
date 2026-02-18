"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RingConfig {
  size: number;
  mobileSize: number;
  duration: number;
  opacity: number;
  delay: number;
  borderWidth: number;
  gradient: string;
}

const RINGS: RingConfig[] = [
  {
    size: 350,
    mobileSize: 200,
    duration: 18,
    opacity: 0.1,
    delay: 0,
    borderWidth: 1,
    gradient: "rgba(140, 120, 255, 0.1)",
  },
  {
    size: 500,
    mobileSize: 280,
    duration: 24,
    opacity: 0.08,
    delay: 1.5,
    borderWidth: 1,
    gradient: "rgba(100, 160, 255, 0.08)",
  },
  {
    size: 650,
    mobileSize: 360,
    duration: 30,
    opacity: 0.06,
    delay: 3,
    borderWidth: 1,
    gradient: "rgba(180, 100, 255, 0.06)",
  },
  {
    size: 800,
    mobileSize: 440,
    duration: 36,
    opacity: 0.04,
    delay: 4.5,
    borderWidth: 1,
    gradient: "rgba(120, 200, 255, 0.04)",
  },
];

export default function OrbitalRings() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[4]" style={{ perspective: "1200px" }}>
      {RINGS.map((ring, i) => {
        const s = isMobile ? ring.mobileSize : ring.size;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: s,
              height: s,
              border: `${ring.borderWidth}px solid ${ring.gradient}`,
              boxShadow: `0 0 15px ${ring.gradient}, inset 0 0 15px ${ring.gradient}`,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
              rotateX: [0, 65, 0, -65, 0],
              rotateY: [0, -50, 0, 50, 0],
            }}
            transition={{
              opacity: { duration: 2, delay: ring.delay, ease: "easeOut" },
              scale: { duration: 2, delay: ring.delay, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: ring.duration, repeat: Infinity, ease: "linear" },
              rotateX: { duration: ring.duration * 0.7, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: ring.duration * 1.1, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        );
      })}
    </div>
  );
}
