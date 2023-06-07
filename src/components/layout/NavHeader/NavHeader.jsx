import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import "./NavHeader.css";

/* 
  Issue: NavHashLink does not apply active styling anymore and this issue returned https://github.com/rafgraph/react-router-hash-link/issues/29. 
  I think had similar issues w/ React Router Dom NavLink so I have kept this solution even with the switch to ScrollToHashElement.
  
  SOLUTION: combined the following to detect active link w/ hash:
  https://github.com/WebDevSimplified/react-navbar/blob/main/src/Navbar.js
  https://github.com/WebDevSimplified/react-navbar/blob/main/src/styles.css
  make sure anchor class after li class since inheriting color from above
  https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
  --> except used location.hash

  Note: switched 
*/

function CustomLink({ to, children, ...props }) {
  const location = useLocation();

  return (
    <li className={location.hash === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

//TODO: smooth scrolling
//TODO: mobile menu
const NavHeader = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavToggle = (e) => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div className="navHeader">
      <nav className="navBar">
        <Link to="#top" className="brandName">
          Simple Not Simpler
        </Link>

        <ul
          className={`navMenu ${isNavExpanded ? "expanded" : ""}`}
          onClick={handleNavToggle}
        >
          <CustomLink
            to="#about"
            className="navMenuLink"
            onClick={handleNavToggle}
          >
            About
          </CustomLink>
          <CustomLink
            to="#portfolio"
            className="navMenuLink"
            onClick={handleNavToggle}
          >
            Portfolio
          </CustomLink>
          <CustomLink
            to="#skills"
            className="navMenuLink"
            onClick={handleNavToggle}
          >
            Skills
          </CustomLink>
          <CustomLink
            to="#contact"
            className="navMenuLink"
            onClick={handleNavToggle}
          >
            Contact
          </CustomLink>
        </ul>
        <div
          className={`hamburger ${isNavExpanded ? "expanded" : ""}`}
          onClick={handleNavToggle}
        >
          <span className="hamburgerBar"></span>
          <span className="hamburgerBar"></span>
          <span className="hamburgerBar"></span>
        </div>
      </nav>
    </div>
  );
};

export default NavHeader;
