import React, { Component } from "react";

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
              CRI Genetics is a company similar to Ancestry.com or 23andME. I worked primarily on the web app that customers use to interact with the their DNA data. Sometimes I would cross over to the marketing team to help fill in gaps there.
            </p>
          </div>
          <div className="two-columns gap2">

            <div>
              <label>Title:</label>
              <h5>• Senior Front-end Developer</h5>
              <h5>• UI & Product Experience Design Lead <sup>(promoted)</sup></h5>
            </div>
            <div>
              <label>City:</label>
              <h5>El Segundo, CA</h5>
            </div>
            <div>
              <label>When:</label>
              <h5>2020 - 2021 (1yr/9mo)</h5>
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
          <div>
            <div style={{position: 'sticky', top: 'var(--unit4)'}}>
              <small>put an image here</small>
            </div>
          </div>
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h3 className="mb2">What do I do here?</h3>

            <div className="sm-two-columns gap2">


              <div>
                <h5>Product:</h5>
                <small>
                  Understand business objectives coming down from the CEO and CMO.
                  Then architect solutions with Dev Team, Science Team, and internal data that I gathered from my A/B Tests.
                </small>
              </div>

              <div>
                <h5>Design System</h5>
                <small>
                  A robust, token based library used to create a branded CSS framework and React Component Library for use by the developers at CRI Genetics.
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
                  This is a skill that I learned while working here. I had to stretch a bit to achieve this.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* story section */}
        <section className="mb1">
          <label>Story:</label>
          <h3>How did I get into this?</h3>
        </section>

        <section>
          <div className="md-two-columns gap4 lg-gap4">

            <div>
              <p>In Spring 2021, my former colleague from <a href="/clicktool/">Clicktool</a>, Isaac Grey, called me to hang out. At the time, he was working at Snapchat and I was at CRI Genetics. We were both sharing stories and telling jokes about our new jobs and things that we've been doing since our time at Clicktool.</p>
              <p>Later, while we were eating Korean BBQ, consuming a mountain of grilled meat and banchan, Isaac told me about his project, "Yarden", a little gardening company he started with a friend, and invited me to join the team!</p>
            </div>
            
            <div className="p3 flex-center bg-transBlueC-10 flex-vertical">
              <h1>🥩</h1>
              <small>put an image here</small>
            </div>

          </div>
                    
          {/* something */}
          <div className="mt4">

            <div className="mb3">
              <h4>1. Rebrand</h4>
              <p>This was the logo from when the company was established. As I came here the topic of trademarking this logo was on the table and naturally, I saw an opportunity to make an impact.</p>
              <div className="two-columns">
                <div className="flex-center">
                  {/* <img src={oldLogo} alt="old yarden logo" width="25%"/> */}
                </div>
                <div className="flex-center">
                  {/* <img src={yardenMark} alt="new yarden logo" width="25%"/> */}
                </div>
              </div>
            </div>

            <div className="three-columns mb4">
              
              <div className="flex-center flex-vertical">
                <h1>🛻</h1>
                <h5>talk about the truck</h5>
              </div>
              
              <div className="flex-center flex-vertical">
                <h1>👕</h1>
                <h5>talk about the shirts</h5>
              </div>
              
              <div className="flex-center flex-vertical">
                <h1>🪧</h1>
                <h5>talk about the signs</h5>
              </div>
            </div>

            <div className="md-two-columns gap2 md-gap3">
              
              <div>
                redesign the website
              </div>

              <div>
                picture
              </div>

            </div>

            <div>
              A/B Testing
            </div>

            <div>
              Web App
            </div>

            <div>
              Mobile App
            </div>

            <div>
              Product Roadmapping
            </div>
          </div>


          <div>
            
          </div>
        </section>










        {/* yarden bottom section */}
        <section className="hero flex-center flex-vertical">
          <div className="grid md-flex mb3" style={{gap: "var(--unit3)"}}>
            {/* <img width={200} src={changeDateScreen} alt="change date screen" /> */}
            {/* <img width={200} src={plantSelectionScreen} alt="plant selection screen" /> */}
          </div>
          <div className="width5">
            {/* <YardenLogo /> */}
          </div>
          <p>Download Yarden on the App Store</p>
          <a
            className="mt3"
            href="https://apps.apple.com/gb/developer/yarden-garden-inc/id1626672981"
          >
            <button>Go to App Store</button>
          </a>
        </section>
      </div>
    );
  }
}

export default CRIGenetics;
