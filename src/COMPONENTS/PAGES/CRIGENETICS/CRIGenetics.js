import React, { Component } from "react";
import CRIGeneticsLogo from "../../../IMG/cri_genetics_logo.svg";

class CRIGenetics extends Component {
  render() {
    return (
      <div id="crigenetics">
        {/* yarden top section */}
        <section className="mt3">
          <label>Project:</label>
          <h1>CRI Genetics</h1>
        </section>

        {/* intro section */}
        <section className="md-two-columns gap2 md-gap3 lg-gap4 mb4">

          <div>
            <p>
              CRI Genetics is a company similar to Ancestry.com or 23andME. I
              worked primarily on the web app that customers use to interact
              with the their DNA data. Sometimes I would cross over to the
              marketing team to help fill in gaps there.
            </p>
          </div>

          <div className="two-columns gap2">
            <div>
              <label>Title:</label>
              <h5>• Senior Front-end Developer</h5>
              <h5>
                • UI & Product Experience Design Lead <sup>(promoted)</sup>
              </h5>
            </div>
            <div>
              <label>City:</label>
              <h5>El Segundo, CA</h5>
            </div>
            <div>
              <label>When:</label>
              <h5>2020 - 2021</h5>
            </div>
            <div>
              <label>Country:</label>
              <h5>🇺🇸 USA</h5>
            </div>
          </div>

        </section>

        {/* responsibilities section */}
        <section className="lg-two-columns gap3 lg-gap4 mb3">
          {/* responsibilities image */}
          <div className="p3 flex-center">
            <img
              src={CRIGeneticsLogo}
              alt="cri genetics logo"
              className="whole"
            />
          </div>
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h3 className="mb2">What do I do here?</h3>

            <div className="sm-two-columns gap2">
              <div>
                <h5>Product:</h5>
                <small>
                  Understand business objectives coming down from the CEO and
                  CMO. Then architect solutions with Dev Team, Science Team, and
                  internal data that I gathered from my A/B Tests.
                </small>
              </div>

              <div>
                <h5>Design System</h5>
                <small>
                  A robust, token based library used to create a branded CSS
                  framework and React Component Library, in concert with an API
                  for use by the developers at CRI Genetics.
                </small>
              </div>

              <div>
                <h5>UI/UX Design</h5>
                <small>
                  Use data to inform design decisions and utilize our design
                  system to design and build quickly and at high fidelity
                </small>
              </div>

              <div>
                <h5>Web Development</h5>
                <small>
                  Work along side devs with a very hands-on approach, insuring
                  the design and feasability of our products.
                </small>
              </div>

              <div>
                <h5>A/B Testing</h5>
                <small>
                  This is a skill that I learned while working here. I had to
                  stretch a bit to achieve this.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* story section */}
        <section className="mb1">
          <label>Story:</label>
          <h3>How I got this job...</h3>
        </section>

        <section>
          <div className="md-two-columns gap4 lg-gap4">
            <div>
              <p>
                In the first quarter of 2020, COVID was just starting to get serious. I was working at Clicktool and the company had pivoted from a marketing analytics product, to strictly e-commerce. Since I want to build products, I was looking for a role where I could do that.
              </p>
              <p>Zip Recruiter has this feature, "1-Click-Apply" which I absolutely found a way to abuse. One of the jobs that I blindly applied for responded... it was CRI Genetics.</p>
            </div>

            <div className="p3 flex-center bg-transBlueC-10 flex-vertical">
              <h1>🥩</h1>
              <small>put an image here</small>
            </div>
          </div>

        </section>
        <hr className="my3" />
          <p className="text-center">More about CRI Genetics coming later...</p>
      </div>
    );
  }
}

export default CRIGenetics;
