import "./ResumeProjectList.css";
import { Link } from "react-router-dom";
import { cleanUri } from "../../../helpers.js";

const ResumeProject = ({ project }) => {
  return (
    <li>
      <article className="resumeProjectItem">
        <h3 className="resumeProjectTitle">{project.name}</h3>
        <p className="resumeProjectDescription">{project.description}</p>
        <ul className="resumeProjectLinks resumeList">
          <li>
            <span className="resumeProjectLinkTitle">GitHub: </span>
            <Link
              to={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="resumeProjectLink"
            >
              {cleanUri(project.url)}
            </Link>
          </li>
          <li>
            <span className="resumeProjectLinkTitle">Link: </span>
            <Link
              to={project.homepageUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="resumeProjectLink"
            >
              {cleanUri(project.homepageUrl)}
            </Link>
          </li>
        </ul>
      </article>
    </li>
  );
};

const ResumeProjectList = ({ projects, githubLink }) => {
  return (
    <>
      <p className="githubLink">
        <span className="resumeProjectLinkTitle">GitHub: </span>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer noopener"
          className="resumeProjectLink"
        >
          {cleanUri(githubLink)}
        </a>
        {/* not sure if want this as small as 9pt equivalent */}
        &nbsp;(for additional details and projects)
      </p>
      <ul>
        {projects.map((project, index) => {
          return <ResumeProject project={project} key={index} />;
        })}
      </ul>
    </>
  );
};
export default ResumeProjectList;
