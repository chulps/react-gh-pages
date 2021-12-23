// ClicktoolVisitSection.js
import React from "react";
import Laptop from "./HomeProjectSection";

class ClicktoolVisitSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section
        className="clicktool-visit-section p3 flex-center flex-vertical"
        style={{ minHeight: "130vh" }}
      >
        <div className="whole flex-center">
          <Laptop />
        </div>
      </section>
    );
  }
}

export default ClicktoolVisitSection;
