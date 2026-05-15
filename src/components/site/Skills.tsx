import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const skills = [
  { n: "Python", c: "from-yellow-300/30 to-blue-400/30" },
  { n: "SQL", c: "from-blue-400/30 to-cyan-400/30" },
  { n: "Power BI", c: "from-amber-300/30 to-orange-400/30" },
  { n: "Excel", c: "from-emerald-400/30 to-teal-400/30" },
  { n: "Microsoft Fabric", c: "from-indigo-400/30 to-violet-400/30" },
  { n: "Azure", c: "from-sky-400/30 to-blue-500/30" },
  { n: "Machine Learning", c: "from-fuchsia-400/30 to-violet-400/30" },
  { n: "Data Visualization", c: "from-pink-400/30 to-rose-400/30" },
  { n: "Data Cleaning", c: "from-violet-400/30 to-purple-400/30" },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader eyebrow="Toolbelt" title={<>Skills that <span className="text-gradient">compound</span>.</>}
        sub="Hover the orbs — each one is a daily driver in my analytics workflow." />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div key={s.n}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            whileHover={{ rotateX: 6, rotateY: -6, y: -6 }}
            style={{ transformPerspective: 800 }}
            className="group relative aspect-[5/3] overflow-hidden rounded-3xl glass-strong p-6">
            <div className={`absolute -inset-10 bg-gradient-to-br ${s.c} opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-90`} />
            <div className="relative flex h-full flex-col justify-between">
              <div className="h-3 w-3 rounded-full bg-foreground/80 shadow-[0_0_18px_4px] shadow-primary/60" />
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Stack</div>
                <div className="mt-1 font-display text-2xl font-semibold">{s.n}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
