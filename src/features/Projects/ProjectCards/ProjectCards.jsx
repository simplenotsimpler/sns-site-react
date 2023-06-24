import { Link } from "react-router-dom";
import "./ProjectCards.css";

import FaIcon from "../../../components/FaIcon/FaIcon.jsx";

const DUMMY_IMAGE_URL =
  "https://dummyimage.com/265x270/080908/ffffff&text=Project";
// "https://dummyimage.com/800x270/080908/ffffff&text=Project";

const ProjectCard = ({ project }) => {
  const imgUrl = project.openGraphImageUrl
    ? project.openGraphImageUrl
    : DUMMY_IMAGE_URL;
  return (
    <li>
      <article className="projectCard">
        <div
          className="projectCardImgHolder"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>

        <section className="projectCardBody">
          <h1 className="projectCardTitle">{project.name}</h1>
          <p className="projectCardText">{project.description}</p>
        </section>

        <footer className="projectCardFooter">
          <Link
            to={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="projectCardLink"
          >
            <FaIcon icon="CodeBranch" className="projectCardIcon" />

            <span>GitHub</span>
          </Link>

          {project.homepageUrl && (
            <Link
              to={project.homepageUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="projectCardLink"
            >
              <FaIcon icon="Globe" className="projectCardIcon" />

              <span>Demo</span>
            </Link>
          )}
        </footer>
      </article>
    </li>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <ul className="projectCardsContainer">
      {projects.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </ul>
  );
};

export default ProjectCards;
