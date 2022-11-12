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
              <p>Product Designer</p>
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
        <section className="py4 one-column lg-two-columns gap3 md-gap4">
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
              style={{ transform: "translate(0 , -600%)" }}
            >
              Product
              <br />
              Discovery
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
              style={{ transform: "translate(190% , -150%)", lineHeight: 1 }}
            >
              <small className="bold" style={{ lineHeight: 1 }}>
                Prototyping &
                <br />
                Wireframing
              </small>
            </small>
            <small
              className="absolute text-center bold"
              style={{ transform: "translate(0 , 550%)", lineHeight: 1 }}
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
              <img src={Logo} height={80} alt="Logo" />
            </h5>
          </div>
          <div>
            <label>Summary:</label>
            <h3 className="mb2">About me:</h3>
            <p>Based in Los Angeles, I came here as an artist and designer in 2017. In 2018 I started coding and began my new career in tech, blending my old skills with more recent ones, and learning to make digital products.</p>
            <p>
              The road to where I am today was not a direct path. In my journey I've had interesting titles and practiced different disciplines, but I always play the same role; <b>I am the one who designs the thing we sell.</b>
            </p>
            <p>In doing this, I practice these core disciplines:</p>
            <p className="disciplines">
              <small style={{background: 'rgba(0, 143, 195, 0.25)' }}>UI/UX Design</small>
              <small style={{background: 'rgba(255, 96, 96, 0.25)'}}>Front-end Development</small>
              <small style={{background: 'rgba(0, 206, 89, 0.25)'}}>Product Discovery</small>
            </p>
          </div>
        </section>

        <section className="one-column lg-three-columns gap3 pb4">
          <div>
            <h5>Product Discovery Tools:</h5>
            <small>
              Use data to inform design decisions. In order to collect that data I use
              these tools that measure how real users use the product in real
              scenarios.
            </small>
            <small className="product-tools py1">
              <small>Google Analytics</small>
              <small>Google Optimize</small>
              <small>Hotjar</small>
              <small>Crazy Egg</small>
              <small>Jira</small>
              <small>Confluence</small>
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
