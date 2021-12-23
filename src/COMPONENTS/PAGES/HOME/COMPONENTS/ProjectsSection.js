import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClicktoolLogo from "../../CLICKTOOL/CLICKTOOL_COMPONENTS/SVG/ClicktoolLogoHorizontal";
import YardenLogo from "../../../../IMG/yarden_logo.svg";
import CRILogo from "../../../../IMG/cri_genetics_logo.svg";
import NucleotideLogo from "../../../../IMG/nucleotide.svg";
import "./ProjectsSection.css";

class ProjectSection extends Component {
  render() {
    return (
      <section class="hero flex-center bg-blue4">
        <section className="projects-section">
          <h2>Projects:</h2>
          <p className="md-half lg-third mb3">
            My most recent work assuming the role of Product Leader
          </p>
          <div className="one-column md-two-columns gap2">
            <Link to="/crigenetics">
              <img height="60" src={CRILogo} alt="cri-logo" />
            </Link>

            <Link to="/nucleotide">
              <div className="flex-center">
                <img
                  height="50px"
                  className="mr1"
                  src={NucleotideLogo}
                  alt="nucleotide logo"
                />
                <h3>Nucleotide</h3>
              </div>
            </Link>

            <Link to="/yarden">
              <img height="60" src={YardenLogo} alt="yarden" />
            </Link>

            <Link to="/react-gh-pages/clicktool">
              <ClicktoolLogo />
            </Link>
          </div>
        </section>
      </section>
    );
  }
}

export default ProjectSection;
