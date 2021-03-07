import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import logo from "../images/logo.svg";

const NavLinks = [
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

const HeaderNavLink = ({ path, name }) => (
  <button
    onClick={() => {
      scrollTo(path);
    }}
    className="header__link"
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
        <div className="container">
          <div
            className={`navbar-burger ${navBarActiveClass}`}
            data-target="navMenu"
            role="button"
            tabIndex={0}
            aria-label="navbar-button"
            onClick={() => setNavBarActiveClass("is-active")}
            onKeyPress={() => setNavBarActiveClass("is-active")}
          >
            {NavLinks.map(({ path, name }) => (
              <HeaderNavLink key={path} path={path} name={name} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
