import React from "react";
import "./nav.css";
import NavLogo from "../../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import RotatingText from "./RotatingText";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

class NavContent extends React.Component {
  render() {
    const { onLinkClick } = this.props;
    return (
      <ul className="flex-center flex-vertical sm-flex-horizontal desktop-nav-links">

        <li className="sm-ghost">
          <img
            style={{ filter: "hue-rotate(150deg)" }}
            height="100px"
            src={NavLogo}
            alt="C-logo"
          />
        </li>

        <li>
          <NavLink
            to="/projects/"
            activeclassname="active"
            onClick={onLinkClick}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume/" activeclassname="active" onClick={onLinkClick}>
            Resumé
          </NavLink>
        </li>
        <li className="flex sm-ghost">
        <a
            
              href="https://calendly.com/interview-chuck-howard/45-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="green">
                <FontAwesomeIcon icon={solid("calendar")} />
                &nbsp;&nbsp;Let's Talk
              </button>
            </a>
        </li>
      </ul>
    );
  }
}
class Nav extends React.Component {
  state = {
    displaySideNav: false,
  };

  handleLinkClick = () => {
    this.setState({ displaySideNav: false });
  };

  render() {
    return (
      <nav className="floating-nav">
        {/* logo */}
        <div
          className="flex-center-y nav-left"
        >
          <NavLink
            to="/"
            className="flex flex-center-y"
            activeClassName="active"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RotatingText fill="var(--transBlueC-75)" />
              <img
                className="header-logo"
                src={NavLogo}
                alt="C-logo"
                style={{ filter: "hue-rotate(150deg)" }}
              />
            </span>
          </NavLink>
                  {/* desktop */}
          <span className="ghost sm-flex">
            <NavContent onLinkClick={this.handleLinkClick} />
          </span>
        </div>

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
            <NavContent onLinkClick={this.handleLinkClick} />
          </div>

        </div>
        
        {/* status */}
        <div className="nav-right flex" style={{alignItems: 'center', gap: 'var(--unit1)'}}>
          <div
              className="status-wrapper flex-vertical"
              style={{ color: "var(--transBlueC-50)" }}
            >
              <label style={{textAlign: 'right'}}>Status</label>
              <small className="status">
                <span style={{ color: "var(--green0)" }} className="mr0">
                  <FontAwesomeIcon
                    className="hiring-icon"
                    icon={solid("user-tie")}
                  />
                </span>
                <span
                  style={{
                    borderTop: "1px solid var(--transBlueC-25)",
                    width: "var(--unit4)",
                  }}
                ></span>
                <span>Interviewing&nbsp;now</span>
              </small>
            </div>
                    {/* button */}
          {/* rumplestilskin */}
          <button
          id="mobile-nav-button"
          className={`${
            this.state.displaySideNav ? "close sm-ghost btn3" : "sm-ghost green"
          } py0 px1 h4`}
          onClick={() =>
            this.setState({
              displaySideNav: !this.state.displaySideNav,
            })
          }
        >
          {this.state.displaySideNav ? (
            ""
          ) : (
            <FontAwesomeIcon icon={solid("calendar")} />
          )}
        </button>
            <a
            className="green ghost sm-flex"
              href="https://calendly.com/interview-chuck-howard/45-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="green">
                <FontAwesomeIcon icon={solid("calendar")} />
                &nbsp;&nbsp;Let's Talk
              </button>
            </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
