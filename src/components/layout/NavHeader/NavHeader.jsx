import { HashLink } from "react-router-hash-link";

import "./NavHeader.css";

//TODO: use NavHashLink so can get the active class stuff
//TODO: make the brand link to /
const NavHeader = () => {
  return (
    <div className="navHeader">
      <nav className="navBar">
        <h1 className="brandName">Simple Not Simpler</h1>
        <ul className="navMenu">
          <li >
            <HashLink className="navMenuLink"  to="#about">About</HashLink>
          </li>
          <li>
            <HashLink className="navMenuLink"  to="#portfolio">Portfolio</HashLink>
          </li>
          <li>
            <HashLink className="navMenuLink"  to="#skills">Skills</HashLink>
          </li>
          <li>
            <HashLink className="navMenuLink"  to="#contact">Contact</HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavHeader;
