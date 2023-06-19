import "./Skills.css";

import FaIcon from "../FaIcon/FaIcon.jsx";

//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchSkills } from "../../fetchers/fetchSkills.js";

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

const Skills = () => {
  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading skills...</h1>;
  }
  return (
    <ul className="skills">
      {skills.map((skill) => {
        return <Skill skill={skill} key={skill.id} />;
      })}
    </ul>
  );
};

export default Skills;
