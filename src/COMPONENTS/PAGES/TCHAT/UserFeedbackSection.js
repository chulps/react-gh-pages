import React from 'react'
import styled from "styled-components";

import UserPersonasSection from './UserPersonasSection'

// Styled Components
const CircleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: var(--unit1);
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.filled ? "var(--goldA)" : "#e0e0e0")};
`;

const SurveyItem = styled.div`
  display: flex;
  gap: var(--unit2);
  align-items: flex-start;
`;

const survey1Questions = [
    {
      question:
        "Have you ever used a translator app to talk to someone who speaks a different language?",
      yes: 16,
      total: 16,
    },
    {
      question:
        "Have you ever used a chat app to chat with someone who speaks a different language?",
      yes: 16,
      total: 16,
    },
    {
      question:
        "When using a translator app, is it an uncomfortable experience to have to share a device with someone while talking to them?",
      yes: 12,
      total: 16,
    },
    {
      question:
        "When using a chat app with someone who speaks a different language, would it be better to recieve messages that are instantly translated?",
      yes: 15,
      total: 16,
    },
    {
      question:
        "When meeting a stranger, would it be inconvenient to download or sign up for an app before having a conversation with them?",
      yes: 13,
      total: 16,
    },
    {
      question:
        "When using a chat app to talk to someone speaking a different language, is it annoying to have to switch apps in order to translate messages?",
      yes: 16,
      total: 16,
    },
  ];
const UserFeedbackSection = () => {
  return (
    <section className="mt4">
    <div>
      <h3>Initial survey</h3>
      <p className="mb2">
        I ventured out into the wild with an early prototype of the app and
        interviewed 16 people in Sapporo, Japan with different backgrounds,
        languages, and opinions. Their ages ranged from 23 - 65. About half
        of the users spoke only Japanese. Other users were a mix of people
        who spoke only English, or spoke 2 or more languages. It was
        important to make sure that all users had used translators or chat
        apps before to speak to someone where translation is required.
      </p>
    </div>
    <div className="survey-chart md-two-columns lg-three-columns gap3">
      {survey1Questions.map((question, index) => (
        <SurveyItem key={index}>
          <div>
            <CircleGrid>
              {Array.from({ length: question.total }).map((_, i) => (
                <Circle key={i} filled={i < question.yes} />
              ))}
            </CircleGrid>
          </div>
          <div>
            <b>
              <data>
                {question.yes}/{question.total}
              </data>
            </b>
            <br />
            <small>"{question.question}"</small>
          </div>
        </SurveyItem>
      ))}
    </div>

    <UserPersonasSection />
  </section>
  )
}

export default UserFeedbackSection
