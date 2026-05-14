import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./Section";

const certs = [
  { t: "Microsoft Power BI Data Analyst", i: "PL-300", g: "from-amber-300/40 to-orange-500/40" },
  { t: "Python for Data Science", i: "IBM", g: "from-blue-400/40 to-cyan-400/40" },
  { t: "Microsoft Fabric Analytics Engineer", i: "DP-600", g: "from-indigo-400/40 to-violet-500/40" },
  { t: "Azure Fundamentals", i: "AZ-900", g: "from-sky-400/40 to-blue-500/40" },
  { t: "Google Data Analytics", i: "Coursera", g: "from-emerald-400/40 to-teal-500/40" },
  { t: "SQL Advanced", i: "HackerRank", g: "from-fuchsia-400/40 to-pink-500/40" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader
        eyebrow="Credentials"
        title={<>Certifications & <span className="text-gradient">recognitions</span>.</>}
        sub="Continuous learning across the modern data & AI stack."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.55 }}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            style={{ transformPerspective: 900 }}
            className="group relative overflow-hidden rounded-3xl glass-strong p-6"
          >
            <div className={`absolute -inset-16 bg-gradient-to-br ${c.g} opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70`} />
            <div className="relative flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-foreground glow-ring">
                <Award className="h-5 w-5" />
              </div>
              <BadgeCheck className="h-5 w-5 text-primary" />
            </div>
            <div className="relative mt-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{c.i}</div>
              <h3 className="mt-1 font-display text-lg font-semibold leading-snug">{c.t}</h3>
            </div>
            <div className="relative mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="rounded-full glass px-2.5 py-1">Verified</span>
              <span>Issued · 2024</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
