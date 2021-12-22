import React, { Component } from "react";
import SocialIcons from "../../SocialIcons";
import ProjectsSection from "./COMPONENTS/ProjectsSection";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <section className="hero flex-center">
          <section>
            <div
              className="lg-flex-center flex-vertical lg-text-center"
              style={{ textTransform: "none" }}
            >
              <h1 style={{ textTransform: "none" }}>Chuck Howard</h1>
              <p className="mb2">
                Product Design | Front End Development | Product Manager
              </p>
            </div>
            <SocialIcons />
          </section>
        </section>

        <ProjectsSection />
      </div>
    );
  }
}

export default Home;
