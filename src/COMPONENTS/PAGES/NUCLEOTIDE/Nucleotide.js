import React, { Component } from "react";
import NucleotideLogo from "../../../IMG/nucleotide.svg";

class Nucleotide extends Component {
  render() {
    return (
      <div id="nucleotide">
        <section
          className="hero flex-center flex-vertical"
          style={{ gap: "var(--unit2)" }}
        >
          <img height="50px" src={NucleotideLogo} />
          <div className="md-three-fourths lg-half xl-third">
            <h4>🛠 I'm still working on this page...</h4>
            <p>
              Nucleotide is a Web Design Framework I created for the team at CRI
              Genetics.
            </p>
          </div>
          <div className="flex">
            <a href="http://nucleotide.crigenetics.com/ui/dev/index.html">
              Documentation
            </a>
            {"  "}| <a href="https://codepen.io/chulps/pen/VwzGajp">Codepen</a>
          </div>
        </section>
      </div>
    );
  }
}

export default Nucleotide;
