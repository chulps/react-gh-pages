import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Process from './DesignProcessSvg'

class DesignProcess extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  render() {
    return (
      <div id="design-process" className="pb3">
        <Helmet>
          <title>
            Design Process | Chuck Howard
          </title>
          <meta
            name="description"
            content="A practical approach to product discovery, design systems, interface design and frontend implementation."
          />
        </Helmet>
        {/* top section */}
        <section className="mt3">
          <span className="case-eyebrow">Design Process</span>
          <h1>Design Thinking</h1>
        </section>
        <section className="mb3" id="process">
          <Process />
        </section>
      </div>
    );
  }
}

export default DesignProcess;
