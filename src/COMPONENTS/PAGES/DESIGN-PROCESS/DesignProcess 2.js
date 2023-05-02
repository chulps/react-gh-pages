import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Process from './design-process.svg'

class DesignProcess extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div id="design-process" className="pb3">
        <Helmet>
          <title>
            Foundry - Bitcoin Mining, Staking and Digital Currency Solutions
          </title>
          <meta
            name="description"
            content="Foundry Digital is a Bitcoin Mining and Staking Company, subsidiary of the Digital Currency Group (DCG). Learn about Chuck's projects while working there."
          />
        </Helmet>
        {/* top section */}
        <section className="mt3">
          <label>Design Process</label>
          <h1>Design Thinking</h1>
        </section>
        <section className="mb3" id="Foundry">
          <p className="mb3">Something</p>
          <img src={Process} alt="process" width="100%"/>
        </section>
      </div>
    );
  }
}

export default DesignProcess;
