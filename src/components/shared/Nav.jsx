import React from "react";
import style from "../../styles/shared/Navbar.module.css";

function Nav() {
  return (
    <nav className={style.Nav}>
      <span className={`${style.Logo} container`}>Timi's REACT.js Playground</span>
      <ul className={style.navLinks}>
        {/* <li>Home</li>
        <li>Blog</li>
        <li>Projects</li>
        <li>About</li> */}
      </ul>
    </nav>
  );
}

export default Nav;
