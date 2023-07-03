import { LinkButton } from "../../../components/Button/Button.jsx";
import "./HeroContent.css";

const HeroContent = ({ intro, summary }) => {
  return (
    <div className="heroContent">
      <p className="intro">{intro}</p>
      <p className="summary">{summary}</p>
      <LinkButton to="#contact">Let's Connect</LinkButton>
    </div>
  );
};
export default HeroContent;
