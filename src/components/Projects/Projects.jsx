import { Link } from "react-router-dom";
import "./Projects.css";
import { projects } from "../../data/projectsData.js";
import FaIcon from "../FaIcon/FaIcon.jsx";

//TODO: switch to using font awesome directly
const Project = ({ project }) => {
  return (
    <li>
      <article className="project">
        <div
          className="projectImgHolder"
          style={{
            backgroundImage: `url(/images/projects/${project.imgName})`,
          }}
        ></div>

        <section className="projectBody">
          <h1 className="projectTitle">{project.name}</h1>
          <p className="projectText">{project.description}</p>
        </section>

        <footer className="projectFooter">
          <Link
            to={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="projectLink"
          >
            <FaIcon icon="CodeBranch" className="projectIcon" />

            <span>GitHub</span>
          </Link>

          {project.homepageUrl && (
            <Link
              to={project.homepageUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="projectLink"
            >
              <FaIcon icon="Globe" className="projectIcon" />

              <span>Demo</span>
            </Link>
          )}
        </footer>
      </article>
    </li>
  );
};

//TODO: pass projects as prop from Home page
const Projects = () => {
  return (
    <ul className="projects">
      {projects.map((project) => {
        return <Project project={project} key={project.id} />;
      })}
    </ul>
  );
};

export default Projects;
