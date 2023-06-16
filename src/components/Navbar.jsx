import React from "react";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.projectName}>Saga Demo</div>
      <div className={Styles.navlinks}>
        <ul>
          <li className={Styles.navlink}>Home</li>
          <li className={Styles.navlink}>Post</li>
          <li className={Styles.navlink}>User</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
