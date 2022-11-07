import React, { Component } from "react";
import YardenLogo from "../../../IMG/YardenLogo";
import YardenMark from "../YARDEN/YardenMark";
import YardenLogoGeometry from "./YardenLogoGeometry";
import YardenLogoType from "./YardenLogotype";
import plantSelectionScreen from "./plant_selection.png";
import changeDateScreen from "./change_date.png";
import oldLogo from "./old_yarden_logo.jpg";
import chuckAndIsaac from "./chuckandisaac.jpg";
import theInvite from "./theinvite.jpeg";
import YardenVerticalLockup from "./YardenVerticalLockup";
import YardenHorizontalLockup from "./YardenHorizontalLockup";
import YardenHorizontalWhite from "./YardenHorizontalWhite";
import yardenTruck from "./yarden_truck.png";
import yardenShirt from "./yarden_shirt.png";
import yardenYardSign from "./Yarden_Yard_Sign.jpeg";
import "./Yarden.css";
import yardenWebsiteScreenshot from "./yarden_website_screenshot.png";
import YardenAppStoreQRCode from "./YardenAppStoreQRCode";
class Yarden extends Component {
  // componentDidMount() {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  render() {
    return (
      <div id="yarden">
        {/* yarden top section */}
        <section className="mt3">
          <label>Project:</label>
          <h1>Yarden&trade;</h1>
        </section>

        {/* intro section */}
        <section className="md-two-columns gap2 md-gap3 lg-gap4 mb4">
          <div>
            <p>
              Yarden is a gardening company supported by tech. It makes use of
              customer facing and internal products that allow the company to
              run on a very lean business model with a small team and steady
              growth.
            </p>
          </div>
          <div className="two-columns gap2">
            <div>
              <label>Title:</label>
              <h5>Creative Director</h5>
            </div>
            <div>
              <label>City:</label>
              <h5>San Francisco (Remote)</h5>
            </div>
            <div>
              <label>When:</label>
              <h5>2021 - Present Day</h5>
            </div>
            <div>
              <label>Country:</label>
              <h5>🇺🇸 USA</h5>
            </div>
          </div>
        </section>

        {/* responsibilities section */}
        <section className="mb4 lg-two-columns gap4">
          {/*  */}
          <div className="flex-center">
            <div className="half md-third lg-whole xl-half">
              <YardenVerticalLockup />
            </div>
          </div>
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h2 className="mb1">What do I do here?</h2>
            <p>
              TL;DR -- <i>Lead the design of everything we do!</i>
            </p>

            <br />
            <div
              className="sm-two-columns"
              style={{ gap: "var(--unit2) var(--unit3)" }}
            >
              <div>
                <h5>Branding:</h5>
                <small>
                  Lead the brand of the company and the design of all branded
                  materials. This includes print and web assets.
                </small>
              </div>

              <div>
                <h5>Product:</h5>
                <small>
                  Understand business objectives and architect solutions based
                  on input from CEO, CTO, and internal data, and maintain our
                  product pipeline.
                </small>
              </div>

              <div>
                <h5>Design System:</h5>
                <small>
                  Establish a design token system of colors, typography,
                  spacing, and scaling for a consistent experience across all
                  products. This system is used to build a constantly evolving
                  component library.
                </small>
              </div>

              <div>
                <h5>UI/UX Design:</h5>
                <small>
                  Use data to inform design decisions and utilize our design
                  system to design and build quickly and at high fidelity
                </small>
              </div>

              <div>
                <h5>Web and Mobile Development:</h5>
                <small>
                  Work along side devs with a very hands-on approach, insuring
                  the design and feasability of our products.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* story section */}
        <section>
          <div className="sm-two-columns gap2 lg-gap4">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <div>
                  <label>Story:</label>
                  <h2 className="mb1">How I Started here.</h2>
                </div>
                <p>
                  In Spring 2021, my former colleague from &nbsp;
                  <a href="/clicktool/">Clicktool</a>, Isaac, called me to hang
                  out. He was working at Snapchat and I was at CRI Genetics. We
                  were both sharing stories and telling jokes about our new jobs
                  and things that we've been doing since our time at Clicktool.
                </p>
                <p>
                  Later, while we were eating Korean BBQ, consuming a mountain
                  of grilled meat and banchan, Isaac told me about his project,
                  "Yarden", a little gardening company he started with a friend,
                  and invited me to join the team!
                </p>
              </div>
            </div>

            <div className="flex-center flex-vertical">
              <label className="ghost md-block">&nbsp;</label>
              <h3 className="mb2 ghost md-block">&nbsp;</h3>
              <img
                width="100%"
                src={theInvite}
                className="shadowDown"
                alt="Chuck and Isaac"
                style={{ borderRadius: "var(--unit2)" }}
              />
              <small className="mt0">Actual photo from that day...</small>
            </div>
          </div>
        </section>

        {/* rebrand section */}
        <section className="mt4">
          <div className="mb4">
            <div className="md-two-columns gap3 lg-gap4">
              <div className="flext-center flex-vertical">
                <div className="flex-center flex-vertical bg-white p3">
                  <img src={oldLogo} alt="old yarden logo" width="50%" />
                </div>
                <small className="flex-center">The original Yarden logo.</small>
              </div>

              <div>
                <label>Challenge #1:</label>
                <h2 className="mb1">Rebrand the Company</h2>
                <p>
                  This was the logo from when the company was established. As I
                  came here the topic of trademarking this logo was on the table
                  and naturally, I saw an opportunity to make an impact.
                </p>
                <p>
                  It took some fighting and several hours of meetings... as it
                  should be! Changing your brand after 4 years in business is
                  risky! But I convinced my colleagues to give me a chance...
                </p>
              </div>
            </div>
          </div>

          <div className="lg-two-columns">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <label>My proposal:</label>
                <h3>Yarden's New Logo System</h3>

                <p className="m-none my2">
                  Before I could start on this project I had to figure out what
                  my limitations are. There must be a trace of the old brand but
                  it has to be re-thought to fit the needs of a new brand.
                </p>

                <div className="my2">
                  <YardenLogoGeometry />
                </div>

                <label>Requirements:</label>
                <div className="two-columns sm-three-columns md-two-columns gap2">
                  <small>
                    1. Make a reference to the imagery and colors from the
                    original Yarden logo
                  </small>
                  <small>
                    2. Printed signage is a big part of our marketing so the
                    branding needs to be readable from a distance.
                  </small>
                  <small>
                    3. It has to work as an app icon for the app store and the
                    iPhone home screen.
                  </small>
                  <small>
                    4. Need to be able to use the letter "Y" somehow
                  </small>
                  <small>5. We are gonna trademark this... 😅</small>
                </div>
              </div>
            </div>

            <div className="gap3">
              <div className="flex-center flex-vertical">
                <div className="fourth mt4">
                  <YardenMark />
                </div>
                <small className="mt2">Mark</small>
              </div>

              <hr className="my3" />

              <div className="flex-center flex-vertical">
                <div className="half">
                  <YardenLogoType />
                </div>
                <small className="mt2">Logotype</small>
              </div>

              <hr className="my3" />

              <div className="flex-center flex-vertical">
                <div className="half">
                  <YardenHorizontalLockup />
                </div>
                <small className="mt2">Horizontal Lockup</small>
              </div>

              <hr className="my3" />

              <div className="flex-center flex-vertical">
                <div className="third">
                  <YardenVerticalLockup />
                </div>
                <small className="mt2">Vertical Lockup</small>
              </div>
            </div>
          </div>
        </section>

        {/* color system section */}
        <section>
          <div className="py4 lg-two-columns gap4">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <label>Color Palette</label>
                <h2>Yarden's new color system</h2>
                <p className="my1">
                  At this time the color system is more of a suggestion than a
                  strict rule. Designers are free to use any color, illustration
                  or photography to get the job done.
                </p>
              </div>
            </div>

            <div className="color-cells-container gap2">
              <div className="p3" style={{ background: "#ffffff" }}>
                <label>#ffffff</label>
                <h2>White</h2>
                <p>
                  Looks clean everywhere. Highly visible and easy to use a lot
                  of this color. In our UI we especially make use of a light
                  theme.
                </p>
              </div>

              <div
                className="p3"
                style={{ background: "#000000", color: "white" }}
              >
                <label>#000000</label>
                <h3>Black</h3>
                <p>
                  Highest visibility possible on a white background. Designer's
                  could feel free to make a dark theme.
                </p>
              </div>

              <div className="p3" style={{ background: "#00ff00" }}>
                <label>#00ff00</label>
                <h2>Green</h2>
                <p>
                  Say what you wanna say about this color. But one thing you can
                  say is, <i>"I can see it."</i>
                </p>
              </div>

              <div
                className="p3"
                style={{ background: "#330099", color: "white" }}
              >
                <label>#330099</label>
                <h2>Blurple</h2>
                <p>
                  We gotta balance out this green somehow so lets have a nice
                  cool purple. Designers could make a purple theme if they wish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* website section */}
        <section className="lg-two-columns gap3 lg-gap4">
          <div>
            <img
              className="whole shadowDown"
              src={yardenWebsiteScreenshot}
              alt="website screenshot"
              style={{ borderRadius: "var(--unit1)" }}
            />
          </div>
          <div>
            <label>Challenge #2:</label>
            <h2>Redesign the website</h2>
            <p className="pt1 pb2">
              There was a need to update the marketing website as we updated the
              brand. Before the mobile app was released this was the main entry
              for our customers to interact with Yarden. Today, we're
              experimenting with guiding our users toward using our mobile app.{" "}
              <a href="www.yardengarden.com">Visit the Yarden website</a>.
            </p>

            <div className="two-columns gap2">
              <div>
                <h5>A/B Testing</h5>
                <small>
                  In marketing A/B testing is crucial. This is a skill I picked
                  up while working at CRI Genetics. I use Google Optimize to
                  split traffic.
                </small>
              </div>

              <div>
                <h5>User Analytics</h5>
                <small>
                  We use our internal data from Strype, Google Analytics,
                </small>
              </div>

              <div>
                <h5>Design System</h5>
                <small>
                  In software development, design systems make prototyping and
                  front-end development go faster by using design tokens.
                </small>
              </div>

              <div>
                <h5>Component Library</h5>
                <small>
                  Maintain React Component Libraries for the website and webapp.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* mobile app section */}
        <section className="lg-two-columns my4">
          <div>
            <label>Challenge #3:</label>
            <h2>Launch the mobile app</h2>
            <p className="py1">
              It took us about a 6 months to build and launch the Yarden Mobile
              app. In summer 2022 it was deployed the the App Store. We are
              currently building new features and seeking investors.
            </p>
            <div className="flex p3">
              <div>
                <img
                  width={"100%"}
                  style={{
                    filter: "drop-shadow(0 6px 12px var(--transBlueC-10))",
                  }}
                  src={changeDateScreen}
                  alt="change date screen"
                />
              </div>
              <div>
                {" "}
                <img
                  width={"100%"}
                  style={{
                    filter: "drop-shadow(0 6px 12px var(--transBlueC-10))",
                  }}
                  src={plantSelectionScreen}
                  alt="plant selection screen"
                />
              </div>
            </div>
          </div>

          <div className="flex-center flex-vertical">
            <div>
              <YardenLogo />
            </div>

            <p>Download Yarden on the App Store</p>
            <div className="width4 my3">
              <YardenAppStoreQRCode />
            </div>
            <a href="https://apps.apple.com/gb/developer/yarden-garden-inc/id1626672981">
              <button>Go to App Store</button>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Yarden;
