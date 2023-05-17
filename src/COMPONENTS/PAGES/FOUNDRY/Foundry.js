import React, { Component } from "react";
import FoundryLogoBlack from "./FoundryLogoBlack";
import UpstateLogo from "./UILogo";
import { Helmet } from "react-helmet";
import "./Foundry.css";
import FoundryStaking from "./IMG/foundrystaking.png";
import FoundryPool from "./IMG/foundrypool.png";
import FoundryX from "./IMG/foundryx.png";
import FoundryDigital from "./IMG/foundrydigital.png";
import FoundryAcademy from "./IMG/foundryacademy.png";
import DesignGang from "./IMG/designgang.png";

class Foundry extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const subsidiaries = [
      { name: "Genesis", href: "https://genesistrading.com/" },
      { name: "Grayscale", href: "https://grayscale.com/" },
      { name: "Coindesk", href: "https://www.coindesk.com/" },
      { name: "Luno", href: "https://www.luno.com/" },
      { name: "Tradeblock", href: "https://tradeblock.com/" },
      { name: "HQ Digital", href: "https://www.hqdigital.com/" },
    ];

    const projects = [
      {
        title: "Foundry USA Pool",
        description:
          "The #1 Bitcoin Mining Pool in the world. In this web app, industrial scale Bitcoin miners come here to monitor their mining operations in a data-rich environment with lots of tables and data visualizations.",
        src: `${FoundryPool}`,
        href: 'https://foundryusapool.com'
      },
      {
        title: "Foundry Staking Portal",
        description:
          "Foundry's staking platform is where users can stake their coins and gain interest on their crypto over a period of time. I worked on this during my time at Upstate Interactive as well.",
        src: `${FoundryStaking}`,
        href: 'https://foundrystaking.com/',
      },
      {
        title: "Foundry Academy",
        description:
          "A student portal for people who want to learn about mining Bitcoin. I would take requests from the marketing team and deploy their updates to github.",
        src: `${FoundryAcademy}`,
        href: 'https://foundryacademy.com'
      },
      {
        title: "Foundry Digital Homepage",
        description:
          "The homepage for all of Foundry's products and services. Similar to the Academy website, tasks would come from the marketing team, and I would implement them and deploy the updates to github.",
        src: `${FoundryDigital}`,
        href: 'https://www.foundrydigital.com'
      },
      {
        title: "FoundryX",
        description:
          "The sales wing of Foundry's operation. This site is used as a sales tool for Foundry to buy and sell ASIC Miners in bulk quantities.",
        src: `${FoundryX}`,
        href: 'https://www.foundryx.com'
      },
      {
        title: "DCG Design Gang",
        description:
          "One of the annual company goals at Foundry was to 'increase collaboration between Foundry and other DCG subsidiaries'. Community building is not my strength, this is the only organization outside of c-suite executives that included members across all DCG subsidiaries.",
        src: `${DesignGang}`,
      },
    ];

    return (
      <div id="foundry" className="pb3">
        <Helmet>
          <title>
            Foundry - Bitcoin Mining, Staking and Digital Currency Solutions
          </title>
          <meta
            name="description"
            content="Foundry Digital is a Bitcoin Mining and Staking Company, subsidiary of the Digital Currency Group (DCG). Learn about Chuck's projects while working there."
          />
        </Helmet>
        {/* top section */}
        <section className="pt3">
          <label>Projects:</label>
          <h1>Foundry</h1>
        </section>
        <section className="mb3 lg-two-columns gap3 lg-gap4" id="Foundry">
          <div>
            <p className="my1">
              Foundry Digital is a Bitcoing Mining and Staking Company and
              subsidiary of a larger corporation called&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://dcg.co/">
                "Digital Currency Group" (DCG)
              </a>
              . They provide end-to-end services for industrial scale Bitcoin
              Miners and crypto stakers, and software and operations for making
              it all happen.
            </p>
            <p>
              Other companies in the DCG portfolio include:{" "}
              {subsidiaries.map((link, index) => (
                <React.Fragment key={index}>
                  {index > 0 &&
                    (index < subsidiaries.length - 1 ? ", " : ", and ")}
                  <a target="_blank" rel="noopener noreferrer" href={link.href}>
                    {link.name}
                  </a>
                </React.Fragment>
              ))}
            </p>
          </div>

          <div>
            {" "}
            <div className="two-columns gap3">
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
                <h5><span role="img" aria-label="USA">🇺🇸</span>&nbsp;USA</h5>
              </div>
            </div>
          </div>
        </section>

        {/* responsibilities section */}
        <section className="mb4 lg-two-columns gap4">
          {/*  */}
          <div
            className="flex-center shadowDown p3"
            style={{ background: "#89E1A2", borderRadius: "var(--unit2)" }}
          >
            <div className="half">
              <FoundryLogoBlack />
            </div>
          </div>
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h2 className="mb1">What do I do here?</h2>
            <p>
              At Foundry I worked on two teams and 6 projects total. Every day
              was a challenge and I learned a lot, and met some cool people.
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
                  "Metal"&nbsp;<span role="img" aria-label="metal">🤘</span>.
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
                    rel="noopener noreferrer"
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
                <p>In October 2022, I was laid off.</p>
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
          <h3>I was a UI Engineer</h3>
          <p className="mb2">At Foundry, I got to design a little bit, however, design was not the focus of my job. I was partnered with three different teams working on 5 different projects and working on one solo project. Design decisions were handed down from someone above me. Brand standards were strict and at the time there was no design system.</p>
          <div className="md-two-columns gap3 lg-three-columns">
            {projects.map((project) => (
              <div className="project-link">
                <a href={project.href}>
                  <img
                    className="mb0"
                    src={project.src}
                    alt={project.title}
                    width="100%"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                </a>
                <div className="px0">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Foundry;
