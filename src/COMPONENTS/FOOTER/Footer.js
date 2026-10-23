import React, { Component } from "react";
import NavLogo from "../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="bg-blueD flex-center flex-vertical p2">
        <img loading="lazy" className="header-logo" src={NavLogo} alt="C-logo" />
        © Chuck Howard 2024
      </footer>
    );
  }
}

export default Footer;
