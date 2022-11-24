import React, { Component } from "react";
import NavLogo from "../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="bg-blueC flex-center flex-vertical p2">
        <img style={{ filter: 'hue-rotate(150deg)' }} className="header-logo" src={NavLogo} alt="C-logo" />
        © Chuck Howard 2022
      </footer>
    );
  }
}

export default Footer;
