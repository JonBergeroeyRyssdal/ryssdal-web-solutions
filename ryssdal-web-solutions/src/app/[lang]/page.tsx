
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Projects from "@/components/Projects";



export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

