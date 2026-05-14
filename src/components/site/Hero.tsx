import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, BarChart3, Database, Brain, Sparkles } from "lucide-react";
import naazFront from "@/assets/naaz-front.png";
import naazSide from "@/assets/naaz-side.png";

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
  const [playIntro, setPlayIntro] = useState(false);
  const [lite, setLite] = useState(false);
  useEffect(() => {
    const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const small = typeof window !== "undefined" && window.matchMedia?.("(max-width: 768px)").matches;
    setLite(Boolean(reduced || small));
    if (reduced) return;
    try {
      if (sessionStorage.getItem("naaz_intro_played") === "1") return;
      sessionStorage.setItem("naaz_intro_played", "1");
      setPlayIntro(true);
    } catch {
      setPlayIntro(true);
    }
  }, []);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 22, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 50, damping: 22, mass: 0.8 });
  const tiltRange = lite ? 3 : 6;
  const parallaxRange = lite ? 8 : 20;
  const tiltX = useTransform(sy, [-0.5, 0.5], [tiltRange, -tiltRange]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-tiltRange - 2, tiltRange + 2]);
  const px = useTransform(sx, [-0.5, 0.5], [-parallaxRange, parallaxRange]);
  const py = useTransform(sy, [-0.5, 0.5], [-parallaxRange * 0.75, parallaxRange * 0.75]);

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
        <motion.div
          className="relative aspect-square w-[88vw] max-w-[560px]"
          initial={playIntro ? { scale: 1.08, y: 18, filter: "brightness(0.85)" } : false}
          animate={playIntro ? {
            scale: [1.08, 1.04, 1.005, 1],
            y: [18, 8, -2, 0],
            filter: ["brightness(0.85)", "brightness(0.95)", "brightness(1.02)", "brightness(1)"],
          } : undefined}
          transition={{ duration: 2.8, times: [0, 0.45, 0.78, 1], ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform, filter" }}
        >
          {/* halo */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-primary/40 via-secondary/30 to-accent/40 blur-3xl animate-glow-pulse" />
          {/* soft entrance light sweep */}
          {playIntro && (
            <motion.div
              aria-hidden
              initial={{ opacity: 0, x: "-120%" }}
              animate={{ opacity: [0, 0.8, 0], x: ["-120%", "20%", "120%"] }}
              transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] overflow-hidden"
              style={{
                background:
                  "linear-gradient(110deg, transparent 35%, color-mix(in oklab, var(--primary) 35%, transparent) 50%, transparent 65%)",
                mixBlendMode: "screen",
              }}
            />
          )}
          <motion.div style={{ x: px, y: py }} className="absolute inset-0">
            <motion.div
              initial={playIntro ? { opacity: 0, scale: 0.94, filter: "blur(8px)" } : false}
              animate={playIntro ? { opacity: 1, scale: 1, filter: "blur(0px)" } : undefined}
              transition={{ delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-[2.5rem] glass-strong glow-ring"
            />
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              {/* Stage 1: cinematic entrance — slide + scale + blur lift */}
              <motion.div
                className="absolute inset-0"
                initial={playIntro ? { opacity: 0, x: -140, y: 24, scale: 0.9, rotate: -2, filter: "blur(16px)" } : false}
                animate={playIntro ? {
                  opacity: [0, 1, 1, 1],
                  x: [-140, -28, 6, 0],
                  y: [24, 8, -2, 0],
                  scale: [0.9, 0.98, 1.01, 1],
                  rotate: [-2, -0.6, 0.2, 0],
                  filter: ["blur(16px)", "blur(4px)", "blur(0px)", "blur(0px)"],
                } : undefined}
                transition={{
                  duration: 2.4,
                  ease: [0.22, 1, 0.36, 1],
                  times: [0, 0.5, 0.82, 1],
                }}
                style={{ willChange: "transform, opacity, filter" }}
              >
                {/* Stage 2: settled idle — gentle breathing + soft shoulder sway */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -3, 0, -2, 0], rotate: [0, 0.25, 0, -0.2, 0] }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: playIntro ? 2.6 : 0,
                  }}
                  style={{ transformOrigin: "50% 80%" }}
                >
                  {/* Stage 3: micro head tracking via parallax (already on parent), plus tiny scale breath */}
                  <motion.img
                    src={naazFront}
                    alt="Naaz Mulla — hijabi data analyst illustration"
                    className="absolute inset-0 h-full w-full object-cover select-none"
                    draggable={false}
                    animate={{ scale: [1, 1.006, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    loading="eager"
                    decoding="async"
                  />
                  {/* Intro-only side-pose overlay: slides in from off-screen, rotates toward viewer, cross-fades into front pose */}
                  {playIntro && (
                    <motion.img
                      src={naazSide}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                      draggable={false}
                      initial={{ opacity: 0, x: "-55%", scale: 1.04, rotateY: -28, filter: "blur(10px)" }}
                      animate={{
                        opacity: [0, 1, 1, 0.4, 0],
                        x: ["-55%", "-12%", "0%", "0%", "0%"],
                        scale: [1.04, 1.01, 1, 1, 1],
                        rotateY: [-28, -10, -2, 0, 0],
                        filter: ["blur(10px)", "blur(2px)", "blur(0px)", "blur(0px)", "blur(0px)"],
                      }}
                      transition={{ duration: 2.6, times: [0, 0.35, 0.6, 0.82, 1], ease: [0.22, 1, 0.36, 1] }}
                      style={{ willChange: "opacity, transform, filter", transformPerspective: 1000, transformOrigin: "60% 50%" }}
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Soft hijab cloth shimmer (subtle highlight drifting) */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                animate={{ opacity: [0.0, 0.35, 0.0], x: [-10, 10, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                style={{
                  background:
                    "radial-gradient(60% 30% at 35% 25%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 70%)",
                  mixBlendMode: "screen",
                }}
              />

              {/* Natural blink — quick shutter near the eyes */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute left-[30%] right-[30%] top-[33%] h-[3%] rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in oklab, var(--background) 70%, transparent), transparent)",
                  transformOrigin: "center",
                  filter: "blur(1px)",
                }}
                animate={{ scaleY: [0, 0, 1, 0, 0, 0, 1, 0, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.32, 0.34, 0.36, 0.7, 0.74, 0.76, 0.78, 1],
                  delay: playIntro ? 3 : 1.2,
                }}
              />

              {/* Subtle typing pulse — faint glow over laptop area */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute left-[18%] right-[42%] bottom-[14%] h-[6%] rounded-full"
                animate={{ opacity: [0.0, 0.5, 0.0, 0.4, 0.0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
                style={{
                  background:
                    "radial-gradient(60% 100% at 50% 50%, color-mix(in oklab, var(--accent) 55%, transparent), transparent 70%)",
                  filter: "blur(6px)",
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </motion.div>

          {/* floating chips */}
          <FloatChip className="left-[-6%] top-[10%]" delay={0} icon={<BarChart3 className="h-4 w-4" />} title="Revenue" value="+24.6%" />
          <FloatChip className="right-[-4%] top-[6%]" delay={0.4} icon={<Brain className="h-4 w-4" />} title="Model AUC" value="0.93" />
          <FloatChip className="left-[-10%] bottom-[18%]" delay={0.8} icon={<Database className="h-4 w-4" />} title="Rows cleaned" value="1.2M" />
          <FloatChip className="right-[-6%] bottom-[10%]" delay={1.2} icon={<Sparkles className="h-4 w-4" />} title="Insights" value="Live" />
        </motion.div>
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
