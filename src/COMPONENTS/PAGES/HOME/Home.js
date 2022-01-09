import React, { Component } from "react";
import SocialIcons from "../../SocialIcons";
import ProjectsSection from "./COMPONENTS/ProjectsSection";
import Logo from "../../../LOGO/LOGO_WHITE.gif";

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
              <p className="mb2">Design Technologist</p>
            </div>
            <SocialIcons />
          </section>
        </section>
        <section className="hero bg-transBlueC-05 flex-center">
          <section className="py4 one-column lg-two-columns gap2 md-gap3">
            <div className="flex-center sm-px3 md-px4 lg-px2 xl-px3">
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
                  fill="#00394d"
                  opacity="0.1"
                />
                <circle
                  cx="100"
                  cy="175.06"
                  r="100"
                  fill="#00394d"
                  opacity="0.1"
                />
                <circle
                  cx="186.6"
                  cy="175.06"
                  r="100"
                  fill="#00394d"
                  opacity="0.1"
                />
              </svg>
              <h6
                className="absolute text-center"
                style={{ transform: "translate(0 , -260%)" }}
              >
                Product
                <br />
                Vision
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
                Web
                <br />
                Development
              </h6>
              <h5
                className="absolute text-center"
                style={{ transform: "translate(0 , 20%)" }}
              >
                <img src={Logo} height={80} />
              </h5>
            </div>
            <div>
              <h3>"design technologist?"</h3>
              <p className="h4">
                <i>dəˈzīn tekˈnäləjəst</i>
              </p>
              <p>
                A product visionary who can use design and front-end development
                skills to lead the vision of a product.
              </p>
              <hr className="my2" />
              <label>from indeed:</label>
              <br />
              <small>
                "In a sentence, design technologists are designers with
                front-end development skills. They tackle front-end programming,
                design, and UX all at the same time. They care about the
                integrity of a product’s code and the quality of its look and
                feel. Through testing and research, they make sure everything
                works together."{" "}
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
        </section>
        <ProjectsSection />
      </div>
    );
  }
}

export default Home;
