import React from "react";
import IconArrow from "../../assets/icons/icon-arrow-down.svg";
import Checkbox from "../Checkbox/Checkbox";
import classes from "./Dropdown.module.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggler = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div className={classes.Dropdown}>
      <button onClick={toggler}>
        <span>Filter</span>
        <img
          className={`${classes.IconArrow} ${isOpen && classes.Opened}`}
          src={IconArrow}
          alt=""
        />
      </button>

      {isOpen && (
        <div className={classes.DropdownList}>
          <Checkbox label="check me" />
          <Checkbox label="check me" />
          <Checkbox label="check me" />
          <Checkbox label="check me" />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
