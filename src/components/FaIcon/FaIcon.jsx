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
  faUserGear,
  faScrewdriverWrench,
  faServer,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

//probably can combine this into one component w/ SkillIcon
//future enhancement? - store the fa icon name directly in db
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
    case "UserGear":
      return <FontAwesomeIcon icon={faUserGear} {...props} />;
    case "ScrewdriverWrench":
      return <FontAwesomeIcon icon={faScrewdriverWrench} {...props} />;
    case "Server":
      return <FontAwesomeIcon icon={faServer} {...props} />;
    case "Computer":
      return <FontAwesomeIcon icon={faComputer} {...props} />;

    default:
      break;
  }
};

export default FaIcon;
