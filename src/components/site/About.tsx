import { motion } from "framer-motion";
import { Brain, GraduationCap, LineChart, Briefcase, Sparkles, Globe } from "lucide-react";
import { SectionHeader } from "./Section";

const cards = [
  { icon: Brain, title: "AI & ML specialization", body: "Built supervised, unsupervised and time-series models with scikit-learn, XGBoost and PyTorch." },
  { icon: GraduationCap, title: "Honors in Data Science", body: "First-class honors with research focus on customer behavior modeling." },
  { icon: LineChart, title: "Analytics with intent", body: "I obsess over the story behind every chart — clarity over decoration, always." },
  { icon: Briefcase, title: "Business Intelligence", body: "Power BI, Microsoft Fabric, and DAX modeling for executive-ready dashboards." },
  { icon: Globe, title: "GCC career goals", body: "Targeting data roles across UAE, KSA & Qatar — building for global teams." },
  { icon: Sparkles, title: "Quietly relentless", body: "I ship, polish, then ship again. Insights are only valuable when they're used." },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader eyebrow="About me" title={<>A modern hijabi analyst<br />building <span className="text-gradient">decision intelligence</span>.</>}
        sub="I sit at the intersection of analytics, machine learning, and business strategy — and I love every pixel of the dashboards in between." />
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
