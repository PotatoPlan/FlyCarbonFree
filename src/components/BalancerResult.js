import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  GiCommercialAirplane,
  GiDutchBike,
  GiHomeGarage,
  GiPineTree,
} from "react-icons/gi";
import { GoLightBulb, GoLinkExternal } from "react-icons/go";
import { SiQantas } from "react-icons/si";
import "./BalancerResult.css";

export default function BalancerResult() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Balancer Result";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [balancedCF, setBalancedCF] = useState("");
  const [remainedCF, setRemainedCF] = useState("");
  const [totalCF, setTotalCF] = useState("");

  const location = useLocation();
  console.log(location);

  let theBalancedCF;
  let theRemainedCF;
  let theTotalCF;

  if (location.state !== undefined) {
    theBalancedCF = location.state.params.offset;
    theRemainedCF = location.state.params.remainingFootprint;
    theTotalCF = location.state.params.totalFootprint;
  } else {
    theBalancedCF = "N/A";
    theRemainedCF = "N/A";
    theTotalCF = "N/A";
  }

  useEffect(() => {
    setBalancedCF(theBalancedCF);
    setRemainedCF(theRemainedCF);
    setTotalCF(theTotalCF);
  }, []);

  return (
    <div className="balancer-container">
      <div className="balancer-heading">
        <h1>Carbon Footprint Balancer</h1>
        <p>Offset your CO2 emissions</p>
      </div>

      <div className="balancer-result-container">
        <h2>How much can you offset?</h2>

        {/* When there are still remaining carbon footprint to be offsetted */}
        {Number(remainedCF) > Number(balancedCF) && Number(balancedCF) > 0 ? (
          <div>
            <h3 style={{ marginBottom: "20px", fontWeight: "300" }}>
              Not bad, you've balanced some part of carbon footprint
            </h3>
            <div className="balancer-result-number-container">
              <div className="balancer-result-number">
                <h3>Total carbon footprint (kg)</h3>
                <h1>{Number(totalCF).toFixed(1)}</h1>
              </div>

              <div className="balancer-result-number">
                <h3>You have balanced off (kg)</h3>
                <h1>{Number(theBalancedCF).toFixed(1)}</h1>
              </div>

              <div className="balancer-result-number">
                <h3>Remaining carbon footprint (kg)</h3>
                <h1>{Number(theRemainedCF).toFixed(1)}</h1>
              </div>
            </div>

            <div>
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                {((Number(theRemainedCF) / Number(totalCF)) * 100).toFixed(1)}%
                of your total carbon footprint still needs to be offset
              </p>

              <div style={{ marginTop: "20px" }}>
                <h1 style={{ fontWeight: "300", fontSize: "50px" }}>
                  You can try to
                </h1>

                <div className="balancer-suggestion">
                  <div className="single-suggestion">
                    <GiCommercialAirplane />
                    <p>Fly less</p>
                  </div>

                  <div className="single-suggestion">
                    <GiDutchBike />
                    <p>Take more public transport</p>
                  </div>

                  <div className="single-suggestion">
                    <GiHomeGarage />
                    <p>Work from home</p>
                  </div>

                  <div className="single-suggestion">
                    <GiPineTree />
                    <p>Plant more trees</p>
                  </div>

                  <div className="single-suggestion">
                    <GoLightBulb />
                    <p>Turn off more lights</p>
                  </div>

                  <div className="single-suggestion">
                    <SiQantas />
                    <p>Buy offset programs</p>
                  </div>
                </div>
              </div>

              {/* This div only shows when in a smaller size screen */}
              <div className="smaller-balancer-result-icon">
                <div className="smaller-single-suggestion">
                  <GiCommercialAirplane />
                  <p>Fly less</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GiDutchBike />
                  <p>Take more public transport</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GiHomeGarage />
                  <p>Work from home</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GiPineTree />
                  <p>Plant more trees</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GoLightBulb />
                  <p>Turn off more lights</p>
                </div>

                <div className="smaller-single-suggestion">
                  <SiQantas />
                  <p>Buy offset programs</p>
                </div>
              </div>

              <div style={{ marginTop: "50px" }}>
                <h1 style={{ fontWeight: "300", fontSize: "20px" }}>
                  Where to now?
                </h1>

                <div className="links-container">
                  <a
                    href="https://www.ptv.vic.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <GoLinkExternal /> Public Transport Victoria
                  </a>

                  <a
                    href="https://onetreeplanted.org/products/australia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <GoLinkExternal /> One Tree Planted
                  </a>

                  <a
                    href="https://www.earthhour.org.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <GoLinkExternal /> Earth One Hour
                  </a>

                  <NavLink to="/Comparison">
                    <button className="balancer-result-button">
                      Compare offset programs
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ) : // When even more carbon footprint are generated
        Number(balancedCF) < 0 ? (
          <div>
            <h3 style={{ marginBottom: "20px", fontWeight: "300" }}>
              Sorry, but you've increased your existing carbon footprint
            </h3>
            <div className="balancer-result-number-container">
              <div className="balancer-result-number">
                <h3>Total carbon footprint (kg)</h3>
                <h1>{Number(totalCF).toFixed(1)}</h1>
              </div>

              <div className="balancer-result-number">
                <h3>Additional carbon footprint (kg)</h3>
                <h1>{Math.abs(Number(theBalancedCF).toFixed(1))}</h1>
              </div>

              <div className="balancer-result-number">
                <h3>Current carbon footprint (kg)</h3>
                <h1>{Number(theRemainedCF).toFixed(1)}</h1>
              </div>
            </div>

            <div>
              <div style={{ marginTop: "20px" }}>
                <h1 style={{ fontWeight: "300", fontSize: "50px" }}>
                  Take action now
                </h1>

                <div className="balancer-suggestion">
                  <div className="single-suggestion">
                    <GiCommercialAirplane />
                    <p>Fly less</p>
                  </div>

                  <div className="single-suggestion">
                    <GiDutchBike />
                    <p>Take more public transport</p>
                  </div>

                  <div className="single-suggestion">
                    <GiHomeGarage />
                    <p>Work from home</p>
                  </div>

                  <div className="single-suggestion">
                    <GiPineTree />
                    <p>Plant more trees</p>
                  </div>

                  <div className="single-suggestion">
                    <GoLightBulb />
                    <p>Turn off more lights</p>
                  </div>

                  <div className="single-suggestion">
                    <SiQantas />
                    <p>Buy offset programs</p>
                  </div>
                </div>
              </div>

              {/* This div only shows when in a smaller size screen */}
              <div className="smaller-balancer-result-icon">
                <div className="smaller-single-suggestion">
                  <GiCommercialAirplane />
                  <p>Fly less</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GiDutchBike />
                  <p>Take more public transport</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GiHomeGarage />
                  <p>Work from home</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GiPineTree />
                  <p>Plant more trees</p>
                </div>

                <div className="smaller-single-suggestion">
                  <GoLightBulb />
                  <p>Turn off more lights</p>
                </div>

                <div className="smaller-single-suggestion">
                  <SiQantas />
                  <p>Buy offset programs</p>
                </div>
              </div>

              <div style={{ marginTop: "50px" }}>
                <h1 style={{ fontWeight: "300", fontSize: "20px" }}>
                  Some helpful links
                </h1>

                <div className="links-container">
                  <a
                    href="https://www.ptv.vic.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <GoLinkExternal /> Public Transport Victoria
                  </a>

                  <a
                    href="https://onetreeplanted.org/products/australia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <GoLinkExternal /> One Tree Planted
                  </a>

                  <a
                    href="https://www.earthhour.org.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <GoLinkExternal /> Earth One Hour
                  </a>

                  <NavLink to="/Comparison">
                    <button className="balancer-result-button">
                      Compare offset programs
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // When there are more balanced off carbon footprint than total carbon footprint from flights
          <div>
            <h3 style={{ marginBottom: "20px", fontWeight: "300" }}>
              Nice, you have balanced your entire carbon footprint
            </h3>
            <div className="balancer-result-number-container">
              <div className="balancer-result-number">
                <h3>Total carbon footprint (kg)</h3>
                <h1>{Number(totalCF).toFixed(1)}</h1>
              </div>

              <div className="balancer-result-number">
                <h3>You have balanced off (kg)</h3>
                <h1>{Number(theBalancedCF).toFixed(1)}</h1>
              </div>

              <div className="balancer-result-number">
                <h3>Saved carbon footprint credit (kg)</h3>
                <h1>{Math.abs(Number(theRemainedCF).toFixed(1))}</h1>
              </div>
            </div>

            <div>
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                You have saved{" "}
                {Math.abs((Number(remainedCF) / Number(totalCF)).toFixed(1))}{" "}
                times your actual carbon footprint
              </p>

              <div className="saved-credit-next">
                <div className="saved-option">
                  <h3>Calculate or plan your journey again</h3>
                  <NavLink to="/Calculator">
                    <button className="balancer-saved-button">Calculate</button>
                  </NavLink>
                </div>

                <h3 style={{ fontWeight: "300", fontSize: "25px" }}>OR</h3>

                <div className="saved-option">
                  <h3>Compare different offset programs</h3>
                  <NavLink to="/Comparison">
                    <button className="balancer-saved-button">Compare</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
