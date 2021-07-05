// import { useState } from "react";
import classes from "./Checkbox.module.scss";
import checkmark from "../../assets/icons/icon-check.svg";

interface CheckboxProps {
  id: number;
  checked: boolean;
  onChange: (id: number) => void;
  children: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  children,
}) => {
  // const [state, setState] = useState(false);

  // const handleCheck = () => {
  //   setState((prevState) => !prevState);
  // };

  return (
    <label className={classes.Checkbox}>
      <input
        onChange={() => onChange(id)}
        type="checkbox"
        checked={checked}
      />
      <span className={classes.Box}>
        <img src={checkmark} alt="" />
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
