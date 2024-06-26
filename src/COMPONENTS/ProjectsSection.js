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

          <h2>Places I've Worked</h2>
          <p className="mb3" style={{ maxWidth: "45ch" }}>
            These are the places I've worked since starting my career in tech in
            2018.
          </p>
          <div className="one-column sm-two-columns lg-three-columns xl-four-columns gap2 animate-up-wrapper">
            <div>
              <Link to="/projects/mindvault/">
                <svg
                  className="block-mark"
                  style={{ height: "100%", width: "auto" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 594 594"
                >
                  <path
                    fill="blue"
                    d="m457.08,4.53c-106.72-6.04-213.44-6.04-320.16,0C69.72,8.79,8.79,69.72,4.53,136.92c-6.04,106.72-6.04,213.44,0,320.16,4.26,67.2,65.19,128.14,132.39,132.39,106.72,6.04,213.44,6.04,320.16,0,67.2-4.26,128.14-65.19,132.39-132.39,6.04-106.72,6.04-213.44,0-320.16-4.26-67.2-65.19-128.14-132.39-132.39Z"
                  ></path>
                  <path
                    fill="white"
                    d="m162,162v54h-54v-54h54Zm0,108h54v-54h-54v54Zm-54,162h54v-162h-54v162ZM378,162c-39.99,0-65.14,14.82-81,33.46-15.86-18.65-41.01-33.46-81-33.46v54c54,0,54,54,54,54v162h54v-162s0-54,54-54,54,54,54,54v162h54v-162s0-108-108-108Z"
                  ></path>
                </svg>
              </Link>
              <div className="project-tags">
                <small>Branding</small>
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Web Design</small>
                <small>Product Design</small>
                <small>Product Management</small>
                <small>Frontend Development</small>
              </div>
            </div>
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
                <small>UX Design</small>
                <small>UI Design</small>
                <small>Web Design</small>
                <small>Design System</small>
                <small>Community Building</small>
                <small>Frontend Development</small>
              </div>
            </div>

            <div>
              <Link to="/projects/crigenetics/">
                <img width="100%" src={CRILogo} alt="cri-logo" />
              </Link>
              <div className="project-tags">
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Web Design</small>
                <small>A/B Testing</small>
                <small>Design System</small>
                <small>Product Management</small>
                <small>Frontend Development</small>
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
                <small>Branding</small>
                <small>Documentation</small>
                <small>Design System</small>
                <small>Product Design</small>
              </div>
            </div>

            {/* <div>
              <Link to="/projects/covid/">
                <h4 className="text-red0">🦠 COVID&#8210;19 Dashboard</h4>
              </Link>
              <div className="project-tags">
                <small>Rest API</small>
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Web Design</small>
                <small>Frontend Development</small>
              </div>
            </div> */}

            <div>
              <Link to="/projects/clicktool/">
                <ClicktoolLogo />
              </Link>
              <div className="project-tags">
                <small>Branding</small>
                <small>UI Design</small>
                <small>UX Design</small>
                <small>Web Design</small>
                <small>Product Design</small>
                <small>Product Management</small>
                <small>Frontend Development</small>
              </div>
            </div>
          </div>
          <hr className="my3" />
          <div>
            <h2>Personal Projects</h2>
            <p className="mb3">Things I out of curiosity or personal interest.</p>
            <div className="one-column sm-two-columns lg-three-columns xl-four-columns gap2 animate-up-wrapper">
              <div>
                <a target="_blank" rel="noreferrer" href="/weather-dashboard/">
                  <h4>🌤️ AI Weather Dashboard</h4>
                </a>
                <div className="project-tags">
                  <small>Rest API</small>
                  <small>Google Places API</small>
                  <small>Google Translate API</small>
                  <small>OpenAI Completions API</small>
                  <small>UI Design</small>
                  <small>UX Design</small>
                  <small>Web Design</small>
                  <small>Frontend Development</small>
                </div>
              </div>

              <div>
                <a target="_blank" rel="noreferrer" href="https://chulps.github.io/chat-app/">
                  <h4>💬 T-Chat</h4>
                </a>
                <div className="project-tags">
                  <small>Typescript</small>
                  <small>Google Translate API</small>
                  <small>OpenAI Whisper API</small>
                  <small>Product Design</small>
                  <small>Frontend Development</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default ProjectSection;
