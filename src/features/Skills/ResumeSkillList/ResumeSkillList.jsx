import "./ResumeSkillList.css";

const ResumeKeyword = ({ keyword }) => {
  return <li>{keyword}</li>;
};

const ResumeSkillListItem = ({ skill }) => {
  return (
    <li>
      <h3 className="resumeSkillTitle">{skill.name}:</h3>
      <ul className="resumeKeywords">
        {skill.keywords.map((keyword, index) => (
          <ResumeKeyword keyword={keyword} key={index} />
        ))}
      </ul>
    </li>
  );
};

const ResumeSkillList = ({ skills }) => {
  return (
    <ul className="resumeSkillList resumeList">
      {skills.map((skill) => {
        return <ResumeSkillListItem skill={skill} key={skill._id} />;
      })}
    </ul>
  );
};
export default ResumeSkillList;
