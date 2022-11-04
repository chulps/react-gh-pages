import React, { Component } from "react";
import YardenLogo from "../../../IMG/YardenLogo";
import YardenLogoGeometry from "./YardenLogoGeometry";
import plantSelectionScreen from "./plant_selection.png";
import changeDateScreen from "./change_date.png";


class Yarden extends Component {

    componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    }
  
  render() {
    return (
      <div id="yarden">
        
        {/* yarden top section */}
        <section className="mt3">
          <label>Project:</label>
          <h1>Yarden&trade;</h1>
        </section>

        {/* intro section */}
        <section className="md-two-columns gap4 mb3">
          <div>

            <p>
              Yarden is a gardening company supported by tech. This tech makes use of
              customer facing and internal products that allow the company to
              run on a very lean business model with a small team and steady
              growth.
            </p>
          </div>
          <div className="two-columns gap2">
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

        {/* responsibilities section */}
        <section className="lg-two-columns gap4 mb3">

          {/* responsibilities image */}
          <div>
            <div style={{position: 'sticky', top: 'var(--unit4)'}}>
              <YardenLogoGeometry />
              <small></small>
            </div>
          </div>
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h3>What do I do here?</h3>
            <p>
              TL;DR - Lead the design of everything we do. 
            </p>

            <br />
            <div className="sm-two-columns gap2">
              <div>
                <h5>Branding:</h5>
                <small>
                  Lead the brand of the company and the design of all branded
                  materials. This includes print and web assets.
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
                  Establish a design token system of
                  colors, fonts, spacing, and scaling for a consistent experience across all products. This system is used to build a constantly evolving component library.
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
                  the  and feasability of our products.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges section */}
        {/* <section>
          <label>Challenges</label>
          <h3>Clever Headline</h3>
          <div>
            rebrand the company
            <p>talk about the truck</p>
            <p>talk about the shirts</p>
          </div>
          <div>
            redesign the website
          </div>
          <div>
            A/B Testing
          </div>
          <div>
            Web App
          </div>
          <div>
            Mobile App
          </div>
          <div>
            Product Roadmapping
          </div>
          <div>
            
          </div>
        </section> */}










        {/* yarden bottom section */}
        <section className="hero flex-center flex-vertical">
          <div className="grid md-flex mb3" style={{gap: "var(--unit3)"}}>
            <img width={200} src={changeDateScreen} alt="change date screen" />
            <img width={200} src={plantSelectionScreen} alt="plant selection screen" />
          </div>
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
