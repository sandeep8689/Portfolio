import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Dsa from "./components/Dsa";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="glow-backdrop" aria-hidden="true" />
      <div className="grid-backdrop" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Dsa />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
