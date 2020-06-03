import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import "./Story.css";
import originalBechdel from "./images/original-bechdel.png";
import behindCamera from "./images/behind-the-camera.png";

const Story = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <>
      <h1>Practice with Scrollama</h1>
      <h2>A walkthrough of FiveThirtyEight's "The New Bechdel Test"</h2>

      <div className="step-counter">Step # {currentStepIndex}</div>

      <div className="section">
        <div className="scroller">
          <Scrollama onStepEnter={onStepEnter}>
            <Step data={1} key={1}>
              <div className="step-container">
                In 2016, FiveThirtyEight wrote an{" "}
                <a
                  href="https://projects.fivethirtyeight.com/next-bechdel/"
                  target="_"
                >
                  essay
                </a>{" "}
                about the Bechdel Test, which asks two simple questions of a
                movie:
                <ol>
                  <li>Does it have at least 2 named female characters?</li>
                  <li>
                    And do those characters have at least one conversation that
                    is not about a man?
                  </li>
                </ol>
              </div>
            </Step>
            <Step data={2} key={2}>
              <div className="step-container">
                They took the top 50 movies of 2016 evaluated them using the
                Bechdel Test.
              </div>
            </Step>
          </Scrollama>
        </div>

        <div className="half-graphic">
          <img src={originalBechdel} className="image" />
        </div>
      </div>

      <div className="section column">
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={3} key={3}>
            <div className="step-container skinny">
              But my favorite part about this article is that they then asked:{" "}
              <strong>What does the next Bechdel Test look like?</strong> They
              created a bunch of new tests based on different criteria having to
              do with gender equity.
            </div>
          </Step>
        </Scrollama>

        <div className="full-graphic">
          <img src={behindCamera} className="image" />
        </div>

        <Scrollama onStepEnter={onStepEnter}>
          <Step data={4} key={4}>
            <div className="step-container skinny">
              They evaluated the same top 50 movies of 2016, which did decently
              on some tests, and super horribly on others (like this one).
            </div>
          </Step>
          <Step data={5} key={5}>
            <div className="step-container skinny">
              The tests are broken into categories. This one falls under "Tests
              that look behind the camera."
            </div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
};

export default Story;
