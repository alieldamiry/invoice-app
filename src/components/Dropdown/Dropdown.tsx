import React, { useState } from "react";
import IconArrow from "../../assets/icons/icon-arrow-down.svg";
import Checkbox from "../Checkbox/Checkbox";
import classes from "./Dropdown.module.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filters, setFilters] = useState([
    {
      id: 0,
      value: "paid",
      checked: false,
    },
    {
      id: 1,
      value: "pending",
      checked: false,
    },
    {
      id: 2,
      value: "draft",
      checked: false,
    },
  ]);

  function handleClick(id: number) {
    console.log(id);

    const modifiedFilters = [...filters];
    modifiedFilters.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    setFilters(modifiedFilters);
  }

  const toggler = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div className={classes.Dropdown}>
      <button onClick={toggler}>
        <span>Filter</span>
        {/* <img
          className={`${classes.IconArrow} ${isOpen && classes.Opened}`}
          src={IconArrow}
          alt=""
        /> */}
        <img
          className={`${classes.IconArrow} ${isOpen && classes.Opened}`}
          src={IconArrow}
          alt=""
        />
      </button>

      {isOpen && (
        <div className={classes.DropdownList}>
          {filters.map((option) => {
            return (
              <Checkbox
                key={option.id}
                id={option.id}
                checked={option.checked}
                onChange={handleClick}
              >
                {option.value}
              </Checkbox>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
