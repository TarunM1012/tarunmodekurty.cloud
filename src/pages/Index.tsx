import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const { hash } = useLocation();

  // Honor deep links like /#work coming from other routes.
  useEffect(() => {
    if (!hash) return;
    requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div className="mt-24 md:mt-32">
          <Work />
          <Experience />
          <About />
        </div>
        <Contact />
      </main>
    </div>
  );
};

export default Index;
