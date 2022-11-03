import React, { Component } from "react";
import YardenLogo from "../../../IMG/YardenLogo";
import YardenLogoGeometry from "./YardenLogoGeometry";

class Yarden extends Component {
  render() {
    return (
      <div id="yarden">
        
        {/* yarden top section */}
        <section className="mt3 md-two-columns gap4">
          <div>
            <label>Project:</label>
            <h1>Yarden&trade;</h1>
            <p>
              A gardening company supported by tech. This tech makes use of
              customer facing and internal products that allow the company to
              run on a very lean business model with a small team and steady
              growth.
            </p>
            <p>
              Development on this app and our products and services is ongoing.
            </p>
          </div>
          <div className="two-columns">
            <div>
              <label>Title:</label>
              <h5>Creative Director</h5>
            </div>
            <div>
              <label>City:</label>
              <h5>San Francisco (Remote)</h5>
            </div>
            <div>
              <label>When:</label>
              <h5>2021 - Present Day</h5>
            </div>
            <div>
              <label>Country:</label>
              <h5>🇺🇸 USA</h5>
            </div>
          </div>
        </section>

        {/* logo geometry section */}
        <section className="my4">
          <YardenLogoGeometry />
        </section>

        {/* responsibilities section */}
        <section>

          {/* responsibilities image */}
          
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h3>What do I do here?</h3>
            <p>
              TL;DR - Lead the design of everything we do and unite all of our
              products and services for a cohesive customer experience.
            </p>

            <br />
            <div className="two-columns gap2">
              <div>
                <h5>Branding:</h5>
                <small>
                  Lead the brand of the company and the design of all branded
                  materials.
                </small>
              </div>

              <div>
                <h5>Product:</h5>
                <small>
                  Understand business objectives and architect solutions based
                  on input from CEO, CTO, and internal data, and maintain our product pipeline.
                </small>
              </div>

              <div>
                <h5>Design System</h5>
                <small>
                  Taking cues from our branding, create a token system of
                  colors, fonts, spacing, and scaling so that the experience our
                  digital is in sync with our brand.{" "}
                </small>
              </div>

              <div>
                <h5>UI/UX Design</h5>
                <small>
                  Use data to inform design decisions and utilize our design
                  system to design and build quickly and at high fidelity
                </small>
              </div>

              <div>
                <h5>Web and Mobile Development</h5>
                <small>
                  Work along side devs with a very hands-on approach, insuring
                  the integrity and feasability of our products.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* yarden bottom section */}
        <section className="hero flex-center flex-vertical">
          <div className="width5">
            <YardenLogo />
          </div>
          <p>Download Yarden on the App Store</p>
          <a
            className="mt3"
            href="https://apps.apple.com/gb/developer/yarden-garden-inc/id1626672981"
          >
            <button>Go to App Store</button>
          </a>
        </section>
      </div>
    );
  }
}

export default Yarden;
