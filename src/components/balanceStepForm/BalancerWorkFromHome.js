import React, { useState, useEffect } from "react";
import "./BalancerWorkFromHome.css";
import workfromhome from "../../assets/workfromhome.jpeg";

export default function BalancerWorkFromHome({
  textData,
  handleChange,
  navigation,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [wfhDaysError, setWFHDaysError] = useState("");
  const [distanceWorkplaceError, setDistanceWorkplaceError] = useState("");

  function checkWorkFromHome() {
    // Set errors to default
    setWFHDaysError("");
    setDistanceWorkplaceError("");

    // Check number of WFH days, maximum 31
    if (
      textData.numberOfWFHDays === "" ||
      !Number.isInteger(Number(textData.numberOfWFHDays))
    ) {
      return setWFHDaysError("Please enter a valid integer");
    } else if (Number(textData.numberOfWFHDays) > 31) {
      return setWFHDaysError("Please enter a number less than 32");
    }

    // Check distance to workplace, maximum 500
    if (
      textData.distanceWorkplace === "" ||
      !Number.isInteger(Number(textData.distanceWorkplace))
    ) {
      return setDistanceWorkplaceError("Please enter a valid integer");
    } else if (
      Number(textData.distanceWorkplace) <= 0 ||
      Number(textData.distanceWorkplace) > 500
    ) {
      return setDistanceWorkplaceError(
        "Please enter an integer greater than 0 but less than 500"
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

      <div className="work-from-home-container">
        <h2>Step 2: Work From Home</h2>
        <img src={workfromhome} alt="Work From Home" />

        <div className="number-of-wfh-days">
          <label for="number-of-wfh-days">Number of WFH days per month *</label>
          <input
            type="text"
            name="numberOfWFHDays"
            onChange={handleChange("numberOfWFHDays")}
            value={textData.numberOfWFHDays}
            required
          />
          <p className="form-error-message">{wfhDaysError}</p>
        </div>

        <div className="distance-workplace">
          <label for="distance-workplace">
            Distance to your workplace (kilometer) *
          </label>
          <input
            type="text"
            name="distanceWorkplace"
            onChange={handleChange("distanceWorkplace")}
            value={textData.distanceWorkplace}
            required
          />
          <p className="form-error-message">{distanceWorkplaceError}</p>
        </div>

        <div className="balancer-button-container">
          <button
            className="balancer-button-previous"
            onClick={() => navigation.previous()}
          >
            Previous
          </button>

          <button
            className="balancer-button"
            onClick={() => checkWorkFromHome()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
