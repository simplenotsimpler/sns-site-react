import "./ResumeHeader.css";
import { getProfile } from "../../helpers.js";
import { cleanUri } from "../../helpers.js";
import { Link } from "react-router-dom";

const ResumeHeader = ({ basics }) => {
  const LinkedInProfile = getProfile(basics.profiles, "LinkedIn");

  return (
    <header className="resumeHeader">
      <h1 className="resumeTitle">{basics.name}</h1>

      <p className="resumeLocation">
        {basics.location.city}, {basics.location.region}
      </p>
      <p className="resumePhone">{basics.phone}</p>
      <Link to={`mailto:${basics.email}`} className="resumeEmail">
        {basics.email}
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
    </header>
  );
};
export default ResumeHeader;
