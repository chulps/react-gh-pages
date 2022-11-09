import React, { Component } from "react";
import FoundryLogo from "./FoundryLogo";
import FoundryLogoBlack from "./FoundryLogoBlack";
import UpstateLogo from "./UILogo";

class Foundry extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div id="foundry" className="pb3">
        {/* top section */}
        <section className="my3 lg-two-columns gap3 lg-gap4" id="Foundry">
          <div>
            <label>Projects:</label>
            <h1>Foundry Digital</h1>
            <p className="my1">
              Foundry Digital is a Bitcoing Mining and Staking Company and
              subsidiary of a larger corporation called&nbsp;
              <a target="_blank" rel="noreferrer" href="https://dcg.co/">
                "Digital Currency Group" (DCG)
              </a>
              . They provide end-to-end services for industrial scale Bitcoin
              Miners and crypto stakers, and software and operations for making
              it all happen.
            </p>
            <p>
              Other companies in the DCG portfolio include:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://genesistrading.com/"
              >
                Genesis
              </a>
              ,{" "}
              <a target="_blank" rel="noreferrer" href="https://grayscale.com/">
                Grayscale
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coindesk.com/"
              >
                Coindesk
              </a>
              ,{" "}
              <a target="_blank" rel="noreferrer" href="https://www.luno.com/">
                Luno
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tradeblock.com/"
              >
                Tradeblock
              </a>
              , and
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.hqdigital.com/"
              >
                HQ Digital.
              </a>
            </p>
          </div>

          <div>
            {" "}
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
            <p>At Foundry I worked on two teams and 6 projects total. Every day was a challenge and I learned a lot, and met some cool people.</p>

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
            </div>
          </div>
        </section>

        {/* story section */}
        <section>
          <div className="md-two-columns gap2 lg-gap4">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <div>
                  <label>Story:</label>
                  <h2 className="mb1">How did I get here?</h2>
                </div>
                <p>
                  After leaving CRI Genetics I found a job at a small Web3
                  agency called&nbsp;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.upstateinteractive.io/"
                  >
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
                <p>
                  In October 2022, I was laid off due to organizational
                  restructuring.
                </p>
              </div>
            </div>

            <div
              className="flex-center flex-vertical shadowDown"
              style={{
                background: "linear-gradient(#ec008c,#7732fc)",
                borderRadius: "var(--unit2)",
              }}
            >
              <div className="p3">
                <UpstateLogo />
              </div>
            </div>
          </div>
        </section>

        <section className="my4">
          <label>Things i worked on</label>
          <h2></h2>

          <div className="md-two-columns gap3 lg-three-columns">
            <div>
              <h4>Foundry USA Pool</h4>
              <p className="mt1">
                The #1 Bitcoin Mining Pool in the world. In this web app,
                industrial scale Bitcoin miners come here to monitor their
                mining operations in a data-rich environment with lots of tables
                and data visualizations.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://foundryusapool.com/"
                >
                  Foundry USA Pool Site
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://xd.adobe.com/view/37ad15a6-5a87-4afb-a70b-2584229c195d-62fe/"
                >
                  One of my prototypes...
                </a>
              </p>
            </div>

            <div>
              <h4>Foundry Staking Portal</h4>
              <p className="mt1">
                Foundry's staking platform is where users can stake their coins
                and gain interest on their crypto over a period of time. I
                worked on this during my time at Upstate Interactive as well.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://foundrystaking.com/"
                >
                  Foundry Staking Site
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://codepen.io/chulps/pen/OJzYZrB/dfd86ade1f90b53b5a08b07da262e0b4"
                >
                  A design I proposed
                </a>
              </p>
              <p></p>
            </div>

            <div>
              <h4>Foundry Academy</h4>
              <p className="mt1">
                A student portal for people who want to learn about mining
                Bitcoin. I would take requests from the marketing team and
                deploy their updates to github.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://foundryacademy.com/"
                >
                  Foundry Academy Site
                </a>
              </p>
            </div>

            <div>
              <h4>Foundry Digital Homepage</h4>
              <p className="mt1">
                The homepage for all of Foundry's products and services. Similar
                to the Academy website, tasks would come from the marketing
                team, and I would implement them and deploy the updates to
                github.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://foundrydigital.com/"
                >
                  See the website
                </a>
              </p>
            </div>

            <div>
              <h4>FoundryX</h4>
              <p classsName="mt1">
                The sales wing of Foundry's operation. This site is used as a
                sales tool for Foundry to buy and sell ASIC Miners in bulk
                quantities.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://foundryx.com/"
                >
                  FoundryX Site...
                </a>
              </p>
            </div>

            <div>
              <h4>DCG Design Gang</h4>
              <p className="mt1">
                This was one of my&nbsp;
                <a
                  target="_black"
                  rel="noreferrer"
                  href="https://www.whatmatters.com/faqs/okr-meaning-definition-example#:~:text=OKRs%20stand%20for%20%E2%80%9CObjectives%20and,encourage%20engagement%20around%20measurable%20goals."
                >
                  OKR's
                </a>{" "}
                while working here. I made this objective in alignment with one
                of Foundry's overarching goals for the year which was to
                "Increase collaboration between Foundry and other DCG
                subsidiaries." This was my effort to bring designers, product
                owners, and other creatives together from all DCG subsidiaries.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Foundry;
