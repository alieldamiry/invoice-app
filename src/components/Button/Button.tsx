import classes from "./Button.module.scss";


interface ButtonInterface {
  variant:string
}
const Button: React.FC<ButtonInterface> = ({ children, variant }) => {
  console.log(variant);
  
  return (
    <button className={`${classes.Button} ${classes[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
