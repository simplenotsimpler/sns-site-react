import { LinkButton } from "../../../components/Button/Button.jsx";
import "./HeroContent.css";
import { Link } from "react-router-dom";
import ReactScrollLink from "../../../components/ReactScrollLink.jsx";

//TODO: get summary content from db
//TODO: cta text
const HeroContent = ({ intro, summary }) => {
  return (
    <div className="heroContent">
      <div className="introContainer">
        <p className="intro">{intro}</p>
      </div>
      <div className="summary">
        <p>
          I’m a software developer specializing in creating responsive,
          user-friendly, accessible applications. I have a solid background in
          responsive web design (HTML, CSS, JavaScript), Visual Basic for
          Applications (VBA), and PowerShell. I created this site to showcase my
          personal, academic, and professional projects. Please feel free to
          check out my{" "}
          <ReactScrollLink to="portfolio" className="heroLink">
            portfolio
          </ReactScrollLink>
          .
        </p>
        <p>
          Why Simple Not Simpler? Some solutions are too complicated which
          result in unnecessary expense. Some solutions are too simple and don't
          achieve the goal. I try to balance these extremes by keeping in mind
          this bit of wisdom I found (often attributed to Einsten): "Everything
          Should Be Made as Simple as Possible, But Not Simpler".
        </p>
        <p>
          My coding skills are supplemented with advanced Excel skills and over
          17 years of experience providing exceptional technical support and
          customer service, including 7 years of experience providing deskside
          and system admin support. Please feel free to browse my{" "}
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
            Want to discuss a website or Office application project? Please feel
            free to email me at{" "}
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

      {/* <p className="summary">{summary}</p> */}
      {/* <LinkButton to="#contact">Let's Connect</LinkButton> */}
    </div>
  );
};
export default HeroContent;
