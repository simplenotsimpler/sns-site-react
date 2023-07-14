import ProjectCards from "./ProjectCards/ProjectCards.jsx";

//data stuff
import { useProjects } from "../../hooks/useProjects.js";
import ResumeProjectList from "./ResumeProjectList/ResumeProjectList.jsx";

// forResume flag - so can return a project list for the resume instead of cards
const Projects = ({ forResume = false }) => {
  const { data: projects, isLoading, isError } = useProjects();

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading projects...</h1>;
  }

  if (forResume) {
    return (
      <ResumeProjectList
        projects={projects}
        forResume={true}
        
      />
    );
  }
  return <ProjectCards projects={projects} />;
};
export default Projects;
