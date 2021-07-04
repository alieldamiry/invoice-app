import { useState } from "react";
import classes from "./Checkbox.module.scss";
import checkmark from "../../assets/icons/icon-check.svg";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [state, setState] = useState(false);

  const handleCheck = () => {
    setState((prevState) => !prevState);
  };

  return (
    <button className={classes.Checkbox} onClick={handleCheck}>
      <span className={`${classes.Check} ${state && classes.checked}`}>
        {state && <img src={checkmark} alt="check mark" />}
      </span>
      <div>{label}</div>
    </button>
  );
};

export default Checkbox;
