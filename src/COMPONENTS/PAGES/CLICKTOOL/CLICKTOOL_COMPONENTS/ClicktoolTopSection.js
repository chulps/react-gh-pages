// ClicktoolTopSection.js
import React from "react";
import Geometry from "./SVG/ClicktoolLogoGeometry.js";

class ClicktoolTopSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section className="relative pt3">
        <label>Project:</label>
        <div className="gap3">
          <div className="gap3 lg-two-columns">
            <div>
              <h2>Clicktool</h2>
              <p>
                Clicktool is a marketing analytics app designed for digital
                marketers. Using our app, users can track clicks, phone calls,
                conversions, and many other types of metrics that help marketers
                make better decisions about where to spend their marketing
                dollars.
              </p>
            </div>
            <div className="one-column md-two-columns gap2 lg-gap-none">
              <div>
                <label>Title:</label>
                <h6>Creative Director</h6>
              </div>
              <div>
                <label>City:</label>
                <h6>Los Angeles, CA</h6>
              </div>
              <div>
                <label>Time:</label>
                <h6>2018 - 2020</h6>
              </div>
              <div>
                <label>Country:</label>
                <h6>🇺🇸 - USA</h6>
              </div>
            </div>
          </div>
          <div className="geometry">
            <Geometry />
          </div>
        </div>
      </section>
    );
  }
}

export default ClicktoolTopSection;
