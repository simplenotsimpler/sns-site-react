import { Link } from "react-router-dom";
import "./Projects.css";

import FaIcon from "../FaIcon/FaIcon.jsx";
const DUMMY_IMAGE_URL =
  "https://dummyimage.com/265x270/080908/ffffff&text=Project";
// "https://dummyimage.com/800x270/080908/ffffff&text=Project";

const Project = ({ project }) => {
  const imgUrl = project.imgName
    ? `/images/projects/${project.imgName}`
    : DUMMY_IMAGE_URL;
  return (
    <li>
      <article className="project">
        <div
          className="projectImgHolder"
          style={{
            backgroundImage: `url(${imgUrl})`,
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

const Projects = ({ projects }) => {
  return (
    <ul className="projects">
      {projects.map((project) => {
        return <Project project={project} key={project.id} />;
      })}
    </ul>
  );
};

export default Projects;
