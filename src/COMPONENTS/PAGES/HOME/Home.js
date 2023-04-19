import React, { useState, useEffect } from "react";
import SocialIcons from "../../SocialIcons";
import Logo from "../../../LOGO/LOGO_WHITE.gif";
import Chuck from "../../../IMG/USERS/chuck_blue.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import CCBG from "./cross-campus-bg.jpg";
import { Helmet } from "react-helmet";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div id="home">
      <Helmet>
        <title>Chuck Howard</title>
      </Helmet>

      {/* hero section */}
      <section
        className="hero flex-end"
        style={{
          minHeight: "calc(100vh - 63.19px)",
        }}
      >
        <section className="content-col flex md-two-columns">
          <div className="absolute md-relative md-order1 whole h100 flex-vertical relative bg-white">
            <img
              className="whole md-half"
              style={{
                objectFit: "cover",
                transform: `translateY(${-scrollY / 8}px)`,
                filter: `blur(${scrollY / 64}px) opacity(0.9)`,
                position: "fixed",
                bottom: 0,
                height: "100vh",
                right: 0,
                overflow: "hidden",
                alignSelf: "center",
                justifySelf: "center",
                transition: "width 0.5s ease",
                willChange: "width",
              }}
              alt="Hero Background"
              src={CCBG}
              width="100%"
              height="auto"
            />
            <img
              className="chuck-img"
              src={Chuck}
              alt="chuck"
              style={{
                transform: `translateY(${-scrollY / 4}px)`,
                filter: `blur(${scrollY / 128}px) `,
              }}
            />
          </div>
          <div className="flex-vertical flex-start md-flex-center-x py2 lg-ml3">
            <div
              className="content-box flex-vertical"
              style={{
                textTransform: "none",
              }}
            >
              <h1 style={{ textTransform: "none", lineHeight: 1 }}>
                Chuck
                <br />
                Howard
              </h1>
              <p>Product Designer & Frontend Developer</p>
              <div className="mb3">
                <small className="mb3" style={{ lineHeight: 1 }}>
                  <span className="mr0 text-red0">
                    <FontAwesomeIcon icon={solid("map-pin")} />
                  </span>
                  Los&nbsp;Angeles,&nbsp;CA
                </small>
              </div>
            </div>
            <div>
              <label>Links:</label>
              <SocialIcons />
            </div>
          </div>
        </section>
      </section>

      {/* diagram section */}
      <section className="hero bg-default">
        {/* about section */}
        <section className="py4 one-column lg-two-columns gap3 xl-gap4">
          <div>
            <label>About Me</label>
            <h3 className="mb1">High Level Summary</h3>
            <p>
              I'm a <i>Product Designer</i> with experience in{" "}
              <i>Frontend Development</i> and <i>Product Discovery</i> who can
              lead a product from the point of discovery, through the design
              phase, and on to deployment.
            </p>

            <div className="disciplines">
              <div className="flex-center">
                <h6 style={{ background: "rgba(255, 96, 96, 0.30)" }}>
                  <FontAwesomeIcon icon={solid("wrench")} />
                  Front-end Development
                </h6>
              </div>
              +
              <div className="flex-center">
                <h6 style={{ background: "rgba(0, 206, 89, 0.30)" }}>
                  <FontAwesomeIcon icon={solid("search")} />
                  Product Discovery
                </h6>
              </div>
              +
              <div className="flex-center flex-vertical">
                <h6 style={{ background: "rgba(0, 143, 195, 0.30)" }}>
                  <FontAwesomeIcon icon={solid("pen-nib")} />
                  UI/UX
                  <br />
                  Design
                </h6>
              </div>
            </div>

            <p className="mt2">
              I'm actively searching for full-time role on a remote team in
              emerging technology with a small or medium sized company where I
              can collaborate with awesome people, combine my skills and make an
              impact.
            </p>
          </div>

          <div className="cross-functionality flex-center-x">
            <div className="skills-diagram flex-center whole xs-px3 sm-px4 lg-px2 xl-px3 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 286.6 275.06"
                style={{ maxWidth: "512px" }}
              >
                <circle
                  cx="143.3"
                  cy="100"
                  r="100"
                  fill="var(--green0)"
                  opacity="0.30"
                />
                <circle
                  cx="100"
                  cy="175.06"
                  r="100"
                  fill="var(--red0)"
                  opacity="0.30"
                />
                <circle
                  cx="186.6"
                  cy="175.06"
                  r="100"
                  fill="var(--blue0)"
                  opacity="0.30"
                />
              </svg>
              <small
                className="absolute"
                style={{ transform: "translate(0 , -320%)" }}
              >
                <FontAwesomeIcon icon={solid("search")} />

                <div>
                  Product
                  <br />
                  Discovery
                </div>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(0 , -450%)",
                  color: "hsl(140, 50%, 60%)",
                }}
              >
                <small>
                  A/B
                  <br />
                  Testing
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-150% , -380%)",
                  color: "hsl(140, 50%, 60%)",
                }}
              >
                <small>
                  User
                  <br />
                  Validation
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-220% , -300%)",
                  color: "hsl(140, 50%, 60%)",
                }}
              >
                <small>
                  Business
                  <br />
                  Valuation
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(150% , -380%)",
                  color: "hsl(140, 50%, 60%)",
                }}
              >
                <small>Surveys</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(200% , -300%)",
                  color: "hsl(140, 50%, 60%)",
                }}
              >
                <small>Heatmaps</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-160% , -180%)",
                  color: "hsl(32, 55%, 55%)",
                }}
              >
                <small>
                  Backlog
                  <br />
                  Prioritization
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-260% , 40%)",
                  color: "hsl(32, 55%, 55%)",
                }}
              >
                <small>
                  Writing
                  <br />
                  Scopes
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-340% , -160%)",
                  color: "hsl(32, 55%, 55%)",
                }}
              >
                <small>
                  Agile
                  <br />
                  Methodology
                </small>
              </small>
              <small
                className="absolute"
                style={{ transform: "translate(320% , 220%)" }}
              >
                <FontAwesomeIcon icon={solid("pen-nib")} />
                UI/UX
                <br />
                Design
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(240% , 360%)",
                  color: "hsl(201, 50%, 60%)",
                }}
              >
                <small>Illustration</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(200% , 460%)",
                  color: "hsl(201, 50%, 60%)",
                }}
              >
                <small>
                  Color
                  <br />
                  Theory
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(340% , 430%)",
                  color: "hsl(201, 50%, 60%)",
                }}
              >
                <small>Typography</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(420% , 340%)",
                  color: "hsl(201, 50%, 60%)",
                }}
              >
                <small>
                  Information
                  <br />
                  Architecture
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(430% , 100%)",
                  color: "hsl(201, 50%, 60%)",
                }}
              >
                <small>Animation</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(460% , 200%)",
                  color: "hsl(201, 50%, 60%)",
                }}
              >
                <small>Branding</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(450% , 0)",
                  color: "hsl(201, 50%, 60%)",
                }}
              >
                <small>UX&nbsp;Writing</small>
              </small>
              <small
                className="absolute"
                style={{ transform: "translate(-320% , 220%)" }}
              >
                <FontAwesomeIcon icon={solid("wrench")} />
                Front-end
                <br />
                Development
              </small>
              <small
                className="absolute"
                style={{ transform: "translate(-240% , -80%)", lineHeight: 1 }}
              >
                <FontAwesomeIcon icon={solid("map")} />
                Product
                <br />
                Roadmap
              </small>
              <small
                className="absolute"
                style={{ transform: "translate(240% , -80%)", lineHeight: 1 }}
              >
                <FontAwesomeIcon icon={solid("lightbulb")} />
                Design
                <br />
                Thinking
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(270% , 40%)",
                  color: "hsl(174, 60%, 42%)",
                }}
              >
                <small>
                  Design
                  <br />
                  Iteration
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(320% , -150%)",
                  color: "hsl(174, 60%, 42%)",
                }}
              >
                <small>
                  Prototypes&nbsp;&
                  <br />
                  Testing
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(140% , -180%)",
                  color: "hsl(174, 60%, 42%)",
                }}
              >
                <small>
                  Usability
                  <br />
                  Heuristics
                </small>
              </small>
              <small
                className="absolute"
                style={{ transform: "translate(0 , 330%)", lineHeight: 1 }}
              >
                <FontAwesomeIcon icon={solid("handshake")} />
                Engineering
                <br />
                Feasability
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(120% , 280%)",
                  color: "hsl(248, 25%, 65%)",
                }}
              >
                <small>
                  Design
                  <br />
                  System
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-120% , 280%)",
                  color: "hsl(248, 25%, 65%)",
                }}
              >
                <small>
                  Design
                  <br />
                  Ops
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(0 , 440%)",
                  color: "hsl(248, 25%, 65%)",
                }}
              >
                <small>Documentation</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-400% , 350%)",
                  color: "hsl(359, 60%, 70%)",
                }}
              >
                <small>
                  Component
                  <br />
                  Libraries
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-240% , 350%)",
                  color: "hsl(359, 60%, 70%)",
                }}
              >
                <small>React</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-220% , 440%)",
                  color: "hsl(359, 60%, 70%)",
                }}
              >
                <small>
                  Analytics
                  <br />
                  Implementation{" "}
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-400% , 80%)",
                  color: "hsl(359, 60%, 70%)",
                }}
              >
                <small>
                  QA
                  <br />
                  Testing
                </small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-420% , 0%)",
                  color: "hsl(359, 60%, 70%)",
                }}
              >
                <small>Git</small>
              </small>
              <small
                className="absolute"
                style={{
                  transform: "translate(-440% , 160%)",
                  color: "hsl(359, 60%, 70%)",
                }}
              >
                <small>Accessibility</small>
              </small>
              <div
                className="absolute"
                style={{ transform: "translate(0 , 20%)" }}
              >
                <img
                  src={Logo}
                  className="diagram-c-logo"
                  height={80}
                  alt="Logo"
                />
                <p
                  className="text-white h6"
                  style={{
                    filter: "drop-shadow(0 0 3px white)",
                    lineHeight: 1,
                    marginTop: "-0.5em",
                  }}
                >
                  Chuck
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* tools section */}
        <section className="one-column lg-three-columns gap3 pb3">
          <div>
            <h4 className="mb0">Development Tools:</h4>
            <p>
              Use these tools to create design systems and reusable components
              so that I can quickly build prototypes at the highest fidelity.
            </p>
            <div className="development-tools py1">
              <small>HTML</small>
              <small>CSS</small>
              <small>Javascript</small>
              <small>SVG</small>
              <small>Sass</small>
              <small>React</small>
              <small>React Native</small>
              <small>Sourcetree</small>
              <small>Bitbucket</small>
              <small>Github</small>
              <small>Gitlab</small>
              <small>Angular</small>
              <small>Vue</small>
              <small>HUBL</small>
              <small>Liquid</small>
            </div>
          </div>

          <div>
            <h4 className="mb0">Product Tools:</h4>
            <p>
              Use data to inform design decisions. In order to collect that data
              I use these tools that measure how real users use the product in
              real scenarios.
            </p>
            <div className="product-tools py1">
              <small>Google Analytics</small>
              <small>Google Optimize</small>
              <small>Hotjar</small>
              <small>Crazy Egg</small>
              <small>Jira</small>
              <small>Confluence</small>
            </div>
          </div>

          <div>
            <h4 className="mb0">Design Tools:</h4>
            <p>
              Creating assets, editing photos, converting files, SVGs,
              prototypes, branding, animation, etc... it all happens with these
              tools.
            </p>
            <div className="design-tools py1">
              <small>Photoshop</small>
              <small>Illustrator</small>
              <small>Indesign</small>
              <small>XD</small>
              <small>After Effects</small>
              <small>Figma</small>
              <small>Balsamiq</small>
              <small>Miro</small>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
