import React, { Component } from "react";
import SocialIcons from "../../SocialIcons";
import ProjectsSection from "./COMPONENTS/ProjectsSection";
import Logo from "../../../LOGO/LOGO_WHITE.gif";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <section className="hero flex-center">
          <section>
            <div className="flex-vertical" style={{ textTransform: "none" }}>
              <h1 style={{ textTransform: "none", lineHeight: 1 }}>
                Chuck
                <br />
                Howard
              </h1>
              <p>Design Technologist</p>
              <small className="mb2" style={{ lineHeight: 1 }}>
                Los&nbsp;Angeles,&nbsp;CA
              </small>
            </div>
            <SocialIcons />
          </section>
        </section>
        <section className="hero bg-transBlueC-05">
          <section className="py4 one-column lg-two-columns gap2 md-gap3">
            <div className="flex-center sm-px3 md-px4 lg-px1 xl-px3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 286.6 275.06"
              >
                <circle
                  cx="143.3"
                  cy="100"
                  r="100"
                  fill="var(--green0)"
                  stroke="white"
                  opacity="0.25"
                />
                <circle
                  cx="100"
                  cy="175.06"
                  r="100"
                  fill="var(--red0)"
                  stroke="white"
                  opacity="0.25"
                />
                <circle
                  cx="186.6"
                  cy="175.06"
                  r="100"
                  fill="var(--blue0)"
                  stroke="white"
                  opacity="0.25"
                />
              </svg>
              <h6
                className="absolute text-center"
                style={{ transform: "translate(0 , -260%)" }}
              >
                Product
                <br />
                Intelligence
              </h6>
              <h6
                className="absolute text-right"
                style={{ transform: "translate(260% , 220%)" }}
              >
                UI/UX
                <br />
                Design
              </h6>
              <h6
                className="absolute"
                style={{ transform: "translate(-120% , 220%)" }}
              >
                Front-end
                <br />
                Development
              </h6>
              <small
                className="absolute text-right"
                style={{ transform: "translate(-160% , -110%)", lineHeight: 1 }}
              >
                <small className="bold" style={{ lineHeight: 1 }}>
                  Product
                  <br />
                  Roadmapping
                </small>
              </small>
              <small
                className="absolute"
                style={{ transform: "translate(160% , -110%)", lineHeight: 1 }}
              >
                <small className="bold" style={{ lineHeight: 1 }}>
                  Concept
                  <br />
                  Development
                </small>
              </small>
              <small
                className="absolute text-center bold"
                style={{ transform: "translate(0 , 400%)", lineHeight: 1 }}
              >
                <small style={{ lineHeight: 1 }}>
                  Design
                  <br />
                  Feasability
                </small>
              </small>
              <h5
                className="absolute text-center"
                style={{ transform: "translate(0 , 20%)" }}
              >
                <img src={Logo} height={80} />
              </h5>
            </div>
            <div>
              <h3>Design</h3>
              <h3>Technologist?</h3>
              <p className="h4">
                <i>/dəˈzīn tekˈnäləjəst/</i>
              </p>
              <p>
                A software engineer that is focused on the user's experience
                with the product.
              </p>
              <hr className="my2" />
              <label>from indeed:</label>
              <h5>"What is a Design Technologist?"</h5>
              <small>
                "In a sentence, design technologists are designers with
                front-end development skills. They tackle front-end programming,
                design, and UX all at the same time. They care about the
                integrity of a product’s code and the quality of its look and
                feel. Through testing and research, they make sure everything
                works together."
                <br />
                <br />
                <a
                  className="h6"
                  href="https://indeed.design/article/what-is-a-design-technologist"
                  target="_blank"
                >
                  See article from Indeed...
                </a>
              </small>
            </div>
          </section>

          <section className="one-column lg-three-columns gap3 pb4">
            <div>
              <h5>Product Intelligence Tools:</h5>
              <small>
                Use data to inform decisions. In order to collect that data I
                use these tools that measure how real users use the product in
                real scenarios.
              </small>
              <small className="product-tools p1">
                <small>Google Analytics</small>
                <small>Google Optimize</small>
                <small>Hotjar</small>
                <small>Crazy Egg</small>
                <small>Hubspot</small>
              </small>
            </div>
            <div>
              <h5>Design Tools:</h5>
              <small>
                Creating assets, editing photos, converting files, SVGs,
                prototypes, branding, animation, etc... it all happens with
                these tools.
              </small>
              <small className="design-tools p1">
                <small>Photoshop</small>
                <small>Illustrator</small>
                <small>Indesign</small>
                <small>XD</small>
                <small>After Effects</small>
                <small>Figma</small>
                <small>Balsamiq</small>
                <small>Miro</small>
              </small>
            </div>
            <div>
              <h5>Development Tools:</h5>
              <small>
                Use these tools to create design systems and reusable components
                so that I can quickly build prototypes at the highest fidelity.
              </small>
              <small className="development-tools p1">
                <small>HTML</small>
                <small>CSS</small>
                <small>Javascript</small>
                <small>SVG</small>
                <small>Sass</small>
                <small>React</small>
                <small>Sourcetree</small>
                <small>Bitbucket</small>
                <small>Git/Github</small>
                <small>Angular</small>
                <small>Vue</small>
                <small>HUBL</small>
                <small>Liquid</small>
                <small>PHP</small>
              </small>
            </div>
          </section>
        </section>
        <ProjectsSection />
      </div>
    );
  }
}

export default Home;
