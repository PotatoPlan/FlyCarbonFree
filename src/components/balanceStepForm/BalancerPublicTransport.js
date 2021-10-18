import React, { useState, useEffect } from "react";
import "./BalancerPublicTransport.css";
import publicTransportImage from "../../assets/publicTransport.jpeg";
import { Dropdown } from "semantic-ui-react";
import transport from "../../data/transport";
import publicTransport from "../../data/publicTransport";
import {
  FaBicycle,
  FaTrain,
  FaTram,
  FaBus,
  FaMotorcycle,
  FaCar,
} from "react-icons/fa";

export default function BalancerPublicTransport({
  usualTransport,
  setUsualTransport,
  offsetTransport,
  setOffsetTransport,
  textData,
  handleChange,
  navigation,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [travelDistanceError, setTravelDistanceError] = useState("");
  const [transportError, setTransportError] = useState("");
  const [transportCompareWarning, setTransportCompareWarning] = useState("");

  function checkPublicTransport() {
    // Set all error meesages back to default
    setTravelDistanceError("");
    setTransportError("");

    // Check the daily travel distance (maximum 500 kilometers)
    if (
      textData.dailyTravelDistance === "" ||
      !Number.isInteger(Number(textData.dailyTravelDistance)) ||
      Number(textData.dailyTravelDistance) <= 0 ||
      Number(textData.dailyTravelDistance) > 500
    ) {
      return setTravelDistanceError(
        "Please enter an integer greater than 0 but less than 500"
      );
    }

    // Check two transports (cannot be same, cannot be empty)
    if (usualTransport === offsetTransport) {
      return setTransportError("Please select two different transport");
    } else if (usualTransport === "" || offsetTransport === "") {
      return setTransportError("Please make a selection for both transports");
    }

    navigation.next();
  }

  // Help users to check if it's choice of transport will reduce the carbon footprint
  function compareTransport() {
    setTransportCompareWarning("");

    if (
      (usualTransport === "bicycle" && offsetTransport === "train") ||
      (usualTransport === "bicycle" && offsetTransport === "tram") ||
      (usualTransport === "bicycle" && offsetTransport === "bus") ||
      (usualTransport === "train" && offsetTransport === "tram") ||
      (usualTransport === "train" && offsetTransport === "bus") ||
      (usualTransport === "tram" && offsetTransport === "bus")
    ) {
      setTransportCompareWarning(
        "This transport won't offset your carbon footprint"
      );
    } else if (usualTransport === "" || offsetTransport === "") {
      setTransportCompareWarning("");
    } else if (usualTransport === offsetTransport) {
      setTransportCompareWarning("Please select two different transport");
    } else {
      setTransportCompareWarning("Nice choice!");
    }
  }

  return (
    <div className="balancer-container">
      <div className="balancer-heading">
        <h1>Carbon Footprint Balancer</h1>
        <p>Offset your CO2 emissions</p>
      </div>

      <div className="public-transport-container">
        <h2>Step 1: Public Transport</h2>
        <img src={publicTransportImage} alt="Public Transport" />

        <div className="daily-travel-distance">
          <label for="daily-travel-distance">
            Daily Travel Distance (kilometer)*
          </label>
          <input
            type="text"
            name="dailyTravelDistance"
            onChange={handleChange("dailyTravelDistance")}
            value={textData.dailyTravelDistance}
            required
          />
          <p className="form-error-message">{travelDistanceError}</p>
        </div>

        <div className="daily-transport-input">
          <label for="usualTransport">
            Usual transport of your daily travel *
          </label>
          <div className="daily-transport-dropdown">
            <Dropdown
              name="usualTransport"
              placeholder="Select a transport"
              fluid
              search
              selection
              options={transport}
              onChange={(event, data) => setUsualTransport(data.value)}
              defaultValue={usualTransport}
            />
          </div>
        </div>

        <div className="daily-transport-input">
          <label for="departure">
            Transport you would like to take to reduce CO2 *
          </label>
          <div className="daily-transport-dropdown">
            <Dropdown
              name="offsetTransport"
              placeholder="Select a transport"
              fluid
              search
              selection
              options={publicTransport}
              onChange={(event, data) => setOffsetTransport(data.value)}
              defaultValue={offsetTransport}
            />
          </div>
          <p className="form-error-message">{transportError}</p>
        </div>

        <div className="balancer-check-container">
          <button
            className="balancer-check-button"
            onClick={() => compareTransport()}
          >
            Check
          </button>

          {transportCompareWarning === "Nice choice!" ? (
            <h1 className="compare-warning-message">
              {transportCompareWarning}
            </h1>
          ) : (
            <h1
              style={{ color: "#c73333" }}
              className="compare-warning-message"
            >
              {transportCompareWarning}
            </h1>
          )}
        </div>

        <div className="emissions-compare-container">
          <p>CO2 emissions by transport type: </p>
          <div className="emissions-compare">
            <div className="emissions-compare-transport-type">
              <FaBicycle />
              <p>Bicycle</p>
            </div>

            <div>&lt;</div>

            <div className="emissions-compare-transport-type">
              <FaTrain />
              <p>Train</p>
            </div>

            <div>&lt;</div>

            <div className="emissions-compare-transport-type">
              <FaTram />
              <p>Tram</p>
            </div>

            <div>&lt;</div>

            <div className="emissions-compare-transport-type">
              <FaBus />
              <p>Bus</p>
            </div>

            <div>&lt;</div>

            <div className="emissions-compare-transport-type">
              <FaMotorcycle />
              <p>Motorcycle</p>
            </div>

            <div>&lt;</div>

            <div className="emissions-compare-transport-type">
              <FaCar />
              <p>Car</p>
            </div>
          </div>
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
            onClick={() => checkPublicTransport()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
