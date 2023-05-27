import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClicktoolLogo from "./PAGES/CLICKTOOL/CLICKTOOL_COMPONENTS/SVG/ClicktoolLogoHorizontal";
import YardenLogo from "./PAGES/YARDEN/YardenHorizontalLockup";
import CRILogo from "../IMG/cri_genetics_logo.svg";
import NucleotideLogo from "../IMG/nucleotide.svg";
import FoundryLogo from "./PAGES/FOUNDRY/FoundryLogo";
import XPRIZELogo from "../IMG/xprizelogo.png"
import "./ProjectsSection.css";

class ProjectSection extends Component {
  render() {
    return (
      <section
        id="projects"
        className="hero flex-center bg-default"
        style={{ minHeight: "unset" }}
      >

        <section className="projects-section pb3 pb4">
                            <hr className="mb3" />

          <h2>My work:</h2>
          <p className="mb3" style={{maxWidth: '45ch'}}>This is my portfolio showcasing some of my best work in the last few years. Here you'll see a mix of branding, product design, and frontend development.</p>
          <div className="one-column sm-two-columns lg-four-columns gap2">

            <Link to="/projects/xprize/">
              <img width="100%" height="auto" src={XPRIZELogo} alt="xprize logo" />
            </Link>

            <Link to="/projects/yarden/">
              <YardenLogo />
            </Link>

            <Link to="/projects/foundry/">
              <FoundryLogo />
            </Link>

            <Link to="/projects/crigenetics/">
              <img width="100%" src={CRILogo} alt="cri-logo" />
            </Link>

            <Link to="/projects/nucleotide/">
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

            <Link to="/projects/covid/">
              <h4 className="text-red0">🦠 COVID&#8210;19 Dashboard</h4>
            </Link>

            <Link to="/projects/clicktool/">
              <ClicktoolLogo />
            </Link>

          </div>
        </section>
      </section>
    );
  }
}

export default ProjectSection;
