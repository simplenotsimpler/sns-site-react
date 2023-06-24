import SkillCards from "./SkillCards/SkillsCards.jsx";

//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchSkills } from "../../fetchers/fetchSkills.js";

//TODO: add flag so can specify for portfolio or resume
// this is so can return a skills list for the resume instead of cards
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

  return <SkillCards skills={skills} />;
};
export default Skills;
