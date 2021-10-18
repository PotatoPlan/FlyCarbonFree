import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import airports from "../data/airports";
import uniqid from "uniqid";
import { Dropdown } from "semantic-ui-react";
import "./Calculator.css";

export default function Calculator() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Calculator";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialise errors and loading
  const [loading, setLoading] = useState(false);
  const [numberOfPassengerError, setNumberOfPassengerError] = useState("");

  // Initialise departure, destination, airportError, additional trips variables
  const [firstDepartureAirport, setFirstDepartureAirport] = useState("");
  const [firstDestinationAirport, setFirstDestinationAirport] = useState("");
  const [additionalTrips, setAdditionalTrips] = useState([]);
  const [airportError, setAirportError] = useState("");
  const [roundTrip, setRoundTrip] = useState(true);
  const numberOfPassengerRef = useRef();
  const history = useHistory();

  // Initialise formData, which will be sent to the backend
  let formData = {
    numberOfPassenger: "",
    firstDeparture: "",
    firstDestination: "",
    roundTrip: true,
  };

  // Initialise dataset for multiple trips, if needed
  const tripsInfo = {
    tripID: uniqid(),
    departureAirport: "",
    destinationAirport: "",
  };

  let calculatedResult;

  ////////////////////// For Additional Trips //////////////////////////
  // Add one trip
  function addOneTrip() {
    if (additionalTrips.length < 4) {
      setAdditionalTrips([...additionalTrips, tripsInfo]);
    }
  }

  // Remove one particular trip
  const removeThisTrip = (trip) => {
    const tripsDeletedTrip = additionalTrips.filter(
      (theTrip) => theTrip.tripID !== trip.tripID
    );
    setAdditionalTrips((trip) => tripsDeletedTrip);
  };

  // Handle user's additional departures
  const handleAdditionalDepartures = (data, trip) => {
    trip.departureAirport = data.value;
  };

  // Handle user's additonal destinations
  const handleAdditionalDestination = (data, trip) => {
    trip.destinationAirport = data.value;
  };
  //////////////////////////////////////////////////////////////////////

  // POST the content to the API
  async function handleSubmit(event) {
    event.preventDefault();

    setNumberOfPassengerError("");
    setAirportError("");

    // Convert user's input to a Number
    let numberOfPassengerInput = Number(numberOfPassengerRef.current.value);

    // Return an error message if it's not an integer or not greater than 0
    if (
      !Number.isInteger(numberOfPassengerInput) ||
      numberOfPassengerInput <= 0 ||
      numberOfPassengerInput > 150
    ) {
      return setNumberOfPassengerError(
        "Please enter an valid number (an integer greater than 0 but less than 150)"
      );
    }

    // Return an error message it two airports are the same one, OR the user has not selected one of airports, validate for ALL 10 trips
    if (
      firstDepartureAirport === firstDestinationAirport ||
      firstDepartureAirport === "" ||
      firstDestinationAirport === ""
    ) {
      return setAirportError(
        "Departure and destination cannot be same. All fields are required."
      );
    }

    // Now check for additional trips
    if (
      additionalTrips &&
      additionalTrips.some(
        (trip) =>
          trip["departureAirport"] === "" ||
          additionalTrips.some((trip) => trip["destination"] === "")
      )
    ) {
      return setAirportError(
        "Departure and destination cannot be same. All fields are required."
      );
    }

    // Looping over all trips, if all departures and destinations have been filled, find if there are same airport entries
    for (const oneTrip of additionalTrips) {
      if (
        (oneTrip.departureAirport !== "" ||
          oneTrip.destinationAirport !== "") &&
        oneTrip.departureAirport === oneTrip.destinationAirport
      ) {
        return setAirportError(
          "Departure and destination cannot be same. All fields are required."
        );
      }
    }

    // Adding values to the formData
    formData.numberOfPassenger = numberOfPassengerRef.current.value;
    formData.firstDeparture = firstDepartureAirport;
    formData.firstDestination = firstDestinationAirport;
    formData["additionalTrips"] = additionalTrips;
    formData.roundTrip = roundTrip;

    console.log(formData);

    try {
      setLoading(true);

      await axios
        .post(process.env.REACT_APP_CALCULATOR_API_KEY, formData)
        .then((response) => {
          // console.log(response);
          calculatedResult = response.data;
        });
      history.push("/CalculateResult", { params: calculatedResult });
    } catch {
      console.log("error");
    }

    setLoading(false);
  }

  return (
    <div className="calculator-container">
      {/* Heading */}
      <div className="calculator-heading">
        <h1>Calculate Your Carbon Footprint</h1>
        <p>Calculate your air travel carbon footprint</p>
      </div>

      <div className="carbon-calculator">
        <h2>Tell us about your trip</h2>
        {/* Calculator form */}
        <form onSubmit={handleSubmit}>
          <div className="calculator-form">
            {/* Number of passenger */}
            <div className="number-of-passenger">
              <label for="numberOfPassenger">Number of passenger*</label>
              <input
                type="text"
                name="numberOfPassenger"
                ref={numberOfPassengerRef}
                required
              />
              <p className="form-error-message">{numberOfPassengerError}</p>
            </div>

            <div className="all-trips-container">
              {/* "Add a trip" button, if there are 5 trips already, disable this */}
              <div className="trip-button-container">
                {additionalTrips.length < 4 ? (
                  <button
                    className="trip-add-button"
                    type="button"
                    onClick={addOneTrip}
                  >
                    + Add a trip
                  </button>
                ) : (
                  <button
                    className="trip-add-button"
                    type="button"
                    onClick={addOneTrip}
                    style={{ backgroundColor: "#a8a8a8" }}
                  >
                    + Add a trip
                  </button>
                )}
                <p className="form-error-message">{airportError}</p>
              </div>

              {/* Departure and Destination airports for the first trip */}
              <div className="airports">
                <div className="airport-input-container">
                  <div className="airport-input">
                    <label for="departure">
                      <strong>Trip 1</strong> Departure *
                    </label>
                    <div className="airport-dropdown">
                      <Dropdown
                        name="departure"
                        placeholder="Departure airport"
                        fluid
                        search
                        selection
                        options={airports}
                        onChange={(event, data) =>
                          setFirstDepartureAirport(data.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="airport-input">
                    <label for="destination">
                      <strong>Trip 1</strong> Destination *
                    </label>
                    <div className="airport-dropdown">
                      <Dropdown
                        name="destination"
                        placeholder="Destination airport"
                        fluid
                        search
                        selection
                        options={airports}
                        onChange={(event, data) =>
                          setFirstDestinationAirport(data.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional trips, add/delete dynamically */}
              <div className="additional-trips">
                {additionalTrips.map((trip, index) => (
                  <div className="one-additional-trip" key={trip.tripID}>
                    <div className="one-additional-trip-input-container">
                      <div className="airport-input">
                        <label for="departure">
                          <strong>Trip {index + 2}</strong> Departure *
                        </label>
                        <div className="airport-dropdown">
                          <Dropdown
                            name="departure"
                            placeholder="Departure airport"
                            fluid
                            search
                            selection
                            options={airports}
                            onChange={(event, data) =>
                              handleAdditionalDepartures(data, trip)
                            }
                          />
                        </div>
                      </div>

                      <div className="airport-input">
                        <label for="destination">
                          <strong>Trip {index + 2}</strong> Destination *
                        </label>
                        <div className="airport-dropdown">
                          <Dropdown
                            name="destination"
                            placeholder="Destination airport"
                            fluid
                            search
                            selection
                            options={airports}
                            onChange={(event, data) => {
                              handleAdditionalDestination(data, trip);
                            }}
                          />
                        </div>
                      </div>

                      <button
                        className="trip-remove-button"
                        type="button"
                        onClick={() => removeThisTrip(trip)}
                      >
                        - Remove this trip
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Round trip or one-way */}
            {/* Display this option only if there is NO additional trips */}
            {additionalTrips.length > 0 ? null : (
              <div className="round-or-one-way">
                <p>Round trip or one-way*</p>
                <input
                  type="radio"
                  id="round"
                  name="roundOrOneWay"
                  value="round"
                  defaultChecked
                  onClick={() => setRoundTrip(true)}
                />
                <label for="round">Round trip</label>
                <input
                  type="radio"
                  id="oneWay"
                  name="roundOrOneWay"
                  value="oneWay"
                  onClick={() => setRoundTrip(false)}
                />
                <label for="oneWay">One-way</label>
              </div>
            )}
          </div>

          {/* Calculate button */}
          <div className="calculate-button-container">
            <button
              className="calculate-button"
              disabled={loading}
              type="submit"
            >
              Calculate my footprint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
