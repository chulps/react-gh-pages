import React from "react";
import styled from "styled-components";
import Chatroom from "./Chatroom.png";

const CTAContainer = styled.div`
  display: flex;
  gap: var(--unit1);
  flex-direction: column;
  align-items: center;
  margin-top: var(--unit1);

  span {
    white-space: nowrap;
  }

  a:has(button) {
    width: 100%;
    display: flex;

    button {
      width: 100%;
    }
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const ProjectOverviewSection = ({ handleScroll }) => {
  return (
    <section className="md-two-columns gap4 md-gap3 pb4">
      <div>
        <p>
          T-Chat is a browser-based chat application that enables users that
          speak different languages to communicate conveniently. It leverages
          Google's Cloud Translation API and Open AI's Whisper API to provide
          real-time translation between users, breaking down language barriers,
          and ensuring that conversations flow smoothly. Many users who speak
          different languages can join a conversation and everyone will
          understand each other.
        </p>
        <CTAContainer>
          <a href="#case-study" onClick={handleScroll}>
            <button>Case Study</button>
          </a>
          <span>
            <i>-&nbsp;or&nbsp;-</i>
          </span>
          <a target="_blank" rel="noreferrer" href="https://chulps.github.io/chat-app/">
            <button className="green">Try the App</button>
          </a>
        </CTAContainer>
      </div>
      <div className="flex-center">
        <div className="half md-whole">
          <div className="iphone-frame">
            <img
              className="figma-frame"
              src={Chatroom}
              alt="T-Chat"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
