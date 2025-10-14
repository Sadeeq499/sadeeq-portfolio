import Hero from "@/components/home/Hero";
import AboutMe from "@/components/home/AboutMe";
import Services from "@/components/home/Services";
import Resume from "@/components/home/Resume";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
