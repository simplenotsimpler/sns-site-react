import "./ContactInfo.css";

import { Link } from "react-router-dom";
import { getPathName } from "../../../helpers.js";

import FaIcon from "../../../components/FaIcon/FaIcon.jsx";

const ContactItem = ({ icon, to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      <div className="contactItem">
        <FaIcon icon={icon} className="iconWithBackground" />
        {children}
      </div>
    </Link>
  );
};

const ContactInfo = ({ email, profiles }) => {
  return (
    <div className="contactInfo">
      <ContactItem
        to={`mailto:${email}`}
        icon="Envelope"
        className="contactLink"
      >
        {email}
      </ContactItem>
      {profiles.map((profile, index) => {
        return (
          <ContactItem
            to={profile.url}
            icon={profile.network}
            key={index}
            className="contactLink"
            target="_blank"
            rel="noreferrer noopener"
          >
            {getPathName(profile.url)}
          </ContactItem>
        );
      })}

      <ContactItem
        to="/resume"
        icon="File"
        className="contactLink"
        target="_blank"
        rel="noreferrer noopener"
      >
        /resume
      </ContactItem>
    </div>
  );
};

export default ContactInfo;
