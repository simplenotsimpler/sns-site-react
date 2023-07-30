import { LinkButton } from "../../../components/Button/Button.jsx";
import "./HeroContent.css";
import { Link } from "react-router-dom";

//TODO: fix links via hash not working
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
          I’m a software developer located in Beech Grove, Indiana. I specialize
          in creating responsive, user-friendly, accessible applications. I
          created this site to showcase my personal, academic, and professional
          projects. Please feel free to check out my{" "}
          <Link to="#portfolio" className="heroLink">
            portfolio
          </Link>
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
          <Link to="#skills" className="heroLink">
            skills
          </Link>{" "}
          and{" "}
          <Link
            to="https://simplenotsimpler.com/resume"
            target="_blank"
            rel="noreferrer noopener"
            className="heroLink"
          >
            resume
          </Link>
        </p>
      </div>
      {/* <p className="summary">{summary}</p> */}
      {/* <LinkButton to="#contact">Let's Connect</LinkButton> */}
    </div>
  );
};
export default HeroContent;
