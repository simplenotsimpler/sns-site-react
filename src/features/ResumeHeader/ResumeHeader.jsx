import "./ResumeHeader.css";
import { getProfile } from "../../helpers.js";
import { cleanUri } from "../../helpers.js";
import { Link } from "react-router-dom";

const ResumeHeader = ({ basics }) => {
  const LinkedInProfile = getProfile(basics.profiles, "LinkedIn");
  const GitHubProfile = getProfile(basics.profiles, "GitHub");

  return (
    <header className="resumeHeader">
      <h1 className="resumeTitle">{basics.name}</h1>
      <p className="resumeHeaderContact">
        <span className="resumePhone">{basics.phone}</span>
        <span className="resumeLocation">
          {basics.location.city}, {basics.location.region}
        </span>
        <span>
          <Link to={`mailto:${basics.email}`} className="resumeEmail">
            {basics.email}
          </Link>
        </span>
      </p>
      <p className="resumeHeaderLinks">
        <Link
          to={GitHubProfile.url}
          target="_blank"
          rel="noreferrer noopener"
          className="resumeGitHub"
        >
          {cleanUri(GitHubProfile.url)}
        </Link>

        <Link
          to={LinkedInProfile.url}
          target="_blank"
          rel="noreferrer noopener"
          className="resumeLinkedIn"
        >
          {cleanUri(LinkedInProfile.url)}
        </Link>

        <Link
          to={basics.website}
          target="_blank"
          rel="noreferrer noopener"
          className="resumeWebsite"
        >
          {cleanUri(basics.website)}
        </Link>
      </p>
    </header>
  );
};
export default ResumeHeader;
