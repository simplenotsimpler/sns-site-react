import NavHeader from "../../components/layout/NavHeader/NavHeader.jsx";
import ScrollToHashElement from "../../components/layout/ScrollToHashElement.js";

import "./Home.css";

const Home = () => {
  return (
    <>
      <ScrollToHashElement />
      <NavHeader />
      <main className="container">
        <section id="about" className="section-style">
          About
        </section>
        <section id="portfolio" className="section-style">
          Portfolio
        </section>
        <section id="skills" className="section-style">
          Skills
        </section>
        <section id="contact" className="section-style">
          Contact
        </section>
      </main>
    </>
  );
};

export default Home;
