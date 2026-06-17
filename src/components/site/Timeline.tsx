import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const items = [
  { y: "2026", t: "MSc Data Science & AI — BITS Pilani Digital", d: "Advancing expertise in AI, machine learning, analytics, and modern data platforms." },
  { y: "2025", t: "Analytics, BI & Industry Experience", d: "Graduated in AI & ML with Honors in Data Science while building solutions using Power BI, Microsoft Fabric, ETL, and AI-powered analytics" },
  { y: "2024", t: "Machine Learning Projects", d: "Developed the Music Genre Classification project and strengthened practical machine learning and data science skills." },
  { y: "2023", t: "Honors in Data Science", d: "Began the Honors in Data Science journey and deepened knowledge of Artificial Intelligence, Machine Learning, and data science concepts." },
  { y: "2022", t: "Data Science Internship — DevTown", d: "Built a House Price Prediction project and gained hands-on experience in machine learning, predictive modeling, and AI fundamentals." }
];

export function Timeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-4 py-28">
      <SectionHeader eyebrow="My Data" title={<> <span className="text-gradient">My Data &</span> AI Journey.</>} />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div key={it.y}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_4px] shadow-primary/50 md:left-1/2" />
              <div className="hidden flex-1 md:block" />
              <div className="ml-10 flex-1 rounded-2xl glass p-5 md:ml-0 md:mx-8">
                <div className="text-xs font-medium text-primary">{it.y}</div>
                <div className="mt-1 font-display text-lg font-semibold">{it.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
