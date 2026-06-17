import { motion } from "framer-motion";
import { Brain, GraduationCap, LineChart, Briefcase, Sparkles, Globe } from "lucide-react";
import { SectionHeader } from "./Section";

const cards = [
  { icon: Brain, title: "Machine Learning & AI", body: "Developed predictive analytics solutions using Python, Scikit-learn, XGBoost, and Generative AI to support business decision-making." },
  { icon: GraduationCap, title: "Education & Research", body: "B.E. Computer Science (AI & ML) with Honors in Data Science from the University of Mumbai and currently pursuing an MSc in Data Science & AI at BITS Pilani Digital." },
  { icon: LineChart, title: "Data Analytics", body: "Analyzing data to uncover trends, measure performance, and support informed business decisions." },
  { icon: Briefcase, title: "Business Intelligence", body: "Designing interactive dashboards and reports that help stakeholders monitor KPIs and identify opportunities." },
  { icon: Globe, title: "Open to Opportunities", body: "Open to Data Analyst, Business Intelligence, Analytics Engineer, Data Engineering, and Data Science opportunities across India, GCC, and global teams." },
  { icon: Sparkles, title: "Modern Data Platforms", body: "Hands-on experience with Microsoft Fabric, Dataflow Gen2, Lakehouse architecture, SQL querying, ETL pipelines, data warehousing, machine learning, and AI-powered analytics solutions." },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader eyebrow="About me" title={<>Transforming Data into<br />Business Value Through <span className="text-gradient">Analytics & AI</span>.</>}
        sub="Computer Science graduate with Honors in Data Science and currently pursuing an MSc in Data Science & AI. My work focuses on using data to understand customer behavior, improve operational performance, and support better business decisions through analytics and intelligent solutions." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div key={c.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/5">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <c.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
