import React, { Component } from "react";
import LinkedIn from "../../IMG/SOCIAL/svg/linkedin-01.svg";
import Codepen from "../../IMG/SOCIAL/svg/codepen-01.svg";
import Behance from "../../IMG/SOCIAL/svg/behance-01.svg";
import StackOverflow from "../../IMG/SOCIAL/svg/stack-overflow-01.svg";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <section className="hero flex-center">
          <section>
            <div
              className="flex-center flex-vertical text-center"
              style={{ textTransform: "none" }}
            >
              <h2>Chuck is rebuilding his website.</h2>
              <p className="mb2">Where to find him...</p>

              <div className="display: flex;" style={{ gap: "var(--unit3)" }}>
                <a href="https://www.linkedin.com/in/chuck-howard/">
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>

                <a href="https://codepen.io/chulps">
                  <img src={Codepen} alt="Codepen" />
                </a>

                <a href="https://behance.net/chuckhoward">
                  <img src={Behance} alt="Behance" />
                </a>

                <a href="https://stackoverflow.com/users/2146031/chulps">
                  <img src={StackOverflow} alt="stackoverflow" />
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
