import classes from "./Logo.module.scss";
import logoSrc from "../../assets/icons/logo.svg";
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoSrc} alt="" />
    </div>
  );
};

export default Logo;
