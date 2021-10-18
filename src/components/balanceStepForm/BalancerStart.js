import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./BalancerStart.css";

export default function BalancerStart({
  userCarbonFootprint,
  handleChange,
  textData,
  navigation,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [userInputCarbonFootprintError, setUserInputCarbonFootprintError] =
    useState("");

  function checkStart() {
    if (
      textData.userInputCarbonFootprint === "" ||
      !Number.isInteger(Number(textData.userInputCarbonFootprint)) ||
      Number(textData.userInputCarbonFootprint) <= 0 ||
      Number(textData.userInputCarbonFootprint) > 1000000
    ) {
      return setUserInputCarbonFootprintError(
        "Please enter an integer greater than 0 but less than 1,000,000"
      );
    }

    navigation.next();
  }

  return (
    <div className="balancer-container">
      <div className="balancer-heading">
        <h1>Carbon Footprint Balancer</h1>
        <p>Offset your CO2 emissions</p>
      </div>

      <div className="start-container">
        <h2>Get started</h2>
        {/* If user's carbon footprint is none (N/A), show this form page */}
        {userCarbonFootprint === "N/A" ? (
          <div className="get-started">
            <div className="user-input-carbon-footprint">
              <label for="user-input-carbon-footprint">
                How much is your carbon footprint from previous flights?
                (kilogram) *
              </label>
              <input
                type="text"
                name="userInputCarbonFootprint"
                onChange={handleChange("userInputCarbonFootprint")}
                value={textData.userInputCarbonFootprint}
                required
              />
              <p style={{ textAlign: "center" }} className="form-error-message">
                {userInputCarbonFootprintError}
              </p>
            </div>

            <h3>Don't know? That's OK.</h3>

            <div style={{ margin: "0 auto" }}>
              <NavLink to="/Calculator">
                <button className="go-to-calculator">
                  Calculate your carbon footprint
                </button>
              </NavLink>
            </div>

            <div
              style={{ margin: "0 auto", fontSize: "12px", marginTop: "20px" }}
            >
              <p>Your carbon footprint can be offsetted by</p>
              <li>Use public transport</li>
              <li>Work from home</li>
              <li>Plant trees</li>
              <li>Turn off lights</li>
              <li>Purchase offset programs</li>
            </div>

            <div className="balancer-button-container">
              <button className="balancer-button" onClick={() => checkStart()}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="display-carbon-footprint">
              <h3>Your carbon footprint from previous flights is:</h3>
              <h1>{userCarbonFootprint} kg</h1>

              <div>
                <p>Your carbon footprint can be offsetted by</p>
                <li>Use public transport</li>
                <li>Work from home</li>
                <li>Plant trees</li>
                <li>Turn off lights</li>
                <li>Purchase offset programs</li>
              </div>
            </div>

            <div className="balancer-button-container">
              <button
                className="balancer-button"
                onClick={() => navigation.next()}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
