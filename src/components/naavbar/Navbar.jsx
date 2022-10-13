import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./../reusable/button";
import logo from "./../../images/logo.png";
import HammadCv from "./../../images/Hammadcv.pdf";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleClose = () => {
    this.setState({ clicked: false });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="MyLogo"></img>
          </a>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars className="rotate" />}
        </div>
        <div className="navbar-items">
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
              <a className="nav-links" href="/">
                <Link
                  className="linkss"
                  to="/"
                  smooth
                  onClick={this.handleClose}
                >
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a className="nav-links" href="/#resume">
                <Link
                  className="linkss"
                  to="/#resume"
                  smooth
                  onClick={this.handleClose}
                >
                  Resume
                </Link>
              </a>
            </li>
            <li>
              <a className="nav-links" href="/#contact">
                <Link
                  className="linkss"
                  to="/#contact"
                  smooth
                  onClick={this.handleClose}
                >
                  Contact
                </Link>
              </a>
            </li>
            <li>
              <a className="nav-links" href="/services">
                <Link
                  className="linkss"
                  to="/services"
                  smooth
                  onClick={this.handleClose}
                >
                  Services
                </Link>
              </a>
            </li>
            <li>
              <a className="nav-links" href="/portfolio">
                <Link
                  className="linkss"
                  to="/portfolio"
                  smooth
                  onClick={this.handleClose}
                >
                  Portfolio
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-btn">
          <a
            href={HammadCv}
            download="HammadCv"
            rel="noreferrer"
            target="_blank"
          >
            <Button classes="btn-round" text="Download CV" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
