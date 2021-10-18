import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { GiTreeBranch } from "react-icons/gi";
import {
  AiFillCheckCircle,
  AiFillWarning,
  AiFillExclamationCircle,
} from "react-icons/ai";
import "./CalculateResult.css";

export default function CalculateResult() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Result";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialise result, hours, severity variables
  const [theResult, setTheResult] = useState("");
  const [hoursToSequestrate, setHoursToSequestrate] = useState("");
  const [severity, setSeverity] = useState("");
  const history = useHistory();

  const location = useLocation();
  let calculatedResult;
  let predictedHoursToSequestrate;
  let predictedSeverity;

  // Assign these variables if they are not undefined
  if (location.state !== undefined) {
    calculatedResult = location.state.params.result;
    predictedHoursToSequestrate = location.state.params.hours;
    predictedSeverity = location.state.params.degree;
  } else {
    calculatedResult = "No Result";
  }

  useEffect(() => {
    setTheResult(calculatedResult);
    setHoursToSequestrate(predictedHoursToSequestrate);
    setSeverity(predictedSeverity);
  }, []);

  // If users choose to go with Balancer, this function is triggered once they hit the button
  // This will bring the user to Balancer along with their carbon footprint number as a parameter
  function callBalancer() {
    history.push("/Balancer", { params: calculatedResult });
  }

  return (
    <div className="calculate-result-container">
      {/* Heading */}
      <div className="calculate-result-heading">
        <h1>Calculate Your Carbon Footprint</h1>
        <p>
          Use the calculator below to calculate your air travel emissions and
          carbon footprint
        </p>
      </div>

      <div className="result-container">
        <div className="result-number">
          <h2>Your carbon footprint is</h2>
          <h1>{theResult}</h1>
          <p>kg of Carbon Dioxide</p>
        </div>

        <div className="result-compare">
          <h2>This means...</h2>
          <div className="result-meaning-container">
            {/* Tree sequestration hours and info */}
            <div className="tree-sequestration">
              <p>All trees in the City of Melbourne need around</p>
              <div className="tree-sequestration-hours">
                <GiTreeBranch className="tree-icon" />
                <h3>{hoursToSequestrate} hours</h3>
              </div>
              <p>to consume the amount of CO2 emitted</p>
              <h6 className="tree-sequestration-explain">
                *One tree sequestrates roughly 11 kg CO2 in one year, and there
                are approximately 70,000 trees in the City of Melbourne. <br />
                To learn more use{" "}
                <a href="http://melbourneurbanforestvisual.com.au">
                  Melbourne Urban Forest Visual.
                </a>
              </h6>
            </div>

            {/* Severity indicator */}
            <div className="sequestration-severity">
              <div className="severity-indicator">
                {severity === "high" ? (
                  <AiFillExclamationCircle
                    className="severity-icon"
                    style={{ color: "#ff0f0f" }}
                  />
                ) : (
                  <AiFillExclamationCircle className="severity-icon" />
                )}
                <p>High Carbon Emissions</p>
              </div>

              <div className="severity-indicator">
                {severity === "medium" ? (
                  <AiFillWarning
                    className="severity-icon"
                    style={{ color: "#fff04d" }}
                  />
                ) : (
                  <AiFillWarning className="severity-icon" />
                )}
                <p>Medium Carbon Emissions</p>
              </div>

              <div className="severity-indicator">
                {severity === "low" ? (
                  <AiFillCheckCircle
                    className="severity-icon"
                    style={{ color: "#66cd00" }}
                  />
                ) : (
                  <AiFillCheckCircle className="severity-icon" />
                )}
                <p>Low Carbon Emissions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="balancer-message">
          <h3>Feeling need to do something for your carbon footprint?</h3>
          <p>Offset that number with our Balancer</p>
        </div>

        <div className="result-button-container">
          <NavLink to="/Calculator">
            <button className="result-back">Back</button>
          </NavLink>

          <button onClick={callBalancer} className="balancer-caller">
            Balance out
          </button>
        </div>
      </div>
    </div>
  );
}
