import React from 'react'
import ChatroomsTab from "./ChatroomsTab.png";

const ResponsibilitiesSection = () => {
  return (
      <section className="mb4 lg-two-columns gap4">
        <div className="flex-center">
          <div className="half md-third lg-whole xl-half">
            <div className="iphone-frame">
              <img className="figma-frame" src={ChatroomsTab} alt="T-Chat" />
            </div>
          </div>
        </div>
        <div>
          <label>Responsibilities:</label>
          <h2 className="mb1">What do I do here?</h2>
          <p>
            TL;DR --{" "}
            <i>
              I made a fully functional web app from concept to deployment
              flying solo!
            </i>
          </p>
          <br />
          <div
            className="sm-two-columns"
            style={{ gap: "var(--unit2) var(--unit3)" }}
          >
            <div>
              <h5>Branding:</h5>
              <small>
                I used my personal brand so I could save time, plus I don't
                think I can ever make a cooler logo.
              </small>
            </div>
            <div>
              <h5>Product Development:</h5>
              <small>
                Managed the full stack development of the application, from
                front-end to back-end integration, utilizing the MERN stack.
              </small>
            </div>
            <div>
              <h5>UI/UX Design:</h5>
              <small>
                Designed and iterated on user interfaces and experiences,
                informed by user feedback and A/B testing.
              </small>
            </div>
            <div>
              <h5>Research:</h5>
              <small>
                Conducted user and competitor research to identify key features
                and pain points, guiding the overall design and development
                process.
              </small>
            </div>
            <div>
              <h5>Testing & Iteration:</h5>
              <small>
                Performed extensive testing and iterative improvements based on
                user feedback to ensure a smooth and intuitive user experience.
              </small>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ResponsibilitiesSection
