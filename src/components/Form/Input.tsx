import React from "react";
import classes from "./Form.module.scss";
import FormGroup from "./FormGroup";

interface inputProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
}
const Input: React.FC<inputProps> = ({
  id,
  type,
  label,
  placeholder,
  readOnly,
}) => {
  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className={classes.FormControl}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </FormGroup>
  );
};

export default Input;
