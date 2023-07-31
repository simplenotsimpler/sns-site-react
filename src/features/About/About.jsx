import "./About.css";
import einstein from "../../assets/images/einstein_stencil.png";

import HeroContent from "./HeroContent/HeroContent.jsx";
import Quote from "./Quote/Quote.jsx";

//data stuff
import { useBasics } from "../../hooks/useBasics.js";

const About = () => {
  const { data: basics, isLoading, isError } = useBasics();

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading basics...</h1>;
  }
  return (
    <div className="aboutContent">
      <HeroContent intro={basics.intro} hero={basics.hero} />

      <div className="spotlight">
        <div className="einsteinImgHolder">
          <img src={einstein} alt="" />
        </div>
        <Quote quote={basics.quote} />
      </div>
    </div>
  );
};
export default About;
