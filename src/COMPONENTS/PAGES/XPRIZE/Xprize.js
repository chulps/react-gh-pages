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
          This is the xprize page
        </section> 
      </div>
    );
  }
}

export default Xprize;
