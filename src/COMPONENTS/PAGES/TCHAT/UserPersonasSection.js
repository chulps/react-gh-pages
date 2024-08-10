import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faGlobe,
  faBook,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import DonutChart from "./DonutChart";
import styled from "styled-components";

const Traits = styled.ul`
    font-size: var(--H6);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: var(--unit0);
    `
    
    const Trait = styled.li `
    width: fit-content;
    border-radius: 2em;
    background: red;
    padding: 0.5em 1em;

`

const userPersonas = [
  {
    name: "The Frequent Traveler",
    color: "var(--blue4)",
    chartColorMobile: "var(--blueA)",
    chartColorDesktop: "var(--blue1)",
    icon: faPlane,
    description:
      "I want to talk to people without shoving my phone in their face every time I say something. This allows more respect for people's space and property.",
    details: {
      goals: [
        "Communicate effectively while traveling.",
        "Avoid sharing devices with strangers.",
        "Access translation services quickly.",
      ],
      frustrations: [
        "Difficulty communicating in real-time with locals.",
        "Inconsistent translation quality in existing apps.",
        "Limited access to translation services without internet.",
      ],
      personality: ["Adventurous", "Open-minded", "Resourceful"],
      tech: { mobile: 75, desktop: 25 },
    },
  },
  {
    name: "The Multinational Team Member",
    color: "var(--green4)",
    chartColorMobile: "var(--greenA)",
    chartColorDesktop: "var(--green1)",
    icon: faGlobe,
    description:
      "I want to use this at work so I can communicate with my colleagues in their native languages, so we can collaborate effectively.",
    details: {
      goals: [
        "Collaborate effectively across different languages.",
        "Maintain productivity without language barriers.",
        "Use a unified platform for communication.",
      ],
      frustrations: [
        "Language barriers slow down project timelines.",
        "Existing tools are not optimized for real-time translation.",
        "Limited options for multi-language support in professional settings.",
      ],
      personality: ["Organized", "Team-oriented", "Efficient"],
      tech: { mobile: 40, desktop: 60 },
    },
  },
  {
    name: "The Language Enthusiast",
    color: "var(--red4)",
    chartColorMobile: "var(--redA)",
    chartColorDesktop: "var(--red1)",
    icon: faBook,
    description:
      "I could use this when there is a gap in my vocabulary while trying to speak with someone in a different language.",
    details: {
      goals: [
        "Practice speaking and understanding new languages.",
        "Engage with native speakers.",
        "Access a wide variety of languages easily.",
      ],
      frustrations: [
        "Limited opportunities to converse with native speakers.",
        "Translation tools that don’t capture slang or nuance.",
        "Lack of real-time language practice tools.",
      ],
      personality: ["Curious", "Determined", "Linguistically skilled"],
      tech: { mobile: 70, desktop: 30 },
    },
  },
  {
    name: "The International Family Member",
    color: "var(--gold4)",
    chartColorMobile: "var(--goldA)",
    chartColorDesktop: "var(--gold1)",
    icon: faUsers,
    description:
      "I want to stay connected with my family, so we can understand each other.",
    details: {
      goals: [
        "Keep in touch with family members across different languages.",
        "Maintain strong relationships despite language differences.",
        "Easily switch between languages in conversations.",
      ],
      frustrations: [
        "Language barriers make it hard to connect.",
        "Inconsistent translation quality makes conversations frustrating.",
        "Existing tools require too many steps to translate messages.",
      ],
      personality: ["Family-oriented", "Supportive", "Loving"],
      tech: { mobile: 65, desktop: 35 },
    },
  },
];

const UserPersonasSection = () => {
  return (
    <div className="mt3">
      <label>User Personas</label>
      <h3>Who needs this?</h3>
      <ul className="md-two-columns xl-four-columns mt1 mb2">
        {userPersonas.map((persona, index) => (
          <li
            className="p2"
            style={{ background: `${persona.color}` }}
            key={index}
          >
            <h1 className="p2 pb3 flex-center">
              <FontAwesomeIcon icon={persona.icon} />
            </h1>
            <h4>{persona.name}:</h4>
            <p>"{persona.description}"</p>
            <hr className="mt2 mb2"/>
            <ul className="sm-two-columns md-one-column lg-two-columns xl-one-column gap2">
              <li>
                <h5>Goals:</h5>
                <ul>
                  {persona.details.goals.map((goal, idx) => (
                    <li key={idx}>
                      <small>• {goal}</small>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h5>Frustrations:</h5>
                <ul>
                  {persona.details.frustrations.map((frustration, idx) => (
                    <li key={idx}>
                      <small>• {frustration}</small>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h5 className="mb0">Personality:</h5>
                <Traits>
                  {persona.details.personality.map((trait, idx) => (
                    <Trait style={{backgroundColor: persona.chartColorMobile, color: "white"}} key={idx}>{trait}</Trait>
                  ))}
                </Traits>
              </li>
              <li>
                <h5 className="mb0">Tech:</h5>
                <DonutChart
                  mobile={persona.details.tech.mobile}
                  desktop={persona.details.tech.desktop}
                  index={index}
                  mobileColor={persona.chartColorMobile}
                  desktopColor={persona.chartColorDesktop}
                />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPersonasSection;
