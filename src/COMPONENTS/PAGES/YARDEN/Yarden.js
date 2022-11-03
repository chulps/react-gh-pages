import React, { Component } from "react";
import YardenLogo from "../../../IMG/YardenLogo";

class Yarden extends Component {
  render() {
    return (
      <div id="yarden">
        <section className="mt3">
          <div>
            <label>Project:</label>
            <h1>Yarden</h1>
            <p>supporting copy</p>
          </div>
          <div>
            <label>something</label>
            <p>something</p>
          </div>
        </section>

        <section className="hero flex-center flex-vertical">
          <div className="width5">
            <YardenLogo />
          </div>
          <p>Download Yarden on the App Store</p>
          <a
            className="mt3"
            href="https://apps.apple.com/gb/developer/yarden-garden-inc/id1626672981"
          >
            <button>Go to App Store</button>
          </a>
        </section>
        <section>
          <label>what do i do here?</label>
          <p>
            Lead the re-branding of the company Launch mobile app to the App
            Store Attend annual and quarterly meetings with executives to set
            annual and quarterly goals Design and maintain marketing websites
            Design and maintain web app Design and maintain mobile app Design
            printed material, signage and apparel Lead product design of the
            mobile app for customer facing and internal products Product
            Road-mapping A/B Testing
          </p>
        </section>
      </div>
    );
  }
}

export default Yarden;
