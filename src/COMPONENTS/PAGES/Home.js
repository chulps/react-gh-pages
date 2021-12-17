import React, { Component } from "react";
import LinkedIn from "../../IMG/SOCIAL/svg/linkedin-01.svg";
import Codepen from "../../IMG/SOCIAL/svg/codepen-01.svg";
import Behance from "../../IMG/SOCIAL/svg/behance-01.svg";
import StackOverflow from "../../IMG/SOCIAL/svg/stack-overflow-01.svg";
import ClicktoolLogo from "../../IMG/ClicktoolLogoHorizontal.js";
import YardenLogo from "../../IMG/yarden_logo.svg";
import CRILogo from "../../IMG/cri_genetics_logo.svg";
import NucleotideLogo from "../../IMG/nucleotide.svg";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <section className="hero flex-center">
          <section>
            <div
              className="flex-center flex-vertical text-center"
              style={{ textTransform: "none" }}
            >
              <h2>Chuck is rebuilding his website.</h2>
              <p className="mb2">Where to find him...</p>

              <div className="flex" style={{ gap: "var(--unit3)" }}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/chuck-howard/"
                >
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>

                <a target="_blank" href="https://codepen.io/chulps">
                  <img src={Codepen} alt="Codepen" />
                </a>

                <a target="_blank" href="https://behance.net/chuckhoward">
                  <img src={Behance} alt="Behance" />
                </a>

                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/2146031/chulps"
                >
                  <img src={StackOverflow} alt="stackoverflow" />
                </a>
              </div>
            </div>
          </section>
        </section>
        <section className="py3">
          <div className="one-column md-two-columns gap2">
            <div className="p3 flex-center">
              <img height="60" src={CRILogo} alt="cri-logo" />
            </div>

            <div className="p3 flex-center">
              <img height="60" src={YardenLogo} alt="yarden" />
            </div>

            <div className="p3 flex-center">
              <div className="flex-center flex-vertical md-flex-horizontal">
                <img
                  height="60px"
                  className="mb1 md-mb-none md-mr1"
                  src={NucleotideLogo}
                  alt="nucleotide logo"
                />
                <h3>Nucleotide</h3>
              </div>
            </div>

            <div className="p3 flex-center">
              <ClicktoolLogo />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
