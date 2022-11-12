// ClicktoolVisitSection.js
import React from "react";
import Laptop from "./HomeProjectSection";

class ClicktoolVisitSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <>
      <section
        className="clicktool-visit-section p3 flex-center flex-vertical"
        style={{ minHeight: "130vh" }}
      >
        <div className="whole flex-center">
          <Laptop />
        </div>

      </section>
      <section className="flex-center flex-vertical">
          <p>
            This app is no longer in production but here you can visit an old prototype.
            
          </p>
          <p>
            <a href="https://xd.adobe.com/view/c0a28198-8833-42eb-4e46-4843cd6c3d12-b693/screen/66fcfcec-ada9-4acf-b0ba-89e1d1bb5a40" target="_blank" rel="noreferrer"><button>Let's go!</button></a>
          </p>
        </section>
        </>
    );
  }
}

export default ClicktoolVisitSection;
