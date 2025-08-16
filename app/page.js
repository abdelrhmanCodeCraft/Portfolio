import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import About from "./component/about/About";
import Skills from "./component/skills/Skills"
import ProjectsSection from "./component/projects/ProjectsSection";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </main>
  );
}