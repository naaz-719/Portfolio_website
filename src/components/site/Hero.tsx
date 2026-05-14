import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, BarChart3, Database, Brain, Sparkles } from "lucide-react";
import mascot from "@/assets/hijabi-mascot.png";

const roles = ["Data Analyst", "Aspiring Data Scientist", "BI Storyteller", "AI/ML Enthusiast"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = roles[i];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((i + 1) % roles.length); }
      }
    }, del ? 40 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-gradient">{text}<span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-primary animate-pulse md:h-8" /></span>
  );
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tiltX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const px = useTransform(sx, [-0.5, 0.5], [-20, 20]);
  const py = useTransform(sy, [-0.5, 0.5], [-15, 15]);

  return (
    <section id="top"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-32 pb-16 md:pt-28 lg:flex-row lg:gap-10">
      <div className="relative z-10 flex-1 text-center lg:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px] shadow-emerald-400/60" />
          Available for opportunities · GCC
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Hi, I'm <span className="text-gradient">Naaz Mulla</span>
          <br />
          <span className="text-foreground/90">turning data into</span>
          <br />
          <span className="text-gradient">decisions.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-muted-foreground md:text-xl">
          <Typer />
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base lg:mx-0 mx-auto">
          I design dashboards, build ML pipelines, and craft business intelligence that feels effortless — with a soft spot for elegant SQL and clean Python.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]">
            View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10">
            <Download className="h-4 w-4" /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
            Contact →
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-3 gap-3 lg:max-w-md">
          {[
            { k: "12+", v: "Dashboards shipped" },
            { k: "5", v: "ML projects" },
            { k: "1st", v: "Class Honors" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl glass p-3 text-center lg:text-left">
              <div className="text-2xl font-display font-semibold text-gradient">{s.k}</div>
              <div className="text-[11px] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mascot scene */}
      <motion.div style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
        className="relative z-10 mt-16 flex flex-1 items-center justify-center lg:mt-0">
        <div className="relative aspect-square w-[88vw] max-w-[560px]">
          {/* halo */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-primary/40 via-secondary/30 to-accent/40 blur-3xl animate-glow-pulse" />
          <motion.div style={{ x: px, y: py }} className="absolute inset-0">
            <div className="absolute inset-0 rounded-[2.5rem] glass-strong glow-ring" />
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              <motion.img
                src={mascot} alt="Naaz Mulla — hijabi data analyst illustration"
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                draggable={false}
              />
              {/* eye blink overlay (subtle) */}
              <motion.div
                className="pointer-events-none absolute left-[42%] top-[35%] h-[2.2%] w-[16%] origin-center rounded-full bg-foreground/0"
                animate={{ scaleY: [1, 1, 0.05, 1, 1] }}
                transition={{ times: [0, 0.95, 0.97, 0.99, 1], duration: 5, repeat: Infinity }}
                style={{ background: "transparent" }}
              />
            </div>
          </motion.div>

          {/* floating chips */}
          <FloatChip className="left-[-6%] top-[10%]" delay={0} icon={<BarChart3 className="h-4 w-4" />} title="Revenue" value="+24.6%" />
          <FloatChip className="right-[-4%] top-[6%]" delay={0.4} icon={<Brain className="h-4 w-4" />} title="Model AUC" value="0.93" />
          <FloatChip className="left-[-10%] bottom-[18%]" delay={0.8} icon={<Database className="h-4 w-4" />} title="Rows cleaned" value="1.2M" />
          <FloatChip className="right-[-6%] bottom-[10%]" delay={1.2} icon={<Sparkles className="h-4 w-4" />} title="Insights" value="Live" />
        </div>
      </motion.div>
    </section>
  );
}

function FloatChip({ className, delay, icon, title, value }: { className: string; delay: number; icon: React.ReactNode; title: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + delay, duration: 0.6 }}
      className={`absolute hidden md:block ${className}`}>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-2xl glass-strong px-3 py-2 glow-ring">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 text-foreground">{icon}</div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{title}</div>
          <div className="text-sm font-semibold text-foreground">{value}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
