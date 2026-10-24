// ClicktoolTopSection.js
import React from "react";
import Sketchy from "./DESIGN_BIBLE.webp";

class ClicktoolBrandSection extends React.Component {
  render() {
    return (
      <section className="relative brand pt3">
        <div className="lg-two-columns gap2 lg-gap3">
          <div>
            <h4>Establishing the Brand:</h4>

            <div className="brand-description">
              This was my first task when I started working here. There were a
              few limitations given by the CEO...
              <ul>
                <li>• Flat illustration style</li>

                <li>
                  • Use&nbsp;
                  <div
                    style={{
                      background: "#2cb8d2",
                      height: "var(--unit1)",
                      width: "var(--unit1)",
                      display: "inline-block",
                      borderRadius: "var(--unit2)"
                    }}
                  ></div>
                  &nbsp; #2cb8d2 &nbsp; as the primary brand color
                </li>

                <li>• Animate everything!</li>

                <li>• Squared buttons only!</li>

                <li>
                  • Lots of{" "}
                  <div
                    style={{
                      background: "#2cb8d2",
                      height: "var(--unit1)",
                      width: "var(--unit1)",
                      display: "inline-block",
                      borderRadius: "var(--unit2)"
                    }}
                  ></div>
                  &nbsp;lines.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-center flex-vertical">
            <img loading="lazy" className="whole" src={Sketchy} alt="" />
            <small>this is where everything starts</small>
          </div>
        </div>
      </section>
    );
  }
}

export default ClicktoolBrandSection;
