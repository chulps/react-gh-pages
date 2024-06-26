import React, { Component } from "react";
import Links from "../../../COMPONENTS/SocialIcons.js";
import { Helmet } from "react-helmet";
import "./resume.css";
import { designTools, developmentTools, productTools } from "../HOME/tools.js";
import Download from "./Chuck_Howard_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import mindVaultLogo from "../../../IMG/mind-vault-logo.svg";
import xPrizeLogo from "../../../IMG/xprizelogo.png"
import yardenLogo from "../YARDEN/yarden_mark_bg_fitted.svg"
import foundryLogo from "../FOUNDRY/FoundryLogo.svg"
import CRILogo from "../../../IMG/cri_genetics_logo.svg"
import upstateLogo from "../FOUNDRY/upstateLogo.svg"
import clicktoolLogo from "./clicktool-mark.svg"
import sullivanLogo from "./sullivan-branding-logo.svg"

const tools = [...designTools, ...developmentTools, ...productTools];
class Resume extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const skillsMap = new Map([
      ["A/B Testing", true],
      ["AI Prompt Engineering", true],
      ["CSS/CSS3/", true],
      ["Data Visualization", true],
      ["Design Systems", true],
      ["Design Thinking", true],
      ["Frontend Development", true],
      ["GitHub/Bitbucket", true],
      ["Google Analytics", true],
      ["Google Optimize", true],
      ["Graphic Design", true],
      ["HTML/HTML5", true],
      ["JavaScript/Typescript", true],
      ["Product Design", true],
      ["Product Management", true],
      ["Product Roadmapping", true],
      ["Prototyping", true],
      ["React/React Native/Angular/Svelte", true],
      ["UI Design", true],
      ["UI/UX Design", true],
      ["User Research", true],
      ["Usability Testing", true],
      ["Usability / Heuristics", true],
      ["UX Design", true],
      ["Visual Design", true],
      ["Web Accessibility", true],
      ["Web Design", true],
      ["Web Development", true],
      ["Wireframing", true],
    ]);

    const toolsArray = tools.sort((a, b) => a.tool.localeCompare(b.tool));

    const experienceData = [
      {
        company: "MindVault",
        logo: mindVaultLogo,
        location: "Dallas, TX",
        role: "Product Designer/Frontend Developer",
        type: "(Contract)",
        duration: "(May 2023 – Sep 2023)",
        responsibilities: [
          "Lead the design of MindVault's MVP for a new product.",
          "Own the design and development of the Marketing website.",
          "Own the branding design and strategy of MindVault's products.",
          "Write the company prospectus and other marketing materials.",
        ],
      },
      {
        company: "XPRIZE Foundation",
        logo: xPrizeLogo,
        location: "Los Angeles",
        role: "UI/UX Engineer",
        type: "(Contract)",
        duration: "(January 2023 – May 2023)",
        responsibilities: [
          "Built a design system and documentation for XPRIZE's products.",
          "Designed and developed new features for XPRIZE's website and products.",
          "Work alongside senior developers and product managers to complete daily frontend development tasks.",
        ],
      },
      {
        company: "Yarden",
        logo: yardenLogo,
        location: "San Francisco (Remote)",
        role: "Product Design Lead",
        type: "(Full-time)",
        duration: "(March 2021 – Present)",
        responsibilities: [
          "Lead all design tasks for Yarden's marketing, products, branding, and services.",
          "Lead a small team of designers, developers, writers, and gardening experts to build a B2C/B2B product.",
          "Own the design and strategy of Yarden's marketing website.",
          "Perform daily frontend development tasks for Yarden's website, web app, and mobile app.",
          "Weekly meetings with CEO and CTO to discuss product roadmap and design direction.",
        ],
      },
      {
        company: "Foundry Digital",
        logo: foundryLogo,
        location: "Rochester, NY (Remote)",
        role: "UI Engineer",
        type: "(Contract)",
        duration: "(April 2022 – October 2022)",
        responsibilities: [
          "Perform daily frontend development tasks for several Foundry Digital websites and products.",
          "Own the design and build of the Foundry Academy website",
          "Design and develop Foundry's Staking portal",
          "Organized a cross-company design group to share knowledge and facilitate communication between subsidiary companies.",
        ],
      },
      {
        company: "Upstate Interactive",
        logo: upstateLogo,
        location: "Syracuse, NY (Remote)",
        role: "Senior Design Technologist",
        type: "(Contract)",
        duration: "(February 2022 – April 2022)",
        responsibilities: [
          "Collaborate with other team members servicing a broad range of blockchain and web3 clients.",
          "Design and develop sites and products for clients.",
          "Mentor junior designers and engineers about design and frontend development.",
        ],
      },
      {
        company: "CRI Genetics",
        logo: CRILogo,
        location: "El Segundo",
        role: "(Promoted to...) Product Design Lead",
        type: "(Full-time)",
        duration: "(August 2021 – December 2021)",
        responsibilities: [
          "Lead a team of developers, copywriters, scientists, and marketing professionals in the design, development, discovery, and improvements of CRI Genetics digital product",
          "Create, design, evangelize and maintain CRI Genetics design system, 'Nucleotide'.",
          "Design and implement A/B testing for CRI Genetics customer portal.",
          "Create high fidelity prototypes in Figma, React, and other frontend technologies.",
          "Contribute to CRI Genetics' codebase and documentation.",
        ],
      },
      {
        company: "CRI Genetics",
        logo: CRILogo,
        location: "Los Angeles",
        role: "Senior Front-end Developer",
        type: "(Full-time)",
        duration: "(April 2020 – August 2021)",
        responsibilities: [
          "Design and develop CRI Genetics web app",
          "Daily frontend development tasks",
          "Rebuild the dashboard for the CRI Genetics web app",
        ],
      },
      {
        company: "Clicktool",
        logo: clicktoolLogo,
        location: "Los Angeles",
        role: "Creative Director",
        type: "(Full-time)",
        duration: "(August 2018 – April 2020)",
        responsibilities: [
          "Lead a team of designers, developers, and copywriters to build a B2B product.",
          "Design and develop a website for a B2B product.",
          "Design and develop a web app for a B2B product.",
        ],
      },
      {
        company: "Sullivan Branding",
        logo: sullivanLogo, // TODO: get sullivan logo
        location: "Memphis",
        role: "Art Director/Designer",
        type: "(Contract)",
        duration: "(April 2015 – March 2017)",
        responsibilities: [
          "Daily design tasks including email design, website design, and social media design.",
          "Collaborate with senior creative directors to develop and execute a design strategy.",
        ],
      },
    ];

    const educationData = [
      {
        type: "Formal Studies",
        items: ["University of Memphis, Memphis - BFA Graphic Design"],
      },
      {
        type: "Coding Bootcamp",
        items: ["UCLA Extension's Full-Stack Web Development Bootcamp"],
      },
      {
        type: "Self Studies",
        items: [
          "MAP Management Training, Map Consulting/Management Services (March 2021 – March 2021)",
          "Fullstack Web Development Angela Yu",
          "Angular",
          "Modern React with Redux",
        ],
      },
    ];

    const hobbies = ["Travel", "Artificial Intelligence"];

    return (
      <div id="resume">
        <Helmet>
          <title>Chuck Howard's Resumé</title>
          <meta name="description" content="Chuck Howard's Resumé" />
        </Helmet>
        <section className="py1">
          <label>Resumé</label>
          <div className="mb2 flex-space-between">
            <div>
              <h2>Charles M. Howard</h2>
              <p>Product Designer / Frontend Developer</p>
              <p style={{ maxWidth: "45ch" }}>
                I'm an experienced Product Designer with a background in
                Frontend Development and Product Discovery, skilled in leading
                products from discovery, through the design phase, to
                deployment.
              </p>
            </div>
          </div>

          <div>
            {" "}
            <label className="mb2">Links</label>
            <Links />
          </div>
          <hr className="my3" />
          <label>Overview</label>
          <h3>Technical Skills</h3>
          <ul id="skills">
            {Array.from(skillsMap.keys()).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <hr className="my3" />
          <label>Tools</label>
          <h3>Tools & Technology</h3>
          <ul id="tools">
            {toolsArray.map((tool) => (
              <li key={tool.tool}>{tool.tool}</li>
            ))}
          </ul>
        </section>

        <hr className="my3" />
        <section id="experience">
          <label>Experience</label>
          <h3 className="mb3">Places I've Worked</h3>

          {experienceData.map((experience, index) => (
            <div className="experience-item" key={index}>
              <div className="flex">
                <span>
                  <img
                    className="experience-logo"
                    alt={experience.company}
                    src={experience.logo}
                  />
                </span>

                <div>
                  <h4>
                    {experience.company}, {experience.location}
                  </h4>
                  <p>{experience.role}</p>
                  {experience.type && <i>{experience.type}</i>}
                  <br />
                  <small>{experience.duration}</small>
                </div>
              </div>

              <ul>
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}.</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <hr className="my2" />
          <div>
            <label>Education</label>
            {educationData.map((education, index) => (
              <div className="mb2" key={index}>
                <h3>{education.type}</h3>
                <ul>
                  {education.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <hr className="my2" />

            <div className="mb2">
              <label>Hobbies</label>
              <h3>Fun Stuff</h3>
              <ul>
                {hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          className="mt1 mx-auto flex-end relative md-absolute"
          style={{ top: 0, left: "50%", transform: "translate(-50%)" }}
        >
          <a id="download-button" href={Download} download>
            <button>
              <FontAwesomeIcon icon={solid("download")} />
              &nbsp; Download
            </button>
          </a>
        </section>
      </div>
    );
  }
}

export default Resume;
