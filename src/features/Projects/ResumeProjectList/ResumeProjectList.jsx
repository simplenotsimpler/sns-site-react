import "./ResumeProjectList.css";
import { Link } from "react-router-dom";
import { cleanUri, formatWorkDate } from "../../../helpers.js";

const ResumeProject = ({ project }) => {
  return (
    <li>
      <article className="resumeProjectItem">
        <header className="resumeProjectHeader">
          <h1 className="resumeProjectTitle">{project.name}</h1>
          <p className="resumeProjectDate">
            {formatWorkDate(project.createdAt)} -{" "}
            {formatWorkDate(project.pushedAt)}
          </p>
        </header>
        <p className="resumeProjectDescription">{project.description}</p>
        <ul className="resumeProjectLinks">
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

const ResumeProjectList = ({ projects }) => {
  return (
    <>
      <ul>
        {projects.map((project, index) => {
          return <ResumeProject project={project} key={index} />;
        })}
      </ul>
    </>
  );
};
export default ResumeProjectList;
