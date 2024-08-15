import React from "react";
import styled from "styled-components";

const IntroDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border-block: 1px solid var(--transBlueC-10);
  padding-block: var(--unit2);
  margin-bottom: var(--unit4);
  gap: var(--unit2);

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const ResponsibilitiesSection = React.forwardRef((props, ref) => {
  return (
    <section id="case-study" ref={ref} className="mb4">
      <label>My Role</label>
      <IntroDetails>
        <div>
          <label>Title:</label>
          <h5>Solo Dev/Designer</h5>
        </div>
        <div>
          <label>City:</label>
          <h5>Sapporo</h5>
        </div>
        <div>
          <label>When:</label>
          <h5>2024 - Present</h5>
        </div>
        <div>
          <label>Country:</label>
          <h5>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            &nbsp;Japan
          </h5>
        </div>
      </IntroDetails>
      <div>
        <label>My role:</label>
        <h2 className="mb1">What do I do here?</h2>
        <p>
          TL;DR --{" "}
          <i>
            I made a fully functional web app from concept to deployment flying
            solo!
          </i>
        </p>
        <br />
        <div
          className="sm-two-columns lg-three-columns"
          style={{ gap: "var(--unit2) var(--unit3)" }}
        >
          <div>
            <h5>Branding:</h5>
            <small>
              I used my personal brand so I could save time, plus I don't think
              I can ever make a cooler logo. Later I'll decide on a better name
              and proper branding.
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
              Designed and iterated on user interfaces and experiences, informed
              by user feedback and A/B testing.
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
  );
});

export default ResponsibilitiesSection;
