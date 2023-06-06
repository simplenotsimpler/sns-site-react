import React from "react";
import { HashLink } from "react-router-hash-link";

//TODO: use NavHashLink so can get the active class stuff
const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <HashLink to="#about">About</HashLink>
          </li>
          <li>
            <HashLink to="#portfolio">Portfolio</HashLink>
          </li>
          <li>
            <HashLink to="#skills">Skills</HashLink>
          </li>
          <li>
            <HashLink to="#contact">Contact</HashLink>
          </li>
        </ul>
      </nav>
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
    </>
  );
};

export default Home;
