// libs
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// style
import "./t-chat.css";

// components
import CompetitorsSection from "./CompetitorsSection";
import ResponsibilitiesSection from "./ResponsibilitiesSection";
import UserFeedbackSection from "./UserFeedbackSection";
import KeyTakeaways from "./KeyTakeaways";
import JourneyMap from "./JourneyMap";
import MVPSection from "./MVPSection";
import ProjectOverviewSection from "./ProjectOverviewSection";
import MVPFeaturesSection from "./MVPFeaturesSection";
import TechnologyUsed from "./TechnologyUsed";

// Create a component for the competitor analysis table

const TChat = () => {
  return (
    <div id="case-study">
      <Helmet>
        <title>T-Chat Case Study</title>
      </Helmet>

      <section className="pt3">
        <label>Project:</label>
        <h1>T-Chat</h1>
      </section>

      {/* project overview */}
      <ProjectOverviewSection />

      <ResponsibilitiesSection />

      {/* problem statement */}
      <section style={{ maxWidth: "var(--unit7)" }}>
        <label>Problem Statement</label>
        <h2 style={{ maxWidth: "var(--unit6)" }}>
          Breaking Down Language Barriers in Real-Time
        </h2>
        <p>
          In a world that’s more connected than ever, language barriers still
          make communication challenging. Learning a new language takes time,
          and current solutions like Google Translate, Zalo, and iMessage offer
          translation, but they often involve clunky steps—like copying and
          pasting text, navigating through menus, or, in the case of iMessage,
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

      <TechnologyUsed />

      <section className="lg-two-columns gap3 mt4">
        <div className="prototype-frame">
          <iframe
            title="`T-Chat` Figma Prototype"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="650"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FINUShNpcGk0fqAYsZ1nUwo%2FT-Chat%3Fpage-id%3D0%253A1%26node-id%3D3121-427%26viewport%3D-3370%252C1333%252C0.58%26t%3D8UsjU9MZ0Mn1ym9l-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D3121%253A427"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <label>Building on the MVP</label>
          <h3>Enhancing the Experience with Advanced Features</h3>
          <p>
            As T-Chat progresses beyond the initial MVP, the next phase of
            development focuses on incorporating additional features that
            enhance user experience and functionality. These enhancements
            include Authentication, allowing users to securely access their
            profiles and data, and the ability to save conversations for future
            reference. In-app notifications will keep users updated in real
            time, while the option to add friends or contacts expands the social
            aspect of the platform. Customization options like adjustable font
            sizes and toggling the display of original untranslated messages
            will provide users with a more tailored experience. Additionally,
            users will be able to search for contacts or chatrooms, making it
            easier to stay connected and manage conversations effectively.
          </p>
        </div>
      </section>

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

          <p>Positive feedback is good but... negative feeback has real value.</p>
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

      <section className="mt4">
        <label>Feature Requests</label>
        <h3 className="mb2">What Users Want to See Next</h3>
        <ul className="md-two-columns lg-three-columns xl-four-columns gap2">
          <li>
            <h5>Saving Conversations</h5>
            <small>
              Users want the ability to save and revisit past conversations,
              ensuring they can retain important discussions for future
              reference.
            </small>
          </li>
          <li>
            <h5>In-App Notifications</h5>
            <small>
              Notifications for new messages, mentions, and activity within
              chatrooms are crucial to keep users engaged and informed.
            </small>
          </li>
          <li>
            <h5>Video Chat with Subtitles</h5>
            <small>
              Adding subtitles to video chats would enhance accessibility and
              ensure that language barriers are minimized even in video
              communication.
            </small>
          </li>
          <li>
            <h5>Play YouTube Videos or Music in Chatrooms</h5>
            <small>
              Users are asking for the ability to play YouTube videos or music
              in the background, making chatrooms more interactive and engaging.
            </small>
          </li>
          <li>
            <h5>Adding Friends/Contacts</h5>
            <small>
              The option to add and maintain a list of friends or contacts
              within the app is a highly requested feature for easier
              communication.
            </small>
          </li>
          <li>
            <h5>Adjustable Font Size</h5>
            <small>
              Users want the ability to customize the font size to suit their
              preferences and improve readability, especially for extended
              conversations.
            </small>
          </li>
          <li>
            <h5>Toggle Original, Untranslated Message On/Off</h5>
            <small>
              The ability to toggle the visibility of the original, untranslated
              message would provide users with better context and understanding.
            </small>
          </li>
          <li>
            <h5>Light/Dark Mode</h5>
            <small>
              Users have requested both light and dark mode options to suit
              different lighting conditions and personal preferences.
            </small>
          </li>
          <li>
            <h5>Join a Chatroom with Chatroom ID</h5>
            <small>
              An easy way to join chatrooms by simply entering a chatroom ID
              would streamline the process and make it more user-friendly.
            </small>
          </li>
          <li>
            <h5>Voice Transcription</h5>
            <small>
              Automatically transcribe spoken words into text, making it easier
              for users to follow along in different languages.
            </small>
          </li>
          <li>
            <h5>Rich Metadata When Sharing Links</h5>
            <small>
              Enhance the link-sharing experience with rich metadata, providing
              users with a preview of the shared content.
            </small>
          </li>
          <li>
            <h5>Reply or React to Messages</h5>
            <small>
              The ability to directly reply or react to specific messages within
              a chat would add depth and interaction to conversations.
            </small>
          </li>
          <li>
            <h5>End-to-End Encryption</h5>
            <small>
              Users are concerned about privacy and have requested end-to-end
              encryption to ensure that their conversations remain secure.
            </small>
          </li>
          <li>
            <h5>More Safety Features</h5>
            <small>
              Additional safety features, such as moderation tools and reporting
              mechanisms, are essential for maintaining a safe environment.
            </small>
          </li>
        </ul>
      </section>

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
        <section style={{maxWidth: 'var(--unit7)'}}>
          <h1>Final Conclusion</h1>
          <p>
            The T-Chat project showcases my ability to lead a design effort from
            concept to implementation. It highlights my skills in user research,
            UI/UX design, and technical execution, aligning well with the goal of
            enhancing communication through technology.
          </p>
  
          <div className="flex-center pt3"><button>Try T-Chat</button></div>
        </section>
</div>
    </div>
  );
};

export default TChat;
