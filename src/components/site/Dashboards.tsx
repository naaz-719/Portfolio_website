import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { SectionHeader } from "./Section";

const kpis = [
  { i: DollarSign, l: "Revenue", v: "$8.42M", d: "+24.6%" },
  { i: Users, l: "Active users", v: "128.4K", d: "+12.1%" },
  { i: TrendingUp, l: "Conversion", v: "4.82%", d: "+0.6 pts" },
  { i: Activity, l: "Retention", v: "91.3%", d: "+3.2%" },
];

export function Dashboards() {
  return (
    <section id="dashboards" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader eyebrow="Live workspace" title={<>An <span className="text-gradient">always-on</span> analytics surface.</>}
        sub="A taste of the dashboards I build — every widget tells a decision-grade story." />

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2rem] glass-strong p-5 md:p-8 glow-ring">
        <div className="grid gap-4 md:grid-cols-4">
          {kpis.map((k, i) => (
            <motion.div key={k.l}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl glass p-4">
              <div className="flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/30">
                  <k.i className="h-4 w-4 text-foreground" />
                </div>
                <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">{k.d}</span>
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
              <div className="font-display text-2xl font-semibold">{k.v}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl glass p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Revenue trend</div>
                <div className="font-display text-lg font-semibold">Last 12 months</div>
              </div>
              <div className="flex gap-1 text-[11px] text-muted-foreground">
                <span className="rounded-md glass px-2 py-1">1M</span>
                <span className="rounded-md bg-primary/30 px-2 py-1 text-foreground">12M</span>
                <span className="rounded-md glass px-2 py-1">All</span>
              </div>
            </div>
            <Chart />
          </div>

          <div className="rounded-2xl glass p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Top segments</div>
            <div className="font-display text-lg font-semibold">By contribution</div>
            <div className="mt-4 space-y-3">
              {[
                { l: "Enterprise", v: 78, c: "from-primary to-accent" },
                { l: "Mid-market", v: 56, c: "from-secondary to-primary" },
                { l: "SMB", v: 41, c: "from-accent to-primary" },
                { l: "Self-serve", v: 24, c: "from-secondary to-accent" },
              ].map((s, i) => (
                <div key={s.l}>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{s.l}</span>
                    <span className="font-medium">{s.v}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${s.c}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Chart() {
  const points = [20, 35, 28, 48, 42, 60, 55, 72, 68, 82, 76, 92];
  const max = 100;
  const w = 600, h = 180, step = w / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="mt-5">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full">
        <defs>
          <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.16 320)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 320)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gl" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.18 295)" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 320)" />
          </linearGradient>
        </defs>
        <motion.path d={area} fill="url(#ga)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
        <motion.path d={path} fill="none" stroke="url(#gl)" strokeWidth="2.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeInOut" }} />
        {points.map((p, i) => (
          <circle key={i} cx={i * step} cy={h - (p / max) * h} r="3" fill="oklch(0.97 0.01 280)" />
        ))}
      </svg>
    </div>
  );
}
