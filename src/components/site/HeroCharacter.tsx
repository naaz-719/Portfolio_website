import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import naazFront from "@/assets/naaz-front.png";
import naazSide from "@/assets/naaz-side.png";

export default function HeroCharacter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showFront, setShowFront] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    const t = setTimeout(() => setShowFront(true), 1600);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full" />

      {/* Side pose - intro */}
      {!showFront && (
        <motion.img
          src={naazSide}
          alt="Naaz Character side"
          initial={{ opacity: 0, x: -160, scale: 0.9, rotateY: -20 }}
          animate={{
            opacity: 1,
            x: mousePosition.x - 20,
            y: mousePosition.y,
            scale: 1,
            rotateY: -8,
          }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative z-10 w-[420px] md:w-[520px] object-contain drop-shadow-2xl"
        />
      )}

      {/* Front pose - settled */}
      {showFront && (
        <motion.img
          src={naazFront}
          alt="Naaz Character"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: 1,
            x: mousePosition.x,
            y: mousePosition.y,
            scale: 1,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative z-10 w-[420px] md:w-[520px] object-contain drop-shadow-2xl"
        />
      )}

      {/* Floating Effect */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />
    </div>
  );
}
