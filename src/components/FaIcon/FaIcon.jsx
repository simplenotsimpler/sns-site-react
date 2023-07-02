import "./FaIcon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* note documentation is incorrect per https://github.com/FortAwesome/Font-Awesome/issues/14854 */
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFilePdf,
  faCode,
  faFolder,
  faDatabase,
  faCodeBranch,
  faGlobe,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

//probably can combine this into one component w/ SkillIcon

const FaIcon = ({ icon, ...props }) => {
  switch (icon) {
    case "Envelope":
      return <FontAwesomeIcon icon={faEnvelope} {...props} />;
    case "LinkedIn":
      return <FontAwesomeIcon icon={faLinkedin} {...props} />;
    case "GitHub":
      return <FontAwesomeIcon icon={faSquareGithub} {...props} />;
    case "PDF":
      return <FontAwesomeIcon icon={faFilePdf} {...props} />;
    case "Code":
      return <FontAwesomeIcon icon={faCode} {...props} />;
    case "Folder":
      return <FontAwesomeIcon icon={faFolder} {...props} />;
    case "Database":
      return <FontAwesomeIcon icon={faDatabase} {...props} />;
    case "CodeBranch":
      return <FontAwesomeIcon icon={faCodeBranch} {...props} />;
    case "Globe":
      return <FontAwesomeIcon icon={faGlobe} {...props} />;
    case "File":
      return <FontAwesomeIcon icon={faFile} {...props} />;
    default:
      break;
  }
};

export default FaIcon;
