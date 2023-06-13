import Button from "../Button/Button.jsx";
import "./HeroContent.css";

//maybe button should be outside hero content?
//or maybe I need a div for summary & button?
//or just need left padding / margin on button?
//TODO: maybe the content should be centered and just intro flex-start?
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
