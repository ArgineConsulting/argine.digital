import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import logo from "../images/logo.svg";
import { IconClose } from "./Common/icons";

const HeaderNavLinks = [
  {
    path: "#services",
    name: "Services",
  },
  {
    path: "#process",
    name: "Our Process",
  },
  {
    path: "#team",
    name: "Team",
  },
  {
    path: "#about-us",
    name: "About Us",
  },
  {
    path: "#contact-us",
    name: "Contact Us",
  },
];

const NavLink = ({ path, name }) => (
  <button
    onClick={() => {
      console.log('path', path)
      scrollTo(path);
    }}
    className="navbar__link"
  >
    {name}
  </button>
);

const Header = () => {
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav
        className={`navbar ${navBarActiveClass}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div
          className={`navbar-burger ${navBarActiveClass}`}
          data-target="navMenu"
          role="button"
          tabIndex={0}
          aria-label="navbar-button"
          onClick={() => setNavBarActiveClass("is-active")}
          onKeyPress={() => setNavBarActiveClass("is-active")}
        >
          <span />
          <span />
          <span />
        </div>
        <div id="navMenu" className={`navbar__menu ${navBarActiveClass}`}>
          {HeaderNavLinks.map(({ path, name }) => (
            <NavLink
              key={path}
              handleClick={() => setNavBarActiveClass("")}
              path={path}
              name={name}
            />
          ))}

          <span
            className="navbar__menu__close"
            aria-label="Close"
            role="button"
            tabIndex={0}
            onClick={() => setNavBarActiveClass("")}
            onKeyPress={() => setNavBarActiveClass("")}
          >
            <IconClose />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;