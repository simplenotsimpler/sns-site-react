import { Link, animateScroll as scroll } from "react-scroll";

//add the activeClass only in NavHeader
//TODO: add article link
//TODO: add hashSpy (may need ContainerId)
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
