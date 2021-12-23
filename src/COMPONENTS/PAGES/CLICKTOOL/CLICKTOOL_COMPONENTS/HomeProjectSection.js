// HomeProjectSection.js
import React from "react";
import "./homeprojectsection.css";
import Laptop from "./laptop.png";
import Clicktool from "./clicktool_dashboard.mp4";
import ClicktoolCity from "./SVG/ClicktoolCity";

class HomeProjectsSection extends React.Component {
  render() {
    return (
      <div className="home-project-section whole flex-center">
        {/* project section */}

        <div className="absolute whole md-two-thirds flex-vertical flex-center">
          <div className="city whole absolute">
            <ClicktoolCity />
          </div>
        </div>
        <div className="laptop-project-container flex-center whole md-two-thirds relative">
          <img className="whole absolute" src={Laptop} />
          <div className="relative laptop-project-video-container">
            <video
              className="laptop-project-video"
              controls
              loop
              src={Clicktool}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeProjectsSection;
