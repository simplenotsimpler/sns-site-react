import ScrollToHashElement from "../../components/layout/ScrollToHashElement.js";
import NavHeader from "../../components/layout/NavHeader/NavHeader.jsx";

import About from "../../components/About/About.jsx";
import ProjectCards from "../../features/Projects/ProjectCards/ProjectCards.jsx";
import Skills from "../../components/Skills/Skills.jsx";

import Contact from "../../components/Contact/Contact.jsx";

import "./Home.css";
import Projects from "../../features/Projects/Projects.jsx";

//TODO: get a real spinner or use skeleton
const Home = () => {
  return (
    <>
      <ScrollToHashElement />
      <NavHeader />
      <main className="container">
        <section id="about" className="homeSection">
          <About />
        </section>
        <section id="portfolio" className="homeSection">
          <h1 className="sectionTitle">Portfolio</h1>

          <Projects />
        </section>
        <section id="skills" className="homeSection">
          <h1 className="sectionTitle">Skills</h1>
          <Skills />
        </section>
        <section id="contact" className="homeSection">
          <h1 className="sectionTitle">Contact</h1>
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
