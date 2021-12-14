import React, { Component } from "react";
import NavLogo from "../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="bg-blueC flex-center flex-vertical p2">
        <img className="header-logo" src={NavLogo} />
        ©Chuck Howard 2022
      </footer>
    );
  }
}

export default Footer;
