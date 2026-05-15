import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const skills = [
  "Python", "SQL", "Power BI", "Excel",
  "Pandas", "NumPy", "Microsoft Fabric", "Azure",
  "Machine Learning", "Data Visualization", "Dashboard Development", "Data Cleaning",
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader eyebrow="Toolbelt" title={<>Skills that <span className="text-gradient">compound</span>.</>}
        sub="A focused stack I use daily across analytics, BI, and ML workflows." />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-full glass-strong px-6 py-4 text-center"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "radial-gradient(60% 100% at 50% 50%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)" }}
            />
            <span className="relative font-display text-sm font-semibold tracking-wide text-foreground md:text-base">
              {s}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
