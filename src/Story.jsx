import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import "./Story.css";
import originalBechdel from "./images/original-bechdel.png";

const Story = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <>
      <h1>Practice with Scrollama</h1>
      <h2>A walkthrough of FiveThirtyEight's "The New Bechdel Test"</h2>

      <div style={{ display: "flex" }}>
        <div className="scroller">
          <Scrollama onStepEnter={onStepEnter}>
            <Step>
              <div className="stepContainer">
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
            <Step>
              <div>
                <div className="stepContainer">
                  They took the top 50 movies of 2016 evaluated them using the
                  Bechdel Test.
                </div>
              </div>
            </Step>
          </Scrollama>
        </div>

        <div className="graphic">
          <img src={originalBechdel} className="image" />
        </div>
      </div>
    </>
  );
};

export default Story;
