import React from "react";
import Link from "next/link";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li className="side-nav-item">
          <a href="/">Home</a>
        </li>

          <li className="side-nav-item">
            <a href="../../../../sections/ballHive">Product</a>
          </li>

          <li cclassName="side-nav-item">
            <a href="../../../../sections/about">About</a>
          </li>

          <li className="side-nav-item">
            <a href="../../../../sections/team-b">Team</a>
          </li>

          <li href="#" className="side-nav-item">
            <a>Contact</a>
          </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
