import React from "react";
import classes from "./Form.module.scss";

interface FormGridProps {
  children: React.ReactNode;
}

const FormGrid3: React.FC<FormGridProps> = ({ children }) => {
  return <div className={classes.FormGrid3}>{children}</div>;
};
const FormGrid2: React.FC<FormGridProps> = ({ children }) => {
  return <div className={classes.FormGrid2}>{children}</div>;
};

export {FormGrid2, FormGrid3};
