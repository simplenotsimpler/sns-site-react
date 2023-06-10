import Contact from "../../components/Contact/Contact.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import NavHeader from "../../components/layout/NavHeader/NavHeader.jsx";
import ScrollToHashElement from "../../components/layout/ScrollToHashElement.js";

import { skills } from "../../data/skillsData.js";
import { projects } from "../../data/projectsData.js";

import "./Home.css";

const Home = () => {
  return (
    <>
      <ScrollToHashElement />
      <NavHeader />
      <main className="container">
        <section id="about" className="homeSection holderColor">
          About
        </section>
        <section id="portfolio" className="homeSection">
          <h1 className="sectionTitle">Projects</h1>
          <Projects projects={projects} />
        </section>
        <section id="skills" className="homeSection">
          <h1 className="sectionTitle">Skills</h1>
          <Skills skills={skills} />
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
