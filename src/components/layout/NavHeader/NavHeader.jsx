import { Link, animateScroll as scroll } from "react-scroll";
import ReactScrollLink from "../../ReactScrollLink.jsx";

import { useState } from "react";

import "./NavHeader.css";

/* 
  Removed nav active class for now.
  Initially the activeClass worked in both FF & Chrome.
  However, in Chrome, active state not changing to true in Projects section. Still works fine in FF.
  Rrelated bug report:
  https://github.com/fisshy/react-scroll/issues/551

  If time later, could manually implement Intersection Observer API or react-intersection-observer package, e.g.
  https://blog.logrocket.com/using-react-intersection-observer-create-dynamic-header/
*/
function CustomLink({ to, children, ...props }) {
  return (
    <li className="navItem">
      <ReactScrollLink to={to}>{children}</ReactScrollLink>
    </li>
  );
}

const NavHeader = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavToggle = (e) => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div className="navHeader">
      <nav className="navBar">
        <ReactScrollLink to="about" className="brandName">
          Simple Not Simpler
        </ReactScrollLink>

        <ul
          className={`navMenu ${isNavExpanded ? "expanded" : ""}`}
          onClick={handleNavToggle}
        >
          <CustomLink
            to="about"
            className="navMenuLink"
            onClick={handleNavToggle}
          >
            About
          </CustomLink>
          <CustomLink
            to="portfolio"
            className="navMenuLink"
            onClick={handleNavToggle}
          >
            Portfolio
          </CustomLink>
          <CustomLink
            to="skills"
            className="navMenuLink"
            onClick={handleNavToggle}
          >
            Skills
          </CustomLink>
          <CustomLink
            to="contact"
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
