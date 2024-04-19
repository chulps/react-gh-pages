import React, { useState } from "react";
import axios from "axios";
import Logo from "../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./prompt-assistant2.css";

const PromptAssistant2 = (props) => {
  const [description, setDescription] = useState("");
  const [productUse, setProductUse] = useState("");
  const [scene, setScene] = useState("");
  const [sceneElements, setSceneElements] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const questions = {
    description: "Briefly describe your product.",
    productUse: "What is the primary use of your product?",
    scene: "Describe a scene where your product might be used.",
    sceneElements: "What are some elements in the scene?",
    additionalNotes: "Any additional notes?",
  };

  const examples = {
    description: "Example: A white ceramic coffee mug",
    productUse: "Example: It's mainly used for coffee",
    scene: "Example: A coffee shop",
    sceneElements: "Example: A table, a coffee mug, and a cup",
    additionalNotes: "Example: Morning time blurry people in the background",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://limitless-lake-38337.herokuapp.com/api/openai",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are a custom gpt that's been trained to help users create prompts for an image generator aimed at helping marketers create product images for e-commerce websites. You are a feature of a software aimed at creating product images for items sold via e-commerce. Users upload images of their products. The software then uses another AI to remove the background of the uploaded image. Then the user has to create a prompt instructing the background generator of what kind of scene to create for the final product image. The problem is that a lot of people are not good at writing prompts, so instead, the GPT must prompt the user. For this specific use case, where the goal is to assist users in creating detailed and effective prompts for background generation in product images, we are using a simple Prompt Engineering framework combined with One Shot Learning.",
            },
            {
              role: "assistant",
              content:
                "Welcome to the background generator! Once you've uploaded an image, please answer the following questions.",
            },
            { role: "assistant", content: questions.description },
            { role: "user", content: description },
            { role: "assistant", content: questions.productUse },
            { role: "user", content: productUse },
            { role: "assistant", content: questions.scene },
            { role: "user", content: scene },
            { role: "assistant", content: questions.sceneElements },
            { role: "user", content: sceneElements },
            { role: "assistant", content: questions.additionalNotes },
            { role: "user", content: additionalNotes },
            {
              role: "system",
              content:
                "Once you have answers to these questions, you will generate a prompt. Only provide the text from the generated prompt. Don't include any other text.",
            },
          ],
          temperature: 0.7,
          max_tokens: 300,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }
      );
      setResponse(response.data.choices[0].message.content);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error calling backend:", error.message);
      setResponse("Failed to generate prompt, please try again.");
    }
    setIsLoading(false);
  };

  const handleRefineInput = () => {
    setFormSubmitted(false);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(response).then(
      () => {
        alert("Prompt copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const handleResubmit = () => {
    handleSubmit(); // Re-fetch the prompt with the same inputs
  };

  return (
    <div id="prompt-assistant2" className={props.className}>
      <div id="prompt-assistant2-header" className="flex-space-between">
        <div className="flex">
          <img src={Logo} alt="logo" style={{ height: "var(--unit3)" }} />
          <div
            className="mt0"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h5>Prompt Assistant 2</h5>
            <small>For ImagineCreate (By Chuck)</small>
          </div>
        </div>
        <button
          className="close-button small btn3 text-danger"
          onClick={props.onClose}
          aria-label="Close chatbot"
        >
          <FontAwesomeIcon icon={solid("times")} />
        </button>
      </div>
      <div className="history-container">
        {formSubmitted ? (
          <div
            id="generated-prompt-container"
            className="response-container mt2"
          >
            <div className="px2">
              <h4>Generated Prompt:</h4>
              <br />
              <p>{response}</p>
            </div>
            <div
              className="flex-space-between pt1"
              style={{ borderTop: "1px solid var(--transBlueC-25)" }}
            >
              <div className="two-columns gap1">
                <button onClick={handleRefineInput} className="btn3">
                  Refine Input
                </button>
                <button onClick={handleResubmit} className="btn3">
                  Resubmit
                </button>
              </div>

              <button onClick={handleCopyPrompt}>Copy Prompt</button>
            </div>
          </div>
        ) : (
          <div className="prompting-form">
            <h4 className="mt2">Let's make a prompt!</h4>
            <p>
              Welcome to the background generator! Please answer these questions
              to generate a prompt.
            </p>
            <form
              className="assistant-form flex-column mt2"
              style={{ gap: "var(--unit2)" }}
              onSubmit={handleSubmit}
            >
              {Object.entries(questions).map(([key, question]) => (
                <div key={key}>
                  <p htmlFor={key}>{question}</p>
                  <input
                    id={key}
                    value={eval(key)}
                    onChange={(e) =>
                      eval(
                        `set${
                          key.charAt(0).toUpperCase() + key.slice(1)
                        }(e.target.value)`
                      )
                    }
                    placeholder={examples[key]}
                  />
                </div>
              ))}
              <div className="pt1 flex-end" style={{ borderTop: "1px solid var(--transBlueC-25)" }}>
                  <button type="submit">
                    {isLoading ? "Loading..." : "Generate Prompt"}
                  </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptAssistant2;
