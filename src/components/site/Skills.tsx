import { motion } from "framer-motion";

const skills = [
  "Power BI", "SQL", "Python", "Excel", "Business Intelligence", 
  "Microsoft Fabric", "Dataflow Gen2", "Lakehouse", "ETL Pipelines", "Data Warehousing",
  "Machine Learning", "Pandas", "DAX & Data Modeling", "Azure", "AI-Powered Analytics", "Generative AI"
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Toolkit</div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            The stack behind the <span className="gradient-text">insights</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              className="glass rounded-2xl p-5 text-center cursor-default group relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.6 0.22 285 / 0.25), transparent 70%)" }} />
              <div className="relative font-display font-medium">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

