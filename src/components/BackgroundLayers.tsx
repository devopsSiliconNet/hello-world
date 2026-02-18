"use client";

import { motion } from "framer-motion";

export default function BackgroundLayers() {
  return (
    <>
      {/* Animated gradient */}
      <motion.div
        className="fixed inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(120, 60, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0, 180, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(255, 60, 120, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 60% 30%, rgba(120, 60, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 30% 70%, rgba(0, 180, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(255, 60, 120, 0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse at 40% 60%, rgba(120, 60, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(0, 180, 255, 0.18) 0%, transparent 50%), radial-gradient(ellipse at 30% 30%, rgba(255, 60, 120, 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(120, 60, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0, 180, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(255, 60, 120, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern */}
      <div className="fixed inset-0 grid-pattern z-0" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Vignette */}
      <div className="vignette" />
    </>
  );
}