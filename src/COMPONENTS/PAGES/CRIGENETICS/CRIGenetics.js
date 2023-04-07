import React, { Component } from "react";
import CRIGeneticsLogo from "../../../IMG/cri_genetics_logo.svg";
import { Helmet } from "react-helmet";
import Meowbert from "./Meowbert";
import MeowbertCS from "./Meowbert_CS";

class CRIGenetics extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div id="crigenetics">
        <Helmet>
          <title>CRI Genetics</title>
        </Helmet>
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
            <p>I was the only designer in the company.</p>
          </div>

          <div className="md-two-columns gap2">
            <div>
              <label>Titles:</label>
              <p className="bold">
                • Senior Front-end Developer
                <br />• UI & Product Experience Design Lead{" "}
                <sup>(promoted)</sup>
              </p>
            </div>
            <div>
              <label>City:</label>
              <p className="bold">El Segundo, CA</p>
            </div>
            <div>
              <label>When:</label>
              <p className="bold">2020 - 2021</p>
            </div>
            <div>
              <label>Country:</label>
              <p className="bold">🇺🇸 USA</p>
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
                  <a href="/#/nucleotide" className="h6">Nucleotide</a>, A robust, token based library used to create a branded CSS
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

              <div>
                <h5>Design Generalist</h5>
                <small>
                  From branding to illustration to animation, design everything
                  that comes across my desk.
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
                In the first quarter of 2020 COVID was getting spicy. I was
                working at <a href="/clicktool">Clicktool</a> and the company
                pivoted from building a subscription based marketing analytics
                product to building a Shopify ecommerce site and designing goods
                that I couldn't bring myself to agree with... so I quit.
              </p>
              <p>
                Zip Recruiter has this feature, "1-Click-Apply" which I
                absolutely found a way to abuse. One of the jobs that I blindly
                applied for responded... it was CRI Genetics.
              </p>
            </div>

            <div className="flex-center flex-vertical">
              <img
                src="https://media.tenor.com/1E3lN6HOrZcAAAAd/button-press-the-button.gif"
                width="100%"
                height="auto"
                alt="button mash gif"
              />
              <small>Me on Zip Recruiter...</small>
            </div>
          </div>
        </section>

        <section>
          <label>🛠️ Under construction:</label>
          <h2>
            I'm still working on this page...
          </h2>
        </section>
        <section className="md-two-columns gap3 md-gap4 mt1">
          <MeowbertCS />

          <div className="flex-center flex-vertical p3">
            <p className="mb2">Click here to view a demo page of the site thats still active</p>
            <a href="https://demo.crigenetics.com/dash" target="_blank"><button className="green">View Demo</button></a>
          </div>

        </section>
        <hr className="mt3 mb3" />
        <p className="text-center mb3">More about CRI Genetics coming later...</p>
      </div>
    );
  }
}

export default CRIGenetics;
