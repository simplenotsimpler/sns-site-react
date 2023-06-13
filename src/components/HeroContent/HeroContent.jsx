import Button from "../Button/Button.jsx";
import "./HeroContent.css";

const HeroContent = ({ intro, summary }) => {
  return (
    <div className="heroContent">
      <p className="intro">{intro}</p>
      <p className="summary">{summary}</p>
      <Button>Let's Connect</Button>
    </div>
  );
};
export default HeroContent;
