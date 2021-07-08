import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./App.module.scss";
import Button from "./components/Button/Button";
import IconPlus from "./assets/icons/icon-plus.svg";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((p) => !p);
  };

  return (
    <div className={`${classes.App} ${isDark && classes.isDark}`}>
      <Sidebar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <div className={classes.Wrapper}>
          <div className={classes.Header}>
            <div>
              <h1 className={classes.Title}>Invoices</h1>
              <div className={classes.SubTitle}>There is 1 invoice.</div>
            </div>
            <div className={classes.RightWrapper}>
              <Dropdown />
              <Button variant="primary">
                <span className={classes.IconWrapper}>
                  <img src={IconPlus} alt="icon plus" />
                </span>
                New
              </Button>
            </div>
          </div>

          <div className="main"></div>
        </div>
      </main>
    </div>
  );
};

export default App;
