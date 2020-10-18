import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import Button from "./Button";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    global.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <Link href='#' className='navbar-logo' onClick={closeMobileMenu}> */}
          <Link href="/">
            <img
              className="logo"
              src="https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Asset+2%403x.png"
              alt="logo"
            />
          </Link>
          <i class="fab fa-typo3" />
          {/* </Link> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-bars" : "fas fa-bars"} />
            {click ? (
              <div>
                <AiOutlineClose />
              </div>
            ) : (
              <div>
                <AiOutlineBars />
              </div>
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <Link
                href='#'
                className='nav-links'
                onClick={closeMobileMenu}
              > */}
            <li className="nav-item">
              <Link href="../../../../sections/ballHive">Product</Link>
            </li>
            {/* </Link> */}
            {/* <Link
                href='#'
                className='nav-links'
                onClick={closeMobileMenu}
              > */}
            <li className="nav-item">
              <Link href="../../../../sections/about">About</Link>
            </li>
            {/* </Link>  */}
            {/* <Link
                href='#'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              > */}
            <li className="nav-item">
              <Link href="../../../../sections/team-b">Team</Link>
            </li>
            {/* </Link> */}

          
          </ul>
          {button && (
                <Button buttonStyle="nav-item">
                  <Link href="../../../../sections/regForm"> Get Scouted</Link>
                </Button>
              )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
