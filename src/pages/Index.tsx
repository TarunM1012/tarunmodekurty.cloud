import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CommandMenu from "@/components/CommandMenu";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [commandOpen, setCommandOpen] = useState(false);
  const { hash } = useLocation();

  // Honor deep links like /#projects coming from other routes.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [hash]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navigation onOpenCommand={() => setCommandOpen(true)} />
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <main>
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
