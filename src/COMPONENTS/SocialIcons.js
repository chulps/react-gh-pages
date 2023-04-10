import React, { Component } from "react";
import LinkedIn from "../IMG/SOCIAL/svg/linkedin-01.svg";
import Codepen from "../IMG/SOCIAL/svg/codepen-01.svg";
import Behance from "../IMG/SOCIAL/svg/behance-01.svg";
import StackOverflow from "../IMG/SOCIAL/svg/stack-overflow-01.svg";
import Github from "../IMG/SOCIAL/svg/github-01.svg";
import Calendly from "../IMG/SOCIAL/svg/calendly.svg";
import "./SocialIcons.css";

class SocialIcons extends Component {
  render() {
    const socialLinks = [
      {
        alt: "LinkedIn",
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/chuck-howard/",
        imgSrc: `${LinkedIn}`,
      },      {
        alt: "Codepen",
        text: "Codepen",
        href: "https://codepen.io/chulps",
        imgSrc: `${Codepen}`,
      },      {
        alt: "Behance",
        text: "Behance",
        href: "https://www.behance.net/chuckhoward/",
        imgSrc: `${Behance}`,
      },      {
        alt: "stackoverflow",
        text: "stackoverflow",
        href: "https://stackoverflow.com/users/2146031/chulps",
        imgSrc: `${StackOverflow}`,
      },      {
        alt: "Github",
        text: "Github",
        href: "https://github.com/chulps",
        imgSrc: `${Github}`,
      },      {
        alt: "Calendly",
        text: "Calendly",
        href: "https://calendly.com/interview-chuck-howard/45-minute-meeting",
        imgSrc: `${Calendly}`,
      },
    ];

    return (
      <div
        className="social-icons flex"
        style={{ gap: "var(--unit2)" }}
      >
        {socialLinks.map((x) => (
          <a target="_blank" rel="noreferrer" href={x.href}>
            <img src={x.imgSrc} alt={x.alt} />
            <small>{x.text}</small>
          </a>
        ))}
      </div>
    );
  }
}

export default SocialIcons;
