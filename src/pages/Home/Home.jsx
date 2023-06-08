import Projects from "../../components/Projects/Projects.jsx";
import NavHeader from "../../components/layout/NavHeader/NavHeader.jsx";
import ScrollToHashElement from "../../components/layout/ScrollToHashElement.js";

import "./Home.css";

//TODO add section title as prop & style accordingly
//TODO: rename classes here to not use hyphens (so friendly for CSS modules)
const Home = () => {
  return (
    <>
      <ScrollToHashElement />
      <NavHeader />
      <main className="container">
        <section id="about" className="section-style holder-color">
          About
        </section>
        <section id="portfolio" className="section-style">
          <Projects />
        </section>
        <section id="skills" className="section-style holder-color">
          Skills
        </section>
        <section id="contact" className="section-style holder-color">
          Contact
        </section>
      </main>
    </>
  );
};

export default Home;
