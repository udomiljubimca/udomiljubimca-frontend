import React, { useState } from "react";
import "./Header.css";
import Nav from "./Nav";
import BottomNav from "./BottomNav";
import LogoSvg from "../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ trigger }) {
  const [mobileNav, setMobileNav] = useState(false);

  const mobileMenuHandler = () => {
    setMobileNav((prevTrigger) => !prevTrigger);
    console.log(mobileNav);
  };

  return (
    <>
      <div className="header">
        <div className="header-content container">
          <a className="header-logo" href="/">
            <img src={LogoSvg} alt="Udomi Ljubimca" />
          </a>
          <AiOutlineMenu className="mobile-menu" onClick={mobileMenuHandler} />
          <Nav popUp={trigger} mobileNav={mobileNav} />
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default Header;
