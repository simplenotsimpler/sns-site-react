import "./Skills.css";

import FaIcon from "../FaIcon/FaIcon.jsx";

const Keyword = ({ keyword }) => {
  return <li>{keyword}</li>;
};

const Keywords = ({ keywords }) => {
  return (
    <ul className="keywords">
      {keywords.map((keyword, index) => {
        return <Keyword keyword={keyword} key={index} />;
      })}
    </ul>
  );
};

const Skill = ({ skill }) => {
  return (
    <li>
      <section className="skillSection">
        <FaIcon icon={skill.icon} className="iconWithBackground" />
        <h1 className="skillTitle">{skill.name}</h1>
        <Keywords keywords={skill.keywords} />
      </section>
    </li>
  );
};


const Skills = ({skills}) => {
  return (
    <ul className="skills">
      {skills.map((skill) => {
        return <Skill skill={skill} key={skill.id} />;
      })}
    </ul>
  );
};

export default Skills;
