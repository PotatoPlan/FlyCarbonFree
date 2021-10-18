import React, { useState, useEffect } from "react";
import { useStep } from "react-hooks-helper";
import BalancerPublicTransport from "./balanceStepForm/BalancerPublicTransport";
import BalancerWorkFromHome from "./balanceStepForm/BalancerWorkFromHome";
import BalancerOthers from "./balanceStepForm/BalancerOthers";
import BalancerReview from "./balanceStepForm/BalancerReview";
import BalancerStart from "./balanceStepForm/BalancerStart";
import { useLocation } from "react-router-dom";

export default function Balancer() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Balancer";
  });

  const location = useLocation();
  let userCarbonFootprint;

  if (location.state !== null) {
    userCarbonFootprint = location.state.params;
  } else {
    userCarbonFootprint = "N/A";
  }

  const steps = [
    { id: "start" },
    { id: "publicTransport" },
    { id: "workFromHome" },
    { id: "others" },
    { id: "review" },
  ];

  const [textData, setTextData] = useState({
    userInputCarbonFootprint: "",
    dailyTravelDistance: "",
    numberOfWFHDays: "",
    distanceWorkplace: "",
    numberOfCO2Offsetted: "",
  });

  const handleChange = (name) => (event) => {
    setTextData({ ...textData, [name]: event.target.value });
  };

  const [usualTransport, setUsualTransport] = useState("");
  const [offsetTransport, setOffsetTransport] = useState("");
  const [numberOfPlantingTrees, setNumberOfPlantingTrees] = useState("");
  const [numberTurnedOffLights, setNumberOfTurnedOffLights] = useState("");
  const [numberTurnedOffHours, setNumberOfTurnedOffHours] = useState("");

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = {
    usualTransport,
    setUsualTransport,
    offsetTransport,
    setOffsetTransport,
    numberOfPlantingTrees,
    setNumberOfPlantingTrees,
    numberTurnedOffLights,
    setNumberOfTurnedOffLights,
    numberTurnedOffHours,
    setNumberOfTurnedOffHours,
    textData,
    userCarbonFootprint,
    handleChange,
    navigation,
  };

  switch (step.id) {
    case "publicTransport":
      return <BalancerPublicTransport {...props} />;
    case "workFromHome":
      return <BalancerWorkFromHome {...props} />;
    case "others":
      return <BalancerOthers {...props} />;
    case "review":
      return <BalancerReview {...props} />;
    default:
      return <BalancerStart {...props} />;
  }
}
