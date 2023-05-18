// use react router link
import { Link } from "react-router-dom";

// import css button
import "./button.css";

const Button = (props) => {
  return (
    <Link to={props.href} className={`btns ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default Button;

export const TypeButton = (props) => {
  return (
    <button type="submit" className={`btns ${props.className}`}>
      {props.children}
    </button>
  );
};
