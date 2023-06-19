import "./ContactInfo.css";

import { basics } from "../../data/basicsData.js";
import { Link } from "react-router-dom";
import { getPathName } from "../../helpers.js";
import FaIcon from "../FaIcon/FaIcon.jsx";

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

//TODO: style resume page & components in figma
//TODO: replace the link with generated PDF
//TODO: add a download Word doc which you can use as basis for your custom resumes
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

      <ContactItem to="" icon="PDF" className="contactLink">
        Download PDF
      </ContactItem>
    </div>
  );
};

export default ContactInfo;
