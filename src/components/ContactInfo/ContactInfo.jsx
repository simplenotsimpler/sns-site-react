import "./ContactInfo.css";

import { basics } from "../../data/basicsData.js";
import { Link } from "react-router-dom";
import { getPathName } from "../../helpers.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* note documentation is incorrect per https://github.com/FortAwesome/Font-Awesome/issues/14854 */
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

//probably can combine this into one component w/ SkillIcon
const ContactIcon = ({ icon }) => {
  switch (icon) {
    case "Envelope":
      return (
        <FontAwesomeIcon icon={faEnvelope} className="iconWithBackground" />
      );
    case "LinkedIn":
      return (
        <FontAwesomeIcon icon={faLinkedin} className="iconWithBackground" />
      );
    case "GitHub":
      return (
        <FontAwesomeIcon icon={faSquareGithub} className="iconWithBackground" />
      );
    case "PDF":
      return (
        <FontAwesomeIcon icon={faFilePdf} className="iconWithBackground" />
      );
    default:
      break;
  }
};

const ContactItem = ({ icon, to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      <div className="contactItem">
        <ContactIcon icon={icon} />
        {children}
      </div>
    </Link>
  );
};

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <ContactItem
        to={`mailto:${basics.email}`}
        icon="Envelope"
        className="contactLink"
      >
        {basics.email}
      </ContactItem>
      {basics.profiles.map((profile, index) => {
        return (
          <ContactItem
            to={profile.url}
            icon={profile.network}
            key={index}
            className="contactLink"
          >
            {getPathName(profile.url)}
          </ContactItem>
        );
      })}
      {/* replace to with generated link */}
      <ContactItem to="" icon="PDF" className="contactLink">
        Download PDF
      </ContactItem>
    </div>
  );
};

export default ContactInfo;
