// Resume.js
import React from "react";
import "./resume.css";
import skills from "../HOME/HOME_COMPONENTS/skills.json";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import axios from "axios";
import UOfM from "../../../../IMG/uOfm-01.svg";
import UOfMpng from "../../../../IMG/uOfm-01.png";
import UCLAExt from "../../../../IMG/UCLAExt-01.svg";
import UCLAExtpng from "../../../../IMG/UCLAExt-01.png";
import Award from "../../../../IMG/award.svg";
import Awardpng from "../../../../IMG/award.png";
import Behancepng from "../../../../IMG/BehanceGR.png";
import Behance from "../../../../IMG/BehanceGR.svg";

const skillsImages = require.context("../../../../IMG/SKILLS", true);
const printImages = require.context("../../../../IMG/PNGSKILLS", true);

class Resume extends React.Component {
  componentDidMount() {
    axios.get("getUser/chuck").then(data => {
      this.props.setUser(data.data);
    });
  }
  printDocument = async () => {
    document.getElementById("myResume").style.display = "block";
    await new Promise(resolve => {
      this.resume.save();
      setTimeout(() => {
        resolve();
      }, 30);
    });
    document.getElementById("myResume").style.display = "none";
  };

  render() {
    return (
      <div className="resume-page">
        {/* mobile resume */}
        <button
          className="bg-blackTrans m-auto mt30 mb30"
          onClick={this.printDocument}
        >
          Download PDF
        </button>
        <section className="main-resume">
          <div className="one-column md-three-columns lg-gap10">
            <div className="general-info mb20">
              <h4 className="name font-condensed">CHUCK HOWARD</h4>
              <div className="title">Designer + Developer</div>
            </div>

            <div className="contact-info mb20">
              <label>CONTACT</label>

              <div className="website">www.chuck-howard.com</div>
              <div className="linkedIn-url">
                www.linkedin.com/in/chuck-howard/
              </div>
            </div>

            <div className="location-info mb20">
              <label>LOCATION</label>
              <div className="city">Los Angeles,</div>
              <div className="state">California</div>
            </div>
          </div>

          <div className="intro mb20 flex-column whole">
            <label>statement</label>
            <p>
              I'm a product designer, and front-end developer. I'm seeking a
              role where I can use the latest UI/UX design practices, HTML/CSS
              and Javascript frameworks like React to build apps, brands,
              software, and websites from top to bottom.
            </p>
          </div>

          <div className="mb20">
            <label>SKILLS</label>
            <div className="flex-row flex-start" style={{ flexWrap: "wrap" }}>
              {skills.map(element => {
                console.log(element.image);
                return (
                  <div
                    key={element.id}
                    className="text-center m5 flex-column flex-center"
                  >
                    <img
                      height={20}
                      src={skillsImages("./" + element.image)}
                      style={{ opacity: ".5" }}
                      alt=""
                    />
                    <label className="mt10">{element.title}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <label>experience</label>
          <div className="experience mb20">
            {/* begin experience-item */}
            <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">CRI Genetics</h5>
              <div className="job-title">
                Product Designer/Sr. Front End Developer
              </div>
              <div className="job-duration">April 2020 - Current</div>
            </div>
            {/* begin experience-item */}
            <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">Clicktool</h5>
              <div className="job-title">
                Product Designer/Front End Developer
              </div>
              <div className="job-duration">Aug 2018 - April 2020</div>
            </div>
            {/* begin exp item */}
            <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">BTFL</h5>
              <div className="job-title">Designer</div>
              <div className="job-duration">Mar 2017 - Aug 2018</div>
            </div>
            {/* begin exp item */}
            <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">Sullivan Branding</h5>
              <div className="job-title">Art Director</div>
              <div className="job-duration">Mar 2015 - Mar 2017</div>
            </div>
            {/* begin exp item */}
            {/* <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">Signature Advertising</h5>
              <div className="job-title">Art Director</div>
              <div className="job-duration">Mar 2014 - Mar 2015</div>
            </div> */}
          </div>

          <div className="whole one-column md-two-columns">
            <div className="mb20 one-column gap10">
              <label>EDUCATION</label>

              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="university-skills">
                  <img
                    src={UOfM}
                    alt=""
                    style={{ height: 24, width: 24, opacity: "0.5" }}
                    className="mr10"
                  />
                </div>
                <div className="flex-column">
                  <h5 className="university-name">University of Memphis</h5>
                  <div className="degree-description">BFA: Graphic Design</div>
                </div>
              </div>

              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="university-skills">
                  <img
                    src={UCLAExt}
                    alt=""
                    style={{ height: 24, width: 24, opacity: "0.5" }}
                    className="mr10"
                  />
                </div>
                <div className="flex-column">
                  <h5 className="university-name">UCLA Extension</h5>
                  <div className="degree-description">
                    Certificate: Full-Stack Web Development
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info mb20 one-column gap10">
              <label>AWARDS</label>
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="awards">
                  <img
                    src={Award}
                    alt=""
                    style={{ height: 24, width: 24, opacity: "0.5" }}
                    className="mr10"
                  />
                </div>
                <div className="flex-column">
                  <h5 className="university-name">Gold Addy 2015</h5>
                  <div className="degree-description">
                    Signature Advertising 2015
                  </div>
                </div>
              </div>
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="awards">
                  <img
                    src={Behance}
                    alt=""
                    style={{ height: 24, width: 24, opacity: "0.5" }}
                    className="mr10"
                  />
                </div>
                <div className="flex-column">
                  <h5 className="university-name">Featured on Behance</h5>
                  <div className="degree-description">
                    www.behance.net
                    <br />
                    Graphic Design: Poster
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="references">
            <label>REFERENCES</label>
            <div className="column gap10">
              <div className="references-info one-column three-columns gap10 whole">
                <h5 className="name">Elton Hsu</h5>
                <div className="relationship">Colleague</div>
                <div className="linkedin truncate md-un-truncate">
                  <a target="_blank" href="https://www.linkedin.com/in/elthsu/">
                    https://www.linkedin.com/in/elthsu/
                  </a>
                </div>

                <h5 className="name">William Ha</h5>
                <div className="relationship">Former Colleague</div>
                <div className="linkedin truncate md-un-truncate">
                  <a target="_blank" href="https://www.linkedin.com/in/wvha17/">
                    https://www.linkedin.com/in/wvha17/
                  </a>
                </div>

                <h5 className="name">Isaac Grey</h5>
                <div className="relationship">Former Colleague</div>
                <div className="linkedin truncate md-un-truncate">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/isaacgrey/"
                  >
                    https://www.linkedin.com/in/isaacgrey/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*            */}
        {/*            */}
        {/*            */}
        {/* PDF resume */}
        {/*            */}
        {/*            */}
        {/*            */}

        <PDFExport
          paperSize={"Letter"}
          fileName="chuck-howard.pdf"
          title=""
          subject=""
          keywords=""
          ref={r => (this.resume = r)}
        >
          <section id="myResume" className="resume hidden md-block printing">
            <div className="one-column md-three-columns lg-gap10">
              <div className="general-info mb20">
                <h4 className="name font-condensed">CHUCK HOWARD</h4>
                <div className="title">Designer + Developer</div>
              </div>

              <div className="contact-info mb20">
                <label>CONTACT</label>

                <div className="website">www.chuck-howard.com</div>
                <div className="linkedIn-url">
                  www.linkedin.com/in/chuck-howard/
                </div>
              </div>

              <div className="location-info mb20">
                <label>LOCATION</label>
                <div className="city">Los Angeles,</div>
                <div className="state">California</div>
              </div>
            </div>

            <div className="intro mb20 flex-column whole">
              <label>statement</label>
              <p>
                I'm a product designer, and front-end developer. I'm seeking a
                role where I can use the latest UI/UX design practices, HTML/CSS
                and Javascript frameworks like React to build apps, brands,
                software, and websites from top to bottom.
              </p>
            </div>

            <div className="mb20">
              <label>SKILLS</label>
              <div className="flex-row flex-start" style={{ flexWrap: "wrap" }}>
                {skills.map(element => {
                  console.log(element.image);
                  return (
                    <div
                      key={element.id}
                      className="text-center m5 flex-column flex-center"
                    >
                      <img
                        height={20}
                        src={printImages(
                          "./" + element.image.replace(".svg", ".png")
                        )}
                        style={{ opacity: ".5" }}
                        alt=""
                      />
                      <label className="mt10">{element.title}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <label>experience</label>
            <div className="experience mb20">
              {/* begin experience-item */}
              <div className="experience-item whole one-column md-three-columns md-gap10">
                <h5 className="employer">CRI Genetics</h5>
                <div className="job-title">
                  Product Designer/Sr. Front End Developer
                </div>
                <div className="job-duration">April 2020 - Current</div>
              </div>
              {/* begin experience-item */}
              <div className="experience-item whole one-column md-three-columns md-gap10">
                <h5 className="employer">Clicktool</h5>
                <div className="job-title">
                  Product Designer/Front End Developer
                </div>
                <div className="job-duration">Aug 2018 - April 2020</div>
              </div>
              {/* begin exp item */}
              <div className="experience-item whole one-column md-three-columns md-gap10">
                <h5 className="employer">BTFL</h5>
                <div className="job-title">Designer</div>
                <div className="job-duration">Mar 2017 - Aug 2018</div>
              </div>
              {/* begin exp item */}
              <div className="experience-item whole one-column md-three-columns md-gap10">
                <h5 className="employer">Sullivan Branding</h5>
                <div className="job-title">Art Director</div>
                <div className="job-duration">Mar 2015 - Mar 2017</div>
              </div>
              {/* begin exp item */}
              {/* <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">Signature Advertising</h5>
              <div className="job-title">Art Director</div>
              <div className="job-duration">Mar 2014 - Mar 2015</div>
            </div> */}
            </div>

            <div className="whole one-column md-two-columns">
              <div className="mb20 one-column gap10">
                <label>EDUCATION</label>

                <div className="education-info flex-row">
                  {/* begin 1 education item */}
                  <div className="university-skills">
                    <img
                      src={UOfMpng}
                      alt=""
                      style={{ height: 24, width: 24, opacity: "0.5" }}
                      className="mr10"
                    />
                  </div>
                  <div className="flex-column">
                    <h5 className="university-name">University of Memphis</h5>
                    <div className="degree-description">
                      BFA: Graphic Design
                    </div>
                  </div>
                </div>

                <div className="education-info flex-row">
                  {/* begin 1 education item */}
                  <div className="university-skills">
                    <img
                      src={UCLAExtpng}
                      alt=""
                      style={{ height: 24, width: 24, opacity: "0.5" }}
                      className="mr10"
                    />
                  </div>
                  <div className="flex-column">
                    <h5 className="university-name">UCLA Extension</h5>
                    <div className="degree-description">
                      Certificate: Full-Stack Web Development
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info mb20 one-column gap10">
                <label>AWARDS</label>
                <div className="education-info flex-row">
                  {/* begin 1 education item */}
                  <div className="awards">
                    <img
                      src={Awardpng}
                      alt=""
                      style={{ height: 24, width: 24, opacity: "0.5" }}
                      className="mr10"
                    />
                  </div>
                  <div className="flex-column">
                    <h5 className="university-name">Gold Addy 2015</h5>
                    <div className="degree-description">
                      Signature Advertising 2015
                    </div>
                  </div>
                </div>
                <div className="education-info flex-row">
                  {/* begin 1 education item */}
                  <div className="awards">
                    <img
                      src={Behancepng}
                      alt=""
                      style={{ height: 24, width: "auto", opacity: "0.5" }}
                      className="mr10"
                    />
                  </div>
                  <div className="flex-column">
                    <h5 className="university-name">Featured on Behance</h5>
                    <div className="degree-description">
                      www.behance.net
                      <br />
                      Graphic Design: Poster
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="references">
              <label>REFERENCES</label>
              <div className="column gap10">
                <div className="references-info one-column three-columns gap10 whole">
                  <h5 className="name">Elton Hsu</h5>
                  <div className="relationship">Colleague</div>
                  <div className="linkedin truncate md-un-truncate">
                    https://www.linkedin.com/in/elthsu/
                  </div>

                  <h5 className="name">William Ha</h5>
                  <div className="relationship">Former Colleague</div>
                  <div className="linkedin truncate md-un-truncate">
                    https://www.linkedin.com/in/wvha17/
                  </div>

                  <h5 className="name">Isaac Grey</h5>
                  <div className="relationship">Former Colleague</div>
                  <div className="linkedin truncate md-un-truncate">
                    https://www.linkedin.com/in/isaacgrey/
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PDFExport>
      </div>
    );
  }
}

export default Resume;
