//data stuff
import { useBasics } from "../../hooks/useBasics.js";

import ScrollToHashElement from "../../components/layout/ScrollToHashElement.js";
import NavHeader from "../../components/layout/NavHeader/NavHeader.jsx";

import About from "../../features/About/About.jsx";
import Projects from "../../features/Projects/Projects.jsx";
import Skills from "../../features/Skills/Skills.jsx";
import Contact from "../../features/Contact/Contact.jsx";

import "./Home.css";
import SEO from "../../components/layout/SEO.jsx";

//TODO: phase 2: get a real spinner or use skeleton

//generate ogimg on fly?
const Home = () => {
  const { data: basics, isLoading, isError } = useBasics();

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading portfolio...</h1>;
  }

  return (
    <>
      <ScrollToHashElement />
      <SEO
        title={`${basics.siteName} | Portfolio`}
        description={basics.summary}
        keywords={basics.keywords}
        name={basics.siteName}
        type={basics.twitterCardType}
        websiteUrl={basics.website}
        ogImgUrl={process.env.SITE_OGIMG_URL}
      />
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
