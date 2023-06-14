import HeroContent from "../HeroContent/HeroContent.jsx";
import "./About.css";

import Quote from "../Quote/Quote.jsx";

const About = ({basics}) => {
  return (
    <div className="aboutContent">
      <HeroContent intro={basics.intro} summary={basics.summary} />

      <div className="spotlight">
        <div className="einsteinImgHolder">
          <img src="/images/einstein_stencil.png" alt="" />
        </div>
        <Quote quote={basics.quote} />
      </div>
    </div>
  );
};
export default About;
