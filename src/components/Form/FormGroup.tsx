import React from "react";
import classes from "./Form.module.scss";

interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
  return <div className={classes.FormGroup}>{children}</div>;
};

export default FormGroup;
