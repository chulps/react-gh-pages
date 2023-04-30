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
                <h5>Creative Director</h5>
              </div>
              <div>
                <label>City:</label>
                <h5>Los Angeles, CA</h5>
              </div>
              <div>
                <label>When:</label>
                <h5>2018 - 2020</h5>
              </div>
              <div>
                <label>Country:</label>
                <h5><span role="img" aria-label="USA">🇺🇸</span> USA</h5>
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
