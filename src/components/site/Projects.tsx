import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { SectionHeader } from "./Section";

const projects = [
  { 
    t: "SMART DELIVERY ANALYTICS PLATFORM USING MICROSOFT FABRIC", 
    d: "End-to-End Analytics Engineering & Business Intelligence Platform for Delivery Operations, KPI Monitoring, and Predictive Analytics", 
    k: ["Power BI", "DAX", "SQL", "Data Lakehouse, Data Warehouse", "Medallion Architecture", "ETL"], 
    m: [{l:"Total Orders",v:"48.3K"},{l:"YoY",v:"+24%"}], 
    gradient: "from-blue-600/40 to-indigo-500/40",
    github: "https://github.com/naaz-719/Amazon-Delivery-Time-Prediction-Fabric.git",
    live: "https://amazon-delivery-time-prediction-fabric-1.onrender.com/", // Defaulted to GitHub for testing
  },
  { 
    t: "Netflix Content Analysis & Dashboard", 
    d: "This project analyzes Netflix content data to uncover insights about content distribution, growth trends, audience targeting, and regional availability.It combinenes data cleaning, exploratory analysis, and an interactive Power BI dashboard to visualize key findings.",  
    k: ["Python", "Power BI", "SQL", "Data Visualization", "ETL", "NLP"], 
    m: [{l:"Accuracy",v:"72.5%"},{l:"Titles",v:"9K+"}], 
    gradient: "from-blue-500/40 to-cyan-400/40",
    github: "https://github.com/naaz-719/Clustering-and-Exploratory-Data-Analysis-of-Netflix-Content-for-Trend-Insights.git", 
    live: "https://app.powerbi.com/links/2ryZkycyXp?ctid=880db91c-d2b8-4752-96bb-ec6f76398bf3&pbi_source=linkShare"
  },
  { 
    t: "GCC TELECOM CUSTOMER INTELLIGENCE & REVENUE PROTECTION PLATFORM", 
    d: "An end-to-end Telecom Customer Intelligence Platform built using Databricks, Lakeflow Designer, Machine Learning, Streamlit, and Generative AI.", 
    k: ["Python", "Databricks", "Lakeflow", "Streamlit", "Generative AI"], 
    m: [{l:"Churned Customers",v:"26.4%"},{l:"Revenue",v:"$16.07M"}], 
    gradient: "from-pink-500/40 to-violet-500/40",
    github: "https://github.com/naaz-719/GCC_Telecom_Customer_Intelligence-.git/",
    live: "https://telecomgccgit-2cymk4ufe8uu8z5wo2indk.streamlit.app/"
  },
  { 
    t: "E-Commerce Business Analytics Platform", 
    d: "Transformed e-commerce data into actionable insights through analytics, forecasting, and interactive dashboards.", 
    k: ["Microsoft Fabric", "Power BI", "Analytics", "Forecasting"], 
    m: [{l:"Revenue",v:"$15.59M"},{l:"AOV",v:"$157.96"}], 
    gradient: "from-emerald-400/40 to-teal-500/40",
    github: "https://github.com/naaz-719/E-commerce_Business_Analytics.git",
    live: "https://ecommerceanalytics2026.streamlit.app/"
  },
  { 
    t: "MUSIC GENRE CLASSIFICATION WITH MACHINE LEARNING", 
    d: "This project uses machine learning models—K-Nearest Neighbors (KNN) and Random Forest—to classify music genres accurately based on audio features.", 
    k: ["Python", "Librosa", "Matplotlib & Seaborn", "Scikit-learn", "Streamlit"], 
    m: [{l:"Accuracy",v:"91%"},{l:"Recalll",v:"89%"}], 
    gradient: "from-amber-400/40 to-orange-500/40",
    github: "https://github.com/naaz-719/Music-Genre-Classifier.git",
    live: "https://musicgenreclassifierproject.streamlit.app/"
  },

  { 
    t: "Agentic AI Travel Planning Assistant", 
    d: "Built an AI-powered travel planner generating personalized itineraries, hotel recommendations, budget analysis, and travel insights.", 
    k: ["LangChain", "Plotly", "Agentic AI", "Streamlit"], 
    m: [{l:"",v:""},{l:"",v:""}], 
    gradient: "from-indigo-500/40 to-blue-500/40",
    github: "https://github.com/naaz-719/Agentic_Ai_Langchain.git",
    live: "https://agenticai-uh9qsnlnruzzumdj45hxym.streamlit.app/"
  },
];

export function Projects() {
  // Safe link handler that breaks out of iframe sandboxes
  const handleNavigation = (url: string) => {
    if (!url || url === "#") return;
    
    // Forces the browser to open a fresh tab, ignoring iframe containers
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-28">
      <SectionHeader 
        eyebrow="Selected work" 
        title={<>Featured <span className="text-gradient">Projects.</span></>}
        sub="A blend of business intelligence, machine learning, and data engineering." 
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article 
            key={p.t}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.06 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl glass p-5 transition-all hover:-translate-y-1"
          >
            {/* Top Card Gradient Header Area */}
            <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 grid-bg opacity-50" />
              
              {/* Animated Mock Chart */}
              <div className="absolute inset-x-4 bottom-4 flex h-1/2 items-end gap-1.5">
                {Array.from({ length: 14 }).map((_, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ height: 0 }} 
                    whileInView={{ height: `${20 + Math.sin(idx + i) * 30 + 50}%` }}
                    viewport={{ once: true }} 
                    transition={{ delay: 0.2 + idx * 0.04, duration: 0.6, ease: "easeOut" }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-foreground/80 to-foreground/30 backdrop-blur" 
                  />
                ))}
              </div>

              {/* Metrics Pill Overlays */}
              <div className="absolute left-4 top-4 flex gap-2">
                {p.m.map((mm) => (
                  <div key={mm.l} className="rounded-lg glass-strong px-2.5 py-1 text-[10px]">
                    <div className="text-muted-foreground">{mm.l}</div>
                    <div className="font-semibold text-foreground">{mm.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <h3 className="mt-5 font-display text-xl font-semibold">{p.t}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.d}</p>
            
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.k.map((kk) => (
                <span key={kk} className="rounded-full glass px-2.5 py-1 text-[11px] text-muted-foreground">
                  {kk}
                </span>
              ))}
            </div>

            {/* Interactive Action Buttons */}
            <div className="mt-5 flex gap-2">
              <button 
                onClick={() => handleNavigation(p.github)}
                className="inline-flex items-center gap-1.5 rounded-lg glass-strong px-3 py-1.5 text-xs transition-all hover:bg-white/25 active:scale-95 cursor-pointer"
              >
                <Code2 className="h-3.5 w-3.5" /> Code
              </button>
              <button 
                onClick={() => handleNavigation(p.live)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs text-primary-foreground transition-all hover:opacity-90 active:scale-95 cursor-pointer"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}