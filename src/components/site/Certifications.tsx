import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./Section";

const certs = [
  {
    t: "Oracle Certified Data Science Professional",
    i: "Oracle",
    year: "2025",
    g: "from-purple-500/30 to-violet-500/30"
  },
  {
    t: "Oracle AI Foundations Associate",
    i: "Oracle",
    year: "2025",
    g: "from-indigo-500/30 to-purple-500/30"
  },
  {
    t: "B.E. Computer Science & Engineering (AI & ML)",
    i: "Finolex Academy of Management & Technology",
    year: "2025",
    g: "from-blue-500/30 to-cyan-500/30"
  },
  {
    t: "Honors in Data Science",
    i: "Academic Credential",
    year: "2025",
    g: "from-pink-500/30 to-fuchsia-500/30"
  },
  {
    t: "AI/ML Internship – Labmentix",
    i: "Labmentix",
    year: "2026",
    g: "from-emerald-500/30 to-green-500/30"
  },
  {
    t: "Data Science Internship – DevTown",
    i: "DevTown",
    year: "2022",
    g: "from-orange-500/30 to-amber-500/30"
  }
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative mx-auto max-w-7xl px-4 py-28"
    >
      <SectionHeader
        eyebrow="Achievements"
        title={
          <>
            Certifications &{" "}
            <span className="text-gradient">Credentials</span>
          </>
        }
        sub="Professional certifications, academic achievements, and industry experience in Data Science, AI, and Analytics."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.55 }}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            style={{ transformPerspective: 900 }}
            className="group relative overflow-hidden rounded-3xl glass-strong p-6"
          >
            <div
              className={`absolute -inset-16 bg-gradient-to-br ${c.g} opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70`}
            />

            <div className="relative flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-foreground glow-ring">
                <Award className="h-5 w-5" />
              </div>

              <BadgeCheck className="h-5 w-5 text-primary" />
            </div>

            <div className="relative mt-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {c.i}
              </div>

              <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
                {c.t}
              </h3>
            </div>

            <div className="relative mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="rounded-full glass px-2.5 py-1">
                Verified
              </span>

              <span>Issued · {c.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}