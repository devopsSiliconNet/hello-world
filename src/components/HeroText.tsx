"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -90,
    scale: 0.5,
    filter: "blur(10px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: i * 0.08 + 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.4,
      delay: 1.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 2.4,
      ease: "easeOut",
    },
  },
};

export default function HeroText() {
  const hello = "Hello".split("");
  const world = "World".split("");

  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center min-h-screen select-none px-4"
      style={{ perspective: "1000px" }}
    >
      {/* "Hello" */}
      <div className="flex overflow-visible">
        {hello.map((letter, i) => (
          <motion.span
            key={`h-${i}`}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="glow-text"
            style={{
              display: "inline-block",
              fontSize: "clamp(4.5rem, 10vw, 14rem)",
              fontWeight: 100,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Divider line */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        className="my-3 md:my-5 origin-center"
        style={{
          width: "clamp(120px, 20vw, 320px)",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(140, 120, 255, 0.6), rgba(100, 200, 255, 0.4), transparent)",
        }}
      />

      {/* "World" */}
      <div className="flex overflow-visible">
        {world.map((letter, i) => (
          <motion.span
            key={`w-${i}`}
            custom={i + hello.length + 2}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="shimmer-text"
            style={{
              display: "inline-block",
              fontSize: "clamp(3.5rem, 7vw, 10rem)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 md:mt-12 font-light"
        style={{
          fontSize: "clamp(0.65rem, 1.2vw, 1rem)",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color: "rgba(255, 255, 255, 0.3)",
        }}
      >
        Welcome to the experience
      </motion.p>

      {/* Pulsing dots */}
      <motion.div
        className="flex gap-2 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "rgba(255, 255, 255, 0.15)",
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.15, 0.5, 0.15],
              boxShadow: [
                "0 0 0px rgba(140, 120, 255, 0)",
                "0 0 8px rgba(140, 120, 255, 0.3)",
                "0 0 0px rgba(140, 120, 255, 0)",
              ],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}