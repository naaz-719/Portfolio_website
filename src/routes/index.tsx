import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Background } from "@/components/site/Background";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Splash } from "@/components/site/Splash";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Timeline } from "@/components/site/Timeline";
import { Certifications } from "@/components/site/Certifications";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Naaz Mulla — Data Analyst & Aspiring Data Scientist",
      },
      {
        name: "description",
        content:
          "Premium portfolio of Naaz Mulla, a hijabi data analyst building dashboards, ML pipelines, and decision intelligence with Power BI, Python, SQL and Microsoft Fabric.",
      },
      {
        property: "og:title",
        content: "Naaz Mulla — Data Analyst & Aspiring Data Scientist",
      },
      {
        property: "og:description",
        content:
          "Dashboards, ML and BI for modern teams. Available across the GCC.",
      },
    ],
  }),
});

function Index() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    try {
      const alreadyShown =
        sessionStorage.getItem("naaz_splash_shown") === "1";

      if (!alreadyShown) {
        sessionStorage.setItem("naaz_splash_shown", "1");

        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 2800);

        return () => clearTimeout(timer);
      }

      setShowSplash(false);
    } catch {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showSplash) {
    return (
      <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
        <Splash onDone={() => setShowSplash(false)} />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <Contact />
    </main>
  );
}