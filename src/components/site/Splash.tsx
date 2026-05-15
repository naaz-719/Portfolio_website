import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import splash from "@/assets/splash-hijabi.png";

export function Splash({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      setTimeout(onDone, 700);
    }, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      aria-hidden={!show}
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center"
      >
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary/40 via-secondary/30 to-accent/40 blur-3xl animate-glow-pulse" />
          <motion.img
            src={splash}
            alt="Naaz Mulla"
            className="relative h-56 w-56 rounded-full object-cover shadow-2xl ring-2 ring-white/10 md:h-72 md:w-72"
            draggable={false}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center"
        >
          <div className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            <span className="text-gradient">Naaz Mulla</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground md:text-base">
            turning data into decisions
          </div>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}
