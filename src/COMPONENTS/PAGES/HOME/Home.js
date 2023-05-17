import React, { useState, useEffect } from "react";
import SocialIcons from "../../SocialIcons";
import Chuck from "../../../IMG/USERS/chuck_blue.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import CCBG from "./cross-campus-bg.jpg";
import { Helmet } from "react-helmet";
import "../../../../src/animate-in.scss"
import About from "./About";

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
          minHeight: "calc(100vh - 61.38px)",
        }}
      >
        <section className="content-col flex md-two-columns">
          <div className="absolute md-relative md-order1 whole h100 flex-vertical relative bg-white">
            <img
              className="whole md-half"
              style={{
                objectFit: "cover",
                transform: `translateY(${-scrollY / 8}px)`,
                filter: `blur(${scrollY / 64}px) opacity(0.9) brightness(${100 - scrollY}%)})`,
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
          <div className="flex-vertical flex-start md-flex-center-x py2 lg-ml3 animate-up-wrapper">
            <div
              className="content-box flex-vertical animate-up-wrapper"
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
      <About />
    </div>
  );
};

export default Home;
