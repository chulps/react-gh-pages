import { useCallback } from "react";

import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

var surveyJson = {
  title: "How am I doing?",
  description: "www.chuck-howard.com feedback survey",
  logoPosition: "right",
  pages: [
    {
      name: "Site Feedback",

      
      description:
        "Your feedback is anonymous and I can't get mad at you for anything you say. This short survey will help me make a better portfolio site and hopefully help me get hired faster.",
      elements: [
        {
          type: "radiogroup",
          name: "Who is here?",
          title: "I am a...",
          isRequired: true,
          choices: [
            { value: "item1", text: "Recruiter" },
            { value: "item2", text: "Hiring Manager" },
            { value: "item3", text: "Client" },
          ],
          showOtherItem: true,
        },
        {
          type: "radiogroup",
          name: "question1",
          title: "Did you come here because of a job I applied for?",
          choices: [{ value: "item1N", text: "No" }],
          showOtherItem: true,
          otherText: "Yes (Please include a link to the job posting)",
        },
        {
          type: "comment",
          name: "question2",
          title: "What should I improve about my site?",
        },
      ],
    },
  ],
  // mode: "display",
  widthMode: "responsive",
};

function Feedback() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default Feedback;
