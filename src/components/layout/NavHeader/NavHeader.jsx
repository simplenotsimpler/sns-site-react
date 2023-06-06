import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import "./NavHeader.css";

/* 
  Issue: NavHashLink does not apply active styling anymore and this issue returned https://github.com/rafgraph/react-router-hash-link/issues/29. 
  (I think had similar issues w/ React Router Dom NavLink.)
  
  SOLUTION: combined the following to detect active link w/ hash:
  https://github.com/WebDevSimplified/react-navbar/blob/main/src/Navbar.js
  https://github.com/WebDevSimplified/react-navbar/blob/main/src/styles.css
  make sure anchor class after li class since inheriting color from above
  https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
  --> except used location.hash
*/

function CustomLink({ to, children, ...props }) {
  const location = useLocation();

  return (
    <li className={location.hash === to ? "active" : ""}>
      <HashLink to={to} {...props}>
        {children}
      </HashLink>
    </li>
  );
}

//TODO: smooth scrolling
//TODO: mobile menu
const NavHeader = () => {
  return (
    <div className="navHeader">
      <nav className="navBar">
        <HashLink to="#top" className="brandName">
          Simple Not Simpler
        </HashLink>

        <ul className="navMenu">
          <CustomLink to="#about" className="navMenuLink">
            About
          </CustomLink>
          <CustomLink to="#portfolio" className="navMenuLink">
            Portfolio
          </CustomLink>
          <CustomLink to="#skills" className="navMenuLink">
            Skills
          </CustomLink>
          <CustomLink to="#contact" className="navMenuLink">
            Contact
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavHeader;
