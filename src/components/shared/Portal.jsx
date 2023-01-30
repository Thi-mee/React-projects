import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import style from "../../styles/shared/Portal.module.css";

function Portal({ children }) {
  return (
    <>
      <Nav />
      <div className={style.PageLayout}>
        <SideBar />
        <main>{children}</main>
      </div>
    </>
  );
}

export default Portal;
