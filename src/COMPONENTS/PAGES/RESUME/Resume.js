import React, { Component } from "react";
import Links from "../../../COMPONENTS/SocialIcons.js";
import { Helmet } from "react-helmet";
import "./resume.css";
import Download from "./Chuck-Howard-ATS-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used


class Resume extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
      
    return (
      <div id="resume">
        <Helmet>
          <title>Chuck Howard's Resumé</title>
          <meta name="description" content="Chuck Howard's Resumé" />
        </Helmet>
        <section className="mt2 mx-auto flex-end relative md-absolute">
          <a id="download-button" href={Download} download>
            <button><FontAwesomeIcon icon={solid("download")} />&nbsp;Download</button>
          </a>
        </section>
        <section className="py2">
          <label>Resumé</label>
          <div className="mb2 flex-space-between">
            <div>
              <h2>Charles M. Howard</h2>
              <p>Product Designer / Frontend Developer</p>
              <p style={{ maxWidth: "45ch" }}>
                I’m an experienced Product Designer with a background in
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
          <label>Skills</label>
          <h3>Tools & Techniques</h3>
          <ul id="skills">
            <li>A/B Testing</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Indesign</li>
            <li>Adobe Photoshop</li>
            <li>C#/.NET/Azure</li>
            <li>Chat GPT and other AI tools</li>
            <li>Data Visualization</li>
            <li>Design Systems</li>
            <li>Frontend Development</li>
            <li>GitHub/Bitbucket</li>
            <li>Google Analytics</li>
            <li>Google Optimize</li>
            <li>Graphic Design</li>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3/</li>
            <li>JavaScript/Typescript</li>
            <li>Product Management</li>
            <li>Product Roadmapping</li>
            <li>Prototyping</li>
            <li>React/React Native/Angular/Svelte</li>
            <li>UI/UX Design</li>
            <li>Usability / Heuristics</li>
            <li>Web Design</li>
            <li>Wireframing</li>
          </ul>
        </section>

        <section id="experience">
          <hr className="mb3" />
          <label>Experience</label>

          <div id="xprize">
            <h4>UX Designer/Frontend Developer</h4>
            <p>XPRIZE Foundation, Los Angeles</p>
            <small>(January 2023 – Present)</small>
            <ul>
              <li>
                Developed and executed a comprehensive UX/UI design overhaul for
                the company website resulting in a 45% increase in user
                engagement and a 30% decrease in bounce rate.
              </li>
              <li>
                Implemented responsive designs using Angular, .Net, C#, and
                Azure, resulting in 98% mobile compatibility across all company
                applications.
              </li>
              <li>
                Spearheaded the development and maintenance of XPDS (XPRIZE
                Design System), which facilitated efficient design
                implementation across all company products, resulting in a 20%
                reduction in design implementation time.
              </li>
            </ul>
          </div>

          <div>
            <h4>Product Design Lead (Co-Founder)</h4>
            <p>Yarden, San Francisco (Remote)</p>
            <small>(March 2021 – Present)</small>
            <ul>
              <li>
                Leveraged user research to inform design decisions and create a
                seamless mobile app experience, resulting in a successful launch
                on the App Store with 5 stars.
              </li>
              <li>
                Developed and implemented a cohesive brand strategy across all
                marketing channels, resulting in increased brand recognition by
                30% and driving growth opportunities.
              </li>
              <li>
                Directed a comprehensive user research study that resulted in a
                20% increase in customer satisfaction and a 15% decrease in user
                churn rates.
              </li>
            </ul>
          </div>

          <div>
            <h4>(Acquisition) UI Engineer</h4>
            <p>Foundry Digital, Rochester, NY (Remote) </p>
            <small>(April 2022 – October 2022)</small>

            <ul>
              <li>
                Spearheaded the development and implementation of Foundry's
                comprehensive design system "Metal", resulting in a 70%
                reduction in design inconsistencies across all products and
                services.
              </li>
              <li>
                Collaborated with engineering teams to build, test, and iterate
                on high-fidelity prototypes for Foundry's Staking Portal,
                resulting in a 50% increase in user engagement within the first
                month after launch.
              </li>
              <li>
                Founded DCG Design Guild, a cross-company initiative to foster
                collaboration and knowledge sharing among designers at Digital
                Currency Group’s subsidiary companies. Led bi-weekly heuristic
                studies to identify best practices and emerging trends in UX
                design.
              </li>
            </ul>
          </div>

          <div>
            <h4>Senior Design Technologist</h4>
            <p>Upstate Interactive, Syracuse, NY (Remote)</p>
            <small>(February 2022 – April 2022)</small>
            <ul>
              <li>
                Led the design and development of web application solutions for
                20+ clients, resulting in a 95% satisfaction rate and $2.5M in
                revenue.
              </li>
              <li>
                Mentored a team of 6 developers on cutting-edge design
                technology and techniques, resulting in a 35% increase in
                productivity and a more cohesive team dynamic.
              </li>
              <li>
                Built high-fidelity prototypes using React, Sass, and Typescript
                to validate product concepts with stakeholders, reducing design
                iterations by 50% and accelerating time-to-market.
              </li>
            </ul>
          </div>

          <div>
            <h4>(Promoted) Product Design Lead</h4>
            <p>CRI Genetics, El Segundo</p>
            <small>(August 2021 – December 2021)</small>
            <ul>
              <li>
                Researched and analyzed Genetics market trends and user
                behavior, resulting in the successful launch of 3 new products
                that drove a 20% increase in revenue.
              </li>
              <li>
                Led the product design process from ideation to launch,
                collaborating with a team of developers, marketers, and
                copywriters, resulting in an average improvement of 10% in
                various targeted metrics.
              </li>
              <li>
                Planned and conducted A/B tests for new features, resulting in a
                20% increase in user engagement and retention.
              </li>
            </ul>
          </div>

          <div>
            <h4>Senior Front-end Developer</h4>
            <p>CRI Genetics, Los Angeles</p>
            <small>(April 2020 – August 2021)</small>
            <ul>
              <li>Design and build UI</li>
              <li>Create and maintain the design system "Nucleotide"</li>
              <li>
                Collaborate with team members to push products from concept to
                launch
              </li>
              <li>Plan and set up A/B tests</li>
            </ul>
          </div>

          <div>
            <h4>Creative Director</h4>
            <p>Clicktool, Los Angeles</p>
            <small>(August 2018 – April 2020)</small>
            <ul>
              <li>
                Developed a marketing platform for affiliate marketers, leading
                to the successful creation and launch of multiple products and
                services from concept to completion.
              </li>
              <li>
                Designed and implemented a user onboarding process and an
                educational product, increasing platform adoption and user
                satisfaction.
              </li>
              <li>
                Created complex analytics features for monitoring marketing
                campaigns, empowering users to run their own split tests and
                optimize their strategies effectively.
              </li>
            </ul>
          </div>

          <div>
            <h4>Art Director/Designer</h4>
            <p>Sullivan Branding, Memphis</p>
            <small>(April 2015 – March 2017)</small>
            <ul>
              <li>
                Create various media for brands including FedEx, Hilton Hotels,
                Homewood Suites, and Simmons Bank
              </li>
              <li>
                Collaborate with Creative Director, Account Managers, Designers,
                Copywriters, Animators, and other creatives to execute concepts
              </li>
              <li>
                Support Senior staff with their projects on an as-needed basis
              </li>
            </ul>
          </div>
        </section>
        <section>
          <hr className="my2" />
          <div>
            <label>Education</label>
            <h3>Formal Studies</h3>
            <li>
              University of Memphis, Memphis - BFA Graphic Design
            </li>
            <li>
              UCLA Extension's Full-Stack Web Development Bootcamp
            </li>
          <hr className="my2" />

            <label className="mt2">Courses</label>
            <h3>Self Studies</h3>
            <div className="mb2">
              {" "}
              <ul className="mb2">
                <li>
                  MAP Management Training, Map Consulting/Management Services
                  (March 2021 – March 2021)
                </li>
                <li>Fullstack Web Development Angela Yu</li>
                <li>Angular</li>
                <li>Modern React with Redux</li>
              </ul>
            </div>
          <hr className="my2" />

            <div className="mb2">
              <label>Hobbies</label>
              <h3>Fun Stuff</h3>
              <ul>
                <li>Travel</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
