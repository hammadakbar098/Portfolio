import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./../reusable/button";
import logo from "./../../images/logo.png";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div>
          <img className="logo" src={logo}></img>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars className="rotate" />}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <a href=""></a>
          </li>
        </ul>
        <div className="mb-btn">
          <Button classes="btn-round" text="Download CV" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
