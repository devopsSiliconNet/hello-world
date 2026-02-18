"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isTouch, setIsTouch] = useState(true);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[2]"
      style={{
        x: springX,
        y: springY,
        width: 400,
        height: 400,
        marginLeft: -200,
        marginTop: -200,
        background: "radial-gradient(circle, rgba(120, 80, 255, 0.12) 0%, rgba(120, 80, 255, 0.04) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}