import React, { useEffect } from "react";
import "./BalancerReview.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function BalancerReview({
  usualTransport,
  offsetTransport,
  numberOfPlantingTrees,
  numberTurnedOffLights,
  numberTurnedOffHours,
  textData,
  userCarbonFootprint,
  navigation,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  let balancerResult;

  async function handleSubmit(event) {
    event.preventDefault();

    let userCF;

    if (userCarbonFootprint === "N/A") {
      userCF = textData.userInputCarbonFootprint;
    } else {
      userCF = userCarbonFootprint;
    }

    let submitForm = {
      submitUserCarbonFootprint: userCF,
      submitDailyTravelDistance: textData.dailyTravelDistance,
      submitUsualTransport: usualTransport,
      submitOffsetTransport: offsetTransport,
      submitNumberOfWFHDays: textData.numberOfWFHDays,
      submitDistanceWorkplace: textData.distanceWorkplace,
      submitNumberOfPlantingTrees: numberOfPlantingTrees,
      submitNumberOfTurnedOffLights: numberTurnedOffLights,
      submitNumberOfTurnedOffHours: numberTurnedOffHours,
      submitNumberOfCO2Offsetted: textData.numberOfCO2Offsetted,
    };

    console.log(submitForm);

    // Call the balance API and assign result data to a variable called balancerResult, and then pass it to /BalancerResult page
    try {
      await axios
        .post(process.env.REACT_APP_BALANCER_API_KEY, submitForm)
        .then((response) => {
          console.log(response);
          balancerResult = response.data;
        });
      history.push("/BalancerResult", { params: balancerResult });
    } catch {
      console.log("error");
    }
  }

  return (
    <div className="balancer-container">
      <div className="balancer-heading">
        <h1>Carbon Footprint Balancer</h1>
        <p>Offset your CO2 emissions</p>
      </div>

      <div className="review-container">
        <h2>Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="balancer-summary">
            {userCarbonFootprint !== "N/A" ? (
              <p>
                <strong>Your carbon footprint:</strong> {userCarbonFootprint} KG
              </p>
            ) : (
              <p>
                <strong>Your carbon footprint:</strong>{" "}
                {textData.userInputCarbonFootprint} KG
              </p>
            )}

            <p>
              <strong>Daily travel distance:</strong>{" "}
              {textData.dailyTravelDistance} KM
            </p>

            <p>
              <strong>Usual transport of your daily travel:</strong>{" "}
              {usualTransport}
            </p>

            <p>
              <strong>Transport you would like to take to reduce CO2:</strong>{" "}
              {offsetTransport}
            </p>

            <p>
              <strong>Number of WFH days per month:</strong>{" "}
              {textData.numberOfWFHDays} days
            </p>

            <p>
              <strong>Distance to your workplace:</strong>{" "}
              {textData.distanceWorkplace} KM
            </p>

            {numberOfPlantingTrees === "" ? (
              <p>
                <strong>Number of trees planted or planning to plant:</strong>{" "}
                N/A
              </p>
            ) : (
              <p>
                <strong>Number of trees planted or planning to plant:</strong>{" "}
                {numberOfPlantingTrees} trees
              </p>
            )}

            {numberTurnedOffLights === "" ? (
              <p>
                <strong>Number of turned off lights per month:</strong> N/A
              </p>
            ) : (
              <p>
                <strong>Number of turned off lights per month:</strong>{" "}
                {numberTurnedOffLights} lights
              </p>
            )}

            {numberTurnedOffHours === "" ? (
              <p>
                <strong>Number of turned off Hours per month:</strong> N/A
              </p>
            ) : (
              <p>
                <strong>Number of turned off Hours per month:</strong>{" "}
                {numberTurnedOffHours} hours
              </p>
            )}

            {textData.numberOfCO2Offsetted === "" ? (
              <p>
                <strong>Offsetted CO2 by purchasing offset programs:</strong>{" "}
                N/A
              </p>
            ) : (
              <p>
                <strong>Offsetted CO2 by purchasing offset programs:</strong>{" "}
                {textData.numberOfCO2Offsetted} KG
              </p>
            )}
          </div>

          <div className="balancer-button-container">
            <button
              className="balancer-button-previous"
              onClick={() => navigation.previous()}
            >
              Previous
            </button>

            <button type="submit" className="balancer-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
