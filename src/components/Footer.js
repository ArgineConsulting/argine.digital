import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import logo from "../images/logo.svg";
import { IconArrow } from "./Common/icons";

const FooterNavLinks = [
  {
    path: "#services",
    name: "Services",
  },
  {
    path: "#customer-stories",
    name: "Customer Stories",
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
      scrollTo(path);
    }}
    className="footer__nav-link"
  >
    {name}
  </button>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__left">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__copy-right">
          © 2016 Argine Consulting. All Rights Reserved.
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__nav">
          {FooterNavLinks.map(({ path, name }) => (
            <NavLink key={path} path={path} name={name} />
          ))}
        </div>
        <div className="footer__links">
          <a href="#">Privacy Policy</a> / <a href="#">Terms of Use</a>
        </div>
        {/* <div className="footer__social">
          <ul>
            <li>
              <a href="#">
                Facebook <IconArrow />
              </a>
            </li>
            <li>
              <a href="#">
                Twitter <IconArrow />
              </a>
            </li>
            <li>
              <a href="#">
                LinkedIn <IconArrow />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  </footer>
);
export default Footer;
