import classes from "./Sidebar.module.scss";
import React from "react";
import Logo from "../Logo/Logo";
import sunIcon from "../../assets/icons/icon-sun.svg";
import avatarIcon from "../../assets/icons/avatar.svg";

interface SidebarProps {
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleTheme }) => {
  return (
    <aside className={classes.Sidebar}>
      <Logo />
      <div className={classes.Wrapper}>
        <button onClick={toggleTheme} className={classes.ThemeToggler}>
          <img src={sunIcon} alt="sun icon" />
        </button>
        <div className={classes.Divider}></div>
        <button className={classes.AvatarBtn}>
          <img src={avatarIcon} alt="avatar icon" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
