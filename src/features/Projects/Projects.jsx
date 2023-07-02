import ProjectCards from "./ProjectCards/ProjectCards.jsx";

//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../fetchers/fetchProjects.js";
import ResumeProjectList from "./ResumeProjectList/ResumeProjectList.jsx";

// forResume flag - so can return a project list for the resume instead of cards
const Projects = ({ forResume = false, githubLink = null }) => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

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
        githubLink={githubLink}
      />
    );
  }
  return <ProjectCards projects={projects} />;
};
export default Projects;
