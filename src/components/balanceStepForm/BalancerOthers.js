import React, { useState, useEffect } from "react";
import balancerothers from "../../assets/balancerothers.jpeg";
import { Dropdown } from "semantic-ui-react";
import theNumbers from "../../data/theNumbers";
import "./BalancerOthers.css";

export default function BalancerPlantTrees({
  numberOfPlantingTrees,
  setNumberOfPlantingTrees,
  numberTurnedOffLights,
  setNumberOfTurnedOffLights,
  numberTurnedOffHours,
  setNumberOfTurnedOffHours,
  textData,
  handleChange,
  navigation,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightsError, setLightsError] = useState("");
  const [offsetProgramError, setOffsetProgramError] = useState("");

  function checkOthers() {
    setLightsError("");
    setOffsetProgramError("");

    // Check turned off lights. It's optional, but both fields are required if users choose to have it
    if (numberTurnedOffLights !== "" && numberTurnedOffHours === "") {
      return setLightsError("Please select a number for turned off hours");
    } else if (numberTurnedOffHours !== "" && numberTurnedOffLights === "") {
      return setLightsError("Please select a number for turned off lights");
    }

    // Check purchased offset program. It's optional, but check the number integrity if users choose to have it
    if (
      textData.numberOfCO2Offsetted !== "" &&
      !Number.isInteger(Number(textData.numberOfCO2Offsetted))
    ) {
      return setOffsetProgramError("Please enter an integer");
    } else if (
      textData.numberOfCO2Offsetted !== "" &&
      (Number(textData.numberOfCO2Offsetted) <= 0 ||
        Number(textData.numberOfCO2Offsetted) > 10000)
    ) {
      return setOffsetProgramError("Please enter a valid integer");
    }
    navigation.next();
  }

  return (
    <div className="balancer-container">
      <div className="balancer-heading">
        <h1>Carbon Footprint Balancer</h1>
        <p>Offset your CO2 emissions</p>
      </div>

      <div className="others-container">
        <h2>Step 3: Other things you can do</h2>
        <img src={balancerothers} alt="Others" />

        <div className="others-input">
          <h3 style={{ marginBottom: "5px" }}>Plant Trees (optional)</h3>
          <label for="numberOfTrees">Number of trees</label>
          <div className="others-dropdown">
            <Dropdown
              name="numberOfTrees"
              placeholder="Select a number"
              fluid
              search
              selection
              options={theNumbers}
              onChange={(event, data) => setNumberOfPlantingTrees(data.value)}
              defaultValue={numberOfPlantingTrees}
            />
          </div>
        </div>

        <div className="turn-off-lights">
          <div className="others-input">
            <h3 style={{ marginBottom: "5px" }}>Turn Off Lights (optional)</h3>
            <label for="numberOfLights">
              Number of turned off lights per month
            </label>
            <div className="others-dropdown">
              <Dropdown
                name="numberOfLights"
                placeholder="Select a number"
                fluid
                search
                selection
                options={theNumbers}
                onChange={(event, data) =>
                  setNumberOfTurnedOffLights(data.value)
                }
                defaultValue={numberTurnedOffLights}
              />
            </div>
          </div>

          <div className="others-input">
            <label for="numberOfHours">
              Number of turned off hours per month
            </label>
            <div className="others-dropdown">
              <Dropdown
                name="numberOfHours"
                placeholder="Select a number"
                fluid
                search
                selection
                options={theNumbers}
                onChange={(event, data) =>
                  setNumberOfTurnedOffHours(data.value)
                }
                defaultValue={numberTurnedOffHours}
              />
            </div>
            <p className="form-error-message">{lightsError}</p>
          </div>
        </div>

        <div className="purchase-offset-program">
          <h3 style={{ marginBottom: "5px" }}>
            Purchase offset program (optional)
          </h3>
          <label for="purchase-offset-program">Number of CO2 offsetted</label>
          <input
            type="text"
            name="numberOfCO2Offsetted"
            onChange={handleChange("numberOfCO2Offsetted")}
            value={textData.numberOfCO2Offsetted}
          />
          <p className="form-error-message">{offsetProgramError}</p>
        </div>

        <div className="balancer-button-container">
          <button
            className="balancer-button-previous"
            onClick={() => navigation.previous()}
          >
            Previous
          </button>

          <button className="balancer-button" onClick={() => checkOthers()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
