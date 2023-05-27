import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Xprize.css";
import Pop from "./pop.png";
import Xpds from "./xpds.png";
import Website from "./xprize-website.png";

class Xprize extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div id="xprize">
        <Helmet>
          <title>XPRIZE</title>
        </Helmet>
        <section className="py3 h100">
          <label>Job:</label>
          <h1>XPRIZE</h1>
          <div className="lg-two-columns gap3">
              <p style={{ maxWidth: "50ch" }}>
                Working at XPRIZE is a truely humbling experience. It's a
                non-profit organization that solves big problems facing
                humanity, such as Carbon Removal, Wildfires, etc. Teams assemble
                from all around the world and compete against eachother to solve
                these big problems. The winners get a big cash prize and they
                use the money to further their research.
              </p>

              <div className="sm-two-columns gap2">
                <div>
                  <label>Title:</label>
                  <h5>UI Engineer</h5>
                </div>
                <div>
                  <label>City:</label>
                  <h5>Rochester, NY (Remote)</h5>
                </div>
                <div>
                  <label>When:</label>
                  <h5>2022</h5>
                </div>
                <div>
                  <label>Country:</label>
                  <h5>
                    <span role="img" aria-label="USA">
                      🇺🇸
                    </span>
                    &nbsp;USA
                  </h5>
                </div>
              </div>
          </div>
        </section>
        <section>
          <h2>Projects at XPRIZE</h2>
          <p style={{ maxWidth: "50ch" }} className="mb2">
            At XPRIZE, I worked on a number of projects. My role here was not
            very design centered and I was mostly focused on front-end
            development in collaboration with other developers.
          </p>

          <div className="xprize-projects md-two-columns lg-three-columns">
            <div className="project">
              <a href="https://www.xprize.org">
                <img src={Website} alt="placeholder" />
              </a>
              <h5>Company Website</h5>
              <p>
                This is the marketing site for the organization. Here I worked
                on the UI and designed a few features including the navigation.
              </p>
            </div>

            <div className="project">
              <a href="https://pop.xprize.org/prizes">
                <img src={Pop} alt="placeholder" />
              </a>
              <h5>POP</h5>
              <p>
                This is the portal for contestants to manage their teams with
                the organization. Here I worked on a lot of the internal UI.
              </p>
            </div>

            <div className="project">
              <a href="https://codepen.io/chulps/live/RwebZWG/b19e1351404dedf5307c7580c3112fa0">
                <img src={Xpds} alt="placeholder" />
              </a>
              <h5>XPDS (XPRIZE Design System)</h5>
              <p>
                This is the design system I made following strict brand
                standards. I took the brand standards and translated it into
                usable code.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Xprize;
