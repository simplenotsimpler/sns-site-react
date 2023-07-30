import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from "react";

import "./NavHeader.css";

// https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
function CustomLink({ to, children, ...props }) {
  return (
    <li className="navItem">
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-144}
        duration={500}
      >
        {children}
      </Link>
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
        <Link to="#top" className="brandName">
          Simple Not Simpler
        </Link>

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
