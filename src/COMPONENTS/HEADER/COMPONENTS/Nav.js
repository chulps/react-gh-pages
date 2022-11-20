import React from "react";
import "./nav.css";
import NavLogo from "../../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function NavContent() {
  return (
    <ul className="flex-center flex-vertical md-flex-horizontal">
      <li className="md-ghost">
        <img
          style={{ filter: "hue-rotate(150deg) saturate(0.1)" }}
          height="100px"
          src={NavLogo}
          alt="C-logo"
        />
      </li>

      <li>
        <a href="#projects">Projects</a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://resume.io/r/gEFMf2bm4"
        >
          Resumé
        </a>
      </li>

      <li>
        <a
          href="https://calendly.com/interview-chuck-howard/30-minutes"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-greenA">
            <FontAwesomeIcon icon={solid("calendar")} />
            &nbsp;&nbsp;Schedule Interview
          </button>
        </a>
      </li>
    </ul>
  );
}
class Nav extends React.Component {
  state = {
    displaySideNav: false,
  };
  render() {
    return (
      <nav className="floating-nav">
        {/* logo */}

        <div
          
          style={{
            background: "var(--transWhite-75)",
            borderRadius: "var(--unit3)",
            gap: "var(--unit2)",
          }}
        >
          <Link to="/react-gh-pages/" className="flex flex-center-y">
            <img
              style={{ filter: "hue-rotate(150deg)" }}
              className="header-logo"
              src={NavLogo}
              alt="C-logo"
            />

            <div
              className="flex-vertical"
              style={{ color: "var(--transBlueC-25)" }}
            >
              <label>Status:</label>
              <small
                className="px1"
                style={{
                  borderRadius: "var(--unit1)",
                  color: "var(--transWhite-75)",
                  background: "var(--transBlueC-75)",
                }}
              >
                <span style={{color: 'var(--red1)'}}><FontAwesomeIcon icon={solid("user-tie")} /></span>
                &nbsp; Interviewing now
              </small>
            </div>
          </Link>
        </div>

        {/* button */}
        <button
          id="mobile-nav-button"
          style={{ background: 'var(--blue0)', color: 'white'}}
          className={
            this.state.displaySideNav
              ? "close md-ghost"
              : "hamburger md-ghost"
          }
          onClick={() =>
            this.setState({
              displaySideNav: !this.state.displaySideNav,
            })
          }
        ></button>

        {/* desktop */}
        <span className="ghost md-flex" style={{background: "var(--transWhite-75)", borderRadius: 'var(--unit3) 0 0 var(--unit3)'}} >
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
