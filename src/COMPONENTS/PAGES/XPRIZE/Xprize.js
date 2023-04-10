import React, { Component } from "react";
import {Helmet} from "react-helmet";


class Xprize extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  render() {
    return (
      <div
        id="xprize"
      >
        <Helmet>
          <title>XPRIZE</title>
        </Helmet>
        <section className="py3 h100">
          <label>Job:</label>
          <h1>XPRIZE</h1>
          <p>Working at XPRIZE is a truely humbling experience. It's a non-profit organization that solves big problems facing humanity, such as Carbon Removal, Wildfires, </p>
        </section> 
      </div>
    );
  }
}

export default Xprize;
