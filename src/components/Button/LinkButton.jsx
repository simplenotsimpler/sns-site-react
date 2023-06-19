import { Link } from "react-router-dom";
const LinkButton = ({ to, isSmall, children, ...props }) => {
  if (isSmall) {
    return (
      <Link to={to} className="btn btnSmall" {...props}>
        {children}
      </Link>
    );
  }
  return (
    <Link to={to} className="btn btnLarge" {...props}>
      {children}
    </Link>
  );
};
export default LinkButton;
