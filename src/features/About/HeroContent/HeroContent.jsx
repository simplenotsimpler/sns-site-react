import "./HeroContent.css";
import { Link } from "react-router-dom";
import ReactScrollLink from "../../../components/ReactScrollLink.jsx";

//updated intro to h2 since WAVE Evaluation suggested it may be a heading
const HeroContent = ({ intro, hero }) => {
  return (
    <div className="heroContent">
      <div className="introContainer">
        <h2 className="intro">{intro}</h2>
      </div>
      <div className="summary">
        <p>
          {hero.lead} Please feel free to check out my{" "}
          <ReactScrollLink to="portfolio" className="heroLink">
            portfolio
          </ReactScrollLink>
          .
        </p>
        <p>{hero.why}</p>
        <p>
          {hero.extra} Please feel free to browse my{" "}
          <ReactScrollLink to="skills" className="heroLink">
            skills
          </ReactScrollLink>{" "}
          and{" "}
          <Link
            to="https://simplenotsimpler.com/resume"
            target="_blank"
            rel="noreferrer noopener"
            className="heroLink"
          >
            resume
          </Link>
          .
        </p>
        <div className="cta">
          <h2 className="ctaHeader">Let's Connect!!!</h2>
          <p className="ctaText">
            {hero.ctaIntro} Please feel free to email me at{" "}
            <Link to="mailto:contact@simplenotsimpler.com" className="heroLink">
              contact@simplenotsimpler.com
            </Link>{" "}
            or drop me a line via one of my other{" "}
            <ReactScrollLink to="contact" className="heroLink">
              contact
            </ReactScrollLink>{" "}
            methods.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroContent;
