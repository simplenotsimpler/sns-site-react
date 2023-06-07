import "./Button.css";

const Button = ({ children, isSmall }) => {
  if(isSmall){
    return <button className="btn btnSmall">{children}</button>
  }
  return <button className="btn btnLarge">{children}</button>;
};

export default Button;
