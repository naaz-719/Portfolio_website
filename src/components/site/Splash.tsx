import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import splash from "@/assets/splash-hijabi.png";

const smoothEase = [0.16, 1, 0.3, 1];

export function Splash({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      setTimeout(() => {
        onDone();
      }, 900);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      aria-hidden={!show}
      initial={{ opacity: 1 }}
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 1.03,
        filter: show ? "blur(0px)" : "blur(8px)",
      }}
      transition={{
        duration: 0.9,
        ease: smoothEase,
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
      style={{
        pointerEvents: show ? "auto" : "none",
        willChange: "transform, opacity, filter",
      }}
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
      />

      {/* Ambient Radial */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 [background:radial-gradient(55%_55%_at_50%_50%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_75%)]"
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: smoothEase,
        }}
        className="relative flex flex-col items-center"
      >
        {/* Image Container */}
        <div className="relative">
          {/* Glow */}
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-10 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 blur-3xl"
          />

          {/* Main Image */}
          <motion.img
            src={splash}
            alt="Naaz Mulla"
            draggable={false}
            className="relative h-56 w-56 rounded-full object-cover shadow-2xl ring-1 ring-white/10 md:h-72 md:w-72"
            initial={{
              scale: 0.92,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -4, 0],
            }}
            transition={{
              opacity: {
                duration: 1,
              },
              scale: {
                duration: 1.4,
                ease: smoothEase,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              willChange: "transform",
            }}
          />
        </div>

        {/* Text */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.9,
            ease: smoothEase,
          }}
          className="mt-8 text-center"
        >
          <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            <span className="text-gradient">Naaz Mulla</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="mt-2 text-sm text-muted-foreground md:text-base"
          >
            turning data into decisions
          </motion.p>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "8rem",
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            duration: 1.5,
            ease: smoothEase,
          }}
          className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}
