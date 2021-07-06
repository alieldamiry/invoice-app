import React from "react";
import classes from "./Form.module.scss";
import FormGroup from "./FormGroup";

interface SelectProps {
  children: React.ReactNode;
  id: string;
  label: string;
}

const Select: React.FC<SelectProps> = ({ children, id, label }) => {
  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      <select className={classes.FormControl}>{children}</select>
    </FormGroup>
  );
};

export default Select;
