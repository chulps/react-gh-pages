import React from "react";
import "./MindVault.css";
import { Helmet } from "react-helmet";
import website from "./mindvault_website.png";
import webapp from "./webapp.png";

class MindVault extends React.Component {
  render() {
    return (
      <div id="mindvault">
        <Helmet>
          <title>Mindvault</title>
        </Helmet>
        <section className="py3 h100">
          <label>Job:</label>
          <h1>Mindvault</h1>
          <div className="lg-two-columns gap3">
            <p style={{ maxWidth: "50ch" }}>
              MindVault is a startup that's building a robust notes app for
              visual thinkers who need to collaborate with eachother and be able
              to easily share ideas and even convert different types of notes
              into various formats. For example, a user can easily convert a
              bulleted list into a mind map without changing the format for the
              author of that note.
            </p>

            <div className="sm-two-columns gap2">
              <div>
                <label>Title:</label>
                <h5>UI/UX Engineer & Product Designer</h5>
              </div>
              <div>
                <label>City:</label>
                <h5>Dallas, TX (Remote)</h5>
              </div>
              <div>
                <label>When:</label>
                <h5>2023</h5>
              </div>
              <div>
                <label>Country:</label>
                <h5>
                  <span role="img" aria-label="USA">
                    🇺🇸
                  </span>
                  &nbsp;USA
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="md-two-columns gap3">
            <div className="flex-center">
              <svg
                class="block-mark"
                style={{
                  height: "auto",
                  width: "50%",
                  maxWidth: "var(--unit5)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 594 594"
              >
                <path
                  fill="blue"
                  d="m457.08,4.53c-106.72-6.04-213.44-6.04-320.16,0C69.72,8.79,8.79,69.72,4.53,136.92c-6.04,106.72-6.04,213.44,0,320.16,4.26,67.2,65.19,128.14,132.39,132.39,106.72,6.04,213.44,6.04,320.16,0,67.2-4.26,128.14-65.19,132.39-132.39,6.04-106.72,6.04-213.44,0-320.16-4.26-67.2-65.19-128.14-132.39-132.39Z"
                ></path>
                <path
                  fill="white"
                  d="m162,162v54h-54v-54h54Zm0,108h54v-54h-54v54Zm-54,162h54v-162h-54v162ZM378,162c-39.99,0-65.14,14.82-81,33.46-15.86-18.65-41.01-33.46-81-33.46v54c54,0,54,54,54,54v162h54v-162s0-54,54-54,54,54,54,54v162h54v-162s0-108-108-108Z"
                ></path>
              </svg>{" "}
            </div>
            <div>
              <h2>Projects at Mindvault</h2>
              <p style={{ maxWidth: "50ch" }} className="mb2">
                At MindVault I worked as a Product Designer and UI/UX Engineer.
                My main responsibilities were the website, and the MindVault web
                app. Other responsibilities included branding, drafting the
                company prospectus, design system, and an internal app known as
                "The Mapper".
              </p>
            </div>
          </div>

          <div className="Mindvault-projects md-two-columns lg-three-columns gap3 mt3">
            <div className="project">
              <div className="flex-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379 271">
                  <rect
                    x=".5"
                    y=".5"
                    width="54"
                    height="54"
                    fill="blue"
                    opacity=".15"
                    stroke-width="0"
                  />
                  <rect
                    x="54.5"
                    y="54.5"
                    width="54"
                    height="54"
                    fill="blue"
                    opacity=".15"
                    stroke-width="0"
                  />
                  <path
                    d="m378.5,108.5v162h-54V108.5c0-29.82-24.18-54-54-54s-54,24.18-54,54v162h-54V108.5c0-29.82-24.18-54-54-54V.5c19.67,0,38.11,5.26,54,14.45,10.16,5.88,19.28,13.36,27,22.11,7.72-8.75,16.84-16.23,27-22.11,15.89-9.19,34.33-14.45,54-14.45s38.11,5.26,54,14.45c16.4,9.48,30.07,23.15,39.55,39.55,9.19,15.89,14.45,34.33,14.45,54Z"
                    fill="blue"
                    opacity=".15"
                    stroke-width="0"
                  />
                  <rect
                    x=".5"
                    y="108.5"
                    width="54"
                    height="162"
                    fill="blue"
                    opacity=".15"
                    stroke-width="0"
                  />
                  <circle
                    cx="108.5"
                    cy="108.5"
                    r="108"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <circle
                    cx="108.5"
                    cy="108.5"
                    r="54"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <circle
                    cx="270.5"
                    cy="108.5"
                    r="108"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <circle
                    cx="270.5"
                    cy="108.5"
                    r="54"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1=".5"
                    y1=".5"
                    x2=".5"
                    y2="270.5"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1="54.5"
                    y1=".5"
                    x2="54.5"
                    y2="270.5"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1=".5"
                    y1="54.5"
                    x2="378.5"
                    y2="54.5"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1=".5"
                    y1="108.5"
                    x2="378.5"
                    y2="108.5"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <rect
                    x=".5"
                    y=".5"
                    width="54"
                    height="270"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <rect
                    x="162.5"
                    y=".5"
                    width="54"
                    height="270"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <rect
                    x="324.5"
                    y=".5"
                    width="54"
                    height="270"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1="108.5"
                    y1=".5"
                    x2="108.5"
                    y2="270.5"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                  <rect
                    x=".5"
                    y=".5"
                    width="378"
                    height="270"
                    fill="none"
                    stroke="blue"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
              <h3>The Brand</h3>
              <p>
                This mockup displays our adaptive interface, perfect for any
                device. From intuitive checklists to streamlined organization,
                dive into a user-centric experience. Ready to transform your
                note-taking? Click "Try It" or join our waitlist today.
              </p>
            </div>

            <div className="project">
              <div className="flex-center">
                <img src={website} width="100%" alt="website" />
              </div>
              <h3>Company Website</h3>
              <p>
                This mockup displays our adaptive interface, perfect for any
                device. From intuitive checklists to streamlined organization,
                dive into a user-centric experience. Ready to transform your
                note-taking? Click "Try It" or join our waitlist today.
              </p>
            </div>

            <div className="project">
              <div className="flex-center">
                <img src={webapp} width="100%" alt="website" />
              </div>

              <h3>MindVault Web App</h3>
              <p>
                This is the design system I made following strict brand
                standards. I took the brand standards and translated it into
                usable code.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MindVault;
