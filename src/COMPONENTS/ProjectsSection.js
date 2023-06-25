import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClicktoolLogo from "./PAGES/CLICKTOOL/CLICKTOOL_COMPONENTS/SVG/ClicktoolLogoHorizontal";
import YardenLogo from "./PAGES/YARDEN/YardenHorizontalLockup";
import CRILogo from "../IMG/cri_genetics_logo.svg";
import NucleotideLogo from "../IMG/nucleotide.svg";
import FoundryLogo from "./PAGES/FOUNDRY/FoundryLogo";
import XPRIZELogo from "../IMG/xprizelogo.png";
import "./ProjectsSection.css";
import "../animate-in.scss";

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
          <p className="mb3" style={{ maxWidth: "45ch" }}>
            This is my portfolio showcasing some of my best work in the last few
            years. Here you'll see a mix of branding, product design, and
            frontend development.
          </p>
          <div className="one-column sm-two-columns lg-four-columns gap2 animate-up-wrapper">
            <div>
              <Link to="/projects/xprize/">
                <img
                  width="100%"
                  height="auto"
                  src={XPRIZELogo}
                  alt="xprize logo"
                />
              </Link>
              <div className="project-tags">
                <small>Frontend Development</small>
                <small>Web Design</small>
                <small>UI Design</small>
                <small>Design System</small>
              </div>
            </div>

            <div>
              <Link to="/projects/yarden/">
                <YardenLogo />
              </Link>
              <div className="project-tags">
                <small>Frontend Development</small>
                <small>Web Design</small>
                <small>Product Design</small>
                <small>Branding</small>
                <small>Mobile App Development</small>
                <small>Product Management</small>
              </div>
            </div>

            <div>
              <Link to="/projects/foundry/">
                <FoundryLogo />
              </Link>
              <div className="project-tags">
                <small>Frontend Development</small>
                <small>Design System</small>
                <small>Web Design</small>
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Community Building</small>
              </div>
            </div>

            <div>
              <Link to="/projects/crigenetics/">
                <img width="100%" src={CRILogo} alt="cri-logo" />
              </Link>
              <div className="project-tags">
                <small>Frontend Development</small>
                <small>Web Design</small>
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Design System</small>
                <small>Product Management</small>
                <small>A/B Testing</small>
              </div>
            </div>

            <div>
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
              <div className="project-tags">
                <small>Design System</small>
                <small>Branding</small>
                <small>Product Design</small>
                <small>Documentation</small>
              </div>
            </div>

            <div>
              <Link to="/projects/covid/">
                <h4 className="text-red0">🦠 COVID&#8210;19 Dashboard</h4>
              </Link>
              <div className="project-tags">
                <small>Frontend Development</small>
                <small>Web Design</small>
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Rest API</small>
              </div>
            </div>

            <div>
              <Link to="/projects/clicktool/">
                <ClicktoolLogo />
              </Link>
              <div className="project-tags">
                <small>Frontend Development</small>
                <small>Web Design</small>
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Product Design</small>
                <small>Product Management</small>
                <small>Branding</small>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default ProjectSection;
