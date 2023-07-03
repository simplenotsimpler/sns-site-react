import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ children, isSmall }) => {
  if (isSmall) {
    return <button className="btn btnSmall">{children}</button>;
  }
  return <button className="btn btnLarge">{children}</button>;
};

export const LinkButton = ({ to, isSmall, children, ...props }) => {
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

export default Button;
