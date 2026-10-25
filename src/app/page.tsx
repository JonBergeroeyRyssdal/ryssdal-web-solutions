
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import Contact from "@/components/home/Contact";
import Projects from "@/components/Projects";
import FAQ from "@/components/home/FAQ";
import { showProjects } from "@/data/projects";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      {showProjects && <Projects />}
      <About />
      <WhyChooseMe />
      <FAQ />
      <Contact />
    </main>
  );
}

