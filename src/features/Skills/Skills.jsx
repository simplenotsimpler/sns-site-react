import SkillCards from "./SkillCards/SkillsCards.jsx";

//data stuff
import { useSkills } from "../../hooks/useSkills.js";
import ResumeSkillList from "./ResumeSkillList/ResumeSkillList.jsx";

// this is so can return a skills list for the resume instead of cards
const Skills = ({ forResume = false }) => {
  const { data: skills, isLoading, isError } = useSkills();

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading skills...</h1>;
  }

  if (forResume) {
    return <ResumeSkillList skills={skills} />;
  }
  return <SkillCards skills={skills} />;
};
export default Skills;
