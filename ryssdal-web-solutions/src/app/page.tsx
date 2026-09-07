import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import SolutionExamples from "@/components/home/SolutionExamples";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Projects from "@/components/Projects";

export const metadata: Metadata={
  title: "Nettsider og digitale løsninger for bedrifter",
  description: "Nettsider, skreddersydde nettløsninger og integrasjoner for små bedrifter. Direkte samarbeid med utvikleren, fra første idé til ferdig løsning.",
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Projects />
      <SolutionExamples />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
