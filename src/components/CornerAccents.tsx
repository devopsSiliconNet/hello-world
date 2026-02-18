"use client";

import { motion } from "framer-motion";

export default function CornerAccents() {
  return (
    <>
      {/* Top-left bracket */}
      <motion.div
        className="fixed top-6 left-6 md:top-8 md:left-8 z-10"
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.08)" }} />
      </motion.div>

      {/* Top-right bracket */}
      <motion.div
        className="fixed top-6 right-6 md:top-8 md:right-8 z-10 flex flex-col items-end"
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 3.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.08)", marginLeft: "auto" }} />
      </motion.div>

      {/* Bottom-left — version tag */}
      <motion.div
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-10"
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 3.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col">
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.08)" }} />
        </div>
        <p
          className="mt-3 font-light"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.12)",
          }}
        >
          v1.0.0
        </p>
      </motion.div>

      {/* Bottom-right bracket */}
      <motion.div
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-10 flex flex-col items-end"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 3.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-end">
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.08)", marginLeft: "auto" }} />
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.08)" }} />
        </div>
      </motion.div>
    </>
  );
}