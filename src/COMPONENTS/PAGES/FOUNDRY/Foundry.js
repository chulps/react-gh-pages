import React, { Component } from "react";
import FoundryLogo from "./FoundryLogo";
import FoundryLogoBlack from "./FoundryLogoBlack";
import UpstateLogo from "./UILogo";

class Foundry extends Component {
  // componentDidMount() {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  render() {
    return (
      <div id="foundry" className="pb3">
        {/* top section */}
        <section className="my3 lg-two-columns gap3 lg-gap4" id="Foundry">
          <div>
            <label>Projects:</label>
            <h1>Foundry Digital</h1>
            <p className="my1">
              Foundry Digital is a Bitcoing Mining and Staking Company. They
              provide end-to-end services for industrial scale Bitcoin Miners
              and crypto stakers, and software and operations for making it all
              happen.
            </p>
          </div>

          <div className="two-columns gap3">
            <div>
              <label>Title:</label>
              <h5>Front-end Design Implimentation Engineer</h5>
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
              <h5>🇺🇸 USA</h5>
            </div>
          </div>
        </section>

        {/* responsibilities section */}
        <section className="mb4 lg-two-columns gap4">
          {/*  */}
          <div
            className="flex-center shadowDown"
            style={{ background: "#89E1A2", borderRadius: "var(--unit2)" }}
          >
            <div className="half pt3 lg-pt-none">
              <FoundryLogoBlack />
            </div>
          </div>
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h2 className="mb1">What do I do here?</h2>
            <p>
              TL;DR -- <i>Lead the design of everything we do!</i>
            </p>

            <br />
            <div
              className="sm-two-columns"
              style={{ gap: "var(--unit2) var(--unit3)" }}
            >
              <div>
                <h5>UI/UX Design:</h5>
                <small>
                  Work from within several development teams and as a single
                  contributor to design complex UI rich with data and marketing
                  websites.
                </small>
              </div>

              <div>
                <h5>Front-end Development:</h5>
                <small>
                  Build prototypes at super high fidelity, and contribute to
                  production code for matters regarding design related issues
                  like responsive layouts and animations. Make sure everything
                  is on brand.
                </small>
              </div>

              <div>
                <h5>Design System:</h5>
                <small>
                  We started a super robust token based design system called
                  "Metal" 🤘.
                </small>
              </div>

              <div>
                <h5>UI/UX Design:</h5>
                <small>
                  Use data to inform design decisions and utilize our design
                  system to update and improve quickly and at high fidelity
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* story section */}
        <section>
          <div className="sm-two-columns gap2 lg-gap4">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <div>
                  <label>Story:</label>
                  <h2 className="mb1">How did I get here?</h2>
                </div>
                <p>
                  After leaving CRI Genetics I found a job at a small Web3
                  agency called{" "}
                  <a href="https://www.upstateinteractive.io/">
                    Upstate Interactive
                  </a>
                  . While working there I was part of the team that was building
                  the web app for Foundry's staking services, also known as "The
                  Staking Portal".
                </p>
                <p>
                  Two months after starting work on this project, Upstate
                  Interactive was acquired by our client, Foundry!
                </p>
                <p>In October 2022, I was laid off due to organizational restructuring.</p>
              </div>
            </div>

            <div
              className="flex-center flex-vertical shadowDown"
              style={{
                background: "linear-gradient(#ec008c,#7732fc)",
                borderRadius: "var(--unit2)",
              }}
            >
              <div className="mt0">
                <UpstateLogo />
              </div>
            </div>
          </div>
        </section>

        <section className="my4">
          <label>Things i worked on</label>
          <p></p>

          <div className="three-columns gap4">
            <div>
              <h4>Foundry USA Pool</h4>
              <p>The #1 Bitcoin Mining Pool in the world. </p>
            </div>

            <div>
              <h4>Foundry Staking Portal Web App</h4>
            </div>

            <div>Foundry Academy</div>

            <div>
              Foundry Digital Homepage
              <a href="https://foundrydigital.com/">See the website</a>
            </div>

            <div>
              FoundryX
            </div>

            <div>DCG Design Gang</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Foundry;
