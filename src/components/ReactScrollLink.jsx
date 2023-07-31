import { Link } from "react-scroll";

// https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

//add the activeClass only in NavHeader

//Note: unable to get the hashSpy to work (kept it on #contact for some reason)
//note: buggy - skipping activestatus for portfolio section
const ReactScrollLink = ({ to, children, ...props }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-120}
      duration={500}
      {...props}
    >
      {children}
    </Link>
  );
};
export default ReactScrollLink;
