import React, { Component } from "react";
import LinkedIn from "../IMG/SOCIAL/svg/linkedin-01.svg";
import Codepen from "../IMG/SOCIAL/svg/codepen-01.svg";
import Behance from "../IMG/SOCIAL/svg/behance-01.svg";
import StackOverflow from "../IMG/SOCIAL/svg/stack-overflow-01.svg";
import Github from "../IMG/SOCIAL/svg/github-01.svg";

class SocialIcons extends Component {
  render() {
    return (
      <div className="flex text-white" style={{ gap: "var(--unit2)" }}>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chuck-howard/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://codepen.io/chulps">
          <img src={Codepen} alt="Codepen" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://behance.net/chuckhoward">
          <img src={Behance} alt="Behance" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/users/2146031/chulps"
        >
          <img src={StackOverflow} alt="stackoverflow" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/chulps">
          <img src={Github} alt="github" />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
