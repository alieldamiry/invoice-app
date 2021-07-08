import classes from "./Button.module.scss";

interface ButtonInterface {
  variant: string;
  type?: any;
}
const Button: React.FC<ButtonInterface> = ({ children, variant, type="button" }) => {
  console.log(variant);

  return (
    <button className={`${classes.Button} ${classes[variant]}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
