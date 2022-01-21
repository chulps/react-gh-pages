import React, { Component } from "react";
import NucleotideLogo from "../../../IMG/nucleotide.svg";

class Nucleotide extends Component {
  render() {
    return (
      <section
        id="nucleotide"
        className="hero flex-center"
        style={{ gap: "var(--unit2)" }}
      >
        <section className="py3 h100">
          {" "}
          <div className="one-column md-two-columns">
            <div>
              <label>Project:</label>
              <h1>Nucleotide</h1>
              <p>
                Nucleotide is a development framework built for the developers
                at CRI Genetics. It consists of three parts: A responsive design
                framework built
              </p>
            </div>
            <div
              className="flex-center flex-vertical"
              style={{ gap: "var(--unit2)" }}
            >
              <img height="50px" src={NucleotideLogo} />
              <div>
                <h4>🛠 I'm still working on this page...</h4>
              </div>
              <div className="flex">
                <a href="http://nucleotide.crigenetics.com/ui/dev/index.html">
                  Documentation
                </a>
                {"  "}|{" "}
                <a href="https://codepen.io/chulps/pen/VwzGajp">Codepen</a>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Nucleotide;
