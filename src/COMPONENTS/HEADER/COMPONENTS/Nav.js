import React from "react";
import "./nav.css";
import NavLogo from "../../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import Resume from "../../../IMG/Chuck-Howard-Product-Manager-Resume.pdf";

function NavContent() {
  return (
    <ul className="flex-center flex-vertical md-flex-horizontal">
      {/* <li>
        <a>Projects</a>
      </li> */}

      <li>
        <a href={Resume} download>
          <button className="green small">Download Resume</button>
        </a>
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
        {/* logo */}
        <span className="flex flex-center-y">
          <img className="header-logo" src={NavLogo} />
          <div style={{ lineHeight: 1 }}>
            <h5>C. Howard</h5>
            <small>Los Angeles, CA</small>
          </div>
        </span>

        {/* button */}
        <button
          id="mobile-nav-button"
          className={
            this.state.displaySideNav ? "close md-ghost" : "hamburger md-ghost"
          }
          onClick={() =>
            this.setState({
              displaySideNav: !this.state.displaySideNav
            })
          }
        ></button>

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
