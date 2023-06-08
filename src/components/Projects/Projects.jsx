import { Link } from "react-router-dom";
import "./Projects.css";
import { FaCodeBranch, FaGlobe } from "react-icons/fa";
import { projects } from "../../data/projectsData.js";

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
            <FaCodeBranch className="projectIcon" />
            <span>GitHub</span>
          </Link>

          {project.homepageUrl && (
            <Link
              to={project.homepageUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="projectLink"
            >
              <FaGlobe className="projectIcon" />
              <span>Demo</span>
            </Link>
          )}
        </footer>
      </article>
    </li>
  );
};

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
