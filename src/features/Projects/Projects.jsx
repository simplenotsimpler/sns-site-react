import ProjectCards from "./ProjectCards/ProjectCards.jsx";

//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../fetchers/fetchProjects.js";

//TODO: add flag so can specify for portfolio or resume
// this is so can return a project list for the resume instead of cards
const Projects = () => {
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
  return <ProjectCards projects={projects} />;
};
export default Projects;
