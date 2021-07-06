import React from "react";
import classes from "./Form.module.scss";
import FormGroup from "./FormGroup";

interface inputProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
}
const Input: React.FC<inputProps> = ({ id, type, label, placeholder }) => {
  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} className={classes.FormControl} placeholder={placeholder} />
    </FormGroup>
  );
};

export default Input;
