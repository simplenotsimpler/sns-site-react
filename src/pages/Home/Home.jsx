//data stuff
import { useBasics } from "../../hooks/useBasics.js";

//layout components
import NavHeader from "../../components/layout/NavHeader/NavHeader.jsx";
import Section from "../../components/layout/Section.jsx";
import SEO from "../../components/layout/SEO.jsx";

//content components
import About from "../../features/About/About.jsx";
import Projects from "../../features/Projects/Projects.jsx";
import Skills from "../../features/Skills/Skills.jsx";
import Contact from "../../features/Contact/Contact.jsx";

import "./Home.css";

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
        <Section id="about" className="homeSection" heading="About">
          <About />
        </Section>
        <Section id="portfolio" className="homeSection" heading="Portfolio">
          <Projects />
        </Section>
        <Section id="skills" className="homeSection" heading="Skills">
          <Skills />
        </Section>
        <Section id="contact" className="homeSection" heading="Contact">
          <Contact />
        </Section>
      </main>
    </>
  );
};

export default Home;
