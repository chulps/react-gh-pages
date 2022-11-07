import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClicktoolLogo from "../../CLICKTOOL/CLICKTOOL_COMPONENTS/SVG/ClicktoolLogoHorizontal";
import YardenLogo from "../../../../IMG/YardenLogo.js";
import CRILogo from "../../../../IMG/cri_genetics_logo.svg";
import NucleotideLogo from "../../../../IMG/nucleotide.svg";
import FoundryLogo from "../../FOUNDRY/FoundryLogo.js";
import "./ProjectsSection.css";

class ProjectSection extends Component {
  render() {
    return (
      <section
        class="hero flex-center bg-default"
        style={{ minHeight: "unset" }}
      >
        <section className="projects-section pt3 pb4">
          <h3>Projects:</h3>
          <p className="md-half lg-third mb3">My most recent projects:</p>
          <div className="one-column sm-two-columns lg-four-columns gap2">

            <Link to="/react-gh-pages/yarden/">
              <YardenLogo />
            </Link>

            <Link className="disabled" to="/react-gh-pages/covid/">
              <FoundryLogo />
              <small>Not ready yet...</small>
            </Link>

            <Link className="disabled" to="/react-gh-pages/crigenetics/">
              <img width="100%" src={CRILogo} alt="cri-logo" />
              <small>Not ready yet...</small>
            </Link>

            <Link to="/react-gh-pages/nucleotide/">
              <div className="flex-center flex-vertical xs-flex-horizontal">
                <img
                  height={50}
                  className="mr1"
                  src={NucleotideLogo}
                  alt="nucleotide logo"
                />
                <h4>Nucleotide</h4>
              </div>
            </Link>

            <Link to="/react-gh-pages/covid/">
              <h4 className="text-red0">🦠 COVID-19 Dashboard</h4>
            </Link>

            <Link to="/react-gh-pages/clicktool/">
              <ClicktoolLogo />
            </Link>

          </div>
        </section>
      </section>
    );
  }
}

export default ProjectSection;
