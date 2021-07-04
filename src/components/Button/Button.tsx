import classes from "./Button.module.scss";

const Button: React.FC = ({ children }) => {
  return (
    <button className={`${classes.Button}`}>
      {children}
    </button>
  );
};

export default Button;
