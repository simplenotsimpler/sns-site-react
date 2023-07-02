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

//TODO: replace the link with generated PDF
//TODO: add a download Word doc which you can use as basis for your custom resumes
//TODO: add target="_blank" rel="noreferrer noopener" to links so open in new tab/window
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
          >
            {getPathName(profile.url)}
          </ContactItem>
        );
      })}

      <ContactItem to="" icon="PDF" className="contactLink">
        Download PDF
      </ContactItem>
    </div>
  );
};

export default ContactInfo;
