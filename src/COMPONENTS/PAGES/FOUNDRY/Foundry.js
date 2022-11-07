import React, { Component } from "react";

class Foundry extends Component {


    componentDidMount() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

  render() {
    const { data } = this.state;
    // {
    //   console.log(data);
    // }

    return (
      <section className="hero" id="Foundry">
        <label>Projects:</label>
        <h1>Foundry</h1>
        <p>foundry supporting text</p>
      </section>
    );
  }
}

export default Foundry;
