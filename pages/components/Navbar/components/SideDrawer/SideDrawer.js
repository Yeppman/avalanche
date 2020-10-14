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

        <li>
          <a className="side-nav-item">Our Product</a>
        </li>

        <Link href="../../../../sections/ballHive">
          <li className="side-nav-item">
            <a>Product</a>
          </li>
        </Link>

        <Link href="../../../../sections/about">
          <li cclassName="side-nav-item">
            <a>About</a>
          </li>
        </Link>

        <Link href="../../../../sections/team-b">
          <li className="side-nav-item">
            <a>Team</a>
          </li>
        </Link>

        <Link href="#">
          <li className="side-nav-item">
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
