// libs
import React from "react";
import { Helmet } from "react-helmet";

// style
import "./t-chat.css";

// components
import AllScreens from "./AllScreens";
import BuildingOnTheMVPSection from "./BuildingOnTheMVPSection";
import CompetitorsSection from "./CompetitorsSection";
import JourneyMap from "./JourneyMap";
import KeyTakeaways from "./KeyTakeaways";
import MVPFeaturesSection from "./MVPFeaturesSection";
import MVPSection from "./MVPSection";
import NextFeatures from "./NextFeatures";
import ProjectOverviewSection from "./ProjectOverviewSection";
import ResponsibilitiesSection from "./ResponsibilitiesSection";
import TechnologyUsed from "./TechnologyUsed";
import UserFeedbackSection from "./UserFeedbackSection";
// Create a component for the competitor analysis table

const TChat = () => {
  return (
    <div id="case-study">
      <Helmet>
        <title>T-Chat Case Study</title>
      </Helmet>

      <section className="pt3">
        <label>Project case study:</label>
        <h1>T-Chat</h1>
      </section>

      {/* project overview */}
      <ProjectOverviewSection />

      <ResponsibilitiesSection />

      {/* problem statement */}
      <section style={{ maxWidth: "var(--unit7)" }}>
        <label>Problem Statement</label>
        <h2>
          People need to understand eachother.
        </h2>
        <p>
          In a world that’s more connected than ever, language barriers still
          make communication challenging. Learning a new language takes time,
          and current solutions like Google Translate, Zalo, and iMessage offer
          translation, but they often involve clunky steps—like copying and
          pasting text, diving through menus, or, in the case of iMessage,
          requiring everyone to have an iPhone. These methods can make real-time
          conversations difficult and awkward. T-Chat solves this by providing a
          browser-based chat app with real-time translation, letting users from
          different language backgrounds communicate easily. There’s no need for
          extra downloads or special devices, and signups are optional, making
          conversations flow smoothly and helping people connect and understand
          each other better.
        </p>
      </section>

      <CompetitorsSection />

      <UserFeedbackSection />

      <KeyTakeaways />

      <JourneyMap />

      <MVPSection />

      <MVPFeaturesSection />

      <BuildingOnTheMVPSection />

      <section className="mt4">
        <label>Taking the MVP Into the Wild</label>
        <h2>Real-World Testing and User Feedback</h2>
        <p>
          After completing the MVP of T-Chat, I knew that the real test would
          come from putting it into the hands of actual users. To gain genuine
          insights, I decided to release the MVP into the wild, conducting user
          research without any initial prompting. My goal was to observe how
          users interacted with the app organically, understand their
          experiences, and identify any pain points or areas for improvement.
        </p>
      </section>

      <section className="mt3 lg-two-columns">
        <div className="sm-pt2 sm-pb3 sm-px3 flex-center-x flex-vertical">
          <label>User Feedback</label>
          <h3>What the Users Had to Say</h3>
          <p>
            Through this unprompted testing, I was able to gather invaluable
            feedback from a diverse group of users. Their experiences provided
            me with a clearer understanding of how the app performed in
            real-world scenarios and where I could make enhancements to better
            meet user needs.
          </p>

          <p>
            Positive feedback is good but... negative feeback has real value.
          </p>
        </div>
        <div className="sm-two-columns lg-one-column xl-two-columns">
          <div className="bg-green4 p2">
            <h4 className="mb1">Positive Feedback</h4>
            <ul className="gap2">
              <li>
                <small>
                  <h5>Real-time translation is accurate and fast</h5>
                  Users appreciated the speed and accuracy of the translation
                  feature, which was critical in ensuring smooth and meaningful
                  conversations.
                </small>
              </li>
              <li>
                <small>
                  <h5>
                    Easy to join conversations without needing downloads or
                    signups
                  </h5>
                  The simplicity and accessibility of joining chatrooms without
                  the need for downloads or lengthy signups was highly valued.
                </small>
              </li>
              <li>
                <small>
                  <h5>Browser-based approach is highly convenient</h5>
                  The browser-based nature of T-Chat made it easy for users to
                  access the app from anywhere without the need for additional
                  software, enhancing its usability.
                </small>
              </li>
            </ul>
          </div>

          <div className="bg-red4 p2">
            <h4 className="mb1">Negative Feedback</h4>
            <ul className="gap2">
              <li>
                <small>
                  <h5>Font size is too small</h5>
                  Some users found the default font size to be too small,
                  leading to discomfort during extended use.
                </small>
              </li>
              <li>
                <small>
                  <h5>Cannot see the original untranslated message</h5>
                  Users expressed a desire to see the original, untranslated
                  messages, as it would help them better understand the context
                  and nuances.
                </small>
              </li>
              <li>
                <small>
                  <h5>Can't save messages</h5>
                  The MVP runs completely on the server with no ability to save
                  your conversation. So I need to fill out the backend, connect
                  a database, and build out some authentication.
                </small>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
          full-stack application. This experience has pushed me to grow not just
          as a developer, but as a leader and strategist, balancing the
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
