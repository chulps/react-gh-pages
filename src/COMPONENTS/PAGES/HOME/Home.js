import React, { useState, useEffect } from "react";
import SocialIcons from "../../SocialIcons";
import Logo from "../../../LOGO/LOGO_WHITE.gif";
import Chuck from "../../../IMG/USERS/chuck_blue.png";
import "./Home.css";

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
      <section
        className="hero flex-end"
        style={{ minHeight: "calc(100vh - .19px)" }}
      >
        <section className="two-columns">
          <div className="flex-center-x flex-vertical">
            <div className="flex-vertical" style={{ textTransform: "none" }}>
              <h1 style={{ textTransform: "none", lineHeight: 1 }}>
                Chuck
                <br />
                Howard
              </h1>
              <p>Product Designer, Design Technologist</p>
              <small className="mb3" style={{ lineHeight: 1 }}>
                Los&nbsp;Angeles,&nbsp;CA
              </small>
            </div>
            <div>
              <label>find me:</label>
              <SocialIcons />
            </div>
          </div>
          <div className="flex-vertical flex-end relative">
            <img
              className="ghost lg-flex"
              src={Chuck}
              alt="chuck"
              style={{
                objectFit: "cover",
                transform: `translateY(${-scrollY / 4}px)`,
                filter: `blur(${scrollY / 32}px) opacity(0.9)`,
                position: "fixed",
                alignSelf: "end",
                maxHeight: "90%",
              }}
            />
          </div>
        </section>
      </section>
      <section className="hero bg-default">
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
                opacity="0.25"
              />
              <circle
                cx="100"
                cy="175.06"
                r="100"
                fill="var(--red0)"
                opacity="0.25"
              />
              <circle
                cx="186.6"
                cy="175.06"
                r="100"
                fill="var(--blue0)"
                opacity="0.25"
              />
            </svg>
            <h6
              className="absolute text-center"
              style={{ transform: "translate(0 , -1200%)" }}
            >
              Product
            </h6>
            <h6
              className="absolute text-right"
              style={{ transform: "translate(320% , 360%)" }}
            >
              UI/UX
              <br />
              Design
            </h6>
            <h6
              className="absolute"
              style={{ transform: "translate(-180% , 360%)" }}
            >
              Front-end
              <br />
              Development
            </h6>
            <small
              className="absolute text-right"
              style={{ transform: "translate(-280% , -140%)", lineHeight: 1 }}
            >
              <small className="bold" style={{ lineHeight: 1 }}>
                Product
                <br />
                Roadmap
              </small>
            </small>
            <small
              className="absolute"
              style={{ transform: "translate(210% , -290%)", lineHeight: 1 }}
            >
              <small className="bold" style={{ lineHeight: 1 }}>
                Prototyping
              </small>
            </small>
            <small
              className="absolute text-center bold"
              style={{ transform: "translate(0 , 550%)", lineHeight: 1 }}
            >
              <small style={{ lineHeight: 1 }}>
                Product
                <br />
                Feasability
              </small>
            </small>
            <h5
              className="absolute text-center"
              style={{ transform: "translate(0 , 20%)" }}
            >
              <img src={Logo} height={80} alt="Logo" />
            </h5>
          </div>
          <div>
            <h3>Design</h3>
            <h3>Technologist?</h3>
            <p className="h4 mb2">
              <i>/dəˈzīn tekˈnäləjəst/</i>
            </p>

            <label>from an article on indeed:</label>
            <h4 className="mb1">What is a Design Technologist?</h4>
            <p style={{maxWidth: '50ch'}}>
              "In a sentence, design technologists are designers with front-end
              development skills. They tackle front-end programming, design, and
              UX all at the same time. They care about the integrity of a
              product’s code and the quality of its look and feel. Through
              testing and research, they make sure everything works together."
              &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://indeed.design/article/what-is-a-design-technologist"
              >
                See article...
              </a>
              <br />
              <br />
            </p>
          </div>
        </section>

        <section className="one-column lg-three-columns gap3 pb4">
          <div>
            <h5>Product Intelligence Tools:</h5>
            <small>
              Use data to inform decisions. In order to collect that data I use
              these tools that measure how real users use the product in real
              scenarios.
            </small>
            <small className="product-tools py1">
              <small>Google Analytics</small>
              <small>Google Optimize</small>
              <small>Hotjar</small>
              <small>Crazy Egg</small>
            </small>
          </div>
          <div>
            <h5>Design Tools:</h5>
            <small>
              Creating assets, editing photos, converting files, SVGs,
              prototypes, branding, animation, etc... it all happens with these
              tools.
            </small>
            <small className="design-tools py1">
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
            <small className="development-tools py1">
              <small>HTML</small>
              <small>CSS</small>
              <small>Javascript</small>
              <small>SVG</small>
              <small>Sass</small>
              <small>React</small>
              <small>Sourcetree</small>
              <small>Bitbucket</small>
              <small>Github</small>
              <small>Gitlab</small>
              <small>Angular</small>
              <small>Vue</small>
              <small>HUBL</small>
              <small>Liquid</small>
            </small>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
