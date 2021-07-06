import classes from "./Sidebar.module.scss";
import React from "react";
import Logo from "../Logo/Logo";
import sunIcon from "../../assets/icons/icon-sun.svg";
import moonIcon from "../../assets/icons/icon-moon.svg";
import avatarIcon from "../../assets/icons/avatar.svg";
import Form from "../Form/Form";

interface SidebarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleTheme, isDark }) => {
  return (
    <>
      <aside className={classes.Sidebar}>
        <Logo />
        <div className={classes.Wrapper}>
          <button onClick={toggleTheme} className={classes.ThemeToggler}>
            <img src={isDark ? sunIcon : moonIcon} alt="sun icon" />
          </button>
          <div className={classes.Divider}></div>
          <button className={classes.AvatarBtn}>
            <img src={avatarIcon} alt="avatar icon" />
          </button>
        </div>
      </aside>
      <Form />
    </>
  );
};

export default Sidebar;
