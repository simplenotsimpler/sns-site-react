import "./SkillCards.css";

import FaIcon from "../../../components/FaIcon/FaIcon.jsx";

const SkillCardKeyword = ({ keyword }) => {
  return <li>{keyword}</li>;
};

const SkillCardKeywords = ({ keywords }) => {
  return (
    <ul className="skillCardKeywords">
      {keywords.map((keyword, index) => {
        return <SkillCardKeyword keyword={keyword} key={index} />;
      })}
    </ul>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <li>
      <section className="skillCardSection">
        <FaIcon icon={skill.icon} className="iconWithBackground" />
        <h1 className="skillCardTitle">{skill.name}</h1>
        <SkillCardKeywords keywords={skill.keywords} />
      </section>
    </li>
  );
};

const SkillCards = ({ skills }) => {
  return (
    <ul className="skillCards">
      {skills.map((skill) => {
        return <SkillCard skill={skill} key={skill._id} />;
      })}
    </ul>
  );
};

export default SkillCards;
