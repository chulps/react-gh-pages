import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClicktoolLogo from "./PAGES/CLICKTOOL/CLICKTOOL_COMPONENTS/SVG/ClicktoolLogoHorizontal";
import YardenLogo from "./PAGES/YARDEN/YardenHorizontalLockup";
import CRILogo from "../IMG/cri_genetics_logo.svg";
import NucleotideLogo from "../IMG/nucleotide.svg";
import FoundryLogo from "./PAGES/FOUNDRY/FoundryLogo";
import "./ProjectsSection.css";

class ProjectSection extends Component {
  render() {
    return (
      <section
        id="projects"
        class="hero flex-center bg-default"
        style={{ minHeight: "unset" }}
      >

        <section className="projects-section pb3 pb4">
                            <hr className="my3" />

          <h3>Projects:</h3>
          <p className="md-half lg-third mb3">My most recent projects:</p>
          <div className="one-column sm-two-columns lg-four-columns gap2">

            <Link to="/react-gh-pages/yarden/">
              <YardenLogo />
            </Link>

            <Link to="/react-gh-pages/foundry/">
              <FoundryLogo />
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
