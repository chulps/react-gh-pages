import React, { Component } from "react";
import NucleotideLogo from "../../../IMG/nucleotide.svg";

class Nucleotide extends Component {
  render() {
    return (
      <div id="nucleotide">
        <section className="hero flex-center flex-vertical">
          <img height="50px" src={NucleotideLogo} />
          <small>🛠 This page coming soon...</small>
          <a href="http://nucleotide.crigenetics.com/ui/dev/index.html">
            Visit Nucleotide Documentation
          </a>
        </section>
      </div>
    );
  }
}

export default Nucleotide;
