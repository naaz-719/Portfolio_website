import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { SectionHeader } from "./Section";

const projects = [
  { t: "Sales Dashboard", d: "Executive-ready Power BI report tracking revenue, margin, and pipeline health across regions.", k: ["Power BI", "DAX", "SQL"], m: [{l:"Revenue",v:"$8.4M"},{l:"YoY",v:"+24%"}], g: "from-violet-500/40 to-fuchsia-500/40" },
  { t: "HR Analytics", d: "Attrition prediction model and workforce dashboard surfacing top retention drivers.", k: ["Python", "scikit-learn", "Power BI"], m: [{l:"Accuracy",v:"91%"},{l:"Attrition",v:"-12%"}], g: "from-blue-500/40 to-cyan-400/40" },
  { t: "Customer Churn Analysis", d: "End-to-end churn modeling pipeline with feature engineering and SHAP explainability.", k: ["Python", "XGBoost", "SHAP"], m: [{l:"AUC",v:"0.93"},{l:"Recall",v:"0.88"}], g: "from-pink-500/40 to-violet-500/40" },
  { t: "E-commerce Dashboard", d: "Funnel, cohort and LTV insights for an online retailer — from raw orders to a polished BI surface.", k: ["SQL", "Power BI", "Excel"], m: [{l:"AOV",v:"+18%"},{l:"LTV",v:"$312"}], g: "from-emerald-400/40 to-teal-500/40" },
  { t: "Microsoft Fabric Pipeline", d: "Lakehouse + dataflow gen2 pipeline ingesting multi-source data into a star-schema semantic model.", k: ["Fabric", "Spark", "Azure"], m: [{l:"Ingest",v:"1.2M/hr"},{l:"Latency",v:"<3s"}], g: "from-indigo-500/40 to-blue-500/40" },
  { t: "Retail Insights ML", d: "Market-basket + RFM segmentation surfacing cross-sell opportunities for a grocery chain.", k: ["Python", "MLflow", "SQL"], m: [{l:"Lift",v:"3.4x"},{l:"Segments",v:"7"}], g: "from-amber-400/40 to-orange-500/40" },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader eyebrow="Selected work" title={<>Projects with <span className="text-gradient">proof.</span></>}
        sub="A blend of business intelligence, machine learning, and data engineering." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article key={p.t}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl glass p-5 transition-all hover:-translate-y-1">
            <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.g}`}>
              <div className="absolute inset-0 grid-bg opacity-50" />
              {/* mock chart */}
              <div className="absolute inset-x-4 bottom-4 flex h-1/2 items-end gap-1.5">
                {Array.from({ length: 14 }).map((_, idx) => (
                  <motion.div key={idx}
                    initial={{ height: 0 }} whileInView={{ height: `${20 + Math.sin(idx + i) * 30 + 50}%` }}
                    viewport={{ once: true }} transition={{ delay: 0.2 + idx * 0.04, duration: 0.6, ease: "easeOut" }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-foreground/80 to-foreground/30 backdrop-blur" />
                ))}
              </div>
              <div className="absolute left-4 top-4 flex gap-2">
                {p.m.map((mm) => (
                  <div key={mm.l} className="rounded-lg glass-strong px-2.5 py-1 text-[10px]">
                    <div className="text-muted-foreground">{mm.l}</div>
                    <div className="font-semibold text-foreground">{mm.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{p.t}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.d}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.k.map((kk) => <span key={kk} className="rounded-full glass px-2.5 py-1 text-[11px] text-muted-foreground">{kk}</span>)}
            </div>
            <div className="mt-5 flex gap-2">
              <a href="#" className="inline-flex items-center gap-1.5 rounded-lg glass-strong px-3 py-1.5 text-xs hover:bg-white/10"><Code2 className="h-3.5 w-3.5" /> Code</a>
              <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs text-primary-foreground"><ExternalLink className="h-3.5 w-3.5" /> Live</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
