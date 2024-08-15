// libs
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ProjectOverviewSection from "./ProjectOverviewSection";
import ResponsibilitiesSection from "./ResponsibilitiesSection";
import CompetitorsSection from "./CompetitorsSection";
import UserFeedbackSection from "./UserFeedbackSection";
import KeyTakeaways from "./KeyTakeaways";
import JourneyMap from "./JourneyMap";
import MVPSection from "./MVPSection";
import MVPFeaturesSection from "./MVPFeaturesSection";
import BuildingOnTheMVPSection from "./BuildingOnTheMVPSection";
import NextFeatures from "./NextFeatures";
import AllScreens from "./AllScreens";
import TechnologyUsed from "./TechnologyUsed";

// style
import "./t-chat.css";

const TChat = () => {
  // Create a ref for the element you want to scroll to
  const caseStudyRef = useRef(null);

  // Function to handle the scroll
  const handleScroll = (e) => {
    e.preventDefault();
  
    if (caseStudyRef.current) {
      // Convert 8rem to pixels based on the root font size
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offset = 6 * rootFontSize; // 8rem in pixels
  
      // Calculate the position of the target section
      const elementPosition = caseStudyRef.current.getBoundingClientRect().top + window.pageYOffset;
  
      // Scroll to the target section, adjusting for 8rem
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>T-Chat Case Study</title>
      </Helmet>

      <section className="pt3">
        <label>Project case study:</label>
        <h1>T-Chat</h1>
      </section>

      {/* Pass the scroll function to the ProjectOverviewSection */}
      <ProjectOverviewSection handleScroll={handleScroll} />

      {/* Pass the ref to the ResponsibilitiesSection */}
      <ResponsibilitiesSection ref={caseStudyRef} />

      {/* problem statement */}
      <div className="bg-blue4 py4">
        <section style={{ maxWidth: "var(--unit7)" }}>
          <label>Problem Statement</label>
          <h2>People need to understand each other.</h2>
          <p>
            In a world that’s more connected than ever, language barriers still
            make communication challenging. Learning a new language takes time,
            and current solutions like Google Translate, Zalo, and iMessage
            offer translation, but they often involve clunky steps—like copying
            and pasting text, diving through menus, or, in the case of iMessage,
            requiring everyone to have an iPhone. These methods can make
            real-time conversations difficult and awkward. T-Chat solves this
            by providing a browser-based chat app with real-time translation,
            letting users from different language backgrounds communicate
            easily. There’s no need for extra downloads or special devices, and
            signups are optional, making conversations flow smoothly and
            helping people connect and understand each other better.
          </p>
        </section>
      </div>

      <CompetitorsSection />
      <UserFeedbackSection />
      <KeyTakeaways />
      <JourneyMap />
      <MVPSection />
      <MVPFeaturesSection />
      <BuildingOnTheMVPSection />
      <NextFeatures />
      <AllScreens />
      <TechnologyUsed />

      <section className="mt4">
        <label>Challenges and Solutions</label>
        <h2>Overcoming Obstacles on the Path to Success</h2>
        <p>
          Building T-Chat has been an incredible journey as it marks my first
          time creating a product from start to finish. In this project, I've
          worn many hats—acting as the CEO, CTO, and COO—taking on every
          challenge that comes with developing, designing, and managing a
          full-stack application. This experience has pushed me to grow not
          just as a developer, but as a leader and strategist, balancing the
          technical aspects with the business side of bringing a product to
          market. All of this has been done in my free time, driven by a passion
          for solving communication challenges, and with a long-term vision of
          turning T-Chat into a thriving business.
        </p>

        <ul className="md-two-columns lg-two-columns gap3 mt3">
          <li>
            <h5>API Costs</h5>
            <p>
              Managed by optimizing API calls and exploring cost-effective
              alternatives to ensure the project remains sustainable without
              compromising on functionality.
            </p>
          </li>
          <li>
            <h5>Naming the Product</h5>
            <p>
              Naming the product is crucial for marketability. Currently
              considering better names that resonate with users and the app's
              core value proposition.
            </p>
          </li>
          <li>
            <h5>Product Marketing</h5>
            <p>
              Effective marketing is key to success. Planning to leverage social
              media and partnerships to increase visibility and user adoption.
            </p>
          </li>
          <li>
            <h5>Browser Compatibility</h5>
            <p>
              Ensured optimal performance on Chromium-based browsers, addressing
              compatibility issues to provide a seamless experience for all
              users.
            </p>
          </li>
          <li>
            <h5>Finally starting a business</h5>
            <p>
              I'm attempting to form a company around this app. A business plan
              is in the works.
            </p>
          </li>
        </ul>
      </section>

      <div className="bg-blue4 py4 mt4">
        <section style={{ maxWidth: "var(--unit7)" }}>
          <h2>Final Conclusion</h2>
          <p>
            The T-Chat project showcases my ability to lead a design effort from
            concept to deployment. It highlights my skills in user research,
            UI/UX design, product management, and fullstack web development,
            aligning well with the goal of enhancing communication through
            technology.
          </p>

          <div className="flex-center pt3">
            <a href="https://chulps.github.io/chat-app/">
              <button>Try T-Chat</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TChat;
