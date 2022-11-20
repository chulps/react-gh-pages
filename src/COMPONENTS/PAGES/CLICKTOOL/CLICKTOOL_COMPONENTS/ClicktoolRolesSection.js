// ClicktoolTopSection.js
import React from "react";
import Hat from "./myHat.png";

class ClicktoolRolesSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section className="roles pt4">
        <div className="one-column lg-two-columns gap2 lg-gap3">
          <div className="pl3 pr3 pb3 flex-center flex-vertical">
            <img className="whole" src={Hat} alt="hat" />
            <small className="text-center">this is really my hat</small>
          </div>

          <div>
            <label className="mb0">My role:</label>
            <h3>"Hats" I wear</h3>
            <p className="mb2">
              I originally interviewed answering a Craigslist ad, for a tech
              startup needing an illustrator. I was freshly graduated from UCLA
              Extension's Fullstack Coding Bootcamp, and I had loads of
              illustration experience, so after the interview I recieved the
              offer and there began my first job in tech.
            </p>
            <div className="one-column md-two-columns gap2">
              <div>
                <h5>Product Designer:</h5>
                <small>
                  Understand business objectives and architect solutions based
                  on direction from the CEO and user research
                </small>
              </div>
                

              <div>
                <h5>Creative Director</h5>
                <small>
                  Lead the creation of this app from top to bottom;
                  collaborating with other designers, developers, and
                  copywriters.
                </small>
              </div>

              <div>
                <h5>Lead UI/UX Designer:</h5>
                <small>
                  Create wireframes, prototypes, color schemes, brand guidelines
                  & design systems.
                </small>
              </div>

              <div>
                <h5>Frontend Developer</h5>
                <small>
                  Create a customized responsive CSS framework and work closely
                  with other developers to achieve the right look and
                  functionality.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClicktoolRolesSection;
