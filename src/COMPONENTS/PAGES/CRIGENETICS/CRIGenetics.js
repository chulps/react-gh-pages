import React, { Component } from "react";
import CRIGeneticsLogo from "../../../IMG/cri_genetics_logo.svg";

class CRIGenetics extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
            <p>I was the only designer in the company.</p>
          </div>

          <div className="two-columns gap2">
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
                pivoted from building a marketing analytics product to building
                a politically motivated e-commerce store... which sold
                politically motivated products which I also designed. Ya, I was
                designing products but... not the kind I wanted anything to do
                with.
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
          <label>First task:</label>
          <h2>
            "Draw a Cat"{" "}
            <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
              - The CEO
            </span>
          </h2>
        </section>
        <section className="md-two-columns gap3 md-gap4 mt1">
          <div>
            <img
              width="100%"
              src="https://static.vecteezy.com/system/resources/previews/000/156/144/large_2x/female-and-male-customer-service-vector.jpg"
              alt="Easy Cheesy Vecteezy"
            />
            <small>
              The girl on the left can be found in a few places among CRI's products and websites... she might still be there 😅
            </small>
            <br />
            <small>
              Source:
              https://static.vecteezy.com/system/resources/previews/000/156/144/large_2x/female-and-male-customer-service-vector.jpg
            </small>
          </div>

          <div>
            <p>
              My new boss wanted to give me a fun new project to welcome me to
              the team. The designer who came before me (who I have much respect
              for) was not a designer who codes but instead, a coder who
              designs.
            </p>
            <p>
              The illustrations in our app were taken from some royalty-free
              images website and my boss wanted something with more personality
              that would more easily help our users connect with the product.
            </p>
            <p>Also, our 404 page was looking really plain</p>
          </div>

          <div>
            <div style={{ position: "sticky", top: "var(--unit4)" }}>
              <label>re: "draw a cat"</label>
              <h3>This is Meowbert Einstein</h3>
              <p></p>
              <p>
                He only knows two things:
                <br />
                1. Science
                <br />
                2. Customer Service
              </p>
            </div>
          </div>
          <div>meowbert</div>
        </section>
        <hr className="my3" />
        <p className="text-center">More about CRI Genetics coming later...</p>

        <div class="accordion">
          <div
            onClick="app.handleAccordionClick(this)"
            class="flex-center flex-vertical"
          >
            <div class="whole py1 px2 text-blue flex-space-between">
              <h5>Accordion</h5>
              <span>&#9660;</span>
            </div>

            {/* accordion */}
            <div class="accordion-contents whole">
              <p>
                CRI Genetics has a unique approach to genealogical testing. We
                are an advanced team led by a professional molecular geneticist
                who has been studying DNA for over 35 years with the help of
                Nobel Prize winning scientists. At CRI Genetics, we have the
                education, tools, and skills to provide you the most accurate
                estimation of your BioGeographical Ancestry.
              </p>
              <p>
                We combine Genetics with Anthropology to trace the migrations of
                the human race. When we test your DNA against the samples from
                around the globe, we can figure out where you fit in the rich
                history of our species.
              </p>
              <p>
                Our tests examine 642,824 specific markers across your entire
                genome. These markers are hand-picked based on the latest
                breakthroughs and advancements in genetic science. These markers
                are specially chosen for their relevance to tracing ancestry, so
                that we can provide you with the most statistically likely
                estimation of your heritage.
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CRIGenetics;
