import React from "react";
import "./nav.css";
import NavLogo from "../../../LOGO/LOGO_BLUE.gif";

function NavContent() {
  return (
    <ul className="flex-center flex-vertical md-flex-horizontal">
      <li>
        <a>Projects</a>
      </li>

      <li>
        <button className="btn3">Resume</button>
      </li>

      <li>
        <button className="btn2">Contact</button>
      </li>
    </ul>
  );
}
class Nav extends React.Component {
  state = {
    displaySideNav: false,
    menuText: "menu"
  };
  render() {
    return (
      <nav>
        {/* button */}
        <button
          id="mobile-nav-button"
          className={
            this.state.displaySideNav ? "close md-ghost" : "hamburger md-ghost"
          }
          onClick={() =>
            this.setState({
              displaySideNav: !this.state.displaySideNav
              // menuText: `${
              //   this.state.displaySideNav === false ? "Close" : "Menu"
              // }`
            })
          }
        >
          {/* {this.state.menuText} */}
        </button>

        {/* logo */}
        <img className="header-logo" src={NavLogo} />

        {/* desktop */}
        <span className="ghost md-flex">
          <NavContent />
        </span>

        {/* mobile */}
        <div
          id="mobile-nav-links"
          className={
            this.state.displaySideNav
              ? "sidenav sidenav-show"
              : "sidenav sidenav-hide"
          }
        >
          <div className="overlay">
            <NavContent />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
