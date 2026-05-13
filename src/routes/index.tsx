import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/site/Background";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Dashboards } from "@/components/site/Dashboards";
import { Timeline } from "@/components/site/Timeline";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Naaz Mulla — Data Analyst & Aspiring Data Scientist" },
      { name: "description", content: "Premium portfolio of Naaz Mulla, a hijabi data analyst building dashboards, ML pipelines, and decision intelligence with Power BI, Python, SQL and Microsoft Fabric." },
      { property: "og:title", content: "Naaz Mulla — Data Analyst & Aspiring Data Scientist" },
      { property: "og:description", content: "Dashboards, ML and BI for modern teams. Available across the GCC." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Dashboards />
      <Timeline />
      <Contact />
    </main>
  );
}
